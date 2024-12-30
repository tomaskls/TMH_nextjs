// /components/web-development/Services.tsx
import { Code2, Palette, Smartphone } from 'lucide-react';

import { Card } from './Card';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface ServicesProps {
  title: string;
  description: string;
  services: Service[];
}

const IconComponent = ({ icon }: { icon: string }) => {
  switch (icon) {
    case 'code2':
      return <Code2 className="w-8 h-8" />;
    case 'palette':
      return <Palette className="w-8 h-8" />;
    case 'smartphone':
      return <Smartphone className="w-8 h-8" />;
    default:
      return null;
  }
};

export const Services = ({ title, description, services }: ServicesProps) => {
  return (
    <div className="py-24 px-4 md:px-12 lg:px-24 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <h2 className="text-4xl font-bold mb-4 md:mb-0">{title}</h2>
          <p className="text-zinc-600 dark:text-gray-400 md:max-w-md">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-[radial-gradient(circle_at_50%_120%,#FAE8FF,#FFFFFF)] dark:bg-[radial-gradient(circle_at_50%_120%,#3B0764,#000000)] border border-zinc-200 dark:border-zinc-700 hover:border-fuchsia-600 transition-all duration-300"
            >
              <div className="mb-4 text-fuchsia-600">
                <IconComponent icon={service.icon} />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-zinc-600 dark:text-gray-400">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};