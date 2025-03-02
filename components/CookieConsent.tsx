"use client"
import { useState, useEffect } from 'react';
import { Button, Checkbox, Tooltip } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

type CookieSettings = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

export default function CookieConsent() {
  const t = useTranslations('cookies');
  const [showConsent, setShowConsent] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookieSettings, setCookieSettings] = useState<CookieSettings>({
    essential: true, // Essential cookies are always required
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already provided consent
    const consentGiven = localStorage.getItem('cookieConsent');
    
    if (!consentGiven) {
      setShowConsent(true);
    } else {
      // If consent was already given, load saved preferences
      try {
        const savedSettings = JSON.parse(consentGiven);

        setCookieSettings(savedSettings);
      } catch (error) {
        // If there's an error parsing the stored consent, show the banner again
        setShowConsent(true);
      }
    }
  }, []);

  const acceptAll = () => {
    const settings = {
      essential: true,
      analytics: true,
      marketing: true,
    };

    saveConsent(settings);
  };

  const saveConsent = (settings: CookieSettings) => {
    localStorage.setItem('cookieConsent', JSON.stringify(settings));
    setCookieSettings(settings);
    setShowConsent(false);
    setShowSettings(false);
    
    // Apply analytics based on user consent
    if (settings.analytics) {
      // Enable Google Analytics
      window.gtag?.('consent', 'update', {
        analytics_storage: 'granted',
      });
    } else {
      // Disable Google Analytics
      window.gtag?.('consent', 'update', {
        analytics_storage: 'denied',
      });
    }
    
    // Apply marketing cookies consent
    if (settings.marketing) {
      window.gtag?.('consent', 'update', {
        ad_storage: 'granted',
      });
    } else {
      window.gtag?.('consent', 'update', {
        ad_storage: 'denied',
      });
    }
  };

  const saveCustomSettings = () => {
    saveConsent(cookieSettings);
  };

  const handleSettingChange = (key: keyof CookieSettings) => {
    if (key === 'essential') return; // Can't toggle essential cookies
    
    setCookieSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Nenaudojamos funkcijos pašalintos

  if (!showConsent) {
    // Nesukuriame jokio mygtuko, kai vartotojas jau davė sutikimą
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-md border-t border-divider shadow-lg">
      <div className="container mx-auto max-w-7xl">
        {showSettings ? (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('cookieSettings')}</h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Checkbox 
                  isDisabled={true} 
                  isSelected={cookieSettings.essential}
                >
                  {t('essentialCookies')}
                </Checkbox>
                <Tooltip content={t('essentialCookiesInfo')}>
                  <span className="cursor-help text-xs bg-default-100 px-1 rounded-full">?</span>
                </Tooltip>
              </div>
              
              <div className="flex items-start gap-2">
                <Checkbox 
                  isSelected={cookieSettings.analytics} 
                  onChange={() => handleSettingChange('analytics')}
                >
                  {t('analyticsCookies')}
                </Checkbox>
                <Tooltip content={t('analyticsCookiesInfo')}>
                  <span className="cursor-help text-xs bg-default-100 px-1 rounded-full">?</span>
                </Tooltip>
              </div>
              
              <div className="flex items-start gap-2">
                <Checkbox 
                  isSelected={cookieSettings.marketing} 
                  onChange={() => handleSettingChange('marketing')}
                >
                  {t('marketingCookies')}
                </Checkbox>
                <Tooltip content={t('marketingCookiesInfo')}>
                  <span className="cursor-help text-xs bg-default-100 px-1 rounded-full">?</span>
                </Tooltip>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              <Button color="primary" onPress={saveCustomSettings}>
                {t('savePreferences')}
              </Button>
              <Button variant="flat" onPress={() => setShowSettings(false)}>
                {t('back')}
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">{t('cookieConsentTitle')}</h3>
              <p className="mt-1 text-default-500 max-w-2xl">{t('cookieConsentText')}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button color="primary" onPress={acceptAll}>
                {t('acceptAll')}
              </Button>
              <Button variant="light" onPress={() => saveConsent({ essential: true, analytics: false, marketing: false })}>
                {t('essentialOnly')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}