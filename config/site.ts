export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Next.js + NextUI',
  description: 'Make beautiful websites regardless of your design experience.',
  navItems: [
    { label: 'about', href: '/' },
    { label: 'websites', href: '/websites' },
    { label: 'seo', href: '/seo' },
    { label: 'adds', href: '/adds' },
    { label: 'e-stores', href: '/e-stores' },
    { label: 'blog', href: '/blog' },
  ],

  navMenuItems: [
    { label: 'about', href: '/' },
    { label: 'websites', href: '/websites' },
    { label: 'seo', href: '/seo' },
    { label: 'adds', href: '/adds' },
    { label: 'e-stores', href: '/e-stores' },
    { label: 'blog', href: '/blog' },
  ],
  links: {
    contact: '/contact',
  },
};
