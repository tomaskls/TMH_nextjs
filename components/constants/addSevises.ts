export interface AdService {
  title: string;
  description: string;
  features: string[];
}

export const googleServices: AdService[] = [
  {
    title: 'Paieškos reklamos',
    description: 'Efektyvios Google paieškos reklamos kampanijos',
    features: [
      'Raktažodžių tyrimai ir optimizavimas',
      'Reklaminio teksto kūrimas ir A/B testavimas',
      'Kainos už paspaudimą (CPC) optimizavimas',
      'Konversijų sekimas ir ROI analizė',
    ],
  },
  {
    title: 'Display reklamos',
    description: 'Vizualinės reklamos Google partnerių tinkle',
    features: [
      'Vaizdinių reklamos maketų kūrimas',
      'Auditorijos segmentavimas',
      'Retargeting nustatymai',
      'Reklamos pozicijų optimizavimas',
    ],
  },
  {
    title: 'Kampanijų valdymas',
    description: 'Pilnas Google Ads kampanijų administravimas',
    features: [
      'Reklamos grupių organizavimas',
      'Kampanijų strategijos nustatymas',
      'Biudžeto paskirstymas',
      'Google Analytics integracija',
    ],
  },
  {
    title: 'Shopping kampanijos',
    description: 'El. parduotuvių reklamos sprendimai',
    features: [
      'Produktų feed optimizavimas',
      'Produktų grupių struktūros kūrimas',
      'Smart Shopping kampanijų valdymas',
      'Kryžminio pardavimo strategijos',
    ],
  },
];

export const metaServices: AdService[] = [
  {
    title: 'Feed reklamos',
    description: "Efektyvios reklamos Facebook ir Instagram feed'uose",
    features: [
      'Reklaminio turinio kūrimas',
      'Vaizdo ir teksto formatai',
      'Karuselių reklamos',
      'Stories reklamos',
    ],
  },
  {
    title: 'Auditorijų valdymas',
    description: 'Tikslinis auditorijos targetavimas',
    features: [
      'Interests-based targetavimas',
      'Custom auditorijos kūrimas',
      'Lookalike auditorijos',
      'Retargeting auditorijos',
    ],
  },
  {
    title: 'Kampanijų optimizavimas',
    description: 'Pilnas Meta Ads kampanijų valdymas',
    features: [
      'Biudžeto planavimas',
      'Delivery optimizavimas',
      'A/B testavimas',
      'Kainos optimizavimas (CPC, CPM)',
    ],
  },
  {
    title: 'Tracking ir analitika',
    description: 'Išsami kampanijų analitika',
    features: [
      'Meta Pixel įdiegimas',
      'Konversijų sekimas',
      'Events konfigūracija',
      'CAPI integracija',
    ],
  },
];
