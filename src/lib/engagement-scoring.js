/**
 * Engagement Scoring Utility
 * Tracks and fires events for engaged visitors, hot leads, technical evaluators,
 * and business decision makers based on user behavior.
 */

import { 
  pushEvent, 
  getSessionData, 
  setSessionData, 
  hasEventFired, 
  markEventFired,
  getTimeOnSite,
  getPageCount,
  logDebug,
} from './tracking';
import { EVENTS, ENGAGEMENT_CRITERIA, EVENT_CATEGORIES } from './tracking-events';

// ===========================================
// Session Tracking Helpers
// ===========================================

/**
 * Track a section view for engagement scoring
 * @param {string} sectionName - The section that was viewed
 */
export function trackSectionForEngagement(sectionName) {
  const viewedSections = getSessionData('viewed_sections') || [];
  if (!viewedSections.includes(sectionName)) {
    viewedSections.push(sectionName);
    setSessionData('viewed_sections', viewedSections);
    checkEngagementCriteria();
  }
}

/**
 * Track a use case category view
 * @param {string} category - The use case category
 */
export function trackUseCaseCategoryView(category) {
  const viewedCategories = getSessionData('use_case_categories_viewed') || [];
  if (!viewedCategories.includes(category)) {
    viewedCategories.push(category);
    setSessionData('use_case_categories_viewed', viewedCategories);
    checkBusinessDecisionMaker();
  }
}

/**
 * Track feature interaction
 */
export function trackFeatureInteractionForScoring() {
  const count = (getSessionData('feature_interactions') || 0) + 1;
  setSessionData('feature_interactions', count);
  checkTechnicalEvaluator();
}

/**
 * Track page visit
 * @param {string} pageName - The page name
 */
export function trackPageVisitForScoring(pageName) {
  const visitedPages = getSessionData('visited_pages') || [];
  if (!visitedPages.includes(pageName)) {
    visitedPages.push(pageName);
    setSessionData('visited_pages', visitedPages);
    checkHotLead();
    checkTechnicalEvaluator();
  }
}

/**
 * Track FAQ interaction
 */
export function trackFaqInteractionForScoring() {
  const count = (getSessionData('faq_interactions') || 0) + 1;
  setSessionData('faq_interactions', count);
  checkBusinessDecisionMaker();
}

/**
 * Track max scroll depth
 * @param {number} percentage - Scroll percentage
 */
export function trackScrollDepthForScoring(percentage) {
  const currentMax = getSessionData('max_scroll_depth') || 0;
  if (percentage > currentMax) {
    setSessionData('max_scroll_depth', percentage);
    checkEngagedVisitor();
  }
}

/**
 * Track demo CTA click
 */
export function trackDemoClickForScoring() {
  setSessionData('demo_cta_clicked', true);
  checkHotLead();
}

// ===========================================
// Engagement Criteria Checks
// ===========================================

/**
 * Check all engagement criteria
 */
export function checkEngagementCriteria() {
  checkEngagedVisitor();
  checkHotLead();
  checkTechnicalEvaluator();
  checkBusinessDecisionMaker();
}

/**
 * Check if user qualifies as an Engaged Visitor
 * Criteria: 3+ pages viewed + 2+ minutes on site + 50%+ scroll depth
 */
export function checkEngagedVisitor() {
  if (hasEventFired('engaged_visitor')) return false;
  
  const criteria = ENGAGEMENT_CRITERIA.ENGAGED_VISITOR;
  const pagesViewed = getPageCount();
  const timeOnSite = getTimeOnSite();
  const maxScrollDepth = getSessionData('max_scroll_depth') || 0;
  
  if (
    pagesViewed >= criteria.minPagesViewed &&
    timeOnSite >= criteria.minTimeOnSite &&
    maxScrollDepth >= criteria.minScrollDepth
  ) {
    markEventFired('engaged_visitor');
    
    const engagementScore = calculateEngagementScore();
    
    pushEvent(EVENTS.ENGAGED_VISITOR, {
      pages_viewed: pagesViewed,
      time_on_site: timeOnSite,
      max_scroll_depth: maxScrollDepth,
      engagement_score: engagementScore,
      event_category: EVENT_CATEGORIES.LEAD_QUALITY,
    });
    
    logDebug('Engaged Visitor event fired', { pagesViewed, timeOnSite, maxScrollDepth, engagementScore });
    return true;
  }
  
  return false;
}

/**
 * Check if user qualifies as a Hot Lead
 * Criteria: Viewed use cases + viewed integrations + clicked demo CTA
 */
export function checkHotLead() {
  if (hasEventFired('hot_lead')) return false;
  
  const visitedPages = getSessionData('visited_pages') || [];
  const viewedSections = getSessionData('viewed_sections') || [];
  const demoClicked = getSessionData('demo_cta_clicked') || false;
  
  const hasViewedUseCases = viewedSections.includes('use-cases') || viewedSections.includes('use_cases');
  const hasViewedIntegrations = visitedPages.includes('integrations');
  
  if (hasViewedUseCases && hasViewedIntegrations && demoClicked) {
    markEventFired('hot_lead');
    
    const leadScore = calculateLeadScore();
    
    pushEvent(EVENTS.HOT_LEAD, {
      lead_score: leadScore,
      pages_visited: visitedPages.length,
      time_on_site: getTimeOnSite(),
      sections_viewed: viewedSections,
      event_category: EVENT_CATEGORIES.LEAD_QUALITY,
    });
    
    logDebug('Hot Lead event fired', { leadScore, visitedPages, viewedSections });
    return true;
  }
  
  return false;
}

/**
 * Check if user qualifies as a Technical Evaluator
 * Criteria: Heavy integrations page usage + release notes viewed + features section engagement
 */
export function checkTechnicalEvaluator() {
  if (hasEventFired('technical_evaluator')) return false;
  
  const criteria = ENGAGEMENT_CRITERIA.TECHNICAL_EVALUATOR;
  const visitedPages = getSessionData('visited_pages') || [];
  const featureInteractions = getSessionData('feature_interactions') || 0;
  
  const hasRequiredPages = criteria.requiredPages.every(page => 
    visitedPages.includes(page) || visitedPages.some(p => p.includes(page))
  );
  const hasEnoughFeatureInteractions = featureInteractions >= criteria.minFeatureInteractions;
  
  if (hasRequiredPages && hasEnoughFeatureInteractions) {
    markEventFired('technical_evaluator');
    
    pushEvent(EVENTS.TECHNICAL_EVALUATOR, {
      integration_views_count: visitedPages.filter(p => p.includes('integrations')).length,
      feature_interactions: featureInteractions,
      pages_visited: visitedPages,
      event_category: EVENT_CATEGORIES.LEAD_QUALITY,
    });
    
    logDebug('Technical Evaluator event fired', { visitedPages, featureInteractions });
    return true;
  }
  
  return false;
}

/**
 * Check if user qualifies as a Business Decision Maker
 * Criteria: Use cases focus + story/team viewed + FAQ engagement
 */
export function checkBusinessDecisionMaker() {
  if (hasEventFired('business_decision_maker')) return false;
  
  const criteria = ENGAGEMENT_CRITERIA.BUSINESS_DECISION_MAKER;
  const viewedSections = getSessionData('viewed_sections') || [];
  const useCaseCategoriesViewed = getSessionData('use_case_categories_viewed') || [];
  const faqInteractions = getSessionData('faq_interactions') || 0;
  
  const hasRequiredSections = criteria.requiredSections.filter(section => 
    viewedSections.includes(section)
  ).length >= 2;
  
  const hasEnoughUseCaseCategories = useCaseCategoriesViewed.length >= criteria.minUseCaseCategoriesViewed;
  const hasFaqEngagement = faqInteractions > 0;
  
  if (hasRequiredSections && hasEnoughUseCaseCategories && hasFaqEngagement) {
    markEventFired('business_decision_maker');
    
    pushEvent(EVENTS.BUSINESS_DECISION_MAKER, {
      use_case_categories_viewed: useCaseCategoriesViewed,
      faq_questions_opened: faqInteractions,
      sections_viewed: viewedSections,
      event_category: EVENT_CATEGORIES.LEAD_QUALITY,
    });
    
    logDebug('Business Decision Maker event fired', { 
      viewedSections, 
      useCaseCategoriesViewed, 
      faqInteractions 
    });
    return true;
  }
  
  return false;
}

// ===========================================
// Scoring Calculations
// ===========================================

/**
 * Calculate overall engagement score (0-100)
 * @returns {number} Engagement score
 */
export function calculateEngagementScore() {
  const pagesViewed = getPageCount();
  const timeOnSite = getTimeOnSite();
  const maxScrollDepth = getSessionData('max_scroll_depth') || 0;
  const viewedSections = (getSessionData('viewed_sections') || []).length;
  const featureInteractions = getSessionData('feature_interactions') || 0;
  const faqInteractions = getSessionData('faq_interactions') || 0;
  
  // Score components (weighted)
  const pageScore = Math.min(pagesViewed * 10, 20); // Max 20 points for pages
  const timeScore = Math.min(Math.floor(timeOnSite / 30) * 5, 20); // Max 20 points for time
  const scrollScore = Math.min(maxScrollDepth * 0.2, 20); // Max 20 points for scroll
  const sectionScore = Math.min(viewedSections * 5, 20); // Max 20 points for sections
  const interactionScore = Math.min((featureInteractions + faqInteractions) * 2, 20); // Max 20 points for interactions
  
  return Math.round(pageScore + timeScore + scrollScore + sectionScore + interactionScore);
}

/**
 * Calculate lead score (0-100)
 * @returns {number} Lead score
 */
export function calculateLeadScore() {
  const engagementScore = calculateEngagementScore();
  const demoClicked = getSessionData('demo_cta_clicked') ? 30 : 0;
  const useCasesViewed = (getSessionData('use_case_categories_viewed') || []).length * 5;
  const integrationsViewed = (getSessionData('visited_pages') || []).includes('integrations') ? 15 : 0;
  
  return Math.min(100, engagementScore + demoClicked + useCasesViewed + integrationsViewed);
}

// ===========================================
// Swiss Market Tracking
// ===========================================

/**
 * Track Swiss positioning badge view
 * @param {string} location - Where the badge was viewed
 */
export function trackSwissPositioningView(location) {
  const eventKey = `swiss_badge_${location}`;
  if (!hasEventFired(eventKey)) {
    markEventFired(eventKey);
    pushEvent(EVENTS.SWISS_POSITIONING_VIEW, {
      location,
      event_category: EVENT_CATEGORIES.SWISS_MARKET,
    });
    logDebug('Swiss Positioning View tracked', { location });
  }
}

/**
 * Track compliance interest
 * @param {string} topic - The compliance topic
 * @param {Object} additionalParams - Additional parameters
 */
export function trackComplianceInterest(topic, additionalParams = {}) {
  pushEvent(EVENTS.COMPLIANCE_INTEREST, {
    compliance_topic: topic,
    event_category: EVENT_CATEGORIES.SWISS_MARKET,
    ...additionalParams,
  });
  logDebug('Compliance Interest tracked', { topic, ...additionalParams });
}

/**
 * Track partner interest
 * @param {string} partnerName - The partner name
 */
export function trackPartnerInterest(partnerName) {
  pushEvent(EVENTS.PARTNER_INTEREST, {
    partner_name: partnerName,
    event_category: EVENT_CATEGORIES.SWISS_MARKET,
  });
  logDebug('Partner Interest tracked', { partnerName });
}

// ===========================================
// Initialize Engagement Tracking
// ===========================================

/**
 * Initialize engagement tracking
 * Should be called once on app load
 */
export function initEngagementTracking() {
  // Check engagement criteria periodically
  if (typeof window !== 'undefined') {
    // Check after 30 seconds
    setTimeout(() => checkEngagementCriteria(), 30000);
    
    // Check after 60 seconds
    setTimeout(() => checkEngagementCriteria(), 60000);
    
    // Check after 2 minutes
    setTimeout(() => checkEngagementCriteria(), 120000);
  }
  
  logDebug('Engagement tracking initialized');
}

// ===========================================
// Export all functions
// ===========================================
export default {
  trackSectionForEngagement,
  trackUseCaseCategoryView,
  trackFeatureInteractionForScoring,
  trackPageVisitForScoring,
  trackFaqInteractionForScoring,
  trackScrollDepthForScoring,
  trackDemoClickForScoring,
  checkEngagementCriteria,
  checkEngagedVisitor,
  checkHotLead,
  checkTechnicalEvaluator,
  checkBusinessDecisionMaker,
  calculateEngagementScore,
  calculateLeadScore,
  trackSwissPositioningView,
  trackComplianceInterest,
  trackPartnerInterest,
  initEngagementTracking,
};
