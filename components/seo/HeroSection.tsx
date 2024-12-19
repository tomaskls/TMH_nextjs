import { useTranslations } from 'next-intl';

import { AuditButton } from './AuditButton';

export function HeroSection() {
  const t = useTranslations('SEOPage.hero');
  
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          {t('description')}
        </p>
        <AuditButton label={t('auditButton')} />
      </div>
    </section>
  );
}