// /components/web-development/TechStack.tsx

interface TechStackProps {
  title: string;
}

export const TechStack = ({ title }: TechStackProps) => {
  const technologies = [
    {
      name: 'React',
      iconPath: '/icons/react.svg'
    },
    {
      name: 'Next.js',
      iconPath: '/icons/nextjs.png'
    },
    {
      name: 'NextUI',
      iconPath: '/icons/nextui.jpg'
    },
    {
      name: 'Vite',
      iconPath: '/icons/vite.svg'
    },
    {
      name: 'JavaScript',
      iconPath: '/icons/javascript.svg'
    },
    {
      name: 'TailwindCSS',
      iconPath: '/icons/tailwind.svg'
    },
    {
      name: 'ShadcnUI',
      iconPath: '/icons/shadcn.png'
    },
    {
      name: 'MaterialUI',
      iconPath: '/icons/material.png'
    }
  ];

  return (
    <div className="py-24 px-4 md:px-12 lg:px-24 bg-[radial-gradient(circle_at_50%_120%,#FAE8FF,#FFFFFF)] dark:bg-[radial-gradient(circle_at_50%_120%,#3B0764,#000000)]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="p-8 bg-white dark:bg-transparent border border-zinc-200 dark:border-zinc-700 rounded-lg hover:border-fuchsia-600 transition-all duration-300 flex flex-col items-center"
            >
              <img 
                alt={`${tech.name} icon`}
                className="w-8 h-8 mb-4"
                src={tech.iconPath}
              />
              <span className="text-xl font-mono">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};