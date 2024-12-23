'use client';
import { Suspense } from 'react';

import { Services } from '@/components/eshops/Services';
import { CTASection } from '@/components/eshops/CTASection';
import { Hero } from '@/components/eshops/Hero';

export default function ShopifyLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8faf8] to-[#edf2ed] dark:from-[#1a1f1a] dark:to-[#141914]">
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Services />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <CTASection />
      </Suspense>
    </div>
  );
}