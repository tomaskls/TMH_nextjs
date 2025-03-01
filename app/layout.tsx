import React from 'react';
import '@/styles/globals.css';
import clsx from 'clsx';
// import { GoogleAnalytics } from '@next/third-parties/google'

import { fontSans } from '@/config/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        {children}
      </body>
      {/* <GoogleAnalytics gaId=" G-JG3D0F2T25" /> */}
    </html>
  );
}
