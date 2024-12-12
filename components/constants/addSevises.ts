// data/services.ts
import { AdService } from '@/components/constants/types';

export const googleServices: AdService[] = [
  {
    title: "Paieškos reklamos",
    description: "Efektyvios Google paieškos reklamos kampanijos",
    features: [
      "Raktažodžių tyrimai ir optimizavimas",
      "Reklaminio teksto kūrimas ir A/B testavimas",
      "Kainos už paspaudimą (CPC) optimizavimas",
      "Konversijų sekimas ir ROI analizė"
    ]
  },
  {
    title: "Display reklamos",
    description: "Vizualinės reklamos Google partnerių tinkle",
    features: [
      "Vaizdinių reklamos maketų kūrimas",
      "Auditorijos segmentavimas",
      "Retargeting nustatymai",
      "Reklamos pozicijų optimizavimas"
    ]
  },
  {
    title: "Kampanijų valdymas",
    description: "Pilnas Google Ads kampanijų administravimas",
    features: [
      "Reklamos grupių organizavimas",
      "Kampanijų strategijos nustatymas",
      "Biudžeto paskirstymas",
      "Google Analytics integracija"
    ]
  },
  {
    title: "Shopping kampanijos",
    description: "El. parduotuvių reklamos sprendimai",
    features: [
      "Produktų feed optimizavimas",
      "Produktų grupių struktūros kūrimas",
      "Smart Shopping kampanijų valdymas",
      "Kryžminio pardavimo strategijos"
    ]
  },
  {
    title: "Video reklamos",
    description: "YouTube ir video reklamos sprendimai",
    features: [
      "Video reklamos strategijos kūrimas",
      "YouTube kanalų optimizavimas",
      "TrueView reklamos kampanijos",
      "Video remarketing nustatymai"
    ]
  },
  {
    title: "Performance Max",
    description: "Automatizuotos visų kanalų kampanijos",
    features: [
      "Dirbtinio intelekto optimizavimas",
      "Visų Google kanalų integracija",
      "Asset groups kūrimas",
      "Rezultatų stebėjimas realiu laiku"
    ]
  }
];

export const metaServices: AdService[] = [
  {
    title: "Feed reklamos",
    description: "Efektyvios reklamos Facebook ir Instagram feed'uose",
    features: [
      "Reklaminio turinio kūrimas",
      "Vaizdo ir teksto formatai",
      "Karuselių reklamos",
      "Stories reklamos"
    ]
  },
  {
    title: "Auditorijų valdymas",
    description: "Tikslinis auditorijos targetavimas",
    features: [
      "Interests-based targetavimas",
      "Custom auditorijos kūrimas",
      "Lookalike auditorijos",
      "Retargeting auditorijos"
    ]
  },
  {
    title: "Kampanijų optimizavimas",
    description: "Pilnas Meta Ads kampanijų valdymas",
    features: [
      "Biudžeto planavimas",
      "Delivery optimizavimas",
      "A/B testavimas",
      "Kainos optimizavimas (CPC, CPM)"
    ]
  },
  {
    title: "Tracking ir analitika",
    description: "Išsami kampanijų analitika",
    features: [
      "Meta Pixel įdiegimas",
      "Konversijų sekimas",
      "Events konfigūracija",
      "CAPI integracija"
    ]
  },
  {
    title: "Instagram Shopping",
    description: "E-commerce sprendimai Instagrame",
    features: [
      "Produktų katalogo integracija",
      "Shopping tags nustatymai",
      "Instagram Shop optimizavimas",
      "Shopping Insights analizė"
    ]
  },
  {
    title: "WhatsApp integracija",
    description: "WhatsApp verslo sprendimai",
    features: [
      "WhatsApp Business API setup",
      "Automatiniai atsakymai",
      "Click-to-WhatsApp ads",
      "Komunikacijos automatizavimas"
    ]
  },
  {
    title: "Messenger reklamos",
    description: "Facebook Messenger reklamos kampanijos",
    features: [
      "Messenger chatbot kūrimas",
      "Sponsored messages",
      "Click-to-Messenger ads",
      "Lead generation per Messenger"
    ]
  },
  {
    title: "Reels reklamos",
    description: "Trumpo formato video reklamos",
    features: [
      "Reels content strategija",
      "Vertikalaus video optimizavimas",
      "Audio ir muzikos integracija",
      "Interaktyvūs elementai"
    ]
  }
];

// Papildomi eksportai specifiniams poreikiams
export const getAllServices = () => [...googleServices, ...metaServices];

export const getServiceByTitle = (title: string): AdService | undefined => {
  return getAllServices().find(service => service.title === title);
};

export const getServicesByPlatform = (platform: 'google' | 'meta') => {
  return platform === 'google' ? googleServices : metaServices;
};

// Helpers pagal feature
export const getServicesWithFeature = (feature: string): AdService[] => {
  return getAllServices().filter(service => 
    service.features.some(f => f.toLowerCase().includes(feature.toLowerCase()))
  );
};