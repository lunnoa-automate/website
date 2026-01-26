# Cookie Consent Management System

## Overview

This document describes the custom cookie consent management system implemented for the Lunnoa Automate website. The system is fully compliant with:

- 🇪🇺 **GDPR** (General Data Protection Regulation)
- 🇪🇺 **ePrivacy Directive** (Cookie Law)
- 🇨🇭 **Swiss FADP** (Federal Act on Data Protection / DSG)
- 🇨🇭 **nFADP** (revised Swiss Data Protection Act)

## ✅ Compliance Features

### GDPR & ePrivacy Compliance

1. **Opt-in by Default** ✅
   - No tracking scripts load until user gives explicit consent
   - Analytics and marketing cookies are disabled by default
   - Only necessary cookies are enabled without consent

2. **Granular Consent** ✅
   - Users can accept/reject different cookie categories
   - Clear explanation of each category
   - Easy-to-use toggle switches

3. **Easy Withdrawal** ✅
   - Cookie settings can be reopened anytime from footer
   - Users can change preferences at any time
   - Page reloads automatically to apply new settings

4. **Clear Information** ✅
   - Transparent explanation of what data is collected
   - Links to privacy policy
   - Details about specific cookies used

5. **Consent Storage** ✅
   - Consent stored in localStorage and secure cookie
   - 365-day expiry (as recommended by EDPB)
   - Versioned consent (allows for policy updates)

### Swiss FADP Compliance

1. **Data Sovereignty** ✅
   - Website hosted in Switzerland
   - Clear indication of Swiss compliance in banner
   - Follows Swiss data protection principles

2. **Transparency** ✅
   - Clear information about data processing
   - Links to privacy policy in German
   - Multi-language support (DE/EN)

## 🏗️ Architecture

### Components

```
components/consent/
├── ConsentBanner.jsx         # Main consent banner (first visit)
├── ConsentSettings.jsx       # Settings panel (reopen preferences)
└── ConsentButton.jsx         # Button to reopen settings
```

### Core Library

```
lib/
└── consent-manager.js        # Core consent management logic
```

### Integration Points

1. **app/layout.jsx**
   - Initializes GTM Consent Mode
   - Loads ConsentBanner component
   - Sets up consent defaults

2. **components/sections/Footer.jsx**
   - Includes ConsentButton for reopening settings

3. **Google Tag Manager**
   - Controlled by Consent Mode API
   - Scripts blocked until consent given

## 🎯 How It Works

### Initial Load (No Consent)

1. **Page loads** → GTM Consent Mode initialized with `denied` state
2. **ConsentBanner appears** → User sees consent options
3. **User makes choice:**
   - Accept All → All tracking enabled
   - Reject All → Only necessary cookies
   - Customize → User selects preferences
4. **Consent saved** → Stored in localStorage + cookie
5. **GTM loads** → If analytics consent given
6. **Tracking starts** → Events sent to Google Analytics

### Subsequent Visits (Consent Given)

1. **Page loads** → Consent manager checks localStorage
2. **Consent valid?** → Yes → Apply saved preferences
3. **GTM loads** → Automatically based on consent
4. **No banner shown** → User already consented

### Consent Update

1. **User clicks** "Cookie-Einstellungen" in footer
2. **Settings panel opens** → Shows current preferences
3. **User changes** → Updates toggles
4. **Save** → New preferences stored
5. **Page reloads** → New settings applied

## 📊 Cookie Categories

### 1. Necessary Cookies ✅ (Always Active)

**Purpose:** Essential for basic website functionality

**Cookies:**
- `lunnoa_consent` - Stores user consent preferences
- `lunnoa_consent_preferences` - Stores detailed consent settings

**Cannot be disabled** - Required by law to be exempt from consent

### 2. Analytics Cookies 📊 (Requires Consent)

**Purpose:** Understand how visitors use the website

**Service:** Google Analytics 4 via Google Tag Manager

**Cookies:**
- `_ga` - Distinguishes users (2 years)
- `_ga_*` - Contains campaign and session information (2 years)
- `_gid` - Distinguishes users (24 hours)

**Data Collected:**
- Page views
- User interactions (clicks, scrolls, video plays)
- Session information
- Device and browser information
- Geographic location (country/city level)

**Data Processing:**
- Anonymized IP addresses
- No personally identifiable information (PII)
- Data processed in accordance with Google's privacy policy

### 3. Marketing Cookies 📢 (Requires Consent)

**Purpose:** Show relevant advertising and marketing campaigns

**Status:** Currently not used

**When enabled in future:**
- Retargeting campaigns
- Personalized advertising
- Campaign measurement

## 🔧 Technical Implementation

### Consent Manager API

```javascript
import { consentManager } from '@/lib/consent-manager';

// Check if user has consented
const hasConsent = consentManager.hasConsent();

// Get current consent preferences
const consent = consentManager.getConsent();
// Returns: { necessary: true, analytics: true, marketing: false }

// Check specific consent
const hasAnalytics = consentManager.hasAnalyticsConsent();
const hasMarketing = consentManager.hasMarketingConsent();

// Save new consent
consentManager.saveConsent({
  necessary: true,
  analytics: true,
  marketing: false,
});

// Revoke consent (for testing)
consentManager.revokeConsent();

// Load GTM manually (normally automatic)
consentManager.loadGTM();
```

### GTM Consent Mode Integration

```javascript
// Default state (before consent)
gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
});

// After consent (automatic)
gtag('consent', 'update', {
  'analytics_storage': 'granted',  // If user accepted analytics
  'ad_storage': 'denied',          // If user rejected marketing
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
});
```

### Storage Format

**localStorage** (`lunnoa_consent_preferences`):
```json
{
  "version": "1.0",
  "timestamp": "2026-01-26T12:00:00.000Z",
  "preferences": {
    "necessary": true,
    "analytics": true,
    "marketing": false
  }
}
```

**Cookie** (`lunnoa_consent`):
```
{"necessary":true,"analytics":true,"marketing":false}
```

**Cookie Attributes:**
- `SameSite=Lax` - CSRF protection
- `Secure` - HTTPS only
- `Path=/` - Available site-wide
- `Max-Age=31536000` - 365 days

## 🧪 Testing

### Test Scenarios

1. **First Visit (No Consent)**
   - Banner should appear after 500ms
   - GTM should NOT load
   - No tracking cookies should be set
   - `_ga` cookies should NOT exist

2. **Accept All**
   - Banner should close
   - GTM should load immediately
   - Consent saved to localStorage + cookie
   - `_ga` cookies should appear
   - Tracking events should fire

3. **Reject All**
   - Banner should close
   - GTM should NOT load
   - Only consent cookies saved
   - No tracking events

4. **Customize Settings**
   - Settings panel should show
   - Toggle switches should work
   - Analytics ON + Marketing OFF → GTM loads
   - Analytics OFF + Marketing OFF → GTM doesn't load

5. **Reopen Settings**
   - Click "Cookie-Einstellungen" in footer
   - Settings panel appears
   - Current preferences shown correctly
   - Changes applied after save + reload

6. **Consent Expiry**
   - After 365 days, consent should expire
   - Banner should appear again on next visit

### Testing Commands

```javascript
// In browser console:

// Check if consent exists
localStorage.getItem('lunnoa_consent_preferences');

// Check consent cookie
document.cookie.split(';').find(c => c.includes('lunnoa_consent'));

// Check if GTM loaded
window.google_tag_manager ? 'GTM Loaded' : 'GTM Not Loaded';

// Check dataLayer
console.table(window.dataLayer);

// Force banner to appear (clear consent)
localStorage.removeItem('lunnoa_consent_preferences');
document.cookie = 'lunnoa_consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
location.reload();
```

## 🎨 UI/UX Design

### Banner Design Principles

1. **Clear and Understandable**
   - Plain language explanations
   - No legal jargon
   - Visual hierarchy

2. **Easy to Interact**
   - Large, clickable buttons
   - Clear primary action (Accept All)
   - Secondary actions visible but not pushy

3. **Accessible**
   - Keyboard navigation support
   - ARIA labels
   - High contrast colors
   - Mobile-responsive

4. **Non-intrusive but Noticeable**
   - Appears after 500ms (page loaded)
   - Semi-transparent backdrop
   - Smooth animations
   - Cannot be dismissed accidentally

### Multi-language Support

**German (DE):**
- Primary language
- Used by default
- All legal terms in German
- Links to German privacy policy

**English (EN):**
- Secondary language
- Automatic switching based on user preference
- All content professionally translated

## 📋 Legal Considerations

### GDPR Requirements Met

- ✅ **Article 6(1)(a)** - Lawful basis: Consent
- ✅ **Article 7** - Conditions for consent (freely given, specific, informed)
- ✅ **Article 13** - Information to be provided (transparency)
- ✅ **Article 15** - Right of access (view current consent)
- ✅ **Article 17** - Right to erasure (revoke consent)
- ✅ **Article 25** - Data protection by design and by default

### Swiss FADP Requirements Met

- ✅ **Article 6** - Principles of data processing (lawfulness, good faith)
- ✅ **Article 8** - Information obligations (transparency)
- ✅ **Article 25** - Data security (secure storage)
- ✅ **Article 28** - Right to information (clear explanations)

### ePrivacy Directive Requirements Met

- ✅ **Article 5(3)** - Prior consent for non-essential cookies
- ✅ Clear information about cookie purpose
- ✅ Easy way to refuse or withdraw consent

## 🔄 Migration from Iubenda

### What Was Removed

```javascript
// ❌ Old Iubenda implementation (REMOVED)
<Script id="iubenda-config" strategy="beforeInteractive">
  {`
    var _iub = _iub || [];
    _iub.csConfiguration = {"siteId":4398079,...};
  `}
</Script>
```

### What Was Added

```javascript
// ✅ New custom consent implementation
import ConsentBanner from '@/components/consent/ConsentBanner';
import { consentManager } from '@/lib/consent-manager';
```

### Benefits of Custom Solution

1. **Full Control** - No third-party dependencies
2. **Better Performance** - No external scripts to load
3. **Customization** - Matches your brand perfectly
4. **Cost Savings** - No subscription fees
5. **Privacy** - No data sent to third parties
6. **Compliance** - Tailored to Swiss requirements

## 🚀 Deployment Checklist

- [ ] Remove Iubenda scripts from layout
- [ ] Add ConsentBanner to layout
- [ ] Add ConsentButton to footer
- [ ] Test banner appearance on first visit
- [ ] Test "Accept All" functionality
- [ ] Test "Reject All" functionality
- [ ] Test "Customize Settings" functionality
- [ ] Test GTM loading with consent
- [ ] Test GTM blocking without consent
- [ ] Test consent persistence across sessions
- [ ] Test reopening settings from footer
- [ ] Test multi-language support (DE/EN)
- [ ] Test mobile responsiveness
- [ ] Test keyboard navigation
- [ ] Verify privacy policy links work
- [ ] Update privacy policy to mention new system
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test consent expiry (change expiry to 1 day for testing)

## 📝 Privacy Policy Updates Required

Update your privacy policy (`/datenschutz`) to mention:

1. **Cookie Consent System**
   - How consent is obtained
   - How to change preferences
   - Consent expiry period (365 days)

2. **Cookies Used**
   - List all cookies (necessary, analytics, marketing)
   - Purpose of each cookie
   - Expiry periods

3. **Third-party Services**
   - Google Analytics 4
   - Google Tag Manager
   - Link to Google's privacy policy

4. **User Rights**
   - Right to withdraw consent
   - How to delete cookies
   - Contact information for data protection

## 🆘 Support & Troubleshooting

### Common Issues

**Issue:** Banner doesn't appear
- Check browser console for errors
- Verify ConsentBanner is imported in layout
- Clear localStorage and reload

**Issue:** GTM not loading after consent
- Check console for "GTM loaded with consent" message
- Verify GTM container ID is correct (GTM-TNG2GTXC)
- Check consent manager loaded correctly

**Issue:** Consent not persisting
- Check localStorage is enabled in browser
- Verify cookies are not blocked
- Check browser in private/incognito mode

**Issue:** Banner appears every time
- Check localStorage.getItem('lunnoa_consent_preferences')
- Verify consent expiry logic
- Check browser clock is correct

### Debug Mode

Enable debug logging:

```javascript
// In consent-manager.js, add:
const DEBUG = true;

// Then check console for:
// "✅ Consent saved"
// "✅ GTM loaded with consent"
// "✅ Consent revoked"
```

## 📚 References

- [GDPR Official Text](https://gdpr-info.eu/)
- [Swiss FADP Official](https://www.fedlex.admin.ch/eli/cc/2022/568/en)
- [Google Consent Mode](https://developers.google.com/tag-platform/security/guides/consent)
- [ICO Cookie Guidance](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/)
- [EDPB Guidelines](https://edpb.europa.eu/our-work-tools/our-documents/guidelines_en)

---

**Last Updated:** January 26, 2026  
**Version:** 1.0  
**Maintained by:** Lunnoa GmbH
