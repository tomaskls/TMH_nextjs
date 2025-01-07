// /components/web-development/ClientButton.tsx
'use client';

import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/react';

interface ClientButtonProps {
  text: string;
  className?: string;
}

export const ClientButton = ({ text, className }: ClientButtonProps) => {
  return (
    <Button
as={Link}
      className={`bg-fuchsia-600 text-white font-bold hover:bg-fuchsia-700 ${className}`}
      href='/contact'
      size="lg"
    >
      {text}
    </Button>
  );
};