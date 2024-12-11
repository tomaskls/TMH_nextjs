import React from "react";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'lt' }];
}


  export default async function LocaleLayout({ 
    children,
    params
  }: {
    children: React.ReactNode;
    params: { locale: string };
  }) {
    const resolvedParams = await params;
    const locale = resolvedParams.locale;
    
    let messages;
    try {
      messages = (await import(`../../messages/${locale}.json`)).default;
    } catch  {
      notFound();
    }
    // ... likęs kodas
  // ... likęs kodas

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
        <div className="relative flex flex-col h-screen">
          <Navbar />
          <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
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