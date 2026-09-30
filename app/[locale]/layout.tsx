import React from 'react';
import { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { GoogleAnalytics } from '@next/third-parties/google';
import clsx from 'clsx';

import { Providers } from './providers';

import { fontSans } from '@/config/fonts';
import { CONTACT_INFO, SITE_URL } from '@/config/site';
import { isLocale, routing } from '@/i18n/routing';
import Footer from '@/components/Footer';
import { Navbar } from '@/components/navbar';
import CookieConsent from '@/components/CookieConsent';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tomorrow's Media House",
    template: "%s | Tomorrow's Media House",
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Consent Mode v2: numatytai viskas uždrausta, bet jei lankytojas jau anksčiau
// davė sutikimą, jis pritaikomas dar prieš užsikraunant Google Analytics.
const consentScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
var s = {};
try { s = JSON.parse(localStorage.getItem('cookieConsent')) || {}; } catch (e) {}
var ad = s.marketing ? 'granted' : 'denied';
gtag('consent', 'default', {
  analytics_storage: s.analytics ? 'granted' : 'denied',
  ad_storage: ad,
  ad_user_data: ad,
  ad_personalization: ad
});
`;

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: "Tomorrow's Media House",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  image: `${SITE_URL}/projects/tmh.png`,
  email: CONTACT_INFO.email,
  telephone: CONTACT_INFO.phone,
  areaServed: 'LT',
  sameAs: [CONTACT_INFO.facebook, CONTACT_INFO.instagram],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html suppressHydrationWarning lang={locale}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: consentScript }} />
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
          type="application/ld+json"
        />
      </head>
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
            <div className="relative flex flex-col min-h-screen">
              <Navbar />
              <main className="container mx-auto max-w-7xl pt-16 px-4 flex-grow">
                {children}
              </main>
              <Footer />
              <CookieConsent />
            </div>
          </Providers>
        </NextIntlClientProvider>
        <GoogleAnalytics gaId="G-WDJG28XFBK" />
      </body>
    </html>
  );
}
