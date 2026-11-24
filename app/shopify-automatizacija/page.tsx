import { AutomationFlow } from '@/components/sections/AutomationFlow';
import { AutomationGrid } from '@/components/sections/Automations';
import { CtaBand } from '@/components/sections/CtaBand';
import { Faq, type FaqItem } from '@/components/sections/Faq';
import { PageHero } from '@/components/sections/PageHero';
import { ProcessSteps } from '@/components/sections/Process';
import { Accent, Check, SectionHeader } from '@/components/ui';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Shopify automatizacija ir integracijos',
  description:
    'Automatizuojame Shopify parduotuves: užsakymų perdavimas tiekėjams, likučių ir kainų sinchronizacija, siuntų lipdukai, integracija su apskaita ir prekių vertimai su AI.',
  path: '/shopify-automatizacija',
});

const INTEGRATIONS = [
  'Shopify Flow',
  'Shopify Admin API',
  'Tiekėjų B2B sistemos',
  'Tiekėjų XML / CSV duomenys',
  'DPD',
  'Venipak',
  'Omniva',
  'LP Express',
  'Finvalda',
  'Rivilė',
  'B1.lt',
  'Google Sheets',
  'El. paštas',
  'Dirbtinis intelektas (AI)',
];

const STEPS = [
  {
    title: 'Auditas',
    text: 'Peržiūrime, kaip dabar vykdomi užsakymai ir kokie darbai daromi rankomis.',
  },
  {
    title: 'Pasiūlymas',
    text: 'Siūlome, ką automatizuoti pirmiausia, ir pasakome kainą.',
  },
  {
    title: 'Įdiegimas',
    text: 'Sujungiame sistemas, testuojame su tikrais užsakymais ir parodome komandai, kaip viskas veikia.',
  },
  {
    title: 'Stebėsena',
    text: 'Sekame, kad viskas veiktų, ir gauname įspėjimus, jei kas nors sutrinka.',
  },
];

const FAQ: FaqItem[] = [
  {
    q: 'Ar reikės keisti mano naudojamas programas?',
    a: 'Dažniausiai ne. Prisitaikome prie to, ką jau naudojate: jūsų tiekėjų, kurjerių ir apskaitos programos. Jei kurios nors sistemos sujungti neįmanoma, pasiūlysime alternatyvą.',
  },
  {
    q: 'Kas nutiks, jei automatizacija sustos?',
    a: 'Automatizacijas stebime: sutrikus gauname įspėjimą ir sutvarkome. Tuo metu užsakymus galima vykdyti ir rankiniu būdu.',
  },
  {
    q: 'Nuo ko verta pradėti?',
    a: 'Nuo to, kas kartojasi kiekvieną dieną ir užima daugiausiai laiko – dažniausiai tai užsakymų perdavimas tiekėjams, likučiai ir siuntos. Pradedame nuo vieno proceso ir plečiame toliau.',
  },
  {
    q: 'Ar automatizuojate ne Shopify parduotuves?',
    a: 'Daugiausia dirbame su Shopify. Dėl kitų platformų paklauskite – įvertinsime atskirai.',
  },
];

export default function AutomationPage() {
  return (
    <>
      <PageHero
        aside={<AutomationFlow />}
        description="Sujungiame Shopify parduotuvę su tiekėjais, kurjeriais ir apskaitos programa, kad užsakymų, likučių ir sąskaitų nereikėtų tvarkyti rankomis."
        eyebrow="Automatizacija"
        title={
          <>
            Shopify <Accent>automatizacija</Accent> ir integracijos
          </>
        }
      />

      <section className="container-x pb-24 md:pb-32">
        <SectionHeader
          className="mb-14"
          description="Dažniausiai automatizuojami darbai. Sprendimą pritaikome prie jūsų naudojamų sistemų."
          eyebrow="Ką automatizuojame"
          title={
            <>
              Nuo užsakymo <Accent>iki apskaitos</Accent>
            </>
          }
        />
        <AutomationGrid />
      </section>

      {/* PAVYZDYS */}
      <section className="bg-ink bg-dots py-24 text-paper md:py-32" id="pavyzdys">
        <div className="container-x">
          <SectionHeader
            dark
            description="Viena iš mūsų prižiūrimų parduotuvių: tūkstančiai prekių iš daugelio tiekėjų. Taip atrodė darbas prieš automatizaciją ir po jos."
            eyebrow="Pavyzdys iš praktikos"
            title={
              <>
                Kaip tai atrodo <Accent>praktikoje</Accent>
              </>
            }
          />

          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 p-7 sm:p-9">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-paper/45">
                Anksčiau
              </p>
              <ul className="mt-6 space-y-4 text-paper/70">
                {[
                  'Kiekvienam užsakymui rankomis tikrinami tiekėjų likučiai',
                  'Prekės iš tiekėjų užsakomos rankomis',
                  'Siuntų lipdukai kuriami po vieną',
                  'Sąskaitos į apskaitą suvedamos rankiniu būdu',
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2.5 h-px w-3 shrink-0 bg-paper/40"
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-lime p-7 text-ink sm:p-9">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink/60">
                Dabar
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  'Sistema pati parenka, iš kurio tiekėjo ar sandėlio vykdyti užsakymą',
                  'Užsakymas automatiškai perduodamas tinkamam tiekėjui',
                  'Likučiai sinchronizuojami su tiekėjų B2B sistemomis',
                  'Pirkimų sąskaitos importuojamos tiesiai į apskaitą',
                ].map((t) => (
                  <li key={t} className="flex gap-3 font-medium">
                    <Check />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-24 md:py-32">
        <SectionHeader
          className="mb-12"
          description="Pavyzdžiai sistemų, su kuriomis sujungiame Shopify parduotuves. Jei naudojate kitą sistemą – paklauskite."
          eyebrow="Integracijos"
          title="Sujungiame tai, ką jau naudojate"
        />
        <ul className="flex flex-wrap gap-2.5">
          {INTEGRATIONS.map((name) => (
            <li
              key={name}
              className="rounded-full border border-line bg-white px-4 py-2 text-[15px]"
            >
              {name}
            </li>
          ))}
        </ul>
      </section>

      <section className="container-x pb-24 md:pb-32">
        <SectionHeader className="mb-14" eyebrow="Kaip dirbame" title="Nuo audito iki veikiančios sistemos" />
        <ProcessSteps steps={STEPS} />
      </section>

      <section className="container-x grid gap-12 pb-24 md:pb-32 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader eyebrow="DUK" title="Dažni klausimai" />
        <Faq items={FAQ} />
      </section>

      <CtaBand
        text="Papasakokite, kaip dabar tvarkote užsakymus. Pasakysime, ką galima automatizuoti ir kiek tai kainuotų."
        title={
          <>
            Aptarkime, ką galima <Accent>automatizuoti</Accent> jūsų parduotuvėje
          </>
        }
      />
    </>
  );
}
