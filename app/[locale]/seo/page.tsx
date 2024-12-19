// components/SEOServicesCards/index.tsx
import { useTranslations } from 'next-intl';

import { seoServices } from '@/components/constants/seoServices';
import ServiceCard from '@/components/ServiceCard';

interface Translations {
  title: string;
  items: string[];
  buttonText: string;
}

const SEOServicesCards = () => {
  const t = useTranslations('SEOServices');

  const translations: Translations[] = seoServices.map((service) => ({
    title: t(service.titleKey),
    items: service.servicesKeys.map((key) => t(key)),
    buttonText: t('common.auditButton'),
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {translations.map((serviceTranslations, index) => (
        <ServiceCard
          key={`seo-service-${index}`}
          translations={serviceTranslations}
        />
      ))}
    </div>
  );
};

export default SEOServicesCards;
