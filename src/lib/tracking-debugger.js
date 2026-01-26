/**
 * Tracking Debugger Utility
 * Provides debugging tools for GTM tracking implementation
 */

import { getDataLayer, getDataLayerState, isDebugMode, getSessionData } from './tracking';
import { EVENTS, FUNNELS, ENGAGEMENT_CRITERIA } from './tracking-events';
import { getFunnelStatuses } from './funnel-tracking';
import { calculateEngagementScore, calculateLeadScore } from './engagement-scoring';

// ===========================================
// Debug Console Styling
// ===========================================

const STYLES = {
  header: 'color: #4CAF50; font-weight: bold; font-size: 14px;',
  section: 'color: #2196F3; font-weight: bold; font-size: 12px;',
  success: 'color: #4CAF50;',
  warning: 'color: #FF9800;',
  error: 'color: #F44336;',
  info: 'color: #9E9E9E;',
  value: 'color: #673AB7; font-weight: bold;',
};

// ===========================================
// Debug Output Functions
// ===========================================

/**
 * Print tracking status summary to console
 */
export function printTrackingStatus() {
  if (typeof window === 'undefined') return;
  
  console.group('%c🔍 GTM Tracking Status', STYLES.header);
  
  // DataLayer Status
  console.group('%c📦 DataLayer', STYLES.section);
  const dataLayer = getDataLayerState();
  console.log(`Total events: %c${dataLayer.length}`, STYLES.value);
  console.log('Recent events:', dataLayer.slice(-5).map(e => e.event));
  console.groupEnd();
  
  // Session Data
  console.group('%c💾 Session Data', STYLES.section);
  printSessionData();
  console.groupEnd();
  
  // Engagement Scores
  console.group('%c📊 Engagement Scores', STYLES.section);
  const engagementScore = calculateEngagementScore();
  const leadScore = calculateLeadScore();
  console.log(`Engagement Score: %c${engagementScore}/100`, STYLES.value);
  console.log(`Lead Score: %c${leadScore}/100`, STYLES.value);
  console.groupEnd();
  
  // Funnel Status
  console.group('%c🎯 Funnel Status', STYLES.section);
  const funnelStatuses = getFunnelStatuses();
  Object.entries(funnelStatuses).forEach(([id, status]) => {
    const statusIcon = status.isCompleted ? '✅' : status.started ? '🔄' : '⏸️';
    console.log(
      `${statusIcon} ${status.name}: %c${status.completedSteps}/${status.totalSteps} steps (${status.progressPercentage}%)`,
      status.isCompleted ? STYLES.success : status.started ? STYLES.warning : STYLES.info
    );
  });
  console.groupEnd();
  
  console.groupEnd();
}

/**
 * Print session data summary
 */
function printSessionData() {
  const sessionKeys = [
    'fired_events',
    'viewed_sections',
    'visited_pages',
    'use_case_categories_viewed',
    'feature_interactions',
    'faq_interactions',
    'max_scroll_depth',
    'demo_cta_clicked',
    'page_count',
    'session_start',
  ];
  
  sessionKeys.forEach(key => {
    const value = getSessionData(key);
    if (value !== null && value !== undefined) {
      console.log(`${key}: %c${JSON.stringify(value)}`, STYLES.value);
    }
  });
}

/**
 * Print all events fired in this session
 */
export function printFiredEvents() {
  if (typeof window === 'undefined') return;
  
  console.group('%c📋 Events Fired This Session', STYLES.header);
  
  const dataLayer = getDataLayerState();
  const eventCounts = {};
  
  dataLayer.forEach(item => {
    if (item.event && item.event !== 'gtm.js' && item.event !== 'gtm.dom' && item.event !== 'gtm.load') {
      eventCounts[item.event] = (eventCounts[item.event] || 0) + 1;
    }
  });
  
  const sortedEvents = Object.entries(eventCounts)
    .sort((a, b) => b[1] - a[1]);
  
  if (sortedEvents.length === 0) {
    console.log('%cNo custom events fired yet', STYLES.info);
  } else {
    sortedEvents.forEach(([event, count]) => {
      console.log(`%c${event}: %c${count}`, STYLES.info, STYLES.value);
    });
  }
  
  console.groupEnd();
}

/**
 * Print detailed information about a specific event
 * @param {string} eventName - Event name to search for
 */
export function printEventDetails(eventName) {
  if (typeof window === 'undefined') return;
  
  console.group(`%c🔎 Event Details: ${eventName}`, STYLES.header);
  
  const dataLayer = getDataLayerState();
  const events = dataLayer.filter(item => item.event === eventName);
  
  if (events.length === 0) {
    console.log('%cNo events found with this name', STYLES.warning);
  } else {
    console.log(`Found %c${events.length}%c occurrences`, STYLES.value, '');
    events.forEach((event, index) => {
      console.group(`Occurrence ${index + 1}`);
      console.table(event);
      console.groupEnd();
    });
  }
  
  console.groupEnd();
}

/**
 * Print all available event names
 */
export function printAvailableEvents() {
  if (typeof window === 'undefined') return;
  
  console.group('%c📝 Available Event Names', STYLES.header);
  
  Object.entries(EVENTS).forEach(([key, value]) => {
    console.log(`%c${key}: %c"${value}"`, STYLES.info, STYLES.value);
  });
  
  console.groupEnd();
}

/**
 * Print funnel definitions
 */
export function printFunnelDefinitions() {
  if (typeof window === 'undefined') return;
  
  console.group('%c🎯 Funnel Definitions', STYLES.header);
  
  Object.values(FUNNELS).forEach(funnel => {
    console.group(`%c${funnel.name}`, STYLES.section);
    console.log(`ID: ${funnel.id}`);
    console.log('Steps:');
    funnel.steps.forEach(step => {
      const goalIndicator = step.isGoal ? ' 🎯 (GOAL)' : '';
      console.log(`  ${step.id}. ${step.name}${goalIndicator}`);
      console.log(`     Event: ${step.event}${step.alternativeEvent ? ` or ${step.alternativeEvent}` : ''}`);
      if (step.minCount) console.log(`     Min count: ${step.minCount}`);
      if (step.filter) console.log(`     Filter: ${JSON.stringify(step.filter)}`);
    });
    console.groupEnd();
  });
  
  console.groupEnd();
}

/**
 * Print engagement criteria
 */
export function printEngagementCriteria() {
  if (typeof window === 'undefined') return;
  
  console.group('%c📊 Engagement Criteria', STYLES.header);
  
  Object.entries(ENGAGEMENT_CRITERIA).forEach(([key, criteria]) => {
    console.group(`%c${key}`, STYLES.section);
    console.table(criteria);
    console.groupEnd();
  });
  
  console.groupEnd();
}

// ===========================================
// Real-time Event Monitoring
// ===========================================

let isMonitoring = false;
let originalPush = null;

/**
 * Start monitoring events in real-time
 */
export function startEventMonitoring() {
  if (typeof window === 'undefined' || isMonitoring) return;
  
  const dataLayer = getDataLayer();
  originalPush = dataLayer.push.bind(dataLayer);
  
  dataLayer.push = function(...args) {
    args.forEach(item => {
      if (item && item.event && item.event !== 'gtm.js' && item.event !== 'gtm.dom' && item.event !== 'gtm.load') {
        console.log(
          `%c⚡ Event: %c${item.event}`,
          STYLES.success,
          STYLES.value,
          item
        );
      }
    });
    return originalPush(...args);
  };
  
  isMonitoring = true;
  console.log('%c🔴 Event monitoring started', STYLES.success);
}

/**
 * Stop monitoring events
 */
export function stopEventMonitoring() {
  if (typeof window === 'undefined' || !isMonitoring || !originalPush) return;
  
  const dataLayer = getDataLayer();
  dataLayer.push = originalPush;
  originalPush = null;
  isMonitoring = false;
  
  console.log('%c⏹️ Event monitoring stopped', STYLES.warning);
}

// ===========================================
// Validation Functions
// ===========================================

/**
 * Validate that all expected events are being fired
 * @param {string[]} expectedEvents - Array of expected event names
 * @returns {Object} Validation results
 */
export function validateEvents(expectedEvents) {
  const dataLayer = getDataLayerState();
  const firedEvents = new Set(
    dataLayer
      .filter(item => item.event)
      .map(item => item.event)
  );
  
  const results = {
    passed: [],
    missing: [],
    unexpected: [],
  };
  
  expectedEvents.forEach(event => {
    if (firedEvents.has(event)) {
      results.passed.push(event);
    } else {
      results.missing.push(event);
    }
  });
  
  firedEvents.forEach(event => {
    if (!expectedEvents.includes(event) && 
        !event.startsWith('gtm.') && 
        event !== 'page_view') {
      results.unexpected.push(event);
    }
  });
  
  console.group('%c✅ Event Validation Results', STYLES.header);
  
  console.log(`%cPassed: ${results.passed.length}/${expectedEvents.length}`, 
    results.passed.length === expectedEvents.length ? STYLES.success : STYLES.warning);
  
  if (results.missing.length > 0) {
    console.log('%cMissing events:', STYLES.error);
    results.missing.forEach(e => console.log(`  - ${e}`));
  }
  
  if (results.unexpected.length > 0) {
    console.log('%cUnexpected events:', STYLES.info);
    results.unexpected.forEach(e => console.log(`  - ${e}`));
  }
  
  console.groupEnd();
  
  return results;
}

// ===========================================
// Export Debug Helper to Window
// ===========================================

/**
 * Expose debug functions globally for console access
 */
export function exposeDebugFunctions() {
  if (typeof window === 'undefined') return;
  
  window.gtmDebug = {
    status: printTrackingStatus,
    events: printFiredEvents,
    eventDetails: printEventDetails,
    availableEvents: printAvailableEvents,
    funnels: printFunnelDefinitions,
    funnelStatus: () => console.table(getFunnelStatuses()),
    criteria: printEngagementCriteria,
    startMonitor: startEventMonitoring,
    stopMonitor: stopEventMonitoring,
    validate: validateEvents,
    sessionData: printSessionData,
    dataLayer: () => console.table(getDataLayerState()),
    scores: () => {
      console.log('Engagement Score:', calculateEngagementScore());
      console.log('Lead Score:', calculateLeadScore());
    },
    help: () => {
      console.log('%c📖 GTM Debug Commands:', STYLES.header);
      console.log('  gtmDebug.status()        - Print full tracking status');
      console.log('  gtmDebug.events()        - List all fired events');
      console.log('  gtmDebug.eventDetails("event_name") - Details for specific event');
      console.log('  gtmDebug.availableEvents() - List all available event names');
      console.log('  gtmDebug.funnels()       - Print funnel definitions');
      console.log('  gtmDebug.funnelStatus()  - Show funnel progress');
      console.log('  gtmDebug.criteria()      - Print engagement criteria');
      console.log('  gtmDebug.startMonitor()  - Start real-time event monitoring');
      console.log('  gtmDebug.stopMonitor()   - Stop event monitoring');
      console.log('  gtmDebug.validate([...]) - Validate expected events');
      console.log('  gtmDebug.sessionData()   - Print session storage data');
      console.log('  gtmDebug.dataLayer()     - Print full dataLayer');
      console.log('  gtmDebug.scores()        - Print engagement and lead scores');
    },
  };
  
  if (isDebugMode()) {
    console.log('%c🔧 GTM Debug tools available. Type %cgtmDebug.help()%c for commands.',
      STYLES.success, STYLES.value, STYLES.success);
  }
}

// ===========================================
// Initialize Debugger
// ===========================================

/**
 * Initialize the tracking debugger
 * Call this on app start in development mode
 */
export function initTrackingDebugger() {
  if (typeof window === 'undefined') return;
  
  exposeDebugFunctions();
  
  if (isDebugMode()) {
    // Auto-start monitoring in debug mode
    startEventMonitoring();
    
    // Print initial status after a short delay
    setTimeout(() => {
      printTrackingStatus();
    }, 2000);
  }
}

// ===========================================
// Export all functions
// ===========================================
export default {
  printTrackingStatus,
  printFiredEvents,
  printEventDetails,
  printAvailableEvents,
  printFunnelDefinitions,
  printEngagementCriteria,
  startEventMonitoring,
  stopEventMonitoring,
  validateEvents,
  exposeDebugFunctions,
  initTrackingDebugger,
};
