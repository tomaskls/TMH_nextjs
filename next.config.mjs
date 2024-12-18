import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@nextui-org/react', '@nextui-org/theme'],
};

export default withNextIntl(nextConfig);
