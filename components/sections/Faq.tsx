import { Plus } from 'lucide-react';

export type FaqItem = { q: string; a: string };

export function Faq({ items }: { items: FaqItem[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-medium tracking-tight [&::-webkit-details-marker]:hidden">
            {item.q}
            <span className="grid size-8 shrink-0 place-items-center rounded-full border border-line transition-transform duration-300 group-open:rotate-45 group-open:border-ink group-open:bg-ink group-open:text-lime">
              <Plus aria-hidden className="size-4" />
            </span>
          </summary>
          <p className="max-w-3xl pb-6 leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />
    </div>
  );
}
