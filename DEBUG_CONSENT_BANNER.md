# Debug: Consent Banner Not Showing

## Quick Fix - Clear Consent

Open your browser console (F12) and run:

```javascript
// Clear all consent data
localStorage.removeItem('lunnoa_consent_preferences');
document.cookie = 'lunnoa_consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

// Reload page
location.reload();
```

After this, the banner should appear within 500ms of page load.

---

## Troubleshooting Steps

### Step 1: Check if Consent Already Exists

Open browser console (F12) and check:

```javascript
// Check localStorage
localStorage.getItem('lunnoa_consent_preferences')
// If this returns a value, consent is already saved

// Check cookie
document.cookie.split(';').find(c => c.includes('lunnoa_consent'))
// If this returns a value, consent cookie exists
```

**If either returns a value:** The banner won't show because you've already consented.

### Step 2: Check for JavaScript Errors

1. Open browser console (F12)
2. Look for any red error messages
3. Common issues:
   - `useLanguage is not defined` - LanguageContext issue
   - `consentManager is not defined` - Import path issue
   - Any React errors

### Step 3: Verify Component is Rendering

In browser console:

```javascript
// Check if component exists in DOM
document.querySelector('[class*="fixed bottom-0"]')
// Should return an element if banner is rendered

// Check React DevTools
// Look for <ConsentBanner> component in tree
```

### Step 4: Force Banner to Show (Debug Mode)

Temporarily modify the component to always show:

In `components/consent/ConsentBanner.jsx`, change:

```jsx
// Line 69 - BEFORE
if (!showBanner) return null;

// TEMPORARILY change to (for testing)
// if (!showBanner) return null; // Disabled for testing
```

This will make the banner always show regardless of consent state.

---

## Common Issues & Solutions

### Issue 1: Banner Not Showing (Most Common)
**Cause:** Consent already stored from previous visit  
**Solution:** Clear localStorage and cookie (see Quick Fix above)

### Issue 2: LanguageContext Error
**Cause:** ConsentBanner trying to use language before context loads  
**Solution:** Wrap in a check:

```jsx
const { language } = useLanguage();
if (!language) return null; // Wait for language to load
```

### Issue 3: Component Not Imported
**Cause:** Import path wrong  
**Solution:** Verify in `app/layout.jsx`:
```jsx
import ConsentBanner from '@/components/consent/ConsentBanner';
```

### Issue 4: CSS z-index Issue
**Cause:** Banner hidden behind other elements  
**Solution:** Check banner has `z-[9999]` class

### Issue 5: Component Not Mounted
**Cause:** React rendering issue  
**Solution:** Add console.log to debug:

```jsx
export default function ConsentBanner() {
  console.log('🍪 ConsentBanner mounted');
  // ... rest of code
```

---

## Testing Checklist

- [ ] Cleared localStorage
- [ ] Cleared cookies
- [ ] Reloaded page
- [ ] No JavaScript errors in console
- [ ] Banner appears within 500ms
- [ ] Banner is at bottom of screen
- [ ] Can scroll page behind banner
- [ ] Buttons are clickable
- [ ] Language matches language selector

---

## Manual Test

1. **Open browser in Incognito/Private mode**
   - This ensures no existing consent

2. **Navigate to localhost**
   - Or your development URL

3. **Wait 500ms**
   - Banner should slide up from bottom

4. **Expected result:**
```
┌──────────────────────────────────────────────┐
│                                              │
│         YOUR WEBSITE CONTENT                 │
│         (you can scroll this)                │
│                                              │
└──────────────────────────────────────────────┘
┌──────────────────────────────────────────────┐
│ 🛡️ Cookie-Einstellungen                     │
├──────────────────────────────────────────────┤
│ Wir verwenden Cookies...                    │
│ 🇨🇭 Schweizer Hosting                       │
│                                              │
│ [Alle akzeptieren] [Ablehnen] [Anpassen]   │
└──────────────────────────────────────────────┘
```

---

## Force Show (Temporary Debug)

Add this to `ConsentBanner.jsx` after line 23:

```jsx
useEffect(() => {
  // TEMPORARY DEBUG - Always show banner
  setShowBanner(true);
}, []);
```

Remember to remove this after debugging!

---

## Quick Console Commands

```javascript
// Check if banner logic is working
import { consentManager } from '@/lib/consent-manager';
consentManager.hasConsent(); // Should return false if banner should show

// Force clear and reload
localStorage.clear();
sessionStorage.clear();
document.cookie.split(";").forEach(c => {
  document.cookie = c.trim().split("=")[0] + 
    '=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/';
});
location.reload();

// Check component state (if using React DevTools)
// Find <ConsentBanner> component
// Check state: showBanner should be true
```

---

## Still Not Working?

1. **Check file exists:**
   ```
   components/consent/ConsentBanner.jsx ✓
   lib/consent-manager.js ✓
   ```

2. **Check imports in layout:**
   ```jsx
   import ConsentBanner from '@/components/consent/ConsentBanner';
   ```

3. **Check component is rendered:**
   ```jsx
   <LanguageProvider>
     <ConsentBanner />  {/* ← Should be here */}
     <Header />
     {children}
     <Footer />
   </LanguageProvider>
   ```

4. **Rebuild:**
   ```bash
   npm run dev
   # or
   rm -rf .next && npm run dev
   ```

---

**Most Common Solution:** Clear localStorage and reload!

```javascript
localStorage.removeItem('lunnoa_consent_preferences');
location.reload();
```
