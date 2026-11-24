'use client';

import { useState } from 'react';
import { ArrowRight, Check, LoaderCircle } from 'lucide-react';

import { CONTACT } from '@/config/site';

// FormSubmit: AJAX adresas grąžina JSON. Pirmą kartą naudojant naują el. paštą
// FormSubmit atsiunčia aktyvavimo laišką.
const FORM_ACTION = `https://formsubmit.co/ajax/${CONTACT.email}`;

const SERVICES = [
  'Shopify el. parduotuvė',
  'Automatizacija / integracijos',
  'Parduotuvės priežiūra',
  'Reprezentacinė svetainė',
  'Kita',
];

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    setStatus('sending');
    try {
      const res = await fetch(FORM_ACTION, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      const json = await res.json().catch(() => null);

      if (!res.ok || String(json?.success) !== 'true') throw new Error();
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div
        className="flex flex-col items-start rounded-3xl bg-ink p-8 text-paper sm:p-10"
        role="status"
      >
        <span className="grid size-12 place-items-center rounded-full bg-lime text-ink">
          <Check aria-hidden className="size-6" />
        </span>
        <h2 className="mt-8 text-3xl font-semibold tracking-tight">
          Ačiū, žinutę gavome!
        </h2>
        <p className="mt-3 max-w-md leading-relaxed text-paper/65">
          Susisieksime artimiausią darbo dieną. Jei skubu – skambinkite{' '}
          <a className="text-lime underline-offset-4 hover:underline" href={`tel:${CONTACT.phone}`}>
            {CONTACT.phoneDisplay}
          </a>
          .
        </p>
        <button
          className="mt-8 text-sm text-paper/60 underline underline-offset-4 hover:text-paper"
          type="button"
          onClick={() => setStatus('idle')}
        >
          Siųsti dar vieną žinutę
        </button>
      </div>
    );
  }

  return (
    <form
      className="rounded-3xl border border-line bg-white p-6 sm:p-9"
      onSubmit={onSubmit}
    >
      <input name="_subject" type="hidden" value="Nauja užklausa iš tmh.lt" />
      <input name="_template" type="hidden" value="table" />
      <input
        aria-hidden
        autoComplete="off"
        className="hidden"
        name="_honey"
        tabIndex={-1}
        type="text"
      />

      <fieldset>
        <legend className="text-sm font-medium">Kuo galime padėti?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {SERVICES.map((s, i) => (
            <label key={s} className="cursor-pointer">
              <input
                className="peer sr-only"
                defaultChecked={i === 0}
                name="Paslauga"
                type="radio"
                value={s}
              />
              <span className="inline-block rounded-full border border-line px-4 py-2 text-sm transition-colors peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink hover:border-ink/40">
                {s}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field autoComplete="name" label="Vardas" name="Vardas" required />
        <Field
          autoComplete="email"
          label="El. paštas"
          name="email"
          required
          type="email"
        />
        <Field
          autoComplete="tel"
          className="sm:col-span-2"
          label="Telefonas"
          name="Telefonas"
          optional
          type="tel"
        />
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium">Žinutė</span>
          <textarea
            required
            className="mt-2 block min-h-36 w-full resize-y rounded-2xl border border-line bg-paper/50 px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-muted/70 focus:border-ink focus:bg-white"
            name="Žinutė"
            placeholder="Kuo užsiimate ir ko jums reikia…"
          />
        </label>
      </div>

      {status === 'error' && (
        <p className="mt-5 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          Nepavyko išsiųsti žinutės. Bandykite dar kartą arba parašykite tiesiai
          į {CONTACT.email}.
        </p>
      )}

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">Atsakome per vieną darbo dieną.</p>
        <button
          className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-7 text-[15px] font-medium text-paper transition-colors hover:bg-ink-3 disabled:opacity-60"
          disabled={status === 'sending'}
          type="submit"
        >
          {status === 'sending' ? (
            <>
              <LoaderCircle aria-hidden className="size-4 animate-spin" />
              Siunčiama…
            </>
          ) : (
            <>
              Siųsti užklausą
              <ArrowRight
                aria-hidden
                className="size-4 transition-transform group-hover:translate-x-0.5"
              />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  optional,
  autoComplete,
  className = '',
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  autoComplete?: string;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-medium">
        {label}
        {optional && <span className="font-normal text-muted"> (neprivaloma)</span>}
      </span>
      <input
        autoComplete={autoComplete}
        className="mt-2 block h-12 w-full rounded-2xl border border-line bg-paper/50 px-4 text-[15px] outline-none transition-colors focus:border-ink focus:bg-white"
        name={name}
        required={required}
        type={type}
      />
    </label>
  );
}
