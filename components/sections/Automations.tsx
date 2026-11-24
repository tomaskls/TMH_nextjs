import { Bell, Languages, Receipt, RefreshCw, Send, Truck } from 'lucide-react';

export const AUTOMATIONS = [
  {
    icon: Send,
    title: 'Užsakymai tiekėjams',
    text: 'Užsakymas automatiškai perduodamas tiekėjui – el. paštu arba tiesiai į jo B2B sistemą. Tinka ir dropshipping’ui.',
  },
  {
    icon: RefreshCw,
    title: 'Likučiai ir kainos',
    text: 'Tiekėjų likučiai ir kainos parduotuvėje atsinaujina automatiškai.',
  },
  {
    icon: Truck,
    title: 'Siuntos ir lipdukai',
    text: 'Siuntų lipdukai, kurjerio iškvietimas ir sekimo numeriai pirkėjams – be kopijavimo rankomis.',
  },
  {
    icon: Receipt,
    title: 'Apskaita',
    text: 'Pardavimai ir pirkimų sąskaitos keliauja į jūsų buhalterinę programą.',
  },
  {
    icon: Languages,
    title: 'Prekių importas ir vertimai',
    text: 'Prekių importas iš tiekėjų duomenų, aprašymai ir vertimai su dirbtiniu intelektu.',
  },
  {
    icon: Bell,
    title: 'Ataskaitos ir įspėjimai',
    text: 'Pardavimų suvestinės ir įspėjimai el. paštu, kai kas nors sutrinka.',
  },
];

export function AutomationGrid({ dark = false }: { dark?: boolean }) {
  return (
    <ul
      className={`grid gap-px overflow-hidden rounded-3xl sm:grid-cols-2 lg:grid-cols-3 ${dark ? 'border border-white/10 bg-white/10' : 'border border-line bg-line'}`}
    >
      {AUTOMATIONS.map(({ icon: Icon, title, text }) => (
        <li key={title} className={`p-7 ${dark ? 'bg-ink' : 'bg-paper'}`}>
          <span
            className={`grid size-11 place-items-center rounded-xl ${dark ? 'bg-white/[0.07] text-lime' : 'bg-ink text-lime'}`}
          >
            <Icon aria-hidden className="size-5" />
          </span>
          <h3
            className={`mt-8 text-lg font-medium tracking-tight ${dark ? 'text-paper' : ''}`}
          >
            {title}
          </h3>
          <p
            className={`mt-2 leading-relaxed ${dark ? 'text-paper/60' : 'text-muted'}`}
          >
            {text}
          </p>
        </li>
      ))}
    </ul>
  );
}
