import {
  Gauge,
  FileText,
  Globe,
  LayoutTemplate,
  MessageSquare,
  PenTool,
  Search,
  Smartphone,
} from 'lucide-react';

import { CtaBand } from '@/components/sections/CtaBand';
import { Faq, type FaqItem } from '@/components/sections/Faq';
import { FeatureGrid, PageHero } from '@/components/sections/PageHero';
import { ProjectGrid } from '@/components/sections/Portfolio';
import { ProcessSteps } from '@/components/sections/Process';
import { Accent, SectionHeader } from '@/components/ui';
import { PRICING } from '@/config/pricing';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Reprezentacinių svetainių kūrimas',
  description:
    'Kuriame svetaines paslaugų verslui: individualus dizainas, mobili versija, užklausų forma, SEO pagrindai.',
  path: '/svetainiu-kurimas',
});

const FEATURES = [
  {
    icon: PenTool,
    title: 'Individualus dizainas',
    text: 'Dizainą kuriame pagal jūsų verslą, logotipą ir spalvas.',
  },
  {
    icon: Smartphone,
    title: 'Mobili versija',
    text: 'Svetainė pritaikyta telefonams ir planšetėms.',
  },
  {
    icon: Gauge,
    title: 'Greitis',
    text: 'Kuriame su Next.js, todėl puslapiai užsikrauna greitai.',
  },
  {
    icon: Search,
    title: 'SEO pagrindai',
    text: 'Tvarkinga struktūra, meta duomenys ir svetainės žemėlapis Google paieškai.',
  },
  {
    icon: MessageSquare,
    title: 'Užklausų forma',
    text: 'Užklausos ateina į jūsų el. paštą, o telefono numerį galima paspausti ir skambinti.',
  },
  {
    icon: FileText,
    title: 'Tekstų redagavimas',
    text: 'Padedame suredaguoti ar parašyti tekstus, kad jie būtų aiškūs lankytojams.',
  },
  {
    icon: Globe,
    title: 'Domenas ir talpinimas',
    text: 'Padedame su domenu, talpinimu ir el. pašto nustatymais.',
  },
  {
    icon: LayoutTemplate,
    title: 'Lengvi pakeitimai',
    text: 'Prireikus atnaujiname tekstus, kainas ir nuotraukas.',
  },
];

const FAQ: FaqItem[] = [
  {
    q: 'Kiek laiko trunka sukurti svetainę?',
    a: 'Nedidelė reprezentacinė svetainė paprastai paruošiama per 2–3 savaites nuo turinio gavimo.',
  },
  {
    q: 'Ar reikia paruošti tekstus ir nuotraukas?',
    a: 'Geriausia, jei turite savo nuotraukų ir pagrindinę informaciją. Tekstus padedame suredaguoti ar parašyti, kad jie būtų aiškūs ir tinkami Google paieškai.',
  },
  {
    q: 'O jei vėliau norėsiu el. parduotuvės?',
    a: 'Galime – Shopify parduotuvės yra mūsų pagrindinė sritis. Galime ją sukurti šalia svetainės arba perkelti visą svetainę į Shopify.',
  },
];

export default function WebsitesPage() {
  return (
    <>
      <PageHero
        description="Svetainės paslaugų verslui: nuo vieno puslapio vizitinės kortelės iki kelių puslapių svetainės su užklausų forma."
        eyebrow="Svetainės paslaugų verslui"
        price={PRICING.website.price}
        title={
          <>
            Reprezentacinių <Accent>svetainių</Accent> kūrimas
          </>
        }
      />

      <section className="container-x pb-24 md:pb-32">
        <SectionHeader
          className="mb-14"
          eyebrow="Kas įeina"
          title="Ką padarome kurdami svetainę"
        />
        <FeatureGrid items={FEATURES} />
      </section>

      <section className="container-x pb-24 md:pb-32">
        <SectionHeader
          className="mb-14"
          eyebrow="Darbai"
          title={
            <>
              Mūsų sukurtos <Accent>svetainės</Accent>
            </>
          }
        />
        <ProjectGrid kind="website" />
      </section>

      <section className="container-x pb-24 md:pb-32">
        <SectionHeader className="mb-14" eyebrow="Kaip dirbame" title="Nuo pokalbio iki paleidimo" />
        <ProcessSteps />
      </section>

      <section className="container-x grid gap-12 pb-24 md:pb-32 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader eyebrow="DUK" title="Dažni klausimai" />
        <Faq items={FAQ} />
      </section>

      <CtaBand
        text="Papasakokite apie savo verslą – pasiūlysime svetainės struktūrą ir pasakysime kainą."
        title={
          <>
            Aptarkime jūsų <Accent>svetainę</Accent>
          </>
        }
      />
    </>
  );
}
