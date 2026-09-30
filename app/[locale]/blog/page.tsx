import type { Metadata } from 'next';

import React from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Code, Globe, LineChart, Mail, Shield, Star, CheckCircle, Wallet } from 'lucide-react';

import { buildMetadata } from '@/config/metadata';
import { ClientButton } from '@/components/websites/ClientButton';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    ...(await buildMetadata(locale, 'blog', '/blog')),
    robots: { index: false, follow: true },
  };
}

const FEATURES = [
  { key: 'speed', icon: <Code /> },
  { key: 'seo', icon: <LineChart /> },
  { key: 'quality', icon: <Shield /> },
  { key: 'service', icon: <Star /> },
  { key: 'process', icon: <CheckCircle /> },
  { key: 'payment', icon: <Wallet /> },
  { key: 'hosting', icon: <Globe /> },
];

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations('blog');

  return (
    <div className="min-h-screen">
      {/* Hero sekcija */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">{t('hero.title')}</h1>
        <p className="text-xl text-default-600 mb-8 max-w-3xl mx-auto">
          {t('hero.description')}
        </p>
        <ClientButton text={t('hero.button')} />
      </section>

      {/* Privalumų sekcija */}
      <section className="py-20 bg-default-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('featuresTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map(({ key, icon }) => (
              <FeatureCard
                key={key}
                description={t(`features.${key}.description`)}
                icon={icon}
                title={t(`features.${key}.title`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Kontaktų sekcija */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('cta.title')}</h2>
          <p className="text-lg text-default-600 mb-8">{t('cta.description')}</p>
          <ClientButton
            text={
              <>
                <Mail className="w-5 h-5" />
                {t('cta.button')}
              </>
            }
          />
        </div>
      </section>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Privalumų kortelės komponentas
const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="rounded-xl bg-content1 p-6 shadow-small">
      <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-default-600">{description}</p>
    </div>
  );
};
