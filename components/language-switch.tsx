'use client';
import React from 'react';
import { useLocale } from 'next-intl';
import { Button } from '@nextui-org/button';

import { usePathname, useRouter } from '@/navigation';

export const LanguageSwitch = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const newLocale = locale === 'en' ? 'lt' : 'en';

  return (
    <Button
      aria-label={newLocale === 'lt' ? 'Perjungti į lietuvių kalbą' : 'Switch to English'}
      color="secondary"
      size="sm"
      variant="solid"
      onPress={() => router.replace(pathname, { locale: newLocale })}
    >
      {newLocale.toUpperCase()}
    </Button>
  );
};
