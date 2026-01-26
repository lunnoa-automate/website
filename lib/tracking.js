/**
 * GTM Tracking Utility for Next.js
 * DataLayer push helper functions with validation and debugging
 */

import { EVENTS, EVENT_CATEGORIES } from './tracking-events';

// ===========================================
// Configuration
// ===========================================
const DEBUG_MODE = typeof window !== 'undefined' && 
  (window.location.hostname === 'localhost' || 
   window.location.hostname === '127.0.0.1' ||
   window.location.search.includes('debug_tracking=true'));

// ===========================================
// DataLayer Initialization
// ===========================================

/**
 * Ensures dataLayer exists and is properly initialized
 * @returns {Array} The dataLayer array
 */
export function getDataLayer() {
  if (typeof window === 'undefined') return [];
  window.dataLayer = window.dataLayer || [];
  return window.dataLayer;
}

// ===========================================
// Core Tracking Functions
// ===========================================

/**
 * Push an event to the dataLayer
 * @param {string} eventName - The event name
 * @param {Object} params - Event parameters
 * @param {Object} options - Additional options
 * @returns {boolean} Whether the event was successfully pushed
 */
export function pushEvent(eventName, params = {}, options = {}) {
  const { 
    validateRequired = [], 
    deduplicate = false,
    deduplicationKey = null,
    deduplicationWindow = 5000 // ms
  } = options;

  // Validate required parameters
  if (validateRequired.length > 0) {
    const missing = validateRequired.filter(key => !params[key] && params[key] !== 0);
    if (missing.length > 0) {
      logWarning(`Missing required parameters for ${eventName}:`, missing);
      return false;
    }
  }

  // Check for duplicate events within time window
  if (deduplicate && typeof window !== 'undefined') {
    const key = deduplicationKey || `${eventName}_${JSON.stringify(params)}`;
    const lastFired = window.__trackingLastFired || {};
    const now = Date.now();
    
    if (lastFired[key] && (now - lastFired[key]) < deduplicationWindow) {
      logDebug(`Duplicate event suppressed: ${eventName}`);
      return false;
    }
    
    window.__trackingLastFired = { ...lastFired, [key]: now };
  }

  // Build the event object
  const eventData = {
    event: eventName,
    event_timestamp: new Date().toISOString(),
    ...params,
  };

  // Push to dataLayer
  const dataLayer = getDataLayer();
  dataLayer.push(eventData);

  // Debug logging
  logDebug(`Event pushed: ${eventName}`, eventData);

  return true;
}

/**
 * Push a page view event
 * @param {string} pagePath - The page path
 * @param {string} pageTitle - The page title
 * @param {Object} additionalParams - Additional parameters
 */
export function pushPageView(pagePath, pageTitle, additionalParams = {}) {
  return pushEvent(EVENTS.VIRTUAL_PAGE_VIEW, {
    page_path: pagePath,
    page_title: pageTitle,
    page_location: typeof window !== 'undefined' ? window.location.href : '',
    ...additionalParams,
  });
}

/**
 * Push a scroll depth event
 * @param {number} percentage - The scroll depth percentage
 * @param {Object} additionalParams - Additional parameters
 */
export function pushScrollDepth(percentage, additionalParams = {}) {
  return pushEvent(EVENTS.SCROLL_DEPTH, {
    scroll_percentage: percentage,
    event_category: EVENT_CATEGORIES.ENGAGEMENT,
    ...additionalParams,
  }, {
    deduplicate: true,
    deduplicationKey: `scroll_${percentage}`,
    deduplicationWindow: 60000, // 1 minute
  });
}

/**
 * Push a CTA click event
 * @param {string} location - Where the CTA was clicked
 * @param {Object} additionalParams - Additional parameters
 */
export function pushCtaClick(location, additionalParams = {}) {
  return pushEvent(EVENTS.CTA_DEMO_CLICK, {
    cta_location: location,
    event_category: EVENT_CATEGORIES.CONVERSION,
    ...additionalParams,
  });
}

/**
 * Push a video event
 * @param {string} videoEvent - The type of video event
 * @param {Object} videoData - Video-related data
 */
export function pushVideoEvent(videoEvent, videoData = {}) {
  const { currentTime = 0, duration = 0, percentage = 0 } = videoData;
  
  return pushEvent(videoEvent, {
    video_current_time: Math.round(currentTime),
    video_duration: Math.round(duration),
    video_percentage: Math.round(percentage),
    event_category: EVENT_CATEGORIES.VIDEO,
  });
}

/**
 * Push a section visibility event
 * @param {string} sectionName - The section name/id
 * @param {Object} additionalParams - Additional parameters
 */
export function pushSectionView(sectionName, additionalParams = {}) {
  const eventName = `section_view_${sectionName.replace(/-/g, '_')}`;
  
  return pushEvent(eventName, {
    section_name: sectionName,
    event_category: EVENT_CATEGORIES.CONTENT,
    ...additionalParams,
  }, {
    deduplicate: true,
    deduplicationKey: `section_${sectionName}`,
    deduplicationWindow: 300000, // 5 minutes
  });
}

/**
 * Push a navigation click event
 * @param {string} navItem - The navigation item clicked
 * @param {Object} additionalParams - Additional parameters
 */
export function pushNavClick(navItem, additionalParams = {}) {
  return pushEvent(EVENTS.NAV_CLICK, {
    nav_item: navItem,
    event_category: EVENT_CATEGORIES.NAVIGATION,
    ...additionalParams,
  });
}

/**
 * Push a link click event
 * @param {string} linkCategory - Category of the link
 * @param {string} linkText - Text of the link
 * @param {string} linkUrl - URL of the link
 * @param {Object} additionalParams - Additional parameters
 */
export function pushLinkClick(linkCategory, linkText, linkUrl, additionalParams = {}) {
  return pushEvent(EVENTS.FOOTER_LINK_CLICK, {
    link_category: linkCategory,
    link_text: linkText,
    link_url: linkUrl,
    event_category: EVENT_CATEGORIES.NAVIGATION,
    ...additionalParams,
  });
}

/**
 * Push a social link click event
 * @param {string} platform - The social platform
 * @param {Object} additionalParams - Additional parameters
 */
export function pushSocialClick(platform, additionalParams = {}) {
  return pushEvent(EVENTS.SOCIAL_CLICK, {
    social_platform: platform,
    event_category: EVENT_CATEGORIES.ENGAGEMENT,
    ...additionalParams,
  });
}

/**
 * Push a language switch event
 * @param {string} fromLanguage - Previous language
 * @param {string} toLanguage - New language
 */
export function pushLanguageSwitch(fromLanguage, toLanguage) {
  return pushEvent(EVENTS.LANGUAGE_SWITCH, {
    from_language: fromLanguage,
    to_language: toLanguage,
    event_category: EVENT_CATEGORIES.ENGAGEMENT,
  });
}

// ===========================================
// Session Storage Helpers
// ===========================================

/**
 * Get tracking data from session storage
 * @param {string} key - The storage key
 * @returns {any} The stored value
 */
export function getSessionData(key) {
  if (typeof window === 'undefined') return null;
  try {
    const data = sessionStorage.getItem(`tracking_${key}`);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    logWarning('Error reading session data:', e);
    return null;
  }
}

/**
 * Set tracking data in session storage
 * @param {string} key - The storage key
 * @param {any} value - The value to store
 */
export function setSessionData(key, value) {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(`tracking_${key}`, JSON.stringify(value));
  } catch (e) {
    logWarning('Error setting session data:', e);
  }
}

/**
 * Check if an event has been fired this session
 * @param {string} eventKey - Unique key for the event
 * @returns {boolean} Whether the event has been fired
 */
export function hasEventFired(eventKey) {
  const fired = getSessionData('fired_events') || [];
  return fired.includes(eventKey);
}

/**
 * Mark an event as fired this session
 * @param {string} eventKey - Unique key for the event
 */
export function markEventFired(eventKey) {
  const fired = getSessionData('fired_events') || [];
  if (!fired.includes(eventKey)) {
    fired.push(eventKey);
    setSessionData('fired_events', fired);
  }
}

/**
 * Increment a session counter
 * @param {string} counterKey - The counter key
 * @returns {number} The new count
 */
export function incrementSessionCounter(counterKey) {
  const count = (getSessionData(counterKey) || 0) + 1;
  setSessionData(counterKey, count);
  return count;
}

/**
 * Get a session counter value
 * @param {string} counterKey - The counter key
 * @returns {number} The current count
 */
export function getSessionCounter(counterKey) {
  return getSessionData(counterKey) || 0;
}

// ===========================================
// Time Tracking
// ===========================================

let sessionStartTime = null;

/**
 * Get session start time
 * @returns {number} Session start timestamp
 */
export function getSessionStartTime() {
  if (typeof window === 'undefined') return Date.now();
  
  if (!sessionStartTime) {
    sessionStartTime = getSessionData('session_start');
    if (!sessionStartTime) {
      sessionStartTime = Date.now();
      setSessionData('session_start', sessionStartTime);
    }
  }
  return sessionStartTime;
}

/**
 * Get time spent on site in seconds
 * @returns {number} Time in seconds
 */
export function getTimeOnSite() {
  return Math.round((Date.now() - getSessionStartTime()) / 1000);
}

// ===========================================
// Page Count Tracking
// ===========================================

/**
 * Increment and get the page view count for this session
 * @returns {number} The current page view count
 */
export function incrementPageCount() {
  return incrementSessionCounter('page_count');
}

/**
 * Get the current page view count
 * @returns {number} The current page view count
 */
export function getPageCount() {
  return getSessionCounter('page_count');
}

// ===========================================
// Debug & Logging
// ===========================================

/**
 * Log debug message (only in debug mode)
 * @param {...any} args - Arguments to log
 */
export function logDebug(...args) {
  if (DEBUG_MODE) {
    console.log('%c[GTM Tracking]', 'color: #4CAF50; font-weight: bold;', ...args);
  }
}

/**
 * Log warning message
 * @param {...any} args - Arguments to log
 */
export function logWarning(...args) {
  if (DEBUG_MODE) {
    console.warn('%c[GTM Tracking Warning]', 'color: #FF9800; font-weight: bold;', ...args);
  }
}

/**
 * Log error message
 * @param {...any} args - Arguments to log
 */
export function logError(...args) {
  console.error('%c[GTM Tracking Error]', 'color: #F44336; font-weight: bold;', ...args);
}

/**
 * Get current dataLayer state (for debugging)
 * @returns {Array} Copy of the dataLayer
 */
export function getDataLayerState() {
  return [...getDataLayer()];
}

/**
 * Check if debug mode is enabled
 * @returns {boolean} Whether debug mode is enabled
 */
export function isDebugMode() {
  return DEBUG_MODE;
}

// ===========================================
// Utility Functions
// ===========================================

/**
 * Debounce a function
 * @param {Function} func - The function to debounce
 * @param {number} wait - The debounce delay in ms
 * @returns {Function} Debounced function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle a function
 * @param {Function} func - The function to throttle
 * @param {number} limit - The throttle limit in ms
 * @returns {Function} Throttled function
 */
export function throttle(func, limit) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
