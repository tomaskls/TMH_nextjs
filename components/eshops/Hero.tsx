import { useTranslations } from 'next-intl';
import { Button } from '@nextui-org/react';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block bg-[#e5ede5] dark:bg-[#2a332a] text-[#526752] dark:text-[#a8bda8] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            {t('badge')}
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#526752] to-[#799679] dark:from-[#8fa88f] dark:to-[#b8ccb8] bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {t('description')}
          </p>
          <div className="flex gap-4">
            <Button
              className="font-semibold bg-[#526752] dark:bg-[#8fa88f] text-white"
              size="lg"
            >
              {t('buttons.proposal')}
            </Button>
            <Button
              className="font-semibold text-[#526752] dark:text-[#8fa88f] border-[#526752] dark:border-[#8fa88f]"
              size="lg"
              variant="bordered"
            >
              {t('buttons.portfolio')}
            </Button>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute inset-0 bg-[#526752] dark:bg-[#8fa88f] rounded-3xl transform rotate-3" />
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl">
              <div className="space-y-4">
                <div className="w-full h-4 bg-[#edf2ed] dark:bg-[#2a332a] rounded" />
                <div className="w-3/4 h-4 bg-[#edf2ed] dark:bg-[#2a332a] rounded" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-[#edf2ed] dark:bg-[#2a332a] rounded" />
                  <div className="h-20 bg-[#edf2ed] dark:bg-[#2a332a] rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
