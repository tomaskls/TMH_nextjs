import React from 'react';
import { motion } from 'framer-motion';
import { AdService } from '@/components/constants/types';
import { ServiceCard } from '@/components/AddServiceCard';

interface PlatformSectionProps {
  title: string;
  description: string;
  services: AdService[];
  platform: 'google' | 'meta';
  delay?: number;
}

export const PlatformSection: React.FC<PlatformSectionProps> = ({
  title,
  description,
  services,
  platform,
  delay = 0
}) => {
  return (
    <div className="flex-1 bg-white/10 backdrop-blur-md p-8 lg:p-12">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-white/80">
            {description}
          </p>
        </motion.div>

        <div className="space-y-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              platform={platform}
            />
          ))}
        </div>
      </div>
    </div>
  );
};