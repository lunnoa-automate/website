/**
 * GTM Tracking Events Constants
 * All event names and parameter schemas for Google Tag Manager tracking
 */

// ===========================================
// Event Categories
// ===========================================
export const EVENT_CATEGORIES = {
  NAVIGATION: 'navigation',
  ENGAGEMENT: 'engagement',
  CONVERSION: 'conversion',
  VIDEO: 'video',
  CONTENT: 'content',
  LEAD_QUALITY: 'lead_quality',
  SWISS_MARKET: 'swiss_market',
  FUNNEL: 'funnel',
};

// ===========================================
// Core Events (Phase 1)
// ===========================================
export const CORE_EVENTS = {
  // Page tracking
  PAGE_VIEW: 'page_view',
  VIRTUAL_PAGE_VIEW: 'virtual_page_view',
  
  // Navigation
  NAV_CLICK: 'nav_click',
  MOBILE_MENU_OPEN: 'mobile_menu_open',
  MOBILE_MENU_CLOSE: 'mobile_menu_close',
  
  // Scroll tracking
  SCROLL_DEPTH: 'scroll_depth',
  
  // CTA tracking
  CTA_DEMO_CLICK: 'cta_demo_click',
  CALENDLY_CLICK: 'calendly_click',
  
  // Video tracking
  VIDEO_PLAY: 'video_play',
  VIDEO_PAUSE: 'video_pause',
  VIDEO_RESUME: 'video_resume',
  VIDEO_MILESTONE: 'video_milestone',
  VIDEO_COMPLETE: 'video_complete',
};

// ===========================================
// Engagement Events (Phase 2)
// ===========================================
export const ENGAGEMENT_EVENTS = {
  // Section visibility
  SECTION_VIEW_SERVICES: 'section_view_services',
  SECTION_VIEW_STORY: 'section_view_story',
  SECTION_VIEW_FEATURES: 'section_view_features',
  SECTION_VIEW_USE_CASES: 'section_view_use_cases',
  SECTION_VIEW_TEAM: 'section_view_team',
  SECTION_VIEW_FAQ: 'section_view_faq',
  SECTION_VIEW_CTA: 'section_view_cta',
  
  // Feature interactions
  FEATURE_CARD_HOVER: 'feature_card_hover',
  FEATURE_CARD_CLICK: 'feature_card_click',
  FEATURE_IMAGE_VIEW: 'feature_image_view',
  INTEGRATION_BANNER_CLICK: 'integration_banner_click',
  
  // Use case interactions
  USE_CASE_CATEGORY_SELECT: 'use_case_category_select',
  USE_CASE_CARD_VIEW: 'use_case_card_view',
  USE_CASE_CARD_CLICK: 'use_case_card_click',
  
  // FAQ interactions
  FAQ_EXPAND: 'faq_expand',
  FAQ_COLLAPSE: 'faq_collapse',
  FAQ_COMPLETE_READ: 'faq_complete_read',
  
  // Footer & links
  FOOTER_LINK_CLICK: 'footer_link_click',
  SOCIAL_CLICK: 'social_click',
  EXTERNAL_LINK_CLICK: 'external_link_click',
  
  // Language
  LANGUAGE_SWITCH: 'language_switch',
};

// ===========================================
// Integrations & Advanced Events (Phase 3)
// ===========================================
export const ADVANCED_EVENTS = {
  // Integrations page
  INTEGRATIONS_PAGE_VIEW: 'integrations_page_view',
  INTEGRATION_SEARCH: 'integration_search',
  INTEGRATION_CATEGORY_FILTER: 'integration_category_filter',
  INTEGRATION_CARD_CLICK: 'integration_card_click',
  INTEGRATION_CARD_HOVER: 'integration_card_hover',
  
  // Release notes
  RELEASE_NOTES_PAGE_VIEW: 'release_notes_page_view',
  RELEASE_VERSION_CLICK: 'release_version_click',
  RELEASE_NOTES_READ: 'release_notes_read',
  
  // Engagement quality
  ENGAGED_VISITOR: 'engaged_visitor',
  HOT_LEAD: 'hot_lead',
  TECHNICAL_EVALUATOR: 'technical_evaluator',
  BUSINESS_DECISION_MAKER: 'business_decision_maker',
  
  // Swiss market
  COMPLIANCE_INTEREST: 'compliance_interest',
  SWISS_POSITIONING_VIEW: 'swiss_positioning_view',
  PARTNER_INTEREST: 'partner_interest',
};

// ===========================================
// Funnel Events (Phase 4)
// ===========================================
export const FUNNEL_EVENTS = {
  FUNNEL_STEP_COMPLETE: 'funnel_step_complete',
  FUNNEL_STARTED: 'funnel_started',
  FUNNEL_COMPLETED: 'funnel_completed',
  FUNNEL_ABANDONED: 'funnel_abandoned',
};

// ===========================================
// All Events Combined
// ===========================================
export const EVENTS = {
  ...CORE_EVENTS,
  ...ENGAGEMENT_EVENTS,
  ...ADVANCED_EVENTS,
  ...FUNNEL_EVENTS,
};

// ===========================================
// Scroll Depth Milestones
// ===========================================
export const SCROLL_MILESTONES = [25, 50, 75, 90];

// ===========================================
// Video Milestones
// ===========================================
export const VIDEO_MILESTONES = [25, 50, 75, 100];

// ===========================================
// Section IDs for visibility tracking
// ===========================================
export const SECTION_IDS = {
  HERO: 'hero',
  SERVICES: 'vorteile',
  STORY: 'story',
  FEATURES: 'features',
  USE_CASES: 'use-cases',
  TEAM: 'team',
  FAQ: 'faq',
  CTA: 'demo',
};

// ===========================================
// CTA Locations
// ===========================================
export const CTA_LOCATIONS = {
  HERO: 'hero',
  USE_CASES_SECTION: 'use-cases-section',
  MAIN_CTA: 'main-cta',
  FOOTER: 'footer',
  INTEGRATIONS: 'integrations',
  HEADER: 'header',
};

// ===========================================
// Feature Names
// ===========================================
export const FEATURE_NAMES = {
  AI_AGENTS: 'AI Agents',
  WORKFLOWS: 'Automated Workflows',
  WORKSPACE: 'Workspace Management',
  KNOWLEDGE_BASE: 'Central Knowledge Base',
};
