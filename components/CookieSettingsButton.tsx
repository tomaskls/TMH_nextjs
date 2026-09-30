'use client';

import { OPEN_COOKIE_SETTINGS_EVENT } from '@/components/CookieConsent';

export const CookieSettingsButton = ({ label }: { label: string }) => (
  <button
    className="underline underline-offset-2 hover:text-foreground transition-colors"
    type="button"
    onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
  >
    {label}
  </button>
);
