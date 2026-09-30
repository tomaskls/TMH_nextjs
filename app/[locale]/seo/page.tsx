import { type Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { HeroSection } from '@/components/seo/HeroSection';
import { ServicesSection } from '@/components/seo/ServicesSection';
import { ResultsSection } from '@/components/seo/ResultsSection';
import { AchievementsSection } from '@/components/seo/AchievementsSection';
import { buildMetadata } from '@/config/metadata';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return buildMetadata(locale, 'seo', '/seo');
}

export default async function SEOPage({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white dark:from-slate-900 dark:to-slate-800">
      <HeroSection />
      <ServicesSection />
      <ResultsSection />
      <AchievementsSection />
    </div>
  );
}
