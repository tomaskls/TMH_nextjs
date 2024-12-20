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
      className="text-sm font-normal text-default-600 bg-default-100"
      size="sm"
      variant="flat"
      onClick={toggleLocale}
    >
      {locale.toUpperCase()}
    </Button>
  );
};