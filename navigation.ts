import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'lt'] as const;
export type Locale = (typeof locales)[number];

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames: {
      // Čia nurodome maršrutų struktūrą, pvz:
      '/': '/',
      '/about': '/about',
      '/contact': '/contact',
      // Pridėkite kitus maršrutus pagal poreikį
    },
  });
