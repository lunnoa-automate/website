# Iubenda → Custom Consent Banner Migration Checklist

## 📋 Pre-Migration Checklist

### Documentation Review
- [ ] Read `CONSENT_BANNER_README.md` - Overview
- [ ] Read `docs/CONSENT_MANAGEMENT.md` - Technical details
- [ ] Read `docs/CONSENT_SETUP_GUIDE.md` - Testing guide
- [ ] Understand how the new system works
- [ ] Review consent categories and cookie list

### Backup & Preparation
- [ ] Backup current website codebase
- [ ] Export Iubenda consent statistics (if needed)
- [ ] Document current Iubenda configuration
- [ ] Take screenshots of current consent banner
- [ ] Note down current cookie list
- [ ] Save Iubenda privacy policy content

### Testing Environment
- [ ] Set up local development environment
- [ ] Install dependencies (`npm install`)
- [ ] Test current website locally
- [ ] Verify GTM is working

## 🔄 Migration Steps

### Step 1: Code Changes (Already Complete ✅)

The following changes have been made to your codebase:

#### Files Added
- [x] `components/consent/ConsentBanner.jsx`
- [x] `components/consent/ConsentSettings.jsx`
- [x] `components/consent/ConsentButton.jsx`
- [x] `lib/consent-manager.js`
- [x] `docs/CONSENT_MANAGEMENT.md`
- [x] `docs/CONSENT_SETUP_GUIDE.md`
- [x] `CONSENT_BANNER_README.md`

#### Files Modified
- [x] `app/layout.jsx` - Removed Iubenda, added ConsentBanner
- [x] `components/sections/Footer.jsx` - Added ConsentButton
- [x] `tailwind.config.js` - Added animations

### Step 2: Local Testing

#### Clear Browser State
```javascript
// In browser console (F12)
localStorage.clear();
document.cookie.split(";").forEach(c => {
  document.cookie = c.trim().split("=")[0] + 
    '=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/';
});
location.reload();
```

#### Test Scenarios
- [ ] **First Visit Test**
  - [ ] Banner appears after 500ms
  - [ ] No GTM tracking before consent
  - [ ] No `_ga` cookies before consent

- [ ] **Accept All Test**
  - [ ] Banner closes on click
  - [ ] GTM loads
  - [ ] `_ga` cookies set
  - [ ] Tracking events fire
  - [ ] Console shows "✅ GTM loaded with consent"

- [ ] **Reject All Test**
  - [ ] Banner closes on click
  - [ ] GTM does NOT load
  - [ ] Only `lunnoa_consent` cookie set
  - [ ] No tracking events

- [ ] **Customize Settings Test**
  - [ ] Settings panel opens
  - [ ] Toggle switches work
  - [ ] Necessary cookies cannot be disabled
  - [ ] Analytics can be toggled
  - [ ] Marketing can be toggled
  - [ ] Preferences save correctly

- [ ] **Persistence Test**
  - [ ] Reload page - banner doesn't reappear
  - [ ] Close browser and reopen - consent persists
  - [ ] Open in new tab - consent persists
  - [ ] Check localStorage has consent data

- [ ] **Settings Reopen Test**
  - [ ] Click "Cookie-Einstellungen" in footer
  - [ ] Settings panel opens
  - [ ] Current preferences displayed
  - [ ] Can change preferences
  - [ ] Page reloads after save
  - [ ] New preferences applied

- [ ] **Multi-language Test**
  - [ ] Banner text in German by default
  - [ ] Switch to English - text updates
  - [ ] All UI elements translated
  - [ ] Privacy policy links correct

- [ ] **Mobile Test**
  - [ ] Banner responsive on mobile
  - [ ] Buttons accessible on touchscreen
  - [ ] No layout issues on small screens
  - [ ] Settings panel scrollable

### Step 3: GTM Configuration Verification

#### In Google Tag Manager
- [ ] Open GTM workspace
- [ ] Verify Consent Mode is supported
- [ ] Check tags have Consent Mode settings configured
- [ ] Test in GTM Preview Mode:
  - [ ] Without consent - tags blocked
  - [ ] With consent - tags fire
  - [ ] Consent events tracked in dataLayer

#### GTM Preview Mode Tests
```
1. Open GTM Preview Mode
2. Connect to localhost
3. Test consent scenarios:
   - No consent → Verify tags blocked
   - Accept All → Verify tags fire
   - Reject All → Verify tags blocked
4. Check dataLayer events:
   - consent_update event present
   - Correct consent parameters
```

### Step 4: Update Privacy Policy

#### Required Updates to `/datenschutz`
- [ ] **Remove Iubenda references**
  - [ ] Remove Iubenda cookie policy link
  - [ ] Remove Iubenda privacy policy widget
  - [ ] Remove Iubenda branding

- [ ] **Add Custom Consent System Info**
  - [ ] Explain cookie consent system
  - [ ] List all cookies used (necessary, analytics, marketing)
  - [ ] Explain how to manage consent
  - [ ] Mention consent expiry (365 days)
  - [ ] Explain how to delete cookies

- [ ] **Update Cookie List**
  ```
  Necessary Cookies:
  - lunnoa_consent (365 days)
  - lunnoa_consent_preferences (365 days)
  
  Analytics Cookies (with consent):
  - _ga (2 years) - Google Analytics
  - _ga_* (2 years) - Google Analytics
  - _gid (24 hours) - Google Analytics
  ```

- [ ] **Update Data Processing Info**
  - [ ] Mention Google Analytics 4
  - [ ] Link to Google's privacy policy
  - [ ] Explain data collected (anonymized)
  - [ ] Mention IP anonymization

- [ ] **User Rights Section**
  - [ ] How to view consent
  - [ ] How to change consent
  - [ ] How to withdraw consent
  - [ ] How to delete cookies
  - [ ] Contact for data protection questions

### Step 5: Cross-browser Testing

Test on all major browsers:

#### Desktop Browsers
- [ ] **Chrome (Windows)**
  - [ ] Banner displays correctly
  - [ ] All interactions work
  - [ ] Consent persists

- [ ] **Chrome (macOS)**
  - [ ] Banner displays correctly
  - [ ] All interactions work
  - [ ] Consent persists

- [ ] **Firefox (Windows/macOS)**
  - [ ] Banner displays correctly
  - [ ] All interactions work
  - [ ] Consent persists

- [ ] **Safari (macOS)**
  - [ ] Banner displays correctly
  - [ ] All interactions work
  - [ ] Consent persists
  - [ ] Check localStorage not blocked

- [ ] **Edge (Windows)**
  - [ ] Banner displays correctly
  - [ ] All interactions work
  - [ ] Consent persists

#### Mobile Browsers
- [ ] **Safari (iOS)**
  - [ ] Banner displays correctly
  - [ ] Touch interactions work
  - [ ] Responsive layout
  - [ ] Consent persists

- [ ] **Chrome (Android)**
  - [ ] Banner displays correctly
  - [ ] Touch interactions work
  - [ ] Responsive layout
  - [ ] Consent persists

- [ ] **Samsung Internet**
  - [ ] Banner displays correctly
  - [ ] Touch interactions work
  - [ ] Consent persists

### Step 6: Analytics Setup

#### Google Analytics 4
- [ ] Verify GA4 property connected to GTM
- [ ] Enable DebugView in GA4
- [ ] Test events appearing in DebugView
- [ ] Create custom event - `consent_update`
- [ ] Create exploration report for consent metrics

#### Consent Metrics to Track
- [ ] **Consent acceptance rate**
  - Total "Accept All" / Total banner impressions

- [ ] **Consent rejection rate**
  - Total "Reject All" / Total banner impressions

- [ ] **Customization rate**
  - Total "Customize" / Total banner impressions

- [ ] **Settings reopened rate**
  - Footer clicks / Total visitors

- [ ] **Time to consent**
  - Average time from banner display to decision

## 🚀 Deployment Checklist

### Pre-deployment
- [ ] All local tests passed
- [ ] All browsers tested
- [ ] Privacy policy updated
- [ ] GTM configured and tested
- [ ] Analytics tracking verified
- [ ] Documentation reviewed
- [ ] Team briefed on changes

### Staging Deployment (if available)
- [ ] Deploy to staging environment
- [ ] Test on staging URL
- [ ] Verify GTM loads correctly
- [ ] Test consent flow end-to-end
- [ ] Check analytics data flowing
- [ ] Test from different locations (VPN)
- [ ] Get team approval

### Production Deployment
- [ ] Deploy to production
- [ ] Verify website loads correctly
- [ ] Test consent banner immediately
- [ ] Check GTM in production
- [ ] Monitor browser console for errors
- [ ] Monitor analytics for consent events
- [ ] Test from different devices/locations

### Post-deployment Monitoring (First 24 Hours)
- [ ] Monitor consent acceptance rates
- [ ] Check for JavaScript errors
- [ ] Verify analytics data flowing
- [ ] Monitor page load performance
- [ ] Check user feedback/support tickets
- [ ] Verify mobile experience
- [ ] Test from different countries

### Post-deployment Monitoring (First Week)
- [ ] Review consent acceptance trends
- [ ] Analyze consent by:
  - [ ] Geography
  - [ ] Device type
  - [ ] Browser
  - [ ] Language
- [ ] Check for any issues reported
- [ ] Optimize banner if needed
- [ ] Review analytics data quality

## 📊 Success Metrics

Define success criteria:

### Technical Metrics
- [ ] **Banner Load Time** < 100ms
- [ ] **No JavaScript Errors** in console
- [ ] **GTM Loads** only after consent
- [ ] **Consent Persists** across sessions
- [ ] **Mobile Performance** same as desktop

### User Metrics
- [ ] **Consent Acceptance Rate** > 60%
- [ ] **Time to Consent** < 30 seconds
- [ ] **Bounce Rate** no increase
- [ ] **Page Load Time** no significant increase

### Compliance Metrics
- [ ] **No Tracking Before Consent** - verified
- [ ] **Consent Logged** in localStorage + cookie
- [ ] **Easy Withdrawal** - verified in testing
- [ ] **Clear Information** - verified in user testing

## 🔧 Rollback Plan

If issues occur after deployment:

### Immediate Issues (Site Breaking)
1. **Revert deployment** to previous version
2. **Restore Iubenda** temporarily
3. **Investigate issue** in local environment
4. **Fix and retest** before redeploying

### Non-critical Issues
1. **Document the issue** with screenshots
2. **Create fix** in local environment
3. **Test thoroughly**
4. **Deploy patch**

### Rollback Steps
```bash
# If using Git
git revert HEAD
git push origin main

# Or restore from backup
# Follow your deployment process
```

## ✅ Post-Migration Tasks

### Week 1
- [ ] Monitor consent rates daily
- [ ] Check analytics data quality
- [ ] Review any user feedback
- [ ] Fix any minor issues
- [ ] Optimize banner text if needed

### Week 2-4
- [ ] Analyze consent trends
- [ ] A/B test banner text (optional)
- [ ] Optimize consent acceptance rate
- [ ] Update documentation if needed
- [ ] Train support team on new system

### Month 2-3
- [ ] Review long-term consent patterns
- [ ] Analyze impact on analytics data
- [ ] Consider additional consent categories
- [ ] Plan for any improvements

### Ongoing
- [ ] Monitor consent compliance
- [ ] Update for regulation changes
- [ ] Review and optimize quarterly
- [ ] Keep documentation updated

## 🎯 Final Verification

Before considering migration complete:

- [ ] **All tests passed** ✅
- [ ] **Privacy policy updated** ✅
- [ ] **Production deployment successful** ✅
- [ ] **Analytics tracking correctly** ✅
- [ ] **No errors in console** ✅
- [ ] **Mobile experience verified** ✅
- [ ] **Team trained** ✅
- [ ] **Documentation complete** ✅
- [ ] **Iubenda subscription cancelled** ✅

## 📞 Support Contacts

If you encounter issues:

### Technical Support
- Check `docs/CONSENT_SETUP_GUIDE.md` - Troubleshooting section
- Review browser console for errors
- Test in incognito/private mode
- Clear all cookies and localStorage

### Legal/Compliance Questions
- Review `docs/CONSENT_MANAGEMENT.md` - Compliance section
- Consult with legal team if needed
- Check GDPR guidelines: https://gdpr-info.eu/
- Check Swiss FADP: https://www.edoeb.admin.ch/

## 🎉 Migration Complete!

Once all checklist items are complete:

✅ **Iubenda Removed**  
✅ **Custom Consent Banner Live**  
✅ **EU & Swiss Compliant**  
✅ **Analytics Tracking Correctly**  
✅ **Documentation Complete**  
✅ **Team Trained**  

**Status: Production Ready** 🚀

---

**Last Updated:** January 26, 2026  
**Version:** 1.0  
**Next Review:** 3 months after deployment
