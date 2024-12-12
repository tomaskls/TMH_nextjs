"use client"
import React, { useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AdService, Platform } from '@/components/constants/types';
import { GRADIENTS } from '@/components/styles/addCards';

interface ServiceCardProps {
  service: AdService;
  index: number;
  platform: Platform;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, platform }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const styles = useMemo(() => GRADIENTS[platform], [platform]);
  
  const cardClasses = useMemo(() => `
    backdrop-blur-sm hover:shadow-lg transition-all duration-300
    border rounded-lg p-6
    bg-gradient-to-r ${styles.light.background} ${styles.light.hover}
    ${styles.dark.background} ${styles.dark.hover} ${styles.dark.border}
    transform hover:scale-[1.02]
    hover:shadow-xl hover:shadow-white/10
  `, [styles]);

  const titleClasses = useMemo(() => `
    text-xl font-semibold mb-2 bg-gradient-to-r 
    ${styles.light.text} ${styles.light.darkText} bg-clip-text text-transparent
  `, [styles]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={cardClasses}
    >
      <h3 className={titleClasses}>{service.title}</h3>
      <p className="mb-4 text-sm text-slate-700 dark:text-gray-300">
        {service.description}
      </p>
      <ul className="space-y-2">
        {service.features.map((feature, i) => (
          <li key={i} className="text-sm flex items-center text-slate-700 dark:text-gray-100">
            <span className={`w-1.5 h-1.5 rounded-full mr-2 bg-gradient-to-r ${styles.light.bullet}`} />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};