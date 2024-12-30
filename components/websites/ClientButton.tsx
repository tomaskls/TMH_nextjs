// /components/web-development/ClientButton.tsx
'use client';

import { Button } from '@nextui-org/react';

interface ClientButtonProps {
  text: string;
  className?: string;
}

export const ClientButton = ({ text, className }: ClientButtonProps) => {
  return (
    <Button 
      className={`bg-fuchsia-600 text-white font-bold hover:bg-fuchsia-700 ${className}`}
      size="lg"
    >
      {text}
    </Button>
  );
};