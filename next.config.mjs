import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@nextui-org/react', '@nextui-org/theme'],
  experimental: {
    // Importuojami tik naudojami NextUI komponentai, o ne visa biblioteka
    optimizePackageImports: ['@nextui-org/react', 'lucide-react'],
  },

  // Adresai be kalbos (/seo, /contact ir t.t.) peradresuojami middleware'o pagal
  // naršyklės kalbą (numatytai – /lt). Čia paliktas tik senas /adds -> /ads.
  async redirects() {
    return [
      {
        source: '/:locale(lt|en)/adds',
        destination: '/:locale/ads',
        permanent: true,
      },
      {
        source: '/adds',
        destination: '/lt/ads',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
