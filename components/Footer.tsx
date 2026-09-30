import React from 'react';
import { useTranslations } from 'next-intl';

import { CookieSettingsButton } from '@/components/CookieSettingsButton';

const Footer = () => {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex items-center justify-center py-3">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-default-500 text-sm">
        <div>
          © {currentYear} <span className="text-fuchsia-500">Tomo</span>rrow&apos;s Media House. {t('rights')}
        </div>
        <CookieSettingsButton label={t('manageCookies')} />
      </div>
    </footer>
  );
};

export default Footer;
