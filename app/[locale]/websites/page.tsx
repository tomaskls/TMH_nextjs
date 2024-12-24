'use client';

import React from 'react';
import { Card, CardBody, Button, Divider } from '@nextui-org/react';
import { Code2, Palette, Smartphone } from 'lucide-react';

const WebDevelopmentPage = () => {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "SEO optimizacija",
      description: "Užtikriname aukštas pozicijas paieškos sistemose ir didesnį lankytojų srautą"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UX/UI Dizainas",
      description: "Modernus dizainas su puikia vartotojo patirtimi ir intuityvia navigacija"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobili versija",
      description: "Tobulas veikimas visuose įrenginiuose ir ekranų dydžiuose"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white overflow-hidden">
      {/* Hero sekcija */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#FAE8FF,#FFFFFF)] dark:bg-[radial-gradient(circle_at_50%_120%,#3B0764,#000000)]" />
        
        <div className="relative h-full flex flex-col justify-center px-4 md:px-12 lg:px-24">
          <div className="border-l-4 border-fuchsia-600 pl-6 mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Svetainių
              <br />
              Kūrimas
              <span className="text-fuchsia-600">.</span>
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
            <div>
              <p className="text-xl text-zinc-600 dark:text-gray-400 mb-8">
                Kuriame išskirtinius ir inovatyvius skaitmeninius sprendimus, 
                kurie ne tik atrodo moderniai, bet ir padeda jūsų verslui augti.
              </p>
              <Button 
                className="bg-fuchsia-600 text-white font-bold hover:bg-fuchsia-700"
                size="lg"
              >
                Pradėkime projektą
              </Button>
            </div>
            
            <div className="hidden md:block">
              <div className="relative w-full h-64">
                <div className="absolute right-0 top-0 w-48 h-48 bg-fuchsia-200/50 dark:bg-fuchsia-600/20 backdrop-blur-xl rounded-full" />
                <div className="absolute right-24 top-24 w-32 h-32 bg-indigo-200/50 dark:bg-indigo-600/20 backdrop-blur-xl rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Paslaugų sekcija */}
      <div className="py-24 px-4 md:px-12 lg:px-24 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16">
            <h2 className="text-4xl font-bold mb-4 md:mb-0">Mūsų<br />Paslaugos</h2>
            <p className="text-zinc-600 dark:text-gray-400 md:max-w-md">
              Naudojame naujausias technologijas ir inovatyvius sprendimus, 
              kad sukurtume jūsų verslui optimalų skaitmeninį sprendimą.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-fuchsia-600 transition-all duration-300"
              >
                <CardBody className="p-6">
                  <div className="mb-4 text-fuchsia-600">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-zinc-600 dark:text-gray-400">{service.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Procesas */}
      <div className="py-24 px-4 md:px-12 lg:px-24 bg-white dark:bg-black w-full overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-full">
            <div>
              <h2 className="text-4xl font-bold mb-8">Mūsų darbo procesas</h2>
              <p className="text-zinc-600 dark:text-gray-400 mb-8">
                Sistematiškas požiūris į projektų įgyvendinimą užtikrina 
                aukščiausią kokybę ir efektyvumą.
              </p>
              <Button 
                className="border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-600 hover:text-white" 
                size="lg"
                variant="bordered"
              >
                Sužinoti daugiau
              </Button>
            </div>

            <div className="space-y-8">
              {['Analizė', 'Strategija', 'Dizainas', 'Vystymas'].map((step, index) => (
                <div key={index} className="flex items-center gap-4 w-full">
                  <span className="text-2xl font-bold text-fuchsia-600 whitespace-nowrap">0{index + 1}</span>
                  <Divider className="w-24 md:w-32 bg-zinc-200 dark:bg-zinc-800" />
                  <span className="text-xl whitespace-nowrap">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio sekcija */}
      <div className="py-24 px-4 md:px-12 lg:px-24 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16">
            <h2 className="text-4xl font-bold mb-4 md:mb-0">Mūsų<br />Portfolio</h2>
            <p className="text-zinc-600 dark:text-gray-400 md:max-w-md">
              Kiekvienas projektas - unikalus sprendimas, atspindintis kliento poreikius ir mūsų ekspertizę.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "E-Commerce Platforma",
                image: "/api/placeholder/600/400"
              },
              {
                title: "Kelionių Agentūra",
                image: "/api/placeholder/600/400"
              },
              {
                title: "Medicinos Klinika",
                image: "/api/placeholder/600/400"
              },
              {
                title: "Statybų Kompanija",
                image: "/api/placeholder/600/400"
              }
            ].map((project, index) => (
              <Card 
                key={index}
                className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-fuchsia-600 transition-all duration-300 group"
              >
                <CardBody className="p-0">
                  <img 
                    alt={project.title} 
                    className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    src={project.image}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Tech stack sekcija */}
      <div className="py-24 px-4 md:px-12 lg:px-24 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">Technologijos</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
            {[
              'React', 
              'Next.js', 
              'NextUI', 
              'Vite',
              'JavaScript',
              'TailwindCSS',
              'ShadcnUI',
              'MaterialUI'
            ].map((tech, index) => (
              <div 
                key={index}
                className="p-8 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-fuchsia-600 transition-all duration-300"
              >
                <span className="text-xl font-mono">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentPage;