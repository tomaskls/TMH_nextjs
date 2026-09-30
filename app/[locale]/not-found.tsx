import { useTranslations } from 'next-intl';

import { ClientButton } from '@/components/websites/ClientButton';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-32 text-center">
      <p className="text-7xl font-bold text-fuchsia-600">404</p>
      <h1 className="text-3xl font-bold">{t('title')}</h1>
      <p className="text-default-500">{t('description')}</p>
      <ClientButton href="/" text={t('backHome')} />
    </div>
  );
}
