'use client';

import { useEffect, useState } from 'react';

import {
  CONSENT_STORAGE_KEY as STORAGE_KEY,
  OPEN_COOKIE_SETTINGS_EVENT as OPEN_EVENT,
} from '@/lib/consent';

type Consent = { essential: true; analytics: boolean; marketing: boolean };

function readStored(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    return raw ? { ...(JSON.parse(raw) as Consent), essential: true } : null;
  } catch {
    return null;
  }
}

function applyConsent(c: Consent) {
  const ad = c.marketing ? 'granted' : 'denied';

  window.gtag?.('consent', 'update', {
    analytics_storage: c.analytics ? 'granted' : 'denied',
    ad_storage: ad,
    ad_user_data: ad,
    ad_personalization: ad,
  });
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<Consent>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = readStored();

    // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage pasiekiamas tik naršyklėje
    if (saved) setConsent(saved);
    else setVisible(true);

    const open = () => {
      const current = readStored();

      if (current) setConsent(current);
      setShowSettings(true);
      setVisible(true);
    };

    window.addEventListener(OPEN_EVENT, open);

    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  const save = (c: Consent) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
    } catch {
      // Naršyklė neleidžia saugoti – sutikimas galios tik šiam apsilankymui
    }
    setConsent(c);
    applyConsent(c);
    setVisible(false);
    setShowSettings(false);
  };

  if (!visible) return null;

  return (
    <div
      aria-label="Slapukų nustatymai"
      aria-live="polite"
      className="fixed inset-x-3 bottom-3 z-50 rounded-2xl border border-line bg-white p-5 shadow-[0_20px_60px_-15px_rgb(15_16_13/0.35)] sm:inset-x-auto sm:left-5 sm:bottom-5 sm:max-w-[420px]"
      role="dialog"
    >
      <p className="font-medium">Slapukai</p>

      {showSettings ? (
        <div className="mt-3 space-y-3">
          <Toggle
            checked
            disabled
            description="Reikalingi svetainės veikimui."
            label="Būtinieji"
          />
          <Toggle
            checked={consent.analytics}
            description="Padeda suprasti, kaip lankytojai naudojasi svetaine."
            label="Analitiniai"
            onChange={(v) => setConsent((c) => ({ ...c, analytics: v }))}
          />
          <Toggle
            checked={consent.marketing}
            description="Leidžia matuoti reklamos efektyvumą."
            label="Rinkodaros"
            onChange={(v) => setConsent((c) => ({ ...c, marketing: v }))}
          />
          <div className="flex flex-wrap gap-2 pt-2">
            <PrimaryButton onClick={() => save(consent)}>Išsaugoti</PrimaryButton>
            <SecondaryButton onClick={() => setShowSettings(false)}>
              Atgal
            </SecondaryButton>
          </div>
        </div>
      ) : (
        <>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            Naudojame slapukus svetainės lankomumui analizuoti ir reklamai
            matuoti. Galite sutikti su visais arba pasirinkti, kuriuos leisti.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <PrimaryButton
              onClick={() =>
                save({ essential: true, analytics: true, marketing: true })
              }
            >
              Priimti visus
            </PrimaryButton>
            <SecondaryButton
              onClick={() =>
                save({ essential: true, analytics: false, marketing: false })
              }
            >
              Tik būtinieji
            </SecondaryButton>
            <button
              className="h-10 px-2 text-sm text-muted underline underline-offset-4 hover:text-ink"
              type="button"
              onClick={() => setShowSettings(true)}
            >
              Nustatymai
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export function CookieSettingsButton() {
  return (
    <button
      className="text-left underline-offset-4 transition-colors hover:text-paper hover:underline"
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
    >
      Slapukų nustatymai
    </button>
  );
}

function PrimaryButton(props: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      className="h-10 rounded-full bg-ink px-5 text-sm font-medium text-paper transition-colors hover:bg-ink-3"
      type="button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

function SecondaryButton(props: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      className="h-10 rounded-full border border-ink/15 px-5 text-sm font-medium transition-colors hover:border-ink/40"
      type="button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

function Toggle({
  label,
  description,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <label
      className={`flex items-start justify-between gap-4 rounded-xl bg-paper px-4 py-3 ${disabled ? 'opacity-70' : 'cursor-pointer'}`}
    >
      <span>
        <span className="block text-sm font-medium">{label}</span>
        <span className="block text-[13px] leading-snug text-muted">
          {description}
        </span>
      </span>
      <input
        checked={checked}
        className="peer sr-only"
        disabled={disabled}
        type="checkbox"
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <span
        aria-hidden
        className="relative mt-0.5 h-6 w-10 shrink-0 rounded-full bg-line transition-colors after:absolute after:top-0.5 after:left-0.5 after:size-5 after:rounded-full after:bg-white after:shadow after:transition-transform peer-checked:bg-ink peer-checked:after:translate-x-4 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink"
      />
    </label>
  );
}
