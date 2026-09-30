import type { Metadata } from 'next';

import { getTranslations, setRequestLocale } from 'next-intl/server';

import { Hero } from '@/components/websites/Hero';
import { Services } from '@/components/websites/Services';
import { Portfolio } from '@/components/websites/Portfolio';
import { TechStack } from '@/components/websites/TechStack';
import { buildMetadata } from '@/config/metadata';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return buildMetadata(locale, 'home', '');
}

export default async function WebDevelopmentPage({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations('webDevelopment');

  const services = [
    {
      icon: 'code2',
      title: t('services.seo.title'),
      description: t('services.seo.description')
    },
    {
      icon: 'palette',
      title: t('services.design.title'),
      description: t('services.design.description')
    },
    {
      icon: 'smartphone',
      title: t('services.mobile.title'),
      description: t('services.mobile.description')
    }
  ];

  const projects = [
    {
      title: t('portfolio.projects.ecommerce'),
      image: "/projects/studija.png",
      demoUrl: "https://www.neringos-siuvimo-studija.lt"
    },
    {
      title: t('portfolio.projects.travel'),
      image: "/projects/transport_app.png",
      demoUrl: "https://www.siauliai-riga.lt"
    },
    {
      title: t('portfolio.projects.medical'),
      image: "/projects/chef.png",
      demoUrl: "https://cheffabio.netlify.app/"
    },
    {
      title: t('portfolio.projects.construction'),
      image: "/projects/u2.png",
      demoUrl: "https://www.u2motors.lt"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white overflow-hidden">
      <Hero 
        buttonText={t('hero.startButton')}
        description={t('hero.description')}
        title={t('hero.title')}
      />
      <Services 
        description={t('services.description')}
        services={services}
        title={t('services.title')}
      />
      <Portfolio 
        description={t('portfolio.description')}
        liveDemoText={t('portfolio.liveDemo')}
        projects={projects}
        title={t('portfolio.title')}
      />
      <TechStack title={t('techStack.title')} />
    </div>
  );
}