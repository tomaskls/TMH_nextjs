import { type Metadata } from 'next';

import { HeroSection } from '@/components/seo/HeroSection';
import { ServicesSection } from '@/components/seo/ServicesSection';
import { ResultsSection } from '@/components/seo/ResultsSection';
import { AchievementsSection } from '@/components/seo/AchievementsSection';

export const metadata: Metadata = {
  title: 'SEO paslaugos | Tomorrow\'s media house',
  description: 'Profesionalios SEO paslaugos verslui, kurios užtikrina aukščiausias pozicijas Google paieškoje. Auditas, raktažodžių analizė, optimizavimas ir rezultatų stebėsena. Padidinkite savo svetainės lankomumą jau šiandien!',
};

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white dark:from-slate-900 dark:to-slate-800">
      <HeroSection />
      <ServicesSection />
      <ResultsSection />
      <AchievementsSection />
    </div>
  );
}