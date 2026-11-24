import { ButtonLink, Eyebrow } from '@/components/ui';

export function PageHero({
  eyebrow,
  title,
  description,
  price,
  aside,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  price?: string;
  aside?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid-light [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
      />
      <div
        className={`container-x grid gap-14 pt-14 pb-20 md:pt-20 md:pb-28 ${aside ? 'items-center lg:grid-cols-[1.1fr_0.9fr]' : ''}`}
      >
        <div className={aside ? '' : 'max-w-4xl'}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
            {description}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink arrow href="/kontaktai">
              Aptarti projektą
            </ButtonLink>
            {price && (
              <span className="inline-flex h-12 items-center gap-2 rounded-full border border-ink/10 px-5 text-[15px]">
                <span className="text-muted">Kaina</span>
                <span className="font-medium">{price}</span>
              </span>
            )}
          </div>
        </div>
        {aside}
      </div>
    </section>
  );
}

export function FeatureGrid({
  items,
}: {
  items: { icon: React.ComponentType<{ className?: string }>; title: string; text: string }[];
}) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(({ icon: Icon, title, text }) => (
        <li key={title} className="rounded-3xl border border-line bg-white p-6">
          <span className="grid size-11 place-items-center rounded-xl bg-paper">
            <Icon aria-hidden className="size-5" />
          </span>
          <h3 className="mt-8 text-lg font-medium tracking-tight">{title}</h3>
          <p className="mt-2 leading-relaxed text-muted">{text}</p>
        </li>
      ))}
    </ul>
  );
}
