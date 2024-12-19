import { useTranslations } from 'next-intl';
import { TrendingUp } from 'lucide-react';

import { AuditButton } from './AuditButton';

export function AchievementsSection() {
  const t = useTranslations('SEOPage.achievements');

  return (
    <section className="mt-16 py-16 px-4 bg-cyan-100 dark:bg-slate-800">
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          {t('title')}
        </h2>
        <div className="flex items-center justify-center gap-4 mb-8">
          <TrendingUp className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
          <span className="text-2xl font-semibold text-gray-800 dark:text-white">
            {t('highlight')}
          </span>
        </div>
        <AuditButton label={t('storiesButton')} />
      </div>
    </section>
  );
}