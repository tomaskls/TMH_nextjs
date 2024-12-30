// /components/web-development/client/Card.tsx
'use client';

import { Card as NextUICard, CardBody } from '@nextui-org/react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export const Card = ({ children, className, noPadding = false }: CardProps) => {
  return (
    <NextUICard className={className}>
      <CardBody className={noPadding ? 'p-0' : 'p-6'}>
        {children}
      </CardBody>
    </NextUICard>
  );
};