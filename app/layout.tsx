import React from 'react';
import '@/styles/globals.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children; // Tiesiog perduodame vaikus be HTML/body/head tagų
}