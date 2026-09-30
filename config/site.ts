export const SITE_URL = 'https://www.tmh.lt';

export const CONTACT_INFO = {
  email: 'info@tmh.lt',
  phone: '+37060574525',
  facebook: 'https://facebook.com/tomorrowsmediahouse',
  instagram: 'https://instagram.com/tomorrowsmediahouse',
};

// Keliai be kalbos prefikso – nuorodos kuriamos per '@/navigation' Link,
// kuris pats prideda dabartinę kalbą.
export const siteConfig = {
  name: "Tomorrow's Media House",
  navItems: [
    { label: 'websites', href: '/' },
    { label: 'seo', href: '/seo' },
    { label: 'ads', href: '/ads' },
    { label: 'e-stores', href: '/estores' },
  ],
  links: {
    contact: '/contact',
  },
} as const;

export type SiteConfig = typeof siteConfig;
