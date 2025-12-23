// components/ConsultationButton.tsx
'use client';
import React from 'react';
import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';

export const ConsultationButton = () => {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-8 right-8 z-50"
      initial={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <Button
        className="bg-gradient-to-r from-teal-500 via-fuchsia-500 to-amber-500 
          hover:from-teal-600 hover:via-fuchsia-600 hover:to-amber-600
          text-white font-semibold px-6 py-3
          shadow-lg hover:shadow-xl transition-all duration-300"
        onPress={() => console.log('Konsultacijos užklausa')}
      >
        Nemokama konsultacija
      </Button>
    </motion.div>
  );
};
