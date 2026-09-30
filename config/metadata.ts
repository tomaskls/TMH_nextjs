import type { Metadata } from 'next';

import { getTranslations } from 'next-intl/server';

import { routing } from '@/i18n/routing';

type PageKey = 'home' | 'seo' | 'ads' | 'estores' | 'contact' | 'blog';

// Kelias be kalbos prefikso, pvz. '' (pradžia) arba '/seo'
export async function buildMetadata(
  locale: string,
  page: PageKey,
  path: string
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const title = t(`${page}.title`);
  const description = t(`${page}.description`);

  const languages: Record<string, string> = Object.fromEntries(
    routing.locales.map((l) => [l, `/${l}${path}`])
  );

  languages['x-default'] = `/${routing.defaultLocale}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages,
    },
    openGraph: {
      type: 'website',
      siteName: t('siteName'),
      title,
      description,
      url: `/${locale}${path}`,
      locale: locale === 'lt' ? 'lt_LT' : 'en_US',
      images: [{ url: '/projects/tmh.png', width: 1581, height: 968 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
