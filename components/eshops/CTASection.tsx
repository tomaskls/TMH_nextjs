import { useTranslations } from 'next-intl';
import { Card, CardBody, Button } from '@nextui-org/react';

export function CTASection() {
  const t = useTranslations('cta');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Card className="bg-gradient-to-r from-[#526752] to-[#799679] dark:from-[#8fa88f] dark:to-[#b8ccb8]">
        <CardBody className="p-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">{t('title')}</h2>
          <p className="text-xl mb-8 text-[#e5ede5] dark:text-[#1a1f1a]">
            {t('description')}
          </p>
          <Button
            size="lg"
            className="bg-white dark:bg-gray-800 text-[#526752] dark:text-[#8fa88f] font-semibold"
          >
            {t('button')}
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
