import React from 'react';
import { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { GoogleAnalytics } from '@next/third-parties/google';
import clsx from 'clsx';

import { Providers } from './providers';

import { fontSans } from '@/config/fonts';
import Footer from '@/components/Footer';
import { Navbar } from '@/components/navbar';
import CookieConsent from '@/components/CookieConsent';

export const metadata: Metadata = {
  title: "Tomorrow's Media House", 
  description: "Profesionalus tinklapių kūrimas ir SEO paslaugos, Shopify  el. parduotuvių priežiūra",
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
    <html suppressHydrationWarning lang={locale}>
      <head />
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
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
      </body>
    </html>
  );
}