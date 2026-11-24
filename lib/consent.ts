export const CONSENT_STORAGE_KEY = 'cookieConsent';
export const OPEN_COOKIE_SETTINGS_EVENT = 'open-cookie-settings';

// Consent Mode v2: numatytai viskas uždrausta. Jei lankytojas jau buvo davęs
// sutikimą, jis pritaikomas dar prieš užsikraunant Google Analytics.
export const consentDefaultScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
var s = {};
try { s = JSON.parse(localStorage.getItem('${CONSENT_STORAGE_KEY}')) || {}; } catch (e) {}
var ad = s.marketing ? 'granted' : 'denied';
gtag('consent', 'default', {
  analytics_storage: s.analytics ? 'granted' : 'denied',
  ad_storage: ad,
  ad_user_data: ad,
  ad_personalization: ad
});
`;
