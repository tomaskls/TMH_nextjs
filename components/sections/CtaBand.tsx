import { Accent, ButtonLink } from '@/components/ui';
import { CONTACT } from '@/config/site';

export function CtaBand({
  title = (
    <>
      Aptarkime jūsų <Accent>projektą</Accent>
    </>
  ),
  text = 'Papasakokite, ką norite padaryti. Pasakysime, kaip tai darytume, kiek užtruktų ir kiek kainuotų.',
}: {
  title?: React.ReactNode;
  text?: string;
}) {
  return (
    <section className="container-x pb-24 md:pb-32">
      <div className="relative overflow-hidden rounded-[2rem] bg-lime px-6 py-14 sm:px-12 md:py-20">
        <div
          aria-hidden
          className="absolute -top-24 -right-24 size-80 rounded-full border-[40px] border-ink/[0.06]"
        />
        <div
          aria-hidden
          className="absolute -bottom-32 right-40 size-64 rounded-full border-[30px] border-ink/[0.05]"
        />
        <div className="relative max-w-3xl">
          <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-ink sm:text-5xl md:text-6xl">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">{text}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink arrow href="/kontaktai">
              Aptarti projektą
            </ButtonLink>
            <a
              className="inline-flex h-12 items-center rounded-full px-4 text-[15px] font-medium text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
              href={`tel:${CONTACT.phone}`}
            >
              arba skambinkite {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
