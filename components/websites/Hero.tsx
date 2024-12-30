// /components/web-development/Hero.tsx
import { ClientButton } from './ClientButton';

interface HeroProps {
  title: string;
  description: string;
  buttonText: string;
}

export const Hero = ({ title, description, buttonText }: HeroProps) => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#FAE8FF,#FFFFFF)] dark:bg-[radial-gradient(circle_at_50%_120%,#3B0764,#000000)]" />
      
      <div className="relative h-4/5 md:h-full flex flex-col justify-center px-4 md:px-12 lg:px-24">
        <div className="border-l-4 border-fuchsia-600 pl-6 mb-12">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">
            {title}
            <span className="text-fuchsia-600">.</span>
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
          <div>
            <p className="text-xl text-zinc-600 dark:text-gray-400 mb-8">
              {description}
            </p>
            <ClientButton text={buttonText} />
          </div>
          
          <div className="hidden md:block">
            <div className="relative w-full h-64">
              <div className="absolute right-0 top-0 w-48 h-48 bg-fuchsia-200/50 dark:bg-fuchsia-600/20 backdrop-blur-xl rounded-full" />
              <div className="absolute right-24 top-24 w-32 h-32 bg-indigo-200/50 dark:bg-indigo-600/20 backdrop-blur-xl rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};