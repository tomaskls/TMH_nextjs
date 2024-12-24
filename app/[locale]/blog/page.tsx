
'use client'
import { Card, CardBody, CardHeader } from "@nextui-org/react";

import { GOOGLE_ADS_SERVICES, META_ADS_SERVICES } from '@/components/constants/adds';

export default function AdsPage() {
  return (
    <main className="container mx-auto py-12 px-4">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Skaitmeninės Reklamos Paslaugos</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Profesionalios Google Ads ir Meta Ads reklamos paslaugos, padėsiančios pasiekti jūsų verslo tikslus
        </p>
      </section>

      <section className="grid lg:grid-cols-2 gap-12  ">
        {[...GOOGLE_ADS_SERVICES, ...META_ADS_SERVICES].map((service) => (
         <div key={service.id} className="space-y-8">
         <Card className="w-full border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow">
           {/* ... */}
         </Card>
       
         <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 h-full">
           {service.features.map((feature) => (
             <Card key={feature.id} className="w-full hover:shadow-lg transition-shadow h-full flex flex-col">
               <CardHeader className="bg-primary/5">
                 <h3 className="text-lg font-semibold text-primary">{feature.title}</h3>
               </CardHeader>
               <CardBody className="pt-4 flex-1">
                 <ul className="space-y-3 h-full">
                   {feature.items.map((item, index) => (
                     <li key={index} className="flex items-start gap-3 hover:bg-primary/5 p-2 rounded-md transition-colors">
                       <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                       </svg>
                       <span className="text-default-600">{item}</span>
                     </li>
                   ))}
                 </ul>
               </CardBody>
             </Card>
           ))}
         </div>
       </div>
        ))}
      </section>
    </main>
  );
}
