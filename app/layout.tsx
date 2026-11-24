import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

import './globals.css';

import CookieConsent from '@/components/CookieConsent';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { CONTACT, GA_ID, SITE_NAME, SITE_URL } from '@/config/site';
import { consentDefaultScript } from '@/lib/consent';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin', 'latin-ext'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin', 'latin-ext'],
});

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  style: 'italic',
});

const DEFAULT_TITLE = 'Shopify el. parduotuvių kūrimas ir automatizacija';
const DEFAULT_DESCRIPTION =
  'Kuriame Shopify el. parduotuves, automatizuojame užsakymus, likučius ir apskaitą, prižiūrime parduotuves ir kuriame reprezentacines svetaines verslui.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${DEFAULT_TITLE} | TMH`, template: '%s | TMH' },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: 'website',
    locale: 'lt_LT',
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: '/',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  themeColor: '#f4f3ee',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  alternateName: 'TMH',
  url: SITE_URL,
  image: `${SITE_URL}/og.png`,
  email: CONTACT.email,
  telephone: CONTACT.phone,
  areaServed: 'LT',
  knowsLanguage: 'lt',
  description: DEFAULT_DESCRIPTION,
  sameAs: [CONTACT.facebook, CONTACT.instagram],
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
      data-scroll-behavior="smooth"
      lang="lt"
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: consentDefaultScript }} />
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
          type="application/ld+json"
        />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          className="sr-only z-50 rounded-full bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
          href="#turinys"
        >
          Pereiti prie turinio
        </a>
        <Header />
        <main className="flex-1" id="turinys">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
      <GoogleAnalytics gaId={GA_ID} />
    </html>
  );
}
