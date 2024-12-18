// app/ads-services/page.tsx
import React from 'react';
import {
  googleServices,
  metaServices,
} from '@/components/constants/addSevises';
import { ServiceCard } from '@/components/AddServiceCard';
import { ConsultationButton } from '@/components/ConsultationButton';

// Pagrindinis serverio komponentas
export default function AdsServices() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-teal-500 via-fuchsia-500 to-amber-500">
      {/* Google Ads pusė */}
      <div className="flex-1 bg-white/10 backdrop-blur-md p-8 lg:p-12">
        <div className="max-w-xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Google Ads</h2>
            <p className="text-white/80">
              Optimizuotos reklamos Google paieškos sistemoje ir partnerių
              tinkle
            </p>
          </div>

          <div className="space-y-6">
            {googleServices.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                platform="google"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Meta Ads pusė */}
      <div className="flex-1 bg-white/10 backdrop-blur-md p-8 lg:p-12">
        <div className="max-w-xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Meta Ads</h2>
            <p className="text-white/80">
              Efektyvios reklamos Facebook ir Instagram platformose
            </p>
          </div>

          <div className="space-y-6">
            {metaServices.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                platform="meta"
              />
            ))}
          </div>
        </div>
      </div>

      <ConsultationButton />
    </div>
  );
}
