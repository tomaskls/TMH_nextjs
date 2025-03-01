export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Next.js + NextUI',
  description: 'Make beautiful websites regardless of your design experience.',
  navItems: [
    { label: 'websites', href: '/' },
    { label: 'seo', href: '/seo' },
    { label: 'adds', href: '/adds' },
    { label: 'e-stores', href: '/estores' },
  ],

  navMenuItems: [
    { label: 'websites', href: '/' },
    { label: 'seo', href: '/seo' },
    { label: 'adds', href: '/adds' },
    { label: 'e-stores', href: '/estores' },
  ],
  links: {
    contact: '/contact',
  },
};
