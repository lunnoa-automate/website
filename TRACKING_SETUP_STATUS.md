# GTM Tracking Implementation Status

## ✅ Completed - All Core Tracking Implemented!

### Infrastructure Setup
1. **Created tracking library** (`/lib/tracking.js`) ✅
   - dataLayer push functions
   - Event validation
   - Debug logging
   - Session management

2. **Created tracking events** (`/lib/tracking-events.js`) ✅
   - All event constants
   - Event categories
   - Section IDs
   - CTA locations

3. **Created tracking hooks** (`/hooks/useTracking.js`) ✅
   - `useTracking()` - Main tracking hook
   - `useScrollTracking()` - Scroll depth tracking
   - `useVideoTracking()` - Video engagement tracking
   - `useIntersectionTracking()` - Section visibility tracking

### All Main Components Now Have Tracking! ✅

1. **app/page.jsx** ✅
   - Page view tracking
   - Scroll depth tracking (25%, 50%, 75%, 90%)

2. **Hero.jsx** ✅
   - CTA click tracking
   - Calendly click tracking
   - Video engagement tracking (play, pause, milestones, complete)

3. **Header.jsx** ✅
   - Navigation click tracking
   - CTA click tracking (header button)
   - Mobile menu open/close tracking

4. **Services.jsx** ✅
   - Section view tracking (`vorteile`)

5. **Story.jsx** ✅
   - Section view tracking

6. **Features.jsx** ✅
   - Section view tracking

7. **UseCases.jsx** ✅
   - Section view tracking
   - Category selection tracking
   - CTA click tracking

8. **Team.jsx** ✅
   - Section view tracking
   - Partner link clicks (fintra, elab)
   - Team member social clicks (LinkedIn, email)

9. **FAQ.jsx** ✅
   - Section view tracking
   - FAQ expand/collapse tracking
   - Compliance interest detection (auto-tracks GDPR/FINMA questions)

10. **CTA.jsx** ✅
    - Section view tracking
    - CTA click tracking
    - Calendly click tracking

11. **Footer.jsx** ✅
    - Footer link clicks by category (navigation, product, legal, contact)
    - Social media clicks (LinkedIn, email)
    - Demo request tracking from footer

## 🎯 Optional Enhancements (Future Work)

### Example Code Patterns

#### Add Section View Tracking
```jsx
import { useRef } from 'react';
import { useIntersectionTracking } from '@/hooks/useTracking';
import { SECTION_IDS } from '@/lib/tracking-events';

export default function YourComponent() {
  const sectionRef = useRef(null);
  
  // Track section view
  useIntersectionTracking(sectionRef, {
    sectionName: SECTION_IDS.YOUR_SECTION,
    threshold: 0.3,
  });
  
  return (
    <section ref={sectionRef} id="your-section">
      {/* content */}
    </section>
  );
}
```

#### Track Button/Link Clicks
```jsx
import { useTracking } from '@/hooks/useTracking';
import { CTA_LOCATIONS } from '@/lib/tracking-events';

export default function YourComponent() {
  const { trackCtaClick, trackCalendlyClick } = useTracking();
  
  const handleClick = () => {
    trackCtaClick(CTA_LOCATIONS.YOUR_LOCATION);
    trackCalendlyClick(CTA_LOCATIONS.YOUR_LOCATION);
  };
  
  return (
    <a href="..." onClick={handleClick}>Click me</a>
  );
}
```

#### Track FAQ Interactions
```jsx
import { useTracking } from '@/hooks/useTracking';
import { EVENTS } from '@/lib/tracking-events';

export default function FAQ() {
  const { trackFaqInteraction } = useTracking();
  
  const handleToggle = (question, index, isExpanding) => {
    trackFaqInteraction(
      isExpanding ? EVENTS.FAQ_EXPAND : EVENTS.FAQ_COLLAPSE,
      question,
      index
    );
  };
  
  // Use in your accordion/collapse component
}
```

## 🧪 Testing

### In GTM Preview Mode

1. **Open GTM Preview Mode** and navigate to your website
2. **Test each interaction** and verify events fire:

**All Core Events Now Implemented:** ✅
- ✅ `page_view` - Page load
- ✅ `scroll_depth` - Scroll milestones (25%, 50%, 75%, 90%)
- ✅ `nav_click` - Navigation clicks (header menu)
- ✅ `mobile_menu_open` / `mobile_menu_close` - Mobile menu toggle
- ✅ `cta_demo_click` - CTA button clicks (hero, use cases, main CTA, header, footer)
- ✅ `calendly_click` - Calendly link clicks (all locations)
- ✅ `video_play` / `video_pause` / `video_milestone` / `video_complete` - Video engagement
- ✅ `section_view_services` - Services section view
- ✅ `section_view_story` - Story section view
- ✅ `section_view_features` - Features section view
- ✅ `section_view_use_cases` - Use cases section view
- ✅ `section_view_team` - Team section view
- ✅ `section_view_faq` - FAQ section view
- ✅ `section_view_cta` - CTA section view
- ✅ `use_case_category_select` - Use case category selection
- ✅ `faq_expand` / `faq_collapse` - FAQ interactions
- ✅ `compliance_interest` - Auto-tracked on GDPR/FINMA questions
- ✅ `footer_link_click` - Footer link clicks (all categories)
- ✅ `social_click` - Social media clicks (footer + team)
- ✅ `partner_interest` - Partner logo clicks (fintra, elab)
- ✅ `team_social_click` - Team member social links

**Optional Events (Not Yet Implemented):**
- ⭕ `feature_card_hover` / `feature_card_click` - Individual feature interactions
- ⭕ `integration_banner_click` - Features section integration banner
- ⭕ Integration page events (when/if you add integrations page tracking)

### Debug Mode

Access debug tools in browser console:
```javascript
// Check if tracking is working
window.dataLayer

// View all pushed events
console.table(window.dataLayer)
```

Debug mode auto-enables on:
- localhost
- URL with `?debug_tracking=true`

## 📋 Next Steps - Ready to Test!

1. ~~Add tracking to remaining components~~ ✅ **DONE!**
2. **🔥 Test all events in GTM Preview Mode** ⬅️ START HERE
3. **Verify events appear in GA4 DebugView**
4. **Create GTM triggers and tags** according to `GTM_CONFIGURATION.md`
5. **Publish GTM container** when all events are confirmed working

### How to Test

1. **Start your development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. **Open GTM Preview Mode:**
   - Go to Google Tag Manager
   - Click "Preview" button
   - Enter your localhost URL (e.g., `http://localhost:3000`)

3. **Test each interaction systematically:**
   - Load the page → Check `page_view` fires
   - Scroll down → Check `scroll_depth` events (25%, 50%, 75%, 90%)
   - Click navigation links → Check `nav_click` fires
   - Click CTA buttons → Check `cta_demo_click` + `calendly_click` fire
   - Watch video → Check video events fire
   - Change use case category → Check `use_case_category_select` fires
   - Open/close FAQs → Check `faq_expand` / `faq_collapse` fire
   - Click footer links → Check `footer_link_click` fires
   - Scroll through sections → Check all `section_view_*` events fire

4. **Enable Debug Mode:**
   - Add `?debug_tracking=true` to your URL
   - Open browser console
   - See green `[GTM Tracking]` logs for each event

5. **Check DataLayer:**
   ```javascript
   // In browser console
   console.table(window.dataLayer)
   ```

## 🔍 Troubleshooting

### Events not firing?
1. Check browser console for errors
2. Verify `window.dataLayer` exists
3. Enable debug mode: add `?debug_tracking=true` to URL
4. Check that component has `'use client'` directive

### GTM Preview not showing events?
1. Verify GTM container ID is correct in `app/layout.jsx`
2. Clear browser cache
3. Check that dataLayer pushes happen **before** page load completes

## 📚 Reference

- **Tracking Documentation**: `/docs/GTM_CONFIGURATION.md`
- **Main Tracking Library**: `/lib/tracking.js`
- **Event Constants**: `/lib/tracking-events.js`
- **Hooks**: `/hooks/useTracking.js`
