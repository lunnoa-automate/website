/**
 * Consent Manager
 * Handles cookie consent for GDPR and Swiss FADP compliance
 * 
 * Features:
 * - Stores consent in localStorage and cookie
 * - Blocks tracking scripts until consent is given
 * - Provides methods to check consent status
 * - Integrates with Google Tag Manager
 */

const CONSENT_COOKIE_NAME = 'lunnoa_consent';
const CONSENT_STORAGE_KEY = 'lunnoa_consent_preferences';
const CONSENT_VERSION = '1.0';
const CONSENT_EXPIRY_DAYS = 365;

class ConsentManager {
  constructor() {
    this.gtmLoaded = false;
  }

  /**
   * Check if user has given consent
   * @returns {boolean}
   */
  hasConsent() {
    if (typeof window === 'undefined') return false;
    
    try {
      const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
      if (stored) {
        const consent = JSON.parse(stored);
        // Check if consent is still valid (not expired)
        if (consent.version === CONSENT_VERSION && consent.timestamp) {
          const expiryDate = new Date(consent.timestamp);
          expiryDate.setDate(expiryDate.getDate() + CONSENT_EXPIRY_DAYS);
          return expiryDate > new Date();
        }
      }
    } catch (error) {
      console.error('Error checking consent:', error);
    }
    
    return false;
  }

  /**
   * Get current consent preferences
   * @returns {Object|null}
   */
  getConsent() {
    if (typeof window === 'undefined') return null;
    
    try {
      const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
      if (stored) {
        const consent = JSON.parse(stored);
        return consent.preferences || null;
      }
    } catch (error) {
      console.error('Error getting consent:', error);
    }
    
    return null;
  }

  /**
   * Save consent preferences
   * @param {Object} preferences - Consent preferences object
   */
  saveConsent(preferences) {
    if (typeof window === 'undefined') return;
    
    const consentData = {
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      preferences: preferences,
    };

    try {
      // Save to localStorage
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consentData));

      // Save to cookie (for server-side detection if needed)
      this.setCookie(CONSENT_COOKIE_NAME, JSON.stringify(preferences), CONSENT_EXPIRY_DAYS);

      // Update GTM consent mode
      this.updateGTMConsent(preferences);

      // Track consent event
      this.trackConsentEvent(preferences);
      
      console.log('✅ Consent saved:', preferences);
    } catch (error) {
      console.error('Error saving consent:', error);
    }
  }

  /**
   * Update Google Tag Manager consent mode
   * @param {Object} preferences
   */
  updateGTMConsent(preferences) {
    if (typeof window === 'undefined' || !window.gtag) return;

    window.gtag('consent', 'update', {
      'analytics_storage': preferences.analytics ? 'granted' : 'denied',
      'ad_storage': preferences.marketing ? 'granted' : 'denied',
      'ad_user_data': preferences.marketing ? 'granted' : 'denied',
      'ad_personalization': preferences.marketing ? 'granted' : 'denied',
    });
  }

  /**
   * Initialize GTM with default denied consent
   * This should be called before GTM loads
   */
  initializeGTMConsent() {
    if (typeof window === 'undefined') return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function() {
      window.dataLayer.push(arguments);
    };

    // Set default consent to denied
    window.gtag('consent', 'default', {
      'analytics_storage': 'denied',
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'wait_for_update': 500, // Wait 500ms for consent update
    });

    // Check if user has already consented
    const consent = this.getConsent();
    if (consent && this.hasConsent()) {
      this.updateGTMConsent(consent);
    }
  }

  /**
   * Load Google Tag Manager script
   * Only call this after user has given consent to analytics
   */
  loadGTM() {
    if (typeof window === 'undefined' || this.gtmLoaded) return;

    const gtmId = 'GTM-TNG2GTXC'; // Your GTM container ID
    
    // Load GTM script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);

    this.gtmLoaded = true;
    console.log('✅ GTM loaded with consent');
  }

  /**
   * Revoke consent (for testing or user request)
   */
  revokeConsent() {
    if (typeof window === 'undefined') return;

    try {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
      this.deleteCookie(CONSENT_COOKIE_NAME);
      
      // Update GTM to deny all
      this.updateGTMConsent({
        necessary: true,
        analytics: false,
        marketing: false,
      });

      console.log('✅ Consent revoked');
    } catch (error) {
      console.error('Error revoking consent:', error);
    }
  }

  /**
   * Track consent event to dataLayer
   * @param {Object} preferences
   */
  trackConsentEvent(preferences) {
    if (typeof window === 'undefined') return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'consent_update',
      consent_analytics: preferences.analytics,
      consent_marketing: preferences.marketing,
      consent_version: CONSENT_VERSION,
    });
  }

  /**
   * Set a cookie
   * @param {string} name
   * @param {string} value
   * @param {number} days
   */
  setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax;Secure`;
  }

  /**
   * Get a cookie
   * @param {string} name
   * @returns {string|null}
   */
  getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  /**
   * Delete a cookie
   * @param {string} name
   */
  deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  }

  /**
   * Check if analytics is enabled
   * @returns {boolean}
   */
  hasAnalyticsConsent() {
    const consent = this.getConsent();
    return consent && consent.analytics === true;
  }

  /**
   * Check if marketing is enabled
   * @returns {boolean}
   */
  hasMarketingConsent() {
    const consent = this.getConsent();
    return consent && consent.marketing === true;
  }
}

// Export singleton instance
export const consentManager = new ConsentManager();

// Initialize GTM consent mode on load (must happen before GTM loads)
if (typeof window !== 'undefined') {
  consentManager.initializeGTMConsent();
  
  // Auto-load GTM if user has already given consent
  if (consentManager.hasConsent() && consentManager.hasAnalyticsConsent()) {
    consentManager.loadGTM();
  }
}

export default consentManager;
