"use client"
import React from 'react';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { PlatformSection } from '@/components/PlatformSection';
import { ConsultationButton } from '@/components/ConsultationButton';
import { googleServices, metaServices } from '@/components/constants/addSevises';

const AdsServices: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-teal-500 via-fuchsia-500 to-amber-500">
        <PlatformSection
          title="Google Ads"
          description="Optimizuotos reklamos Google paieškos sistemoje ir partnerių tinkle"
          services={googleServices}
          platform="google"
        />
        
        <PlatformSection
          title="Meta Ads"
          description="Efektyvios reklamos Facebook ir Instagram platformose"
          services={metaServices}
          platform="meta"
          delay={0.2}
        />

        <ConsultationButton />
      </div>
    </ErrorBoundary>
  );
};

export default AdsServices;