export type Project = {
  name: string;
  url: string;
  domain: string;
  image: string;
  kind: 'shopify' | 'website';
  summary: string;
};

export const PROJECTS: Project[] = [
  {
    name: 'VETprekės.lt',
    url: 'https://www.vetprekes.lt',
    domain: 'vetprekes.lt',
    image: '/projects/vetprekes.png',
    kind: 'shopify',
    summary: 'Veterinarijos ir gyvūnų prekių el. parduotuvė.',
  },
  {
    name: 'ePardavėjas',
    url: 'https://epardavejas.lt',
    domain: 'epardavejas.lt',
    image: '/projects/epardavejas.png',
    kind: 'shopify',
    summary:
      'Prekės namams, sodui ir laisvalaikiui – didelis katalogas iš tiekėjų duomenų.',
  },
  {
    name: 'Andromeda kristalai',
    url: 'https://andromedakristalai.lt',
    domain: 'andromedakristalai.lt',
    image: '/projects/andromedakristalai.png',
    kind: 'shopify',
    summary: 'Kristalų, papuošalų ir namų dekoro el. parduotuvė.',
  },
  {
    name: 'Laimingos rankos',
    url: 'https://www.laimingosrankos.lt',
    domain: 'laimingosrankos.lt',
    image: '/projects/laimingosrankos.png',
    kind: 'shopify',
    summary: 'Grožio studijos el. parduotuvė: rankų ir kojų priežiūros prekės.',
  },
  {
    name: 'OEM originalios dalys',
    url: 'https://odalys.lt',
    domain: 'odalys.lt',
    image: '/projects/odalys.png',
    kind: 'shopify',
    summary: 'Originalių automobilių dalių katalogas su paieška pagal OEM kodą.',
  },
  {
    name: 'Neringos siuvimo studija',
    url: 'https://www.neringos-siuvimo-studija.lt',
    domain: 'neringos-siuvimo-studija.lt',
    image: '/projects/studija.png',
    kind: 'website',
    summary: 'Siuvimo ir drabužių taisymo studijos svetainė.',
  },
  {
    name: 'U2 Motors',
    url: 'https://www.u2motors.lt',
    domain: 'u2motors.lt',
    image: '/projects/u2.png',
    kind: 'website',
    summary: 'Autoserviso svetainė: paslaugos, kainos ir registracija.',
  },
  {
    name: 'Šilų tvenkinys',
    url: 'https://silu-tvenkinys.vercel.app',
    domain: 'silu-tvenkinys.vercel.app',
    image: '/projects/silu-tvenkinys.png',
    kind: 'website',
    summary: 'Karpių žūklės tvenkinio svetainė su sektorių užimtumu internetu.',
  },
];
