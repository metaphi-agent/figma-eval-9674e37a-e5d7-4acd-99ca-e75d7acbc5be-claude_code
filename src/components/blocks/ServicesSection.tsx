import { Truck, TrendingUp, Settings, Target, Award, Zap } from 'lucide-react';

interface Service {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  caption: string;
  title: string;
  description: string;
  services: Service[];
  imagePosition?: 'left' | 'right';
}

const iconMap = {
  truck: Truck,
  trending: TrendingUp,
  settings: Settings,
  target: Target,
  award: Award,
  zap: Zap,
};

export function ServicesSection({
  caption,
  title,
  description,
  services,
  imagePosition = 'left',
}: ServicesSectionProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[573px] h-[1000px] bg-purple-900 rounded-r-full -z-10 hidden lg:block" />

      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        <div className={`flex flex-col ${imagePosition === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-40`}>
          {/* Mobile App Mockup */}
          <div className="flex-shrink-0 relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 left-20 w-20 h-20 rounded-full bg-amber-400 hidden lg:block" />
            <div className="absolute -bottom-6 -left-6 w-[99px] h-[99px] rounded-full bg-sky-400 hidden lg:block" />

            {/* Phone mockup */}
            <div className="bg-white rounded-[20px] shadow-xl w-[300px] md:w-[420px] mx-auto overflow-hidden border-[5px] border-white">
              <div className="bg-sky-100 aspect-[420/900] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-sky-200 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-sky-300" />
                  </div>
                  <p className="text-sky-600 body-l">Mobile App</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col gap-12">
            {/* Section Header */}
            <div className="flex flex-col gap-6">
              <span className="caption-m text-amber-600">{caption}</span>
              <h2 className="heading-2 text-gray-900">{title}</h2>
              <p className="body-xl text-gray-600">{description}</p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {services.map((service, index) => {
                const Icon = iconMap[service.icon];
                return (
                  <div key={index} className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-purple-700" />
                    </div>
                    <h3 className="heading-6 text-gray-900">{service.title}</h3>
                    <p className="body-m text-gray-600">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
