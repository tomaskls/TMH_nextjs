import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

import { AutomationFlow } from '@/components/sections/AutomationFlow';
import { AutomationGrid } from '@/components/sections/Automations';
import { CtaBand } from '@/components/sections/CtaBand';
import { Faq, type FaqItem } from '@/components/sections/Faq';
import { ProjectGrid } from '@/components/sections/Portfolio';
import { PricingCards } from '@/components/sections/Pricing';
import { ProcessSteps } from '@/components/sections/Process';
import { Accent, ButtonLink, Check, Eyebrow, SectionHeader } from '@/components/ui';
import { PROJECTS } from '@/config/projects';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const FAQ: FaqItem[] = [
  {
    q: 'Kodėl verta rinktis Shopify, o ne WooCommerce ar kitą platformą?',
    a: 'Shopify nereikia rūpintis serveriais, atnaujinimais ar saugumu – tai daro pati platforma. Parduotuvę patogu valdyti net iš telefono, o tūkstančiai programėlių leidžia pridėti beveik bet kokį funkcionalumą.',
  },
  {
    q: 'Kiek laiko trunka sukurti el. parduotuvę?',
    a: 'Dažniausiai 3–6 savaites. Terminas priklauso nuo prekių kiekio, dizaino ir reikalingų integracijų. Tikslų terminą nurodome pasiūlyme.',
  },
  {
    q: 'Ar galite perkelti mano esamą parduotuvę į Shopify?',
    a: 'Taip. Perkeliame prekes, klientus ir užsakymų istoriją iš WooCommerce, PrestaShop, Wix ir kitų platformų, o senus adresus nukreipiame į naujus, kad Google ir pirkėjai rastų tuos pačius puslapius.',
  },
  {
    q: 'Ar parduotuvė gali parduoti ne tik Lietuvoje?',
    a: 'Taip. Shopify leidžia vienoje parduotuvėje turėti kelias kalbas ir valiutas, todėl galite parduoti Lietuvoje, kitose Baltijos šalyse ar visoje ES. Paruošiame vertimus, laiškus pirkėjams reikiamomis kalbomis, mokėjimo būdus ir pristatymą kiekvienai šaliai. Lietuvos pirkėjams prijungiame įprastus paštomatus ir kurjerius (Omniva, DPD, LP Express, Venipak).',
  },
  {
    q: 'Ką galima automatizuoti mano parduotuvėje?',
    a: 'Dažniausiai – užsakymų perdavimą tiekėjams, likučių ir kainų atnaujinimą, siuntų lipdukus, pranešimus pirkėjams ir apskaitą.',
  },
  {
    q: 'Kam priklausys parduotuvė?',
    a: 'Jums. Sukūrę parduotuvę, perduodame ją jums kartu su visu turiniu ir duomenimis.',
  },
];

export default function HomePage() {
  const shopNames = PROJECTS.filter((p) => p.kind === 'shopify').map(
    (p) => p.domain
  );

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-grid-light [mask-image:radial-gradient(ellipse_at_top_left,black_25%,transparent_70%)]"
        />
        <div className="container-x grid items-center gap-16 pt-12 pb-20 md:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28">
          <div>
            <Eyebrow>Shopify el. parduotuvės · Automatizacija</Eyebrow>
            <h1 className="mt-6 text-balance text-[2.9rem] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-7xl xl:text-[5.25rem]">
              Shopify el. parduotuvės ir jų <Accent>automatizacija</Accent>
            </h1>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
              Kuriame Shopify el. parduotuves ir sujungiame jas su tiekėjais,
              kurjeriais ir apskaitos programa, kad užsakymų, likučių ir
              sąskaitų nereikėtų tvarkyti rankomis.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink arrow href="/kontaktai">
                Aptarti projektą
              </ButtonLink>
              <ButtonLink href="/#darbai" variant="outline">
                Peržiūrėti darbus
              </ButtonLink>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[15px]">
              {['Aiški kaina iš anksto', 'Priežiūra po paleidimo'].map(
                (t) => (
                  <li key={t} className="flex items-center gap-2.5">
                    <Check />
                    {t}
                  </li>
                )
              )}
            </ul>
          </div>
          <AutomationFlow />
        </div>
      </section>

      {/* KLIENTAI */}
      <section aria-label="Mūsų sukurtos parduotuvės" className="border-y border-line py-7">
        <div className="container-x flex flex-col gap-4 md:flex-row md:items-center md:gap-10">
          <p className="shrink-0 font-mono text-xs uppercase tracking-[0.14em] text-muted">
            Sukūrėme ir prižiūrime
          </p>
          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <ul className="flex w-max animate-marquee gap-12 pr-12">
              {[...shopNames, ...shopNames].map((name, i) => (
                <li
                  key={`${name}-${i}`}
                  aria-hidden={i >= shopNames.length}
                  className="text-2xl font-semibold tracking-tight whitespace-nowrap text-ink/35"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PASLAUGOS */}
      <section className="container-x py-24 md:py-32" id="paslaugos">
        <SectionHeader
          description="Kuriame Shopify el. parduotuves, jas automatizuojame ir prižiūrime. Paslaugų verslui kuriame ir reprezentacines svetaines."
          eyebrow="Paslaugos"
          title={
            <>
              Daugiausia dirbame su <Accent>Shopify</Accent>
            </>
          }
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          <ServiceCard
            className="border border-line bg-white lg:col-span-2"
            href="/shopify-el-parduotuves"
            index="01"
            text="Sukuriame parduotuvę pagal jūsų prekės ženklą ir paruošiame ją prekybai: mokėjimai, pristatymas, laiškai pirkėjams – lietuvių ar kitomis kalbomis."
            title="Shopify el. parduotuvių kūrimas"
          >
            <ul className="flex flex-wrap gap-2">
              {['Dizainas', 'Prekių importas', 'Mokėjimai', 'Paštomatai', 'Kelios kalbos', 'SEO', 'Perkėlimas į Shopify'].map(
                (t) => (
                  <li
                    key={t}
                    className="rounded-full border border-line px-3 py-1 text-sm text-muted"
                  >
                    {t}
                  </li>
                )
              )}
            </ul>
          </ServiceCard>

          <ServiceCard
            dark
            className="bg-ink bg-dots text-paper lg:row-span-2"
            href="/shopify-automatizacija"
            index="02"
            text="Sujungiame parduotuvę su tiekėjais, kurjeriais ir apskaita, kad užsakymai būtų vykdomi be rankinio darbo."
            title="Automatizacija ir integracijos"
          >
            <ul className="space-y-3">
              {[
                'Užsakymai tiekėjams ir dropshipping',
                'Likučių ir kainų sinchronizacija',
                'Siuntų lipdukai ir kurjeriai',
                'Integracija su apskaita',
                'Prekių vertimai su AI',
              ].map((t) => (
                <li key={t} className="flex gap-3 text-[15px] text-paper/85">
                  <Check dark />
                  {t}
                </li>
              ))}
            </ul>
          </ServiceCard>

          <ServiceCard
            className="border border-line bg-white"
            href="/shopify-el-parduotuves#prieziura"
            index="03"
            text="Pakeitimai, nauji funkcionalumai, temos ir programėlių atnaujinimai, pagalba darbo dienomis."
            title="Priežiūra ir tobulinimas"
          />

          <ServiceCard
            className="bg-lime"
            href="/svetainiu-kurimas"
            index="04"
            text="Svetainės paslaugų verslui: nuo vieno puslapio vizitinės kortelės iki kelių puslapių su užklausų forma."
            title="Reprezentacinės svetainės"
          />
        </div>
      </section>

      {/* AUTOMATIZACIJA */}
      <section className="bg-ink bg-dots py-24 text-paper md:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeader
              dark
              description="Darbai, kuriuos Shopify parduotuvėse automatizuojame dažniausiai – nuo užsakymo gavimo iki sąskaitos apskaitoje."
              eyebrow="Automatizacija"
              title={
                <>
                  Ką galima <Accent>automatizuoti</Accent>
                </>
              }
            />
            <ButtonLink
              arrow
              className="shrink-0"
              href="/shopify-automatizacija"
              variant="outline-light"
            >
              Plačiau apie automatizaciją
            </ButtonLink>
          </div>

          <div className="mt-14">
            <AutomationGrid dark />
          </div>

          <figure className="mt-4 grid gap-8 rounded-3xl bg-lime p-7 text-ink sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink/60">
                Pavyzdys iš praktikos
              </p>
              <blockquote className="mt-5 max-w-4xl text-balance text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
                Vienoje iš mūsų prižiūrimų parduotuvių užsakymai automatiškai
                paskirstomi skirtingiems tiekėjams, likučiai sinchronizuojami su
                jų B2B sistemomis, o pirkimų sąskaitos keliauja tiesiai į
                apskaitą.
              </blockquote>
            </div>
            <Link
              className="group inline-flex items-center gap-2 font-medium"
              href="/shopify-automatizacija#pavyzdys"
            >
              Plačiau
              <ArrowRight
                aria-hidden
                className="size-4 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </figure>
        </div>
      </section>

      {/* DARBAI */}
      <section className="container-x py-24 md:py-32" id="darbai">
        <SectionHeader
          description="Shopify parduotuvės ir svetainės, kurias sukūrėme. Dalį jų prižiūrime iki šiol."
          eyebrow="Darbai"
          title={
            <>
              Mūsų <Accent>darbai</Accent>
            </>
          }
        />
        <div className="mt-14">
          <ProjectGrid />
        </div>
      </section>

      {/* PROCESAS */}
      <section className="container-x pb-24 md:pb-32" id="procesas">
        <SectionHeader
          className="mb-14"
          eyebrow="Kaip dirbame"
          title="Nuo pokalbio iki paleidimo"
        />
        <ProcessSteps />
      </section>

      {/* KAINOS */}
      <section className="border-t border-line bg-paper-2/50 py-24 md:py-32" id="kainos">
        <div className="container-x">
          <SectionHeader
            className="mb-14"
            description="Pradinės kainos. Galutinę kainą nurodome pasiūlyme – ji nesikeičia, jei nesikeičia darbų apimtis."
            eyebrow="Kainos"
            title={
              <>
                Kiek tai <Accent>kainuoja</Accent>
              </>
            }
          />
          <PricingCards />
        </div>
      </section>

      {/* DUK */}
      <section className="container-x grid gap-12 py-24 md:py-32 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader eyebrow="DUK" title="Dažni klausimai" />
        <Faq items={FAQ} />
      </section>

      <CtaBand />
    </>
  );
}

function ServiceCard({
  index,
  title,
  text,
  href,
  className,
  dark = false,
  children,
}: {
  index: string;
  title: string;
  text: string;
  href: string;
  className: string;
  dark?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <Link
      className={`group relative flex flex-col rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-9 ${className}`}
      href={href}
    >
      <div className="flex items-start justify-between">
        <span className={`font-mono text-sm ${dark ? 'text-paper/45' : 'text-ink/45'}`}>
          {index}
        </span>
        <span
          className={`grid size-10 place-items-center rounded-full transition-colors ${dark ? 'bg-white/10 text-paper group-hover:bg-lime group-hover:text-ink' : 'bg-ink/[0.06] group-hover:bg-ink group-hover:text-paper'}`}
        >
          <ArrowUpRight aria-hidden className="size-[18px]" />
        </span>
      </div>
      <h3 className="mt-10 max-w-md text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">
        {title}
      </h3>
      <p
        className={`mt-3 max-w-xl leading-relaxed ${dark ? 'text-paper/60' : 'text-ink/65'}`}
      >
        {text}
      </p>
      {children && <div className="mt-auto pt-8">{children}</div>}
    </Link>
  );
}
