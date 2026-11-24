const DEFAULT_STEPS = [
  {
    title: 'Pokalbis',
    text: 'Aptariame, ko jums reikia: kokia parduotuvė, kiek prekių, su kokiomis sistemomis dirbate.',
  },
  {
    title: 'Pasiūlymas',
    text: 'Raštu gaunate planą: ką darome, per kiek laiko ir kiek tai kainuos.',
  },
  {
    title: 'Kūrimas',
    text: 'Dirbame etapais. Rezultatą matote ir galite išbandyti dar prieš paleidimą.',
  },
  {
    title: 'Paleidimas ir priežiūra',
    text: 'Paleidžiame, parodome, kaip viskas veikia, ir, jei norite, toliau prižiūrime.',
  },
];

export function ProcessSteps({
  steps = DEFAULT_STEPS,
}: {
  steps?: { title: string; text: string }[];
}) {
  return (
    <ol className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.title} className="flex flex-col bg-paper p-7">
          <span className="font-mono text-sm text-muted">
            {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className="mt-10 text-xl font-medium tracking-tight">{s.title}</h3>
          <p className="mt-2.5 leading-relaxed text-muted">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
