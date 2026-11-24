import type { Metadata } from 'next';

import { Accent, ButtonLink, Eyebrow } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Puslapis nerastas',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-start justify-center py-24">
      <Eyebrow>Klaida 404</Eyebrow>
      <h1 className="mt-6 text-5xl font-semibold tracking-[-0.045em] sm:text-7xl">
        Šio puslapio <Accent>nėra</Accent>
      </h1>
      <p className="mt-6 max-w-md text-lg text-muted">
        Galbūt jis buvo perkeltas arba adresas įvestas su klaida.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink arrow href="/">
          Į pradžią
        </ButtonLink>
        <ButtonLink href="/kontaktai" variant="outline">
          Susisiekti
        </ButtonLink>
      </div>
    </section>
  );
}
