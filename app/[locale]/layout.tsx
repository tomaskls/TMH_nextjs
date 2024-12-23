import React from 'react';
import { Metadata, Viewport } from 'next';
import { Link } from '@nextui-org/link';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

import { Providers } from './providers';

import { Navbar } from '@/components/navbar';

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
          <footer className="w-full flex items-center justify-center py-3">
            <Link
              isExternal
              className="flex items-center gap-1 text-current"
              href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
              title="nextui.org homepage"
            >
              <span className="text-default-600">Powered by</span>
              <p className="text-primary">NextUI</p>
            </Link>
          </footer>
        </div>
      </Providers>
    </NextIntlClientProvider>
  );
}
