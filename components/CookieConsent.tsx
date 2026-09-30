"use client"
import { useState, useEffect } from 'react';
import { Button, Checkbox, Tooltip } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

type CookieSettings = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = 'cookieConsent';

// Įvykis, kuriuo slapukų nustatymus galima atidaryti iš bet kurios vietos (pvz. poraštės)
export const OPEN_COOKIE_SETTINGS_EVENT = 'open-cookie-settings';

const readStoredSettings = (): CookieSettings | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    return stored ? (JSON.parse(stored) as CookieSettings) : null;
  } catch {
    return null;
  }
};

const applyConsent = (settings: CookieSettings) => {
  const ad = settings.marketing ? 'granted' : 'denied';

  window.gtag?.('consent', 'update', {
    analytics_storage: settings.analytics ? 'granted' : 'denied',
    ad_storage: ad,
    ad_user_data: ad,
    ad_personalization: ad,
  });
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
    // Išsaugotas sutikimas pritaikomas jau layout'o consent skripte,
    // čia tik užpildome nustatymų formą arba parodome juostą.
    const saved = readStoredSettings();

    if (saved) {
      setCookieSettings({ ...saved, essential: true });
    } else {
      setShowConsent(true);
    }

    const openSettings = () => {
      setShowConsent(true);
      setShowSettings(true);
    };

    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);

    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
  }, []);

  const saveConsent = (settings: CookieSettings) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // Naršyklė neleidžia saugoti – sutikimas galios tik šiam apsilankymui
    }
    setCookieSettings(settings);
    setShowConsent(false);
    setShowSettings(false);
    applyConsent(settings);
  };

  const handleSettingChange = (key: keyof CookieSettings, value: boolean) => {
    if (key === 'essential') return; // Can't toggle essential cookies

    setCookieSettings((prev) => ({ ...prev, [key]: value }));
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div
      aria-label={t('cookieConsentTitle')}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-md border-t border-divider shadow-lg"
      role="dialog"
    >
      <div className="container mx-auto max-w-7xl">
        {showSettings ? (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('cookieSettings')}</h3>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Checkbox isDisabled isSelected={cookieSettings.essential}>
                  {t('essentialCookies')}
                </Checkbox>
                <Tooltip content={t('essentialCookiesInfo')}>
                  <span className="cursor-help text-xs bg-default-100 px-1 rounded-full">?</span>
                </Tooltip>
              </div>

              <div className="flex items-start gap-2">
                <Checkbox
                  isSelected={cookieSettings.analytics}
                  onValueChange={(v) => handleSettingChange('analytics', v)}
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
                  onValueChange={(v) => handleSettingChange('marketing', v)}
                >
                  {t('marketingCookies')}
                </Checkbox>
                <Tooltip content={t('marketingCookiesInfo')}>
                  <span className="cursor-help text-xs bg-default-100 px-1 rounded-full">?</span>
                </Tooltip>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <Button color="primary" onPress={() => saveConsent(cookieSettings)}>
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
              <Button color="primary" onPress={() => saveConsent({ essential: true, analytics: true, marketing: true })}>
                {t('acceptAll')}
              </Button>
              <Button variant="flat" onPress={() => setShowSettings(true)}>
                {t('customizeSettings')}
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
