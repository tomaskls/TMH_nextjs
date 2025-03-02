import { useTranslations } from 'next-intl';
import { Card, CardBody, Divider } from '@nextui-org/react';

export function Services() {
  const t = useTranslations('services');

  const services = [
    {
      key: 'development',
      features: t.raw('items.development.features'),
    },
    {
      key: 'design',
      features: t.raw('items.design.features'),
    },
    {
      key: 'maintenance',
      features: t.raw('items.maintenance.features'),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 text-[#526752] dark:text-[#8fa88f]">
          {t('title')}
        </h2>
        <Divider className="my-4" />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card
            key={service.key}
            className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
            shadow="sm"
          >
            <CardBody className="p-6">
              <h3 className="text-xl font-bold mb-4 text-[#526752] dark:text-[#8fa88f]">
                {t(`items.${service.key}.title`)}
              </h3>
              <ul className="space-y-3">
                {(service.features as string[]).map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-[#526752] dark:bg-[#8fa88f] rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
