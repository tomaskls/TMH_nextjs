
export const getSiteConfig = (locale: string | undefined = undefined) => {
  const localePrefix = locale ? `/${locale}` : '';
  
  const config = {
    name: 'Tomorrow\'s Media House',
    description: 'Make beautiful websites regardless of your design experience.',
    navItems: [
      { label: 'websites', href: `${localePrefix}/` },
      { label: 'seo', href: `${localePrefix}/seo` },
      { label: 'adds', href: `${localePrefix}/adds` },
      { label: 'e-stores', href: `${localePrefix}/estores` },
    ],
    navMenuItems: [
      { label: 'websites', href: `${localePrefix}/` },
      { label: 'seo', href: `${localePrefix}/seo` },
      { label: 'adds', href: `${localePrefix}/adds` },
      { label: 'e-stores', href: `${localePrefix}/estores` },
    ],
    links: {
      contact: `${localePrefix}/contact`,
    },
  };
  
  return config;
};


export const siteConfig = getSiteConfig();

export type SiteConfig = typeof siteConfig;