import type { Metadata } from 'next';

import { SITE_NAME } from '@/config/site';

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'lt_LT',
      siteName: SITE_NAME,
      title,
      description,
      url: path,
      images: [{ url: '/og.png', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}
