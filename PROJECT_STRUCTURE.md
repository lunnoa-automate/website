# Custom Cookie Consent Banner - Project Structure

## 📁 File Organization

```
website/
│
├── 📄 CONSENT_BANNER_README.md          ← START HERE - Quick overview
├── 📄 IMPLEMENTATION_SUMMARY.md         ← Executive summary
├── 📄 PROJECT_STRUCTURE.md              ← This file
│
├── components/
│   └── consent/                         ← NEW: Consent UI Components
│       ├── ConsentBanner.jsx            ← Main consent banner
│       ├── ConsentSettings.jsx          ← Settings panel
│       └── ConsentButton.jsx            ← Reopen button
│
├── lib/
│   └── consent-manager.js               ← NEW: Core consent logic
│
├── docs/
│   ├── CONSENT_MANAGEMENT.md            ← Technical documentation
│   ├── CONSENT_SETUP_GUIDE.md           ← Testing & setup guide
│   ├── IUBENDA_MIGRATION_CHECKLIST.md   ← Migration checklist
│   └── GTM_CONFIGURATION.md             ← Existing GTM docs
│
├── app/
│   └── layout.jsx                       ← MODIFIED: Added ConsentBanner
│
├── components/sections/
│   └── Footer.jsx                       ← MODIFIED: Added ConsentButton
│
└── tailwind.config.js                   ← MODIFIED: Added animations
```

---

## 🗂️ Component Hierarchy

```
<RootLayout> (app/layout.jsx)
│
├── <ConsentBanner>                      ← Shows on first visit
│   ├── Banner Header (with badge)
│   ├── Description & Information
│   ├── Swiss Compliance Notice
│   ├── Cookie Categories
│   │   ├── Necessary (always on)
│   │   ├── Analytics (toggleable)
│   │   └── Marketing (toggleable)
│   └── Action Buttons
│       ├── Accept All
│       ├── Reject All
│       └── Customize Settings
│
├── <Header>
│   └── ...
│
├── {children}
│   └── ...
│
└── <Footer>
    └── Legal Section
        ├── Impressum
        ├── Datenschutz
        └── <ConsentButton>              ← Reopens settings
            └── <ConsentSettings>        ← Settings modal
```

---

## 🔄 Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                      USER FIRST VISIT                       │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  1. Page Loads                                              │
│     └─ GTM Consent Mode initialized with 'denied'          │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  2. ConsentBanner.jsx                                       │
│     └─ Checks consentManager.hasConsent()                  │
│     └─ No consent? Show banner                             │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  3. User Makes Choice                                       │
│     ├─ Accept All → { analytics: true, marketing: true }   │
│     ├─ Reject All → { analytics: false, marketing: false } │
│     └─ Customize  → User selects preferences               │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  4. consent-manager.js                                      │
│     ├─ Saves to localStorage                               │
│     ├─ Saves to cookie                                     │
│     ├─ Updates GTM Consent Mode                            │
│     └─ Loads GTM if analytics enabled                      │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  5. Google Tag Manager                                      │
│     └─ If consent given → Load & start tracking            │
│     └─ If no consent → Remain blocked                      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   SUBSEQUENT VISITS                         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  1. Page Loads                                              │
│     └─ consentManager.initializeGTMConsent()               │
│     └─ Checks localStorage for existing consent            │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  2. Consent Found & Valid?                                  │
│     ├─ YES → Apply preferences automatically               │
│     │         └─ Load GTM if analytics enabled              │
│     │         └─ No banner shown                            │
│     │                                                        │
│     └─ NO  → Show ConsentBanner again                      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                 CHANGING PREFERENCES                        │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  1. User clicks "Cookie-Einstellungen" in Footer           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  2. ConsentButton opens ConsentSettings                     │
│     └─ Loads current preferences                           │
│     └─ Shows toggle switches                               │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  3. User changes preferences & clicks Save                  │
│     └─ consent-manager.saveConsent(newPreferences)         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  4. Page reloads automatically                              │
│     └─ New preferences applied                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 💾 Storage Structure

### localStorage
```javascript
Key: "lunnoa_consent_preferences"
Value: {
  "version": "1.0",
  "timestamp": "2026-01-26T12:00:00.000Z",
  "preferences": {
    "necessary": true,
    "analytics": true,
    "marketing": false
  }
}
```

### Cookie
```javascript
Name: "lunnoa_consent"
Value: {"necessary":true,"analytics":true,"marketing":false}
Attributes: {
  SameSite: "Lax",
  Secure: true,
  Path: "/",
  MaxAge: 31536000 // 365 days
}
```

### dataLayer (GTM)
```javascript
[
  {
    event: "consent_update",
    consent_analytics: true,
    consent_marketing: false,
    consent_version: "1.0"
  }
]
```

---

## 🎨 UI/UX Flow

### First Visit - Banner Appears

```
┌─────────────────────────────────────────────────────────────┐
│  🛡️  Wir respektieren Ihre Privatsphäre                     │
│     Cookie  GDPR & FADP Compliant                           │
│─────────────────────────────────────────────────────────────│
│  Wir verwenden Cookies und ähnliche Technologien, um Ihre  │
│  Erfahrung zu verbessern...                                 │
│                                                             │
│  🛡️ Diese Website ist in der Schweiz gehostet...           │
│                                                             │
│  ▼ Details anzeigen                                         │
│                                                             │
│  Weitere Informationen: Datenschutzerklärung               │
│─────────────────────────────────────────────────────────────│
│  [ Alle akzeptieren ]  [ Alle ablehnen ]  [ Anpassen ]    │
└─────────────────────────────────────────────────────────────┘
```

### Customize Settings View

```
┌─────────────────────────────────────────────────────────────┐
│  🛡️  Wir respektieren Ihre Privatsphäre                     │
│─────────────────────────────────────────────────────────────│
│  ┌─────────────────────────────────────────────────────────┐│
│  │ ✅ Notwendige Cookies             [Immer aktiv]        ││
│  │ Diese Cookies sind erforderlich...                     ││
│  └─────────────────────────────────────────────────────────┘│
│                                                             │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ 📊 Analyse-Cookies                [🔘────── ON]        ││
│  │ Diese Cookies helfen uns...                            ││
│  │ Cookies: _ga, _ga_*, _gid                              ││
│  └─────────────────────────────────────────────────────────┘│
│                                                             │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ 📢 Marketing-Cookies              [──────🔘 OFF]       ││
│  │ Diese Cookies werden verwendet...                      ││
│  │ Cookies: Keine                                         ││
│  └─────────────────────────────────────────────────────────┘│
│─────────────────────────────────────────────────────────────│
│  [ Einstellungen speichern ]  [ Zurück ]                   │
└─────────────────────────────────────────────────────────────┘
```

### Footer Link

```
Footer
├── Navigation
├── Product
├── Legal
│   ├── Impressum
│   ├── Datenschutz
│   └── Cookie-Einstellungen  ← Click to reopen
└── Contact
```

---

## 🔌 API Reference

### consentManager Methods

```javascript
import { consentManager } from '@/lib/consent-manager';

// ─── Check Consent Status ─────────────────────────────────
consentManager.hasConsent()
// Returns: boolean
// Description: Check if user has given any consent

consentManager.getConsent()
// Returns: { necessary: boolean, analytics: boolean, marketing: boolean } | null
// Description: Get current consent preferences

consentManager.hasAnalyticsConsent()
// Returns: boolean
// Description: Check if analytics is enabled

consentManager.hasMarketingConsent()
// Returns: boolean
// Description: Check if marketing is enabled

// ─── Manage Consent ───────────────────────────────────────
consentManager.saveConsent(preferences)
// Parameters: { necessary, analytics, marketing }
// Description: Save user consent preferences

consentManager.revokeConsent()
// Description: Clear all consent (for testing)

// ─── GTM Management ───────────────────────────────────────
consentManager.loadGTM()
// Description: Manually load Google Tag Manager

consentManager.updateGTMConsent(preferences)
// Description: Update GTM Consent Mode

consentManager.initializeGTMConsent()
// Description: Initialize GTM with default 'denied' state
```

---

## 🧪 Testing Scenarios

### Scenario 1: Accept All
```
1. Clear localStorage
2. Reload page
3. Click "Alle akzeptieren"
4. ✅ Banner closes
5. ✅ GTM loads
6. ✅ _ga cookies set
7. ✅ Tracking events fire
```

### Scenario 2: Reject All
```
1. Clear localStorage
2. Reload page
3. Click "Alle ablehnen"
4. ✅ Banner closes
5. ❌ GTM does NOT load
6. ❌ No _ga cookies
7. ❌ No tracking events
```

### Scenario 3: Customize
```
1. Clear localStorage
2. Reload page
3. Click "Einstellungen anpassen"
4. Toggle Analytics ON
5. Click "Einstellungen speichern"
6. ✅ Banner closes
7. ✅ GTM loads (analytics enabled)
8. ✅ _ga cookies set
```

### Scenario 4: Reopen Settings
```
1. Scroll to footer
2. Click "Cookie-Einstellungen"
3. Settings panel opens
4. Toggle Analytics OFF
5. Click "Einstellungen speichern"
6. ✅ Page reloads
7. ❌ GTM blocked
8. ❌ _ga cookies cleared
```

---

## 📚 Documentation Map

```
📄 Quick Start
├─ CONSENT_BANNER_README.md        ← Read this first
└─ IMPLEMENTATION_SUMMARY.md       ← Executive summary

📖 Detailed Documentation
├─ docs/CONSENT_MANAGEMENT.md      ← Technical docs
├─ docs/CONSENT_SETUP_GUIDE.md     ← Testing guide
└─ docs/IUBENDA_MIGRATION_CHECKLIST.md  ← Migration steps

🗺️ Reference
├─ PROJECT_STRUCTURE.md            ← This file
└─ docs/GTM_CONFIGURATION.md       ← GTM setup (existing)
```

---

## 🎯 Quick Commands

### Clear Consent (Testing)
```javascript
localStorage.removeItem('lunnoa_consent_preferences');
document.cookie = 'lunnoa_consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
location.reload();
```

### Check Consent Status
```javascript
localStorage.getItem('lunnoa_consent_preferences')
```

### Check GTM Status
```javascript
window.google_tag_manager ? 'Loaded' : 'Not Loaded'
```

### View DataLayer
```javascript
console.table(window.dataLayer)
```

---

## 🚀 Deployment Checklist

### Pre-deployment
- [ ] Read all documentation
- [ ] Complete local testing
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Update privacy policy

### Deployment
- [ ] Deploy to production
- [ ] Verify banner appears
- [ ] Test consent flow
- [ ] Monitor for errors
- [ ] Check analytics data

### Post-deployment
- [ ] Monitor for 24 hours
- [ ] Review consent rates
- [ ] Cancel Iubenda subscription
- [ ] Update team documentation

---

**Visual representation of your new consent management system.**

For detailed information, refer to the comprehensive documentation files listed above.

---

**Last Updated:** January 26, 2026  
**Version:** 1.0
