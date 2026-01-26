/**
 * Hooks Index
 * Export all custom hooks for easy importing
 */

export { 
  useTracking, 
  useScrollTracking as useScrollTrackingFromTracking, 
  useVideoTracking, 
  useIntersectionTracking 
} from './useTracking';

export { useScrollTracking, getScrollPercentage } from './useScrollTracking';

// Re-export default
export { default as useTrackingDefault } from './useTracking';
export { default as useScrollTrackingDefault } from './useScrollTracking';
