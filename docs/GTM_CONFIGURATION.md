# Google Tag Manager Configuration Guide

This document describes all the GTM configuration needed for the Lunnoa Automate website tracking implementation.

**GTM Container ID:** `GTM-TNG2GTXC`

---

## Phase 1: Core Variables

### Data Layer Variables

Create the following Data Layer Variables in GTM:

| Variable Name | Data Layer Variable Name | Type |
|---------------|-------------------------|------|
| DLV - Event Category | `event_category` | Data Layer Variable |
| DLV - Event Label | `event_label` | Data Layer Variable |
| DLV - Page Section | `page_section` | Data Layer Variable |
| DLV - User Language | `user_language` | Data Layer Variable |
| DLV - Feature Name | `feature_name` | Data Layer Variable |
| DLV - Nav Item | `nav_item` | Data Layer Variable |
| DLV - CTA Location | `cta_location` | Data Layer Variable |
| DLV - Video Percentage | `video_percentage` | Data Layer Variable |
| DLV - Scroll Percentage | `scroll_percentage` | Data Layer Variable |
| DLV - Page Path | `page_path` | Data Layer Variable |
| DLV - Page Title | `page_title` | Data Layer Variable |
| DLV - Time on Site | `time_on_site` | Data Layer Variable |
| DLV - Pages Viewed | `pages_viewed` | Data Layer Variable |

### Built-in Variables (Enable if not already)

- Page URL
- Page Path
- Page Hostname
- Referrer
- Click Classes
- Click ID
- Click Target
- Click URL
- Click Text

---

## Phase 1: Core Triggers

### Page View Triggers

| Trigger Name | Trigger Type | Conditions |
|--------------|--------------|------------|
| All Pages | Page View | All Pages |
| Virtual Page View | Custom Event | Event name equals `virtual_page_view` |

### Navigation Triggers

| Trigger Name | Trigger Type | Conditions |
|--------------|--------------|------------|
| CE - Nav Click | Custom Event | Event name equals `nav_click` |
| CE - Mobile Menu Open | Custom Event | Event name equals `mobile_menu_open` |
| CE - Mobile Menu Close | Custom Event | Event name equals `mobile_menu_close` |

### CTA Triggers

| Trigger Name | Trigger Type | Conditions |
|--------------|--------------|------------|
| CE - CTA Demo Click | Custom Event | Event name equals `cta_demo_click` |
| CE - Calendly Click | Custom Event | Event name equals `calendly_click` |

### Scroll Triggers

| Trigger Name | Trigger Type | Conditions |
|--------------|--------------|------------|
| CE - Scroll Depth | Custom Event | Event name equals `scroll_depth` |

### Video Triggers

| Trigger Name | Trigger Type | Conditions |
|--------------|--------------|------------|
| CE - Video Play | Custom Event | Event name equals `video_play` |
| CE - Video Pause | Custom Event | Event name equals `video_pause` |
| CE - Video Resume | Custom Event | Event name equals `video_resume` |
| CE - Video Milestone | Custom Event | Event name equals `video_milestone` |
| CE - Video Complete | Custom Event | Event name equals `video_complete` |

---

## Phase 1: Core Tags

### GA4 Configuration Tag

| Setting | Value |
|---------|-------|
| Tag Type | Google Analytics: GA4 Configuration |
| Measurement ID | `G-XXXXXXXXXX` (Your GA4 ID) |
| Send page view | Enabled |
| Trigger | All Pages |

### GA4 Event - Virtual Page View

| Setting | Value |
|---------|-------|
| Tag Type | Google Analytics: GA4 Event |
| Configuration Tag | GA4 Configuration |
| Event Name | `page_view` |
| Event Parameters | `page_path`: {{DLV - Page Path}}, `page_title`: {{DLV - Page Title}}, `user_language`: {{DLV - User Language}} |
| Trigger | CE - Virtual Page View |

### GA4 Event - Navigation Click

| Setting | Value |
|---------|-------|
| Tag Type | Google Analytics: GA4 Event |
| Configuration Tag | GA4 Configuration |
| Event Name | `nav_click` |
| Event Parameters | `nav_item`: {{DLV - Nav Item}}, `user_language`: {{DLV - User Language}} |
| Trigger | CE - Nav Click |

### GA4 Event - CTA Demo Click

| Setting | Value |
|---------|-------|
| Tag Type | Google Analytics: GA4 Event |
| Configuration Tag | GA4 Configuration |
| Event Name | `cta_demo_click` |
| Event Parameters | `cta_location`: {{DLV - CTA Location}}, `time_on_site`: {{DLV - Time on Site}}, `pages_viewed`: {{DLV - Pages Viewed}}, `user_language`: {{DLV - User Language}} |
| Trigger | CE - CTA Demo Click |

### GA4 Event - Calendly Click

| Setting | Value |
|---------|-------|
| Tag Type | Google Analytics: GA4 Event |
| Configuration Tag | GA4 Configuration |
| Event Name | `calendly_click` |
| Event Parameters | `source_location`: {{DLV - CTA Location}}, `time_on_site`: {{DLV - Time on Site}}, `pages_viewed`: {{DLV - Pages Viewed}}, `user_language`: {{DLV - User Language}} |
| Trigger | CE - Calendly Click |

### GA4 Event - Scroll Depth

| Setting | Value |
|---------|-------|
| Tag Type | Google Analytics: GA4 Event |
| Configuration Tag | GA4 Configuration |
| Event Name | `scroll_depth` |
| Event Parameters | `scroll_percentage`: {{DLV - Scroll Percentage}}, `user_language`: {{DLV - User Language}} |
| Trigger | CE - Scroll Depth |

### GA4 Event - Video Engagement

| Setting | Value |
|---------|-------|
| Tag Type | Google Analytics: GA4 Event |
| Configuration Tag | GA4 Configuration |
| Event Name | `video_engagement` |
| Event Parameters | `video_event_type`: {{Event}}, `video_percentage`: {{DLV - Video Percentage}} |
| Trigger | CE - Video Play, CE - Video Pause, CE - Video Milestone, CE - Video Complete |

---

## Phase 2: Engagement Variables

### Additional Data Layer Variables

| Variable Name | Data Layer Variable Name |
|---------------|-------------------------|
| DLV - Section Name | `section_name` |
| DLV - Feature Position | `feature_position` |
| DLV - Use Case Category | `use_case_category` |
| DLV - Use Case Title | `use_case_title` |
| DLV - Question Text | `question_text` |
| DLV - Question Index | `question_index` |
| DLV - Link Category | `link_category` |
| DLV - Link Text | `link_text` |
| DLV - Link URL | `link_url` |
| DLV - Social Platform | `social_platform` |
| DLV - From Language | `from_language` |
| DLV - To Language | `to_language` |

---

## Phase 2: Engagement Triggers

### Section Visibility Triggers

| Trigger Name | Trigger Type | Conditions |
|--------------|--------------|------------|
| CE - Section View Services | Custom Event | Event name equals `section_view_services` |
| CE - Section View Story | Custom Event | Event name equals `section_view_story` |
| CE - Section View Features | Custom Event | Event name equals `section_view_features` |
| CE - Section View Use Cases | Custom Event | Event name equals `section_view_use_cases` |
| CE - Section View Team | Custom Event | Event name equals `section_view_team` |
| CE - Section View FAQ | Custom Event | Event name equals `section_view_faq` |
| CE - Section View CTA | Custom Event | Event name equals `section_view_demo` |

### Feature Triggers

| Trigger Name | Trigger Type | Conditions |
|--------------|--------------|------------|
| CE - Feature Card Hover | Custom Event | Event name equals `feature_card_hover` |
| CE - Feature Card Click | Custom Event | Event name equals `feature_card_click` |

### Use Case Triggers

| Trigger Name | Trigger Type | Conditions |
|--------------|--------------|------------|
| CE - Use Case Category Select | Custom Event | Event name equals `use_case_category_select` |
| CE - Use Case Card View | Custom Event | Event name equals `use_case_card_view` |

### FAQ Triggers

| Trigger Name | Trigger Type | Conditions |
|--------------|--------------|------------|
| CE - FAQ Expand | Custom Event | Event name equals `faq_expand` |
| CE - FAQ Collapse | Custom Event | Event name equals `faq_collapse` |

### Link Triggers

| Trigger Name | Trigger Type | Conditions |
|--------------|--------------|------------|
| CE - Footer Link Click | Custom Event | Event name equals `footer_link_click` |
| CE - Social Click | Custom Event | Event name equals `social_click` |

### Language Trigger

| Trigger Name | Trigger Type | Conditions |
|--------------|--------------|------------|
| CE - Language Switch | Custom Event | Event name equals `language_switch` |

---

## Phase 2: Engagement Tags

### GA4 Event - Section View

| Setting | Value |
|---------|-------|
| Tag Type | Google Analytics: GA4 Event |
| Configuration Tag | GA4 Configuration |
| Event Name | {{Event}} |
| Event Parameters | `section_name`: {{DLV - Section Name}}, `user_language`: {{DLV - User Language}} |
| Trigger | All CE - Section View triggers |

### GA4 Event - Feature Interaction

| Setting | Value |
|---------|-------|
| Tag Type | Google Analytics: GA4 Event |
| Configuration Tag | GA4 Configuration |
| Event Name | `feature_interaction` |
| Event Parameters | `feature_name`: {{DLV - Feature Name}}, `feature_position`: {{DLV - Feature Position}}, `interaction_type`: {{Event}}, `user_language`: {{DLV - User Language}} |
| Trigger | CE - Feature Card Hover, CE - Feature Card Click |

### GA4 Event - Use Case Interaction

| Setting | Value |
|---------|-------|
| Tag Type | Google Analytics: GA4 Event |
| Configuration Tag | GA4 Configuration |
| Event Name | {{Event}} |
| Event Parameters | `use_case_category`: {{DLV - Use Case Category}}, `use_case_title`: {{DLV - Use Case Title}}, `user_language`: {{DLV - User Language}} |
| Trigger | CE - Use Case Category Select, CE - Use Case Card View |

### GA4 Event - FAQ Interaction

| Setting | Value |
|---------|-------|
| Tag Type | Google Analytics: GA4 Event |
| Configuration Tag | GA4 Configuration |
| Event Name | {{Event}} |
| Event Parameters | `question_text`: {{DLV - Question Text}}, `question_index`: {{DLV - Question Index}}, `user_language`: {{DLV - User Language}} |
| Trigger | CE - FAQ Expand, CE - FAQ Collapse |

### GA4 Event - Footer Link Click

| Setting | Value |
|---------|-------|
| Tag Type | Google Analytics: GA4 Event |
| Configuration Tag | GA4 Configuration |
| Event Name | `footer_link_click` |
| Event Parameters | `link_category`: {{DLV - Link Category}}, `link_text`: {{DLV - Link Text}}, `link_url`: {{DLV - Link URL}}, `user_language`: {{DLV - User Language}} |
| Trigger | CE - Footer Link Click |

### GA4 Event - Social Click

| Setting | Value |
|---------|-------|
| Tag Type | Google Analytics: GA4 Event |
| Configuration Tag | GA4 Configuration |
| Event Name | `social_click` |
| Event Parameters | `social_platform`: {{DLV - Social Platform}}, `user_language`: {{DLV - User Language}} |
| Trigger | CE - Social Click |

### GA4 Event - Language Switch

| Setting | Value |
|---------|-------|
| Tag Type | Google Analytics: GA4 Event |
| Configuration Tag | GA4 Configuration |
| Event Name | `language_switch` |
| Event Parameters | `from_language`: {{DLV - From Language}}, `to_language`: {{DLV - To Language}} |
| Trigger | CE - Language Switch |

---

## Phase 3: Advanced Variables

### Additional Data Layer Variables

| Variable Name | Data Layer Variable Name |
|---------------|-------------------------|
| DLV - Integration Name | `integration_name` |
| DLV - Integration Category | `integration_category` |
| DLV - Search Query | `search_query` |
| DLV - Results Count | `results_count` |
| DLV - Card Position | `card_position` |
| DLV - Version Number | `version_number` |
| DLV - Read Percentage | `read_percentage` |
| DLV - Lead Score | `lead_score` |
| DLV - Compliance Topic | `compliance_topic` |
| DLV - Partner Name | `partner_name` |

---

## Phase 3: Advanced Triggers

### Integration Page Triggers

| Trigger Name | Trigger Type | Conditions |
|--------------|--------------|------------|
| CE - Integrations Page View | Custom Event | Event name equals `integrations_page_view` |
| CE - Integration Search | Custom Event | Event name equals `integration_search` |
| CE - Integration Category Filter | Custom Event | Event name equals `integration_category_filter` |
| CE - Integration Card Click | Custom Event | Event name equals `integration_card_click` |
| CE - Integration Card Hover | Custom Event | Event name equals `integration_card_hover` |

### Release Notes Triggers

| Trigger Name | Trigger Type | Conditions |
|--------------|--------------|------------|
| CE - Release Notes Page View | Custom Event | Event name equals `release_notes_page_view` |
| CE - Release Version Click | Custom Event | Event name equals `release_version_click` |

### Engagement Quality Triggers

| Trigger Name | Trigger Type | Conditions |
|--------------|--------------|------------|
| CE - Engaged Visitor | Custom Event | Event name equals `engaged_visitor` |
| CE - Hot Lead | Custom Event | Event name equals `hot_lead` |
| CE - Technical Evaluator | Custom Event | Event name equals `technical_evaluator` |
| CE - Business Decision Maker | Custom Event | Event name equals `business_decision_maker` |

### Swiss Market Triggers

| Trigger Name | Trigger Type | Conditions |
|--------------|--------------|------------|
| CE - Compliance Interest | Custom Event | Event name equals `compliance_interest` |
| CE - Swiss Positioning View | Custom Event | Event name equals `swiss_positioning_view` |
| CE - Partner Interest | Custom Event | Event name equals `partner_interest` |

---

## Phase 4: Funnel Triggers

| Trigger Name | Trigger Type | Conditions |
|--------------|--------------|------------|
| CE - Funnel Step Complete | Custom Event | Event name equals `funnel_step_complete` |
| CE - Funnel Started | Custom Event | Event name equals `funnel_started` |
| CE - Funnel Completed | Custom Event | Event name equals `funnel_completed` |
| CE - Funnel Abandoned | Custom Event | Event name equals `funnel_abandoned` |

---

## Testing Checklist

### GTM Preview Mode Testing

1. [ ] Open GTM Preview mode
2. [ ] Navigate to lunnoaautomate.ch
3. [ ] Verify the following events fire correctly:

**Page Load:**
- [ ] `page_view` fires on initial load
- [ ] `virtual_page_view` fires on hash changes

**Navigation:**
- [ ] `nav_click` fires when clicking navigation items
- [ ] `mobile_menu_open` fires when opening mobile menu
- [ ] `mobile_menu_close` fires when closing mobile menu

**CTAs:**
- [ ] `cta_demo_click` fires when clicking demo buttons
- [ ] `calendly_click` fires when clicking Calendly links

**Scroll:**
- [ ] `scroll_depth` fires at 25%, 50%, 75%, 90% milestones

**Video:**
- [ ] `video_play` fires when video starts
- [ ] `video_milestone` fires at 25%, 50%, 75%
- [ ] `video_complete` fires when video ends

**Sections:**
- [ ] Section view events fire when sections come into viewport

**Integrations Page:**
- [ ] `integrations_page_view` fires on page load
- [ ] `integration_search` fires when searching
- [ ] `integration_category_filter` fires when filtering

### GA4 DebugView Testing

1. [ ] Enable GA4 DebugView
2. [ ] Navigate through the website
3. [ ] Verify events appear in DebugView
4. [ ] Check all parameters are correctly passed

---

## Maintenance Notes

- Always test in GTM Preview mode before publishing
- Document version changes in GTM
- Export container backup before major changes
- Review and update this documentation when adding new tracking

---

## Phase 3 & 4: Advanced Tags

### GA4 Event - Integration Page Interactions

| Setting | Value |
|---------|-------|
| Tag Type | Google Analytics: GA4 Event |
| Configuration Tag | GA4 Configuration |
| Event Name | {{Event}} |
| Event Parameters | `integration_name`: {{DLV - Integration Name}}, `integration_category`: {{DLV - Integration Category}}, `search_query`: {{DLV - Search Query}}, `results_count`: {{DLV - Results Count}}, `card_position`: {{DLV - Card Position}} |
| Trigger | All CE - Integration triggers |

### GA4 Event - Lead Quality Events

| Setting | Value |
|---------|-------|
| Tag Type | Google Analytics: GA4 Event |
| Configuration Tag | GA4 Configuration |
| Event Name | {{Event}} |
| Event Parameters | `lead_score`: {{DLV - Lead Score}}, `engagement_score`: calculated, `pages_visited`: {{DLV - Pages Viewed}}, `time_on_site`: {{DLV - Time on Site}} |
| Trigger | CE - Engaged Visitor, CE - Hot Lead, CE - Technical Evaluator, CE - Business Decision Maker |

### GA4 Event - Funnel Tracking

| Setting | Value |
|---------|-------|
| Tag Type | Google Analytics: GA4 Event |
| Configuration Tag | GA4 Configuration |
| Event Name | {{Event}} |
| Event Parameters | `funnel_id`, `funnel_name`, `step_id`, `step_name`, `step_number`, `total_steps`, `time_since_funnel_start`, `is_goal` |
| Trigger | CE - Funnel Step Complete, CE - Funnel Started, CE - Funnel Completed, CE - Funnel Abandoned |

---

## GA4 Audiences to Create

### 1. Hot Leads
- Conditions: `hot_lead` event fired within last 30 days
- Membership duration: 30 days

### 2. Engaged Prospects
- Conditions: `engaged_visitor` event fired within last 7 days
- Membership duration: 7 days

### 3. Technical Evaluators
- Conditions: `technical_evaluator` event fired within last 30 days
- Membership duration: 30 days

### 4. Business Decision Makers
- Conditions: `business_decision_maker` event fired within last 30 days
- Membership duration: 30 days

### 5. High-Value Industry Focus
- Conditions: `use_case_category_select` event with category = "finance" OR "legal"
- Membership duration: 30 days

### 6. German-Speaking Visitors
- Conditions: User property `user_language` = "de"
- Membership duration: 90 days

### 7. Returning Visitors
- Conditions: Session count >= 2 within 7 days
- Membership duration: 30 days

---

## Custom Dimensions & Metrics (GA4)

### User-scoped Custom Dimensions
| Dimension Name | Parameter Name | Description |
|----------------|----------------|-------------|
| Visitor Type | `visitor_type` | first_time / returning / engaged |
| Preferred Language | `preferred_language` | de / en |
| Lead Score | `lead_score` | 0-100 calculated score |

### Event-scoped Custom Dimensions
| Dimension Name | Parameter Name | Description |
|----------------|----------------|-------------|
| Page Section | `page_section` | Section where event occurred |
| CTA Location | `cta_location` | Where CTA was clicked |
| Feature Name | `feature_name` | Feature interacted with |
| Use Case Category | `use_case_category` | Category selected |
| Integration Name | `integration_name` | Integration clicked |
| Funnel Name | `funnel_name` | Funnel being tracked |

### Custom Metrics
| Metric Name | Parameter Name | Description |
|-------------|----------------|-------------|
| Engagement Score | `engagement_score` | 0-100 engagement level |
| Funnel Progress | `funnel_progress` | Percentage completed |
| Scroll Depth | `scroll_percentage` | Max scroll percentage |

---

## Debug Mode

The tracking implementation includes a built-in debugger that can be accessed via browser console:

```javascript
// Available commands (when debug mode is active)
gtmDebug.status()        // Print full tracking status
gtmDebug.events()        // List all fired events
gtmDebug.eventDetails("event_name") // Details for specific event
gtmDebug.funnels()       // Print funnel definitions
gtmDebug.funnelStatus()  // Show funnel progress
gtmDebug.startMonitor()  // Start real-time event monitoring
gtmDebug.stopMonitor()   // Stop event monitoring
gtmDebug.scores()        // Print engagement and lead scores
gtmDebug.help()          // Show all commands
```

Debug mode is automatically enabled when:
- Running on localhost
- URL contains `?debug_tracking=true`

---

**Last Updated:** January 26, 2026
**Version:** 2.0
