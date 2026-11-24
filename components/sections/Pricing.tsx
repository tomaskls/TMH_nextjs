import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { ButtonLink, Check } from '@/components/ui';
import { PRICING } from '@/config/pricing';

type Plan = (typeof PRICING)[keyof typeof PRICING];

export function PricingCards() {
  return (
    <div>
      <div className="grid gap-4 lg:grid-cols-3">
        <PlanCard plan={PRICING.website} />
        <PlanCard featured plan={PRICING.shopify} />
        <PlanCard plan={PRICING.maintenance} />
      </div>

      <div className="mt-4 flex flex-col gap-5 rounded-3xl border border-line bg-white/60 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <p className="text-lg font-medium tracking-tight">
            Automatizacija ir integracijos
          </p>
          <p className="mt-1 max-w-2xl text-muted">
            Kaina priklauso nuo sistemų ir darbų apimties.
          </p>
        </div>
        <ButtonLink arrow className="shrink-0" href="/kontaktai" variant="outline">
          Gauti įvertinimą
        </ButtonLink>
      </div>

      <p className="mt-6 text-sm text-muted">
        Tikslią kainą pasakome aptarę visus jūsų poreikius.
        Shopify planas ir programėlės mokamos atskirai, tiesiogiai Shopify.
      </p>
    </div>
  );
}

function PlanCard({ plan, featured = false }: { plan: Plan; featured?: boolean }) {
  return (
    <div
      className={`relative flex flex-col rounded-3xl p-7 sm:p-8 ${featured ? 'bg-ink text-paper' : 'border border-line bg-white'}`}
    >
      {featured && (
        <span className="absolute -top-3 left-7 rounded-full bg-lime px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-ink sm:left-8">
          Pagrindinė paslauga
        </span>
      )}
      <h3 className={`text-lg font-medium ${featured ? 'text-paper' : ''}`}>
        {plan.title}
      </h3>
      <p className="mt-6 flex items-baseline gap-2">
        <span className="text-4xl font-semibold tracking-[-0.03em]">
          {plan.price}
        </span>
        <span className={featured ? 'text-paper/55' : 'text-muted'}>
          {plan.note}
        </span>
      </p>
      <ul className="mt-7 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-3 text-[15px] leading-snug">
            <Check dark={featured} />
            <span className={featured ? 'text-paper/85' : ''}>{f}</span>
          </li>
        ))}
      </ul>
      <Link
        className={`group mt-8 inline-flex items-center gap-2 text-[15px] font-medium ${featured ? 'text-lime' : 'text-ink'}`}
        href={plan.href}
      >
        Plačiau
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform group-hover:translate-x-0.5"
        />
      </Link>
    </div>
  );
}
