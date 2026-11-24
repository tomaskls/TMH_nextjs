import Image from 'next/image';
import {
  CreditCard,
  GraduationCap,
  Import,
  Languages,
  Palette,
  Puzzle,
  Search,
  Truck,
} from 'lucide-react';

import { CtaBand } from '@/components/sections/CtaBand';
import { Faq, type FaqItem } from '@/components/sections/Faq';
import { FeatureGrid, PageHero } from '@/components/sections/PageHero';
import { ProjectGrid } from '@/components/sections/Portfolio';
import { ProcessSteps } from '@/components/sections/Process';
import { Accent, ButtonLink, Check, SectionHeader } from '@/components/ui';
import { PRICING } from '@/config/pricing';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Shopify el. parduotuvių kūrimas ir priežiūra',
  description:
    'Kuriame Shopify el. parduotuves prekybai Lietuvoje ir užsienyje: dizainas, prekių importas, mokėjimai, pristatymas, kelios kalbos, SEO. Perkeliame parduotuves į Shopify ir jas prižiūrime.',
  path: '/shopify-el-parduotuves',
});

const FEATURES = [
  {
    icon: Palette,
    title: 'Dizainas pagal prekės ženklą',
    text: 'Pritaikome Shopify temą prie jūsų logotipo, spalvų ir nuotraukų.',
  },
  {
    icon: Import,
    title: 'Prekių katalogas',
    text: 'Įkeliame prekes, variantus ir nuotraukas – rankomis arba iš tiekėjų duomenų.',
  },
  {
    icon: CreditCard,
    title: 'Mokėjimai',
    text: 'Kortelės, bankų nuorodos ir kiti atsiskaitymo būdai, įprasti jūsų pirkėjų šalyse.',
  },
  {
    icon: Truck,
    title: 'Pristatymas ir paštomatai',
    text: 'Paštomatai ir kurjeriai (Omniva, DPD, LP Express, Venipak ir kt.), pristatymo kainos pagal šalį.',
  },
  {
    icon: Languages,
    title: 'Kelios kalbos ir valiutos',
    text: 'Parduotuvė ir laiškai pirkėjams lietuvių ar kitomis kalbomis, kainos – pirkėjo valiuta.',
  },
  {
    icon: Search,
    title: 'SEO ir greitis',
    text: 'Tvarkinga kategorijų struktūra, meta aprašymai ir optimizuotos nuotraukos.',
  },
  {
    icon: Puzzle,
    title: 'Programėlės ir integracijos',
    text: 'Parenkame reikalingas Shopify programėles, o prireikus sujungiame parduotuvę su tiekėjais ar apskaita.',
  },
  {
    icon: GraduationCap,
    title: 'Mokymai',
    text: 'Parodome, kaip patiems keisti prekes, kainas, akcijas ir turinį.',
  },
];

const FAQ: FaqItem[] = [
  {
    q: 'Kiek laiko trunka sukurti el. parduotuvę?',
    a: 'Dažniausiai 3–6 savaites. Terminas priklauso nuo prekių kiekio, dizaino ir reikalingų integracijų. Tikslų terminą nurodome pasiūlyme.',
  },
  {
    q: 'Kiek kainuoja pats Shopify?',
    a: 'Shopify planas mokamas tiesiogiai Shopify kas mėnesį, o jo kaina priklauso nuo pasirinkto plano. Padedame išsirinkti planą pagal jūsų poreikius.',
  },
  {
    q: 'Ar galėsiu pats keisti prekes ir turinį?',
    a: 'Taip. Shopify valdymas paprastas, o paleidę parduotuvę parodome, kaip keisti prekes, kainas, akcijas ir puslapių turinį.',
  },
  {
    q: 'Ar privaloma užsisakyti priežiūrą?',
    a: 'Ne. Priežiūrą galima užsisakyti bet kada – ji praverčia, jei parduotuvėje nuolat reikia pakeitimų arba norite turėti, kam paskambinti, kai kas nors neveikia.',
  },
];

export default function ShopifyPage() {
  return (
    <>
      <PageHero
        aside={<HeroCollage />}
        description="Sukuriame parduotuvę pagal jūsų prekės ženklą, įkeliame prekes, prijungiame mokėjimus ir pristatymą, paruošiame laiškus pirkėjams – lietuvių ar kitomis kalbomis. Baigę parodome, kaip ją valdyti patiems."
        eyebrow="Kūrimas · Perkėlimas · Priežiūra"
        price={PRICING.shopify.price}
        title={
          <>
            <Accent>Shopify</Accent> el. parduotuvių kūrimas
          </>
        }
      />

      <section className="container-x pb-24 md:pb-32">
        <SectionHeader
          className="mb-14"
          eyebrow="Kas įeina"
          title="Ką padarome kurdami parduotuvę"
        />
        <FeatureGrid items={FEATURES} />
      </section>

      {/* PERKĖLIMAS */}
      <section className="container-x grid gap-12 pb-24 md:pb-32 lg:grid-cols-2 lg:items-center">
        <SectionHeader
          description="Jau turite parduotuvę WooCommerce, PrestaShop, Wix ar kitoje platformoje? Perkeliame duomenis, o senus adresus nukreipiame į naujus, kad Google ir pirkėjai rastų tuos pačius puslapius."
          eyebrow="Perkėlimas"
          title={
            <>
              Perkėlimas į <Accent>Shopify</Accent>
            </>
          }
        />
        <ul className="grid gap-3 rounded-3xl border border-line bg-white p-7 sm:p-9">
          {[
            'Prekės, variantai, nuotraukos ir kategorijos',
            'Klientų paskyros ir užsakymų istorija',
            'Senų adresų nukreipimai (301) į naujus puslapius',
            'Mokėjimų, pristatymo ir mokesčių nustatymai',
            'Testavimas prieš perjungiant domeną',
          ].map((t) => (
            <li key={t} className="flex gap-3 text-[15px] leading-snug">
              <Check />
              {t}
            </li>
          ))}
        </ul>
      </section>

      {/* PRIEŽIŪRA */}
      <section className="bg-ink bg-dots py-24 text-paper md:py-32" id="prieziura">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader
              dark
              description="Mėnesinis planas: atliekame pakeitimus, atnaujiname temą ir programėles, sekame klaidas ir padedame, kai kas nors neveikia."
              eyebrow="Priežiūra"
              title={
                <>
                  Parduotuvės <Accent>priežiūra</Accent>
                </>
              }
            />
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink arrow href="/kontaktai" variant="lime">
                Užsakyti priežiūrą
              </ButtonLink>
              <span className="text-paper/60">
                {PRICING.maintenance.price} {PRICING.maintenance.note}
              </span>
            </div>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {[
              ['Pakeitimai', 'Naujos skiltys, puslapiai, akcijų juostos ir kiti smulkūs darbai.'],
              ['Atnaujinimai', 'Atnaujiname temą ir programėles, patikrinę, kad niekas nesugedo.'],
              ['Stebėsena', 'Sekame puslapių greitį ir klaidas.'],
              ['Pagalba', 'Darbo dienomis atsakome į klausimus ir sprendžiame iškilusias bėdas.'],
            ].map(([title, text]) => (
              <li key={title} className="bg-ink p-7">
                <h3 className="text-lg font-medium text-paper">{title}</h3>
                <p className="mt-2 leading-relaxed text-paper/60">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x py-24 md:py-32">
        <SectionHeader
          className="mb-14"
          eyebrow="Darbai"
          title={
            <>
              Mūsų sukurtos <Accent>Shopify</Accent> parduotuvės
            </>
          }
        />
        <ProjectGrid kind="shopify" />
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
        text="Papasakokite apie savo prekes ir planus – pasiūlysime sprendimą ir pasakysime kainą."
        title={
          <>
            Aptarkime jūsų <Accent>parduotuvę</Accent>
          </>
        }
      />
    </>
  );
}

function HeroCollage() {
  return (
    <div aria-hidden className="relative hidden h-[460px] lg:block">
      <BrowserShot
        className="absolute top-0 right-0 w-[88%] rotate-[2deg]"
        domain="epardavejas.lt"
        src="/projects/epardavejas.webp"
      />
      <BrowserShot
        className="absolute bottom-0 left-0 w-[80%] -rotate-[3deg]"
        domain="andromedakristalai.lt"
        src="/projects/andromedakristalai.webp"
      />
      <span className="absolute right-6 bottom-10 rotate-[4deg] rounded-full bg-lime px-4 py-2 text-sm font-medium shadow-lg">
        + automatizuoti užsakymai
      </span>
    </div>
  );
}

function BrowserShot({
  src,
  domain,
  className,
}: {
  src: string;
  domain: string;
  className: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-line bg-white shadow-[0_30px_60px_-25px_rgb(15_16_13/0.35)] ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
        <span className="size-2 rounded-full bg-paper-2" />
        <span className="size-2 rounded-full bg-paper-2" />
        <span className="size-2 rounded-full bg-paper-2" />
        <span className="ml-2 font-mono text-[10px] text-muted">{domain}</span>
      </div>
      <div className="relative aspect-[16/10]">
        <Image
          fill
          preload
          alt=""
          className="object-cover object-top"
          sizes="480px"
          src={src}
        />
      </div>
    </div>
  );
}
