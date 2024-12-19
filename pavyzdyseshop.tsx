'use client';
import React from 'react';
import { Button, Card, CardBody, Divider } from '@nextui-org/react';

export default function ShopifyLandingAlt() {
  const services = [
    {
      title: 'Shopify parduotuvių kūrimas',
      features: [
        'Pilnas parduotuvės sukūrimas',
        'Prekių katalogo optimizavimas',
        'Mokėjimo sistemų integracija',
        'Mobilių įrenginių palaikymas',
      ],
    },
    {
      title: 'Dizaino sprendimai',
      features: [
        'Unikalus prekės ženklo identitetas',
        'UX/UI dizainas',
        'Responsive dizainas',
        'Vartotojų elgsenos analizė',
      ],
    },
    {
      title: 'Techninė priežiūra',
      features: [
        'Nuolatiniai atnaujinimai',
        'Greičio optimizavimas',
        'Saugumo užtikrinimas',
        '24/7 palaikymas',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8faf8] to-[#edf2ed] dark:from-[#1a1f1a] dark:to-[#141914]">
      {/* Hero Section su šoniniu išdėstymu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-[#e5ede5] dark:bg-[#2a332a] text-[#526752] dark:text-[#a8bda8] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Shopify Ekspertai
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#526752] to-[#799679] dark:from-[#8fa88f] dark:to-[#b8ccb8] bg-clip-text text-transparent">
              Jūsų sėkminga e-parduotuvė prasideda čia
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Kuriame pardavimus generuojančias Shopify parduotuves, kurios
              padeda jūsų verslui augti ir konkuruoti globalioje rinkoje.
            </p>
            <div className="flex gap-4">
              <Button
                className="font-semibold bg-[#526752] dark:bg-[#8fa88f] text-white"
                size="lg"
              >
                Gauti pasiūlymą
              </Button>
              <Button
                className="font-semibold text-[#526752] dark:text-[#8fa88f] border-[#526752] dark:border-[#8fa88f]"
                size="lg"
                variant="bordered"
              >
                Peržiūrėti darbus
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-[#526752] dark:bg-[#8fa88f] rounded-3xl transform rotate-3" />
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl">
                <div className="space-y-4">
                  <div className="w-full h-4 bg-[#edf2ed] dark:bg-[#2a332a] rounded" />
                  <div className="w-3/4 h-4 bg-[#edf2ed] dark:bg-[#2a332a] rounded" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-[#edf2ed] dark:bg-[#2a332a] rounded" />
                    <div className="h-20 bg-[#edf2ed] dark:bg-[#2a332a] rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Paslaugų sekcija */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-[#526752] dark:text-[#8fa88f]">
            Visapusiški sprendimai jūsų e-verslui
          </h2>
          <Divider className="my-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
              shadow="sm"
            >
              <CardBody className="p-6">
                <h3 className="text-xl font-bold mb-4 text-[#526752] dark:text-[#8fa88f]">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-[#526752] dark:bg-[#8fa88f] rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA sekcija */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="bg-gradient-to-r from-[#526752] to-[#799679] dark:from-[#8fa88f] dark:to-[#b8ccb8]">
          <CardBody className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Pradėkite savo e-komercijos kelionę šiandien
            </h2>
            <p className="text-xl mb-8 text-[#e5ede5] dark:text-[#1a1f1a]">
              Susisiekite ir gaukite nemokamą konsultaciją
            </p>
            <Button
              className="bg-white dark:bg-gray-800 text-[#526752] dark:text-[#8fa88f] font-semibold"
              size="lg"
            >
              Susisiekti dabar
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
