/**
 * useTracking Hook
 * Centralized tracking hook for React components
 */

import { useCallback, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  pushEvent,
  pushPageView,
  pushScrollDepth,
  pushCtaClick,
  pushVideoEvent,
  pushSectionView,
  pushNavClick,
  pushLinkClick,
  pushSocialClick,
  pushLanguageSwitch,
  hasEventFired,
  markEventFired,
  getTimeOnSite,
  getPageCount,
  incrementPageCount,
  logDebug,
  debounce,
} from '../lib/tracking';
import { EVENTS, EVENT_CATEGORIES } from '../lib/tracking-events';

/**
 * Main tracking hook
 * @returns {Object} Tracking methods
 */
export function useTracking() {
  const { language } = useLanguage();

  /**
   * Track a generic event
   * @param {string} eventName - Event name
   * @param {Object} params - Event parameters
   * @param {Object} options - Tracking options
   */
  const trackEvent = useCallback((eventName, params = {}, options = {}) => {
    return pushEvent(eventName, {
      user_language: language,
      ...params,
    }, options);
  }, [language]);

  /**
   * Track a page view
   * @param {string} pagePath - Page path
   * @param {string} pageTitle - Page title
   * @param {Object} additionalParams - Additional parameters
   */
  const trackPageView = useCallback((pagePath, pageTitle, additionalParams = {}) => {
    const pageCount = incrementPageCount();
    return pushPageView(pagePath, pageTitle, {
      user_language: language,
      session_page_count: pageCount,
      time_on_site: getTimeOnSite(),
      ...additionalParams,
    });
  }, [language]);

  /**
   * Track CTA click
   * @param {string} location - CTA location
   * @param {Object} additionalParams - Additional parameters
   */
  const trackCtaClick = useCallback((location, additionalParams = {}) => {
    return pushCtaClick(location, {
      user_language: language,
      time_on_site: getTimeOnSite(),
      pages_viewed: getPageCount(),
      ...additionalParams,
    });
  }, [language]);

  /**
   * Track Calendly click (external demo booking)
   * @param {string} source - Where the click came from
   */
  const trackCalendlyClick = useCallback((source) => {
    return pushEvent(EVENTS.CALENDLY_CLICK, {
      source_location: source,
      user_language: language,
      time_on_site: getTimeOnSite(),
      pages_viewed: getPageCount(),
      event_category: EVENT_CATEGORIES.CONVERSION,
    });
  }, [language]);

  /**
   * Track navigation click
   * @param {string} navItem - Navigation item clicked
   * @param {Object} additionalParams - Additional parameters
   */
  const trackNavClick = useCallback((navItem, additionalParams = {}) => {
    return pushNavClick(navItem, {
      user_language: language,
      ...additionalParams,
    });
  }, [language]);

  /**
   * Track section view (one-time per session)
   * @param {string} sectionName - Section name
   * @param {Object} additionalParams - Additional parameters
   */
  const trackSectionView = useCallback((sectionName, additionalParams = {}) => {
    const eventKey = `section_view_${sectionName}`;
    if (!hasEventFired(eventKey)) {
      markEventFired(eventKey);
      return pushSectionView(sectionName, {
        user_language: language,
        ...additionalParams,
      });
    }
    return false;
  }, [language]);

  /**
   * Track footer link click
   * @param {string} category - Link category
   * @param {string} text - Link text
   * @param {string} url - Link URL
   */
  const trackFooterLinkClick = useCallback((category, text, url) => {
    return pushLinkClick(category, text, url, {
      user_language: language,
    });
  }, [language]);

  /**
   * Track social link click
   * @param {string} platform - Social platform
   */
  const trackSocialClick = useCallback((platform) => {
    return pushSocialClick(platform, {
      user_language: language,
    });
  }, [language]);

  /**
   * Track video event
   * @param {string} eventType - Video event type
   * @param {Object} videoData - Video data
   */
  const trackVideoEvent = useCallback((eventType, videoData = {}) => {
    return pushVideoEvent(eventType, videoData);
  }, []);

  /**
   * Track feature interaction
   * @param {string} eventType - Interaction type (hover, click)
   * @param {string} featureName - Feature name
   * @param {number} position - Position index
   */
  const trackFeatureInteraction = useCallback((eventType, featureName, position) => {
    return pushEvent(eventType, {
      feature_name: featureName,
      feature_position: position,
      user_language: language,
      event_category: EVENT_CATEGORIES.ENGAGEMENT,
    });
  }, [language]);

  /**
   * Track use case interaction
   * @param {string} eventType - Event type
   * @param {string} category - Use case category
   * @param {string} title - Use case title (optional)
   * @param {number} position - Position index (optional)
   */
  const trackUseCaseInteraction = useCallback((eventType, category, title = null, position = null) => {
    const params = {
      use_case_category: category,
      user_language: language,
      event_category: EVENT_CATEGORIES.ENGAGEMENT,
    };
    if (title) params.use_case_title = title;
    if (position !== null) params.use_case_position = position;
    return pushEvent(eventType, params);
  }, [language]);

  /**
   * Track FAQ interaction
   * @param {string} eventType - Event type (expand, collapse)
   * @param {string} questionText - Question text
   * @param {number} questionIndex - Question index
   */
  const trackFaqInteraction = useCallback((eventType, questionText, questionIndex) => {
    return pushEvent(eventType, {
      question_text: questionText,
      question_index: questionIndex,
      user_language: language,
      event_category: EVENT_CATEGORIES.ENGAGEMENT,
    });
  }, [language]);

  /**
   * Track integration page event
   * @param {string} eventType - Event type
   * @param {Object} params - Event parameters
   */
  const trackIntegrationEvent = useCallback((eventType, params = {}) => {
    return pushEvent(eventType, {
      user_language: language,
      event_category: EVENT_CATEGORIES.ENGAGEMENT,
      ...params,
    });
  }, [language]);

  return {
    trackEvent,
    trackPageView,
    trackCtaClick,
    trackCalendlyClick,
    trackNavClick,
    trackSectionView,
    trackFooterLinkClick,
    trackSocialClick,
    trackVideoEvent,
    trackFeatureInteraction,
    trackUseCaseInteraction,
    trackFaqInteraction,
    trackIntegrationEvent,
    language,
  };
}

/**
 * Hook for scroll depth tracking
 * @param {Object} options - Options
 * @returns {void}
 */
export function useScrollTracking(options = {}) {
  const { milestones = [25, 50, 75, 90], enabled = true } = options;
  const firedMilestones = useRef(new Set());
  const { language } = useLanguage();

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    const handleScroll = debounce(() => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      milestones.forEach((milestone) => {
        if (scrollPercent >= milestone && !firedMilestones.current.has(milestone)) {
          firedMilestones.current.add(milestone);
          pushScrollDepth(milestone, { user_language: language });
          logDebug(`Scroll milestone reached: ${milestone}%`);
        }
      });
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [milestones, enabled, language]);

  // Reset milestones on unmount (page change)
  useEffect(() => {
    return () => {
      firedMilestones.current.clear();
    };
  }, []);
}

/**
 * Hook for video tracking
 * @param {React.RefObject} videoRef - Reference to video element
 * @param {Object} options - Options
 * @returns {Object} Video tracking handlers
 */
export function useVideoTracking(videoRef, options = {}) {
  const { milestones = [25, 50, 75, 100], enabled = true } = options;
  const firedMilestones = useRef(new Set());
  const hasPlayed = useRef(false);

  const getVideoData = useCallback(() => {
    const video = videoRef.current;
    if (!video) return { currentTime: 0, duration: 0, percentage: 0 };
    
    const percentage = video.duration ? (video.currentTime / video.duration) * 100 : 0;
    return {
      currentTime: video.currentTime,
      duration: video.duration,
      percentage: Math.round(percentage),
    };
  }, [videoRef]);

  const handlePlay = useCallback(() => {
    if (!enabled) return;
    
    const videoData = getVideoData();
    if (!hasPlayed.current) {
      hasPlayed.current = true;
      pushVideoEvent(EVENTS.VIDEO_PLAY, videoData);
    } else {
      pushVideoEvent(EVENTS.VIDEO_RESUME, videoData);
    }
  }, [enabled, getVideoData]);

  const handlePause = useCallback(() => {
    if (!enabled) return;
    pushVideoEvent(EVENTS.VIDEO_PAUSE, getVideoData());
  }, [enabled, getVideoData]);

  const handleTimeUpdate = useCallback(() => {
    if (!enabled) return;
    
    const videoData = getVideoData();
    
    milestones.forEach((milestone) => {
      if (videoData.percentage >= milestone && !firedMilestones.current.has(milestone)) {
        firedMilestones.current.add(milestone);
        
        if (milestone === 100) {
          pushVideoEvent(EVENTS.VIDEO_COMPLETE, videoData);
        } else {
          pushVideoEvent(EVENTS.VIDEO_MILESTONE, {
            ...videoData,
            milestone,
          });
        }
        logDebug(`Video milestone reached: ${milestone}%`);
      }
    });
  }, [enabled, milestones, getVideoData]);

  const handleEnded = useCallback(() => {
    if (!enabled) return;
    const videoData = getVideoData();
    if (!firedMilestones.current.has(100)) {
      firedMilestones.current.add(100);
      pushVideoEvent(EVENTS.VIDEO_COMPLETE, videoData);
    }
  }, [enabled, getVideoData]);

  // Attach event listeners
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !enabled) return;

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, [videoRef, enabled, handlePlay, handlePause, handleTimeUpdate, handleEnded]);

  return {
    handlePlay,
    handlePause,
    handleTimeUpdate,
    handleEnded,
    getVideoData,
  };
}

/**
 * Hook for intersection observer tracking
 * @param {React.RefObject} ref - Reference to element to observe
 * @param {Object} options - Options
 * @returns {boolean} Whether element is visible
 */
export function useIntersectionTracking(ref, options = {}) {
  const {
    threshold = 0.5,
    eventName = null,
    sectionName = null,
    onIntersect = null,
    trackOnce = true,
    enabled = true,
  } = options;
  
  const hasTracked = useRef(false);
  const { language } = useLanguage();

  useEffect(() => {
    if (!enabled || typeof window === 'undefined' || !ref.current) return;
    if (trackOnce && hasTracked.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!trackOnce || !hasTracked.current)) {
            hasTracked.current = true;
            
            if (sectionName) {
              const eventKey = `section_view_${sectionName}`;
              if (!hasEventFired(eventKey)) {
                markEventFired(eventKey);
                pushSectionView(sectionName, { user_language: language });
              }
            } else if (eventName) {
              pushEvent(eventName, { user_language: language });
            }
            
            if (onIntersect) {
              onIntersect(entry);
            }
          }
        });
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, threshold, eventName, sectionName, onIntersect, trackOnce, enabled, language]);

  return hasTracked.current;
}

export default useTracking;
