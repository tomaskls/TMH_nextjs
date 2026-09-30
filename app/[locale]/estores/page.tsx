import type { Metadata } from 'next';

import { setRequestLocale } from 'next-intl/server';

import { Services } from '@/components/eshops/Services';
import { CTASection } from '@/components/eshops/CTASection';
import { Hero } from '@/components/eshops/Hero';
import { buildMetadata } from '@/config/metadata';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return buildMetadata(locale, 'estores', '/estores');
}

export default async function ShopifyLanding({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8faf8] to-[#edf2ed] dark:from-[#1a1f1a] dark:to-[#141914]">
      <Hero />
      <Services />
      <CTASection />
    </div>
  );
}
