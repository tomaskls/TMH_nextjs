"use client"
import React from "react";
import { Card, CardBody, CardFooter, Button } from "@nextui-org/react";

interface SEOService {
  title: string;
  services: string[];
}

const seoServices: SEOService[] = [
  {
    title: "Techninė SEO optimizacija",
    services: [
      "Svetainės greičio optimizavimas",
      "Mobiliosios versijos optimizavimas",
      "Svetainės struktūros gerinimas",
      "XML sitemap sukūrimas",
      "Robots.txt konfigūravimas"
    ]
  },
  {
    title: "Turinio optimizacija",
    services: [
      "Raktažodžių tyrimas ir analizė",
      "Turinio kūrimas ir optimizavimas",
      "Meta aprašymų rašymas",
      "URL struktūros optimizavimas",
      "Paveikslėlių optimizavimas"
    ]
  },
  {
    title: "Off-page SEO",
    services: [
      "Nuorodų strategijos kūrimas",
      "Kokybišku backlinks gavimas",
      "Socialinių tinklų optimizacija",
      "Google My Business tvarkymas",
      "Lokalios SEO strategijos"
    ]
  },
  {
    title: "Analitika ir stebėjimas",
    services: [
      "Google Analytics įdiegimas",
      "Google Search Console naudojimas",
      "Pozicijų stebėjimas",
      "Konkurentų analizė",
      "Reguliarios ataskaitos"
    ]
  }
];

const SEOServicesCards = () => {
  const handleAuditRequest = () => {
    console.log("Užsakytas nemokamas auditas");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {seoServices.map((service, index) => (
        <Card 
          key={index} 
          className="group p-4 border-none
            bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
            dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
            hover:from-purple-900/90 hover:via-pink-900/90 hover:to-blue-900/90
            dark:hover:from-purple-950 dark:hover:via-pink-950 dark:hover:to-blue-950
            transition-all duration-500 
            shadow-lg shadow-slate-900/50
            dark:shadow-black/50
            backdrop-blur-sm
            before:absolute before:inset-0 before:z-0
            before:bg-gradient-to-br before:from-purple-500/10 before:via-pink-500/10 before:to-blue-500/10
            dark:before:from-purple-400/5 dark:before:via-pink-400/5 dark:before:to-blue-400/5
            before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
        >
          <CardBody className="relative z-10">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r 
              from-purple-200 to-blue-200
              dark:from-purple-300 dark:to-blue-300
              bg-clip-text text-transparent">
              {service.title}
            </h3>
            <ul className="list-disc pl-4 space-y-2">
              {service.services.map((item, i) => (
                <li key={i} 
                  className="text-sm text-slate-200 
                    dark:text-slate-300
                    transition-colors duration-200">
                  {item}
                </li>
              ))}
            </ul>
          </CardBody>
          <CardFooter className="relative z-10">
            <Button 
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500
                dark:from-purple-400 dark:to-blue-400
                hover:from-purple-600 hover:to-blue-600
                dark:hover:from-purple-500 dark:hover:to-blue-500
                text-white font-semibold
                shadow-lg shadow-purple-900/30
                dark:shadow-black/30
                transform transition-all duration-300 
                hover:scale-[1.02] active:scale-[0.98]
                hover:shadow-xl"
              onClick={handleAuditRequest}
            >
              Užsakyti nemokamą auditą
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default SEOServicesCards;