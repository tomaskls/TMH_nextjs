'use client';

import type React from 'react';

import { Button } from '@nextui-org/react';

import { Link } from '@/navigation';

interface ClientButtonProps {
  text: React.ReactNode;
  className?: string;
  href?: string;
}

export const ClientButton = ({ text, className, href = '/contact' }: ClientButtonProps) => {
  return (
    <Button
      as={Link}
      className={`bg-fuchsia-600 text-white font-bold hover:bg-fuchsia-700 ${className ?? ''}`}
      href={href}
      size="lg"
    >
      {text}
    </Button>
  );
};
