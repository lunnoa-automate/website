/**
 * useScrollTracking Hook
 * Dedicated scroll depth tracking with milestones
 */

import { useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { pushScrollDepth, debounce, logDebug, hasEventFired, markEventFired } from '../lib/tracking';
import { SCROLL_MILESTONES } from '../lib/tracking-events';

/**
 * Hook for tracking scroll depth on a page
 * @param {Object} options - Configuration options
 * @returns {Object} Current scroll info
 */
export function useScrollTracking(options = {}) {
  const {
    milestones = SCROLL_MILESTONES,
    debounceMs = 100,
    enabled = true,
    pageKey = 'default',
  } = options;

  const { language } = useLanguage();
  const firedMilestones = useRef(new Set());
  const currentScrollPercent = useRef(0);
  const maxScrollPercent = useRef(0);

  // Get scroll percentage
  const getScrollPercentage = useCallback(() => {
    if (typeof window === 'undefined') return 0;
    
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    if (docHeight <= 0) return 100;
    
    return Math.min(100, Math.round((scrollTop / docHeight) * 100));
  }, []);

  // Handle scroll event
  const handleScroll = useCallback(() => {
    if (!enabled) return;

    const scrollPercent = getScrollPercentage();
    currentScrollPercent.current = scrollPercent;
    
    // Track max scroll depth
    if (scrollPercent > maxScrollPercent.current) {
      maxScrollPercent.current = scrollPercent;
    }

    // Check and fire milestones
    milestones.forEach((milestone) => {
      const eventKey = `scroll_${pageKey}_${milestone}`;
      
      if (scrollPercent >= milestone && 
          !firedMilestones.current.has(milestone) && 
          !hasEventFired(eventKey)) {
        
        firedMilestones.current.add(milestone);
        markEventFired(eventKey);
        
        pushScrollDepth(milestone, {
          user_language: language,
          page_key: pageKey,
          current_scroll: scrollPercent,
        });
        
        logDebug(`Scroll milestone ${milestone}% reached on ${pageKey}`);
      }
    });
  }, [enabled, milestones, pageKey, language, getScrollPercentage]);

  // Debounced scroll handler
  const debouncedHandleScroll = useCallback(
    debounce(handleScroll, debounceMs),
    [handleScroll, debounceMs]
  );

  // Set up scroll listener
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    // Check initial scroll position
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', debouncedHandleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, [enabled, debouncedHandleScroll, handleScroll]);

  // Reset on page key change
  useEffect(() => {
    firedMilestones.current.clear();
    maxScrollPercent.current = 0;
  }, [pageKey]);

  return {
    getCurrentScrollPercent: () => currentScrollPercent.current,
    getMaxScrollPercent: () => maxScrollPercent.current,
    getFiredMilestones: () => Array.from(firedMilestones.current),
  };
}

/**
 * Get the current scroll percentage (standalone function)
 * @returns {number} Current scroll percentage
 */
export function getScrollPercentage() {
  if (typeof window === 'undefined') return 0;
  
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  
  if (docHeight <= 0) return 100;
  
  return Math.min(100, Math.round((scrollTop / docHeight) * 100));
}

export default useScrollTracking;
