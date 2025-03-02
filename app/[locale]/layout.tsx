import React from 'react';
import { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { GoogleAnalytics } from '@next/third-parties/google';

import { Providers } from './providers';

import Footer from '@/components/Footer';
import { Navbar } from '@/components/navbar';
import CookieConsent from '@/components/CookieConsent';

export const metadata: Metadata = {
  title: "Tomorrow's Media House", 
  description: "rofesionalus tinklapių kūrimas ir SEO paslaugos, padedančios jūsų verslui augti internete. Dirbame su moderniausiomis technologijomis, užtikriname greitą svetainių veikimą ir optimizuojame jūsų matomumą Google paieškos sistemoje.",
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
  return [{ locale: 'en' }, { locale: 'lt' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  let messages;

  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
        <div className="relative flex flex-col h-screen">
          <Navbar />
          <main className="container mx-auto max-w-7xl pt-16 px-4 flex-grow">
            {children}
          </main>
          {/* Configure Google Analytics with default consent mode */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('consent', 'default', {
                  'analytics_storage': 'denied',
                  'ad_storage': 'denied'
                });
              `,
            }}
          />
          <GoogleAnalytics gaId="G-WDJG28XFBK" />
          <Footer />
          <CookieConsent />
        </div>
      </Providers>
    </NextIntlClientProvider>
  );
}