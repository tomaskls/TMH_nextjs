'use client';
import React from 'react';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@nextui-org/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('error');

  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-32 text-center">
      <h2 className="text-3xl font-bold">{t('title')}</h2>
      <Button color="primary" onPress={() => reset()}>
        {t('retry')}
      </Button>
    </div>
  );
}
