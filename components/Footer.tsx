import Link from 'next/link';

import { CookieSettingsButton } from '@/components/CookieConsent';
import { Logo } from '@/components/Logo';
import { FacebookIcon, InstagramIcon } from '@/components/ui';
import { CONTACT, SITE_NAME } from '@/config/site';

const SERVICES = [
  { label: 'Shopify el. parduotuvių kūrimas', href: '/shopify-el-parduotuves' },
  { label: 'Shopify automatizacija', href: '/shopify-automatizacija' },
  { label: 'Parduotuvių priežiūra', href: '/shopify-el-parduotuves#prieziura' },
  { label: 'Reprezentacinės svetainės', href: '/svetainiu-kurimas' },
];

const COMPANY = [
  { label: 'Darbai', href: '/#darbai' },
  { label: 'Kainos', href: '/#kainos' },
  { label: 'Kaip dirbame', href: '/#procesas' },
  { label: 'Kontaktai', href: '/kontaktai' },
];

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-x grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <Logo dark />
          <p className="mt-6 max-w-sm leading-relaxed text-paper/60">
            Kuriame Shopify el. parduotuves, automatizuojame užsakymų vykdymą ir
            kuriame reprezentacines svetaines verslui.
          </p>
          <div className="mt-6 flex gap-2">
            <a
              aria-label="Facebook"
              className="grid size-10 place-items-center rounded-full border border-white/15 text-paper/80 transition-colors hover:border-white/40 hover:text-paper"
              href={CONTACT.facebook}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FacebookIcon className="size-[18px]" />
            </a>
            <a
              aria-label="Instagram"
              className="grid size-10 place-items-center rounded-full border border-white/15 text-paper/80 transition-colors hover:border-white/40 hover:text-paper"
              href={CONTACT.instagram}
              rel="noopener noreferrer"
              target="_blank"
            >
              <InstagramIcon className="size-[18px]" />
            </a>
          </div>
        </div>

        <FooterColumn className="md:col-span-3" items={SERVICES} title="Paslaugos" />
        <FooterColumn className="md:col-span-2" items={COMPANY} title="Daugiau" />

        <div className="md:col-span-3">
          <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-paper/45">
            Kontaktai
          </h3>
          <ul className="mt-5 space-y-3">
            <li>
              <a
                className="text-paper/85 transition-colors hover:text-lime"
                href={`tel:${CONTACT.phone}`}
              >
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                className="text-paper/85 transition-colors hover:text-lime"
                href={`mailto:${CONTACT.email}`}
              >
                {CONTACT.email}
              </a>
            </li>
            <li className="text-paper/50">{CONTACT.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-sm text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {SITE_NAME}</p>
          <CookieSettingsButton />
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
  className,
}: {
  className: string;
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className={className}>
      <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-paper/45">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              className="text-paper/85 transition-colors hover:text-lime"
              href={item.href}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
