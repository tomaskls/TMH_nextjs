import type { Metadata } from 'next';

import React from 'react';
import { setRequestLocale } from 'next-intl/server';

import { buildMetadata } from '@/config/metadata';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return buildMetadata(locale, 'contact', '/contact');
}

export default async function ContactLayout({
  children,
  params,
}: Props & { children: React.ReactNode }) {
  const { locale } = await params;

  setRequestLocale(locale);

  return children;
}
