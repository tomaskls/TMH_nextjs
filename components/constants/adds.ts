// app/reklamos/constants.ts
export interface Service {
    id: number;
    title: string;
    description: string;
    features: {
      id: number;
      title: string;
      items: string[];
    }[];
  }
  
  export const GOOGLE_ADS_SERVICES: Service[] = [
    {
      id: 1,
      title: 'Google Ads',
      description: 'Optimizuotos reklamos Google paieškos sistemoje ir partnerių tinkle',
      features: [
        {
          id: 1,
          title: 'Paieškos reklamos',
          items: [
            'Raktažodžių tyrimai ir optimizavimas',
            'Reklaminio teksto kūrimas ir A/B testavimas',
            'Kainos už paspaudimą (CPC) optimizavimas',
            'Konversijų sekimas ir ROI analizė'
          ]
        },
        {
          id: 2,
          title: 'Display reklamos',
          items: [
            'Vaizdinių reklamos maketų kūrimas',
            'Auditorijos segmentavimas',
            'Retargeting nustatymai',
            'Reklamos pozicijų optimizavimas'
          ]
        },
        {
          id: 3,
          title: 'Kampanijų valdymas',
          items: [
            'Reklamos grupių organizavimas',
            'Kampanijų strategijos nustatymas',
            'Biudžeto paskirstymas',
            'Google Analytics integracija'
          ]
        },
        {
          id: 4,
          title: 'Shopping kampanijos',
          items: [
            'Produktų feed optimizavimas',
            'Produktų grupių struktūros kūrimas',
            'Smart Shopping kampanijų valdymas',
            'Kryžminio pardavimo strategijos'
          ]
        }
      ]
    }
  ];
  
  export const META_ADS_SERVICES: Service[] = [
    {
      id: 2,
      title: 'Meta Ads',
      description: 'Efektyvios reklamos Facebook ir Instagram platformose',
      features: [
        {
          id: 5,
          title: 'Feed reklamos',
          items: [
            'Reklaminio turinio kūrimas',
            'Vaizdo ir teksto formatai',
            'Karuselių reklamos',
            'Stories reklamos'
          ]
        },
        {
          id: 6,
          title: 'Auditorijų valdymas',
          items: [
            'Interests-based targetavimas',
            'Custom auditorijos kūrimas',
            'Lookalike auditorijos',
            'Retargeting auditorijos'
          ]
        },
        {
          id: 7,
          title: 'Kampanijų optimizavimas',
          items: [
            'Biudžeto planavimas',
            'Delivery optimizavimas',
            'A/B testavimas',
            'Kainos optimizavimas (CPC, CPM)'
          ]
        },
        {
          id: 8,
          title: 'Tracking ir analitika',
          items: [
            'Meta Pixel įdiegimas',
            'Konversijų sekimas',
            'Events konfigūracija',
            'CAPI integracija'
          ]
        }
      ]
    }
  ];