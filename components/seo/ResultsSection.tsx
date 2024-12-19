import type { StatItem } from '@/types/seo';

import { useTranslations } from 'next-intl';

import { StatCard } from './StatCard';
import { AuditButton } from './AuditButton';

export function ResultsSection() {
  const t = useTranslations('SEOPage.results');
  const stats = t.raw('stats') as StatItem[];

  return (
    <section className="py-16 px-4 bg-cyan-50 dark:bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          {t('title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <StatCard key={index} label={stat.label} value={stat.value} />
          ))}
        </div>
        <div className="text-center">
          <AuditButton label={t('learnMore')} />
        </div>
      </div>
    </section>
  );
}