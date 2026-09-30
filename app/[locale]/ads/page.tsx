import type { Metadata } from 'next';

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { buildMetadata } from '@/config/metadata';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return buildMetadata(locale, 'ads', '/ads');
}

const FEATURE_ITEMS = [0, 1, 2, 3];

const services = [
  {
    type: 'google',
    title: 'Google Ads',
    features: ['search', 'display', 'campaign', 'shopping'],
  },
  {
    type: 'meta',
    title: 'Meta Ads',
    features: ['feed', 'audience', 'optimization', 'tracking'],
  },
];

export default async function AdsPage({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations('ads');

  return (
    <div className="bg-gray-50 dark:bg-black container mx-auto py-12 px-4 pb-32">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </section>

      <section className="grid lg:grid-cols-2 gap-12">
        {services.map((service) => (
          <div key={service.type} className="space-y-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold">{service.title}</h2>
              <p className="text-default-500 mt-2">
                {t(`services.${service.type}.description`)}
              </p>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 h-full">
              {service.features.map((feature) => (
                <Card key={feature} className="w-full hover:shadow-lg transition-shadow h-full flex flex-col md:min-h-[370px]">
                  <CardHeader className="bg-primary/5">
                    <h3 className="text-lg font-semibold text-primary">
                      {t(`services.${service.type}.features.${feature}.title`)}
                    </h3>
                  </CardHeader>
                  <CardBody className="pt-4 flex-1">
                    <ul className="space-y-3 h-full">
                      {FEATURE_ITEMS.map((index) => (
                        <li key={index} className="flex items-start gap-3 hover:bg-primary/5 p-2 rounded-md transition-colors">
                          <svg aria-hidden="true" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                          </svg>
                          <span className="text-default-600">
                            {t(`services.${service.type}.features.${feature}.items.${index}`)}
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
    </div>
  );
}
