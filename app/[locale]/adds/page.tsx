'use client'
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { useTranslations } from 'next-intl';

export default function AdsPage() {
  const t = useTranslations('ads');
  
  const services = [
    {
      id: 1,
      type: 'google',
      title: 'Google Ads',
      features: [
        { id: 'search', items: Array.from({ length: 4 }, (_, i) => i) },
        { id: 'display', items: Array.from({ length: 4 }, (_, i) => i) },
        { id: 'campaign', items: Array.from({ length: 4 }, (_, i) => i) },
        { id: 'shopping', items: Array.from({ length: 4 }, (_, i) => i) }
      ]
    },
    {
      id: 2,
      type: 'meta',
      title: 'Meta Ads',
      features: [
        { id: 'feed', items: Array.from({ length: 4 }, (_, i) => i) },
        { id: 'audience', items: Array.from({ length: 4 }, (_, i) => i) },
        { id: 'optimization', items: Array.from({ length: 4 }, (_, i) => i) },
        { id: 'tracking', items: Array.from({ length: 4 }, (_, i) => i) }
      ]
    }
  ];

  return (
    <main className="bg-gray-50 dark:bg-black container mx-auto py-12 px-4 pb-32">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </section>

      <section className="grid lg:grid-cols-2 gap-12">
        {services.map((service) => (
          <div key={service.id} className="space-y-8">
            {/* Pridėta antraštė */}
            <h2 className="text-2xl font-bold text-center mb-6">{service.title}</h2>
            
            <Card className="w-full border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow">
              {/* ... */}
            </Card>
          
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 h-full">
              {service.features.map((feature) => (
                <Card key={feature.id} className="w-full hover:shadow-lg transition-shadow h-full flex flex-col md:min-h-[370px]">
                  <CardHeader className="bg-primary/5">
                    <h3 className="text-lg font-semibold text-primary">
                      {t(`services.${service.type}.features.${feature.id}.title`)}
                    </h3>
                  </CardHeader>
                  <CardBody className="pt-4 flex-1">
                    <ul className="space-y-3 h-full">
                      {feature.items.map((index) => (
                        <li key={index} className="flex items-start gap-3 hover:bg-primary/5 p-2 rounded-md transition-colors">
                          <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                          </svg>
                          <span className="text-default-600">
                            {t(`services.${service.type}.features.${feature.id}.items.${index}`)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}