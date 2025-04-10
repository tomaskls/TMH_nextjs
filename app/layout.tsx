import React from 'react';
import '@/styles/globals.css';
// import { GoogleAnalytics } from '@next/third-parties/google'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children; // Tiesiog perduodame vaikus be HTML/body/head tagų
}