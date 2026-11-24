import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/config/site';

// Data nurodoma fiksuota: new Date() prerenderio metu neleidžiamas
const LAST_MODIFIED = '2026-11-24';

const ROUTES: { path: string; priority: number }[] = [
  { path: '', priority: 1 },
  { path: '/shopify-el-parduotuves', priority: 0.9 },
  { path: '/shopify-automatizacija', priority: 0.9 },
  { path: '/svetainiu-kurimas', priority: 0.7 },
  { path: '/kontaktai', priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly',
    priority,
  }));
}
