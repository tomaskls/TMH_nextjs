'use client';
import React from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@nextui-org/button';

export const LanguageSwitch = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'lt' : 'en';
    // Pašaliname esamą lokalę iš kelio
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);

    router.push(newPath);
  };

  return (
    <Button
      className=""
      color='primary'
      size="sm"
      variant="solid"
      onPress={toggleLocale}
    >
      {locale.toUpperCase()}
    </Button>
  );
};