import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Nuotraukos public/projects jau sumažintos ir WebP formatu, todėl
  // Vercel Image Optimization nenaudojamas – failai tiekiami tokie, kokie yra.
  images: { unoptimized: true },
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },

  // Seni daugiakalbio puslapio adresai (/lt/..., /en/...) ir nebeteikiamų
  // paslaugų puslapiai nukreipiami į naujus, kad neprarastume pozicijų Google.
  async redirects() {
    return [
      { source: '/lt', destination: '/', permanent: true },
      { source: '/en', destination: '/', permanent: true },
      {
        source: '/:locale(lt|en)/estores',
        destination: '/shopify-el-parduotuves',
        permanent: true,
      },
      {
        source: '/estores',
        destination: '/shopify-el-parduotuves',
        permanent: true,
      },
      {
        source: '/:locale(lt|en)/contact',
        destination: '/kontaktai',
        permanent: true,
      },
      { source: '/contact', destination: '/kontaktai', permanent: true },
      // SEO, reklamos ir blogo puslapiai pašalinti – nukreipiame į pradžią
      { source: '/:locale(lt|en)/:path*', destination: '/', permanent: true },
      {
        source: '/:path(seo|ads|adds|blog)',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
