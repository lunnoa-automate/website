/**
 * Funnel Tracking Utility
 * Tracks user progression through conversion funnels
 */

import {
  pushEvent,
  getSessionData,
  setSessionData,
  hasEventFired,
  markEventFired,
  logDebug,
  setOnEventCallback,
} from './tracking';
import { EVENTS, FUNNELS, EVENT_CATEGORIES } from './tracking-events';

// ===========================================
// Funnel State Management
// ===========================================

/**
 * Get funnel state from session
 * @param {string} funnelId - The funnel ID
 * @returns {Object} Funnel state
 */
function getFunnelState(funnelId) {
  const allFunnels = getSessionData('funnels') || {};
  return allFunnels[funnelId] || {
    started: false,
    currentStep: 0,
    completedSteps: [],
    stepCounts: {},
    startTime: null,
    lastStepTime: null,
  };
}

/**
 * Save funnel state to session
 * @param {string} funnelId - The funnel ID
 * @param {Object} state - The funnel state
 */
function saveFunnelState(funnelId, state) {
  const allFunnels = getSessionData('funnels') || {};
  allFunnels[funnelId] = state;
  setSessionData('funnels', allFunnels);
}

// ===========================================
// Funnel Event Processing
// ===========================================

/**
 * Process an event and check all funnels for progression
 * @param {string} eventName - The event that was fired
 * @param {Object} eventParams - Event parameters
 */
export function processFunnelEvent(eventName, eventParams = {}) {
  Object.values(FUNNELS).forEach(funnel => {
    checkFunnelProgression(funnel, eventName, eventParams);
  });
}

/**
 * Check if an event progresses a specific funnel
 * @param {Object} funnel - The funnel definition
 * @param {string} eventName - The event name
 * @param {Object} eventParams - Event parameters
 */
function checkFunnelProgression(funnel, eventName, eventParams) {
  const state = getFunnelState(funnel.id);
  
  // Find matching step
  for (let i = 0; i < funnel.steps.length; i++) {
    const step = funnel.steps[i];
    
    // Check if event matches this step (including alternative events)
    const matchesEvent = step.event === eventName || 
      (step.alternativeEvent && step.alternativeEvent === eventName);
    
    if (!matchesEvent) continue;
    
    // Check filter conditions if any
    if (step.filter) {
      const filterMatches = Object.entries(step.filter).every(
        ([key, value]) => eventParams[key] === value
      );
      if (!filterMatches) continue;
    }
    
    // Track count for steps that require minimum counts
    if (step.minCount) {
      state.stepCounts[step.id] = (state.stepCounts[step.id] || 0) + 1;
      
      if (state.stepCounts[step.id] < step.minCount) {
        saveFunnelState(funnel.id, state);
        continue;
      }
    }
    
    // Check if this step can be completed
    // Steps must be completed in order (or skip allowed)
    const canComplete = i === 0 || 
      state.completedSteps.includes(funnel.steps[i - 1].id) ||
      (i > 0 && funnel.steps[i - 1].alternativeEvent && 
       state.completedSteps.some(s => funnel.steps.findIndex(fs => fs.id === s) === i - 1));
    
    if (!canComplete) continue;
    
    // Check if step already completed
    if (state.completedSteps.includes(step.id)) continue;
    
    // Complete the step
    completeStep(funnel, step, state, eventParams);
    
    break; // Only process one step per event
  }
}

/**
 * Complete a funnel step
 * @param {Object} funnel - The funnel definition
 * @param {Object} step - The step being completed
 * @param {Object} state - Current funnel state
 * @param {Object} eventParams - Event parameters
 */
function completeStep(funnel, step, state, eventParams) {
  const now = Date.now();
  
  // Start funnel if first step
  if (!state.started) {
    state.started = true;
    state.startTime = now;
    
    pushEvent(EVENTS.FUNNEL_STARTED, {
      funnel_id: funnel.id,
      funnel_name: funnel.name,
      first_step: step.name,
      event_category: EVENT_CATEGORIES.FUNNEL,
    });
    
    logDebug(`Funnel started: ${funnel.name}`, { step: step.name });
  }
  
  // Complete the step
  state.completedSteps.push(step.id);
  state.currentStep = step.id;
  state.lastStepTime = now;
  
  const timeSinceStart = state.startTime ? Math.round((now - state.startTime) / 1000) : 0;
  
  pushEvent(EVENTS.FUNNEL_STEP_COMPLETE, {
    funnel_id: funnel.id,
    funnel_name: funnel.name,
    step_id: step.id,
    step_name: step.name,
    step_number: step.id,
    total_steps: funnel.steps.length,
    time_since_funnel_start: timeSinceStart,
    is_goal: step.isGoal || false,
    event_category: EVENT_CATEGORIES.FUNNEL,
  });
  
  logDebug(`Funnel step completed: ${funnel.name} - ${step.name}`, {
    stepId: step.id,
    completedSteps: state.completedSteps.length,
    totalSteps: funnel.steps.length,
  });
  
  // Check if funnel is complete (goal reached)
  if (step.isGoal) {
    completeFunnel(funnel, state);
  }
  
  saveFunnelState(funnel.id, state);
}

/**
 * Complete a funnel (goal reached)
 * @param {Object} funnel - The funnel definition
 * @param {Object} state - Current funnel state
 */
function completeFunnel(funnel, state) {
  const eventKey = `funnel_completed_${funnel.id}`;
  
  if (hasEventFired(eventKey)) return;
  markEventFired(eventKey);
  
  const totalTime = state.startTime ? Math.round((Date.now() - state.startTime) / 1000) : 0;
  
  pushEvent(EVENTS.FUNNEL_COMPLETED, {
    funnel_id: funnel.id,
    funnel_name: funnel.name,
    total_steps_completed: state.completedSteps.length,
    total_time_seconds: totalTime,
    event_category: EVENT_CATEGORIES.FUNNEL,
  });
  
  logDebug(`Funnel completed: ${funnel.name}`, {
    totalTime,
    stepsCompleted: state.completedSteps.length,
  });
}

// ===========================================
// Funnel Abandonment Tracking
// ===========================================

/**
 * Track funnel abandonment (called on page unload or long inactivity)
 */
export function trackFunnelAbandonment() {
  const allFunnels = getSessionData('funnels') || {};
  
  Object.entries(allFunnels).forEach(([funnelId, state]) => {
    if (!state.started) return;
    
    const funnel = Object.values(FUNNELS).find(f => f.id === funnelId);
    if (!funnel) return;
    
    // Check if funnel was completed
    const goalStep = funnel.steps.find(s => s.isGoal);
    if (goalStep && state.completedSteps.includes(goalStep.id)) return;
    
    // Funnel was abandoned
    const eventKey = `funnel_abandoned_${funnelId}`;
    if (hasEventFired(eventKey)) return;
    markEventFired(eventKey);
    
    const lastCompletedStepId = state.completedSteps[state.completedSteps.length - 1];
    const lastCompletedStep = funnel.steps.find(s => s.id === lastCompletedStepId);
    
    pushEvent(EVENTS.FUNNEL_ABANDONED, {
      funnel_id: funnelId,
      funnel_name: funnel.name,
      last_completed_step: lastCompletedStep?.name || 'None',
      steps_completed: state.completedSteps.length,
      total_steps: funnel.steps.length,
      time_in_funnel: state.startTime ? Math.round((Date.now() - state.startTime) / 1000) : 0,
      event_category: EVENT_CATEGORIES.FUNNEL,
    });
    
    logDebug(`Funnel abandoned: ${funnel.name}`, {
      lastStep: lastCompletedStep?.name,
      stepsCompleted: state.completedSteps.length,
    });
  });
}

// ===========================================
// Funnel Status Helpers
// ===========================================

/**
 * Get status of all funnels
 * @returns {Object} Status of all funnels
 */
export function getFunnelStatuses() {
  const allFunnels = getSessionData('funnels') || {};
  const statuses = {};
  
  Object.values(FUNNELS).forEach(funnel => {
    const state = allFunnels[funnel.id] || { started: false, completedSteps: [] };
    const goalStep = funnel.steps.find(s => s.isGoal);
    
    statuses[funnel.id] = {
      name: funnel.name,
      started: state.started,
      currentStep: state.currentStep,
      completedSteps: state.completedSteps.length,
      totalSteps: funnel.steps.length,
      isCompleted: goalStep && state.completedSteps.includes(goalStep.id),
      progressPercentage: Math.round((state.completedSteps.length / funnel.steps.length) * 100),
    };
  });
  
  return statuses;
}

/**
 * Get the next expected step for a funnel
 * @param {string} funnelId - The funnel ID
 * @returns {Object|null} Next step or null if completed
 */
export function getNextFunnelStep(funnelId) {
  const funnel = Object.values(FUNNELS).find(f => f.id === funnelId);
  if (!funnel) return null;
  
  const state = getFunnelState(funnelId);
  
  for (const step of funnel.steps) {
    if (!state.completedSteps.includes(step.id)) {
      return step;
    }
  }
  
  return null; // Funnel completed
}

// ===========================================
// Initialize Funnel Tracking
// ===========================================

/**
 * Initialize funnel tracking
 * Sets up abandonment tracking on page unload and hooks into main tracking
 */
export function initFunnelTracking() {
  if (typeof window === 'undefined') return;
  
  // Set callback to process funnel events
  setOnEventCallback((eventName, params) => {
    processFunnelEvent(eventName, params);
  });
  
  // Track abandonment on page unload
  window.addEventListener('beforeunload', () => {
    trackFunnelAbandonment();
  });
  
  // Track abandonment on visibility change (tab switch)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      // Use sendBeacon if available for reliable tracking
      trackFunnelAbandonment();
    }
  });
  
  logDebug('Funnel tracking initialized');
}

// ===========================================
// Integration with Main Tracking
// ===========================================

/**
 * Hook to integrate funnel tracking with the main tracking system
 * Call this after each event is pushed to the dataLayer
 * @param {string} eventName - The event name
 * @param {Object} eventParams - Event parameters
 */
export function onTrackingEvent(eventName, eventParams = {}) {
  processFunnelEvent(eventName, eventParams);
}

// ===========================================
// Export all functions
// ===========================================
export default {
  processFunnelEvent,
  trackFunnelAbandonment,
  getFunnelStatuses,
  getNextFunnelStep,
  initFunnelTracking,
  onTrackingEvent,
};
