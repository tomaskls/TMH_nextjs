'use client';

import { useEffect, useState } from 'react';
import {
  Check,
  FileCheck2,
  LoaderCircle,
  Mail,
  Send,
  ShoppingBag,
  Split,
  Tag,
} from 'lucide-react';

const STEPS = [
  { icon: ShoppingBag, title: 'Gautas užsakymas', meta: '2 prekės · 46,80 €' },
  { icon: Split, title: 'Prekės priskirtos tiekėjui', meta: 'pagal likučius' },
  { icon: Send, title: 'Užsakymas perduotas tiekėjui', meta: 'per B2B sistemą' },
  { icon: Tag, title: 'Sukurtas siuntos lipdukas', meta: 'paštomatas · PDF' },
  { icon: Mail, title: 'Pirkėjui išsiųstas sekimas', meta: 'el. laiškas' },
  { icon: FileCheck2, title: 'Pardavimas perkeltas į apskaitą', meta: 'sąskaita' },
] as const;

const STEP_MS = 1100;
const HOLD_MS = 2600;

export function AutomationFlow() {
  // step = kiek žingsnių jau atlikta; STEPS.length – viskas atlikta
  const [step, setStep] = useState(0);
  const [order, setOrder] = useState(10482);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- naršyklės nustatymas žinomas tik kliente
      setStep(STEPS.length);

      return;
    }

    let timer: ReturnType<typeof setTimeout>;
    let current = 0;

    const tick = () => {
      if (current < STEPS.length) {
        current += 1;
        setStep(current);
        timer = setTimeout(tick, current === STEPS.length ? HOLD_MS : STEP_MS);
      } else {
        current = 0;
        setStep(0);
        setOrder((o) => o + 1);
        timer = setTimeout(tick, 700);
      }
    };

    timer = setTimeout(tick, 900);

    return () => clearTimeout(timer);
  }, []);

  const done = step >= STEPS.length;

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-4 -z-10 rounded-[2.25rem] bg-lime/30 blur-3xl"
      />
      <figure
        aria-label="Automatizuoto užsakymo pavyzdys"
        className="rounded-[1.75rem] border border-white/10 bg-ink p-5 text-paper shadow-[0_40px_80px_-30px_rgb(15_16_13/0.6)] sm:p-6"
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/45">
              Shopify užsakymas
            </p>
            <p className="mt-1 text-lg font-medium tabular-nums">#{order}</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-paper/80">
            <span className="size-1.5 animate-pulse-dot rounded-full bg-lime" />
            Automatizuota
          </span>
        </div>

        <ol className="mt-5 space-y-1.5">
          {STEPS.map((s, i) => {
            const state = i < step ? 'done' : i === step ? 'active' : 'pending';
            const Icon = s.icon;

            return (
              <li
                key={s.title}
                className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-all duration-500 ${state === 'active' ? 'bg-white/[0.07]' : ''} ${state === 'pending' ? 'opacity-40' : 'opacity-100'}`}
              >
                <span
                  className={`grid size-9 shrink-0 place-items-center rounded-xl transition-colors duration-500 ${state === 'done' ? 'bg-lime text-ink' : 'bg-white/[0.08] text-paper/80'}`}
                >
                  <Icon aria-hidden className="size-[18px]" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[14px] font-medium">
                    {s.title}
                  </span>
                  <span className="block truncate text-xs text-paper/45">
                    {s.meta}
                  </span>
                </span>
                <span className="w-5 shrink-0 text-right">
                  {state === 'done' && (
                    <Check aria-label="Atlikta" className="size-4 text-lime" />
                  )}
                  {state === 'active' && (
                    <LoaderCircle
                      aria-label="Vykdoma"
                      className="size-4 animate-spin text-paper/60"
                    />
                  )}
                </span>
              </li>
            );
          })}
        </ol>

        <div className="mt-5 border-t border-white/10 pt-4">
          <div className="h-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-lime transition-[width] duration-700 ease-out"
              style={{ width: `${(step / STEPS.length) * 100}%` }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-paper/55">
            <span>{done ? 'Užsakymas įvykdytas' : 'Vykdoma automatiškai…'}</span>
            <span className="font-mono">rankinio darbo: 0 min</span>
          </div>
        </div>
      </figure>
    </div>
  );
}
