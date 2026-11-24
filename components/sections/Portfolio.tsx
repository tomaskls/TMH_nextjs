import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

import { PROJECTS, type Project } from '@/config/projects';

export function ProjectGrid({
  kind,
  limit,
}: {
  kind?: Project['kind'];
  limit?: number;
}) {
  const items = PROJECTS.filter((p) => !kind || p.kind === kind).slice(
    0,
    limit
  );

  return (
    <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <li key={p.url}>
          <ProjectCard project={p} />
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      className="group block"
      href={project.url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_1px_0_rgb(15_16_13/0.04)] transition-shadow duration-300 group-hover:shadow-[0_30px_60px_-30px_rgb(15_16_13/0.35)]">
        <div className="flex items-center gap-1.5 border-b border-line px-3.5 py-2.5">
          <span className="size-2.5 rounded-full bg-paper-2" />
          <span className="size-2.5 rounded-full bg-paper-2" />
          <span className="size-2.5 rounded-full bg-paper-2" />
          <span className="ml-2 truncate rounded-md bg-paper px-2.5 py-0.5 font-mono text-[11px] text-muted">
            {project.domain}
          </span>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden bg-paper-2">
          <Image
            fill
            alt={`${project.name} – ${project.kind === 'shopify' ? 'Shopify el. parduotuvė' : 'svetainė'}`}
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
            src={project.image}
          />
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-medium tracking-tight">{project.name}</h3>
            <span
              className={`rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${project.kind === 'shopify' ? 'bg-lime text-ink' : 'bg-paper-2 text-muted'}`}
            >
              {project.kind === 'shopify' ? 'Shopify' : 'Svetainė'}
            </span>
          </div>
          <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
            {project.summary}
          </p>
        </div>
        <ArrowUpRight
          aria-hidden
          className="mt-1 size-5 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
        />
      </div>
    </a>
  );
}
