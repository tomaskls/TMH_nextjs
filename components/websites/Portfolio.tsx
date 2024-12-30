// /components/web-development/Portfolio.tsx
import { Card } from './Card';

interface Project {
  title: string;
  image: string;
  demoUrl: string;
}

interface PortfolioProps {
  title: string;
  description: string;
  projects: Project[];
}

export const Portfolio = ({ title, description, projects }: PortfolioProps) => {
  return (
    <div className="py-24 px-1 md:px-12 lg:px-24 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <h2 className="text-4xl font-bold mb-4 md:mb-0">{title}</h2>
          <p className="text-zinc-600 dark:text-gray-400 md:max-w-md">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              noPadding
              className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-fuchsia-600 transition-all duration-300 group h-[300px] relative"
            >
              <img 
                alt={project.title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                src={project.image}
              />
              <div className="absolute bottom-0 left-0 right-0 p-1
            py-2 px-4 bg-gradient-to-t from-black/70 to-black/20 flex flex-col md:flex-row justify-between items-end md:items-center gap-2">
                <h3 className=" py-1 px-2 text-xl font-bold text-white ">{project.title}</h3>
                <a
                  className="inline-block px-4 py-2 bg-fuchsia-600 text-white rounded hover:bg-fuchsia-700 transition-colors"
                  href={project.demoUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};