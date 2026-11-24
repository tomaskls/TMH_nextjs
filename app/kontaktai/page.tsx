import { Clock, Mail, Phone } from 'lucide-react';

import { ContactForm } from '@/components/ContactForm';
import { Accent, Eyebrow, FacebookIcon, InstagramIcon } from '@/components/ui';
import { CONTACT } from '@/config/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Kontaktai',
  description:
    'Susisiekite dėl Shopify el. parduotuvės, automatizacijos ar svetainės kūrimo telefonu, el. paštu arba užpildę užklausos formą.',
  path: '/kontaktai',
});

export default function ContactPage() {
  return (
    <section className="container-x grid gap-14 pt-14 pb-24 md:pt-20 md:pb-32 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <Eyebrow>Kontaktai</Eyebrow>
        <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1] tracking-[-0.045em] sm:text-6xl">
          Papasakokite apie savo <Accent>projektą</Accent>
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
          Parašykite ar paskambinkite – aptarsime, ko reikia, ir atsiųsime
          pasiūlymą su kaina.
        </p>

        <ul className="mt-12 space-y-3">
          <ContactRow
            href={`tel:${CONTACT.phone}`}
            icon={<Phone aria-hidden className="size-5" />}
            label="Telefonas"
            value={CONTACT.phoneDisplay}
          />
          <ContactRow
            href={`mailto:${CONTACT.email}`}
            icon={<Mail aria-hidden className="size-5" />}
            label="El. paštas"
            value={CONTACT.email}
          />
          <ContactRow
            icon={<Clock aria-hidden className="size-5" />}
            label="Darbo laikas"
            value={CONTACT.hours}
          />
        </ul>

        <div className="mt-8 flex gap-2">
          <a
            aria-label="Facebook"
            className="grid size-11 place-items-center rounded-full border border-line transition-colors hover:border-ink"
            href={CONTACT.facebook}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FacebookIcon className="size-5" />
          </a>
          <a
            aria-label="Instagram"
            className="grid size-11 place-items-center rounded-full border border-line transition-colors hover:border-ink"
            href={CONTACT.instagram}
            rel="noopener noreferrer"
            target="_blank"
          >
            <InstagramIcon className="size-5" />
          </a>
        </div>
      </div>

      <ContactForm />
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-ink text-lime">
        {icon}
      </span>
      <span>
        <span className="block text-sm text-muted">{label}</span>
        <span className="block text-lg font-medium tracking-tight">{value}</span>
      </span>
    </>
  );

  return (
    <li>
      {href ? (
        <a className="flex items-center gap-4 rounded-2xl transition-opacity hover:opacity-70" href={href}>
          {content}
        </a>
      ) : (
        <div className="flex items-center gap-4">{content}</div>
      )}
    </li>
  );
}
