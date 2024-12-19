import type { SEOServiceItem } from '@/types/seo';

import { useTranslations } from 'next-intl';

import { ServiceCard } from './ServiceCard';

export function ServicesSection() {
  const t = useTranslations('SEOPage.services');
  const services = t.raw('items') as SEOServiceItem[];
  
  return (
    <section className="py-16 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          {t('title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              auditButtonText={t('auditButton')}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}