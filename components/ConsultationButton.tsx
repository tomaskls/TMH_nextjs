import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@nextui-org/react";

export const ConsultationButton: React.FC = () => {
  const handleConsultation = () => {
    console.log("Konsultacijos užklausa");
  };

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <Button
        className="bg-gradient-to-r from-teal-500 via-fuchsia-500 to-amber-500 
          hover:from-teal-600 hover:via-fuchsia-600 hover:to-amber-600
          text-white font-semibold px-6 py-3
          shadow-lg hover:shadow-xl transition-all duration-300"
        onPress={handleConsultation}
      >
        Nemokama konsultacija
      </Button>
    </motion.div>
  );
};