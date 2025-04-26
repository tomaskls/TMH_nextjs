import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@nextui-org/react', '@nextui-org/theme'],
  
  // Pridedame nukreipimų (redirects) konfigūraciją
  async redirects() {
    return [
      // Nukreipti /seo į /en/seo su pastoviu 301 nukreipimu
      {
        source: '/seo',
        destination: '/en/seo',
        permanent: true, // nustato 301 nukreipimą vietoj 307
      },
      {
        source: '/adds',
        destination: '/en/adds',
        permanent: true,
      },
      {
        source: '/estores',
        destination: '/en/estores',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/en/blog',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/en/contact',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);