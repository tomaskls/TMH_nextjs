// app/[locale]/adds/page.tsx
import React from 'react';

import { ConsultationButton } from '@/components/ConsultationButton';
import { ServiceCard } from '@/components/AddServiceCard';
import {
  googleServices,
  metaServices,
} from '@/components/constants/addSevises';

export default function AdsServices() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br dark:from-blue-900 dark:via-blue-800 dark:to-blue-950 from-gray-100 via-gray-200 to-gray-300">
      {/* Google Ads pusė */}
      <div className="flex-1 dark:bg-white/5 bg-white/60 backdrop-blur-md p-8 lg:p-12">
        <div className="max-w-xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold dark:text-white text-gray-800 mb-4">
              Google Ads
            </h2>

            <p className="dark:text-white/80 text-gray-600">
              Optimizuotos reklamos Google paieškos sistemoje ir partnerių
              tinkle
            </p>
          </div>

          <div className="space-y-6">
            {googleServices.map((service, index) => (
              <ServiceCard
                key={index}
                index={index}
                platform="google"
                service={service}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Meta Ads pusė */}
      <div className="flex-1 dark:bg-white/5 bg-white/60 backdrop-blur-md p-8 lg:p-12">
        <div className="max-w-xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold dark:text-white text-gray-800 mb-4">
              Meta Ads
            </h2>

            <p className="dark:text-white/80 text-gray-600">
              Efektyvios reklamos Facebook ir Instagram platformose
            </p>
          </div>

          <div className="space-y-6">
            {metaServices.map((service, index) => (
              <ServiceCard
                key={index}
                index={index}
                platform="meta"
                service={service}
              />
            ))}
          </div>
        </div>
      </div>

      <ConsultationButton />
    </div>
  );
}
