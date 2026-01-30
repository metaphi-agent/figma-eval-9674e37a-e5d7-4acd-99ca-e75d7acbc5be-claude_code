import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FeatureSectionProps {
  caption: string;
  title: string;
  description: string;
  alignment?: 'left' | 'center';
  showAppMockup?: boolean;
}

export function FeatureSection({
  caption,
  title,
  description,
  alignment = 'center',
  showAppMockup = true,
}: FeatureSectionProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute -left-[355px] top-[100px] w-[710px] h-[711px] rounded-full bg-amber-500 opacity-30 hidden lg:block" />
      <div className="absolute -right-[200px] bottom-[100px] w-[596px] h-[597px] rounded-full bg-purple-700 opacity-20 hidden lg:block" />

      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        <div className="flex flex-col gap-20">
          {/* Section Header */}
          <div
            className={`flex flex-col gap-6 max-w-[900px] ${
              alignment === 'center' ? 'mx-auto text-center' : ''
            }`}
          >
            <span className="caption-m text-amber-600">{caption}</span>
            <h2 className="heading-2 text-gray-900">{title}</h2>
            <p className="body-xl text-gray-600">{description}</p>
          </div>

          {/* App Mockup */}
          {showAppMockup && (
            <div className="relative max-w-[1100px] mx-auto">
              {/* Browser window mockup */}
              <div className="bg-white rounded-[20px] shadow-xl overflow-hidden border-[5px] border-white">
                {/* Browser bar */}
                <div className="bg-white px-4 py-2 flex items-center gap-4 border-b border-gray-100">
                  {/* Window controls */}
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>

                  {/* Navigation arrows */}
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <ChevronLeft size={16} className="text-gray-400" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <ChevronRight size={16} className="text-gray-400" />
                    </button>
                  </div>

                  {/* Address bar */}
                  <div className="flex-1 bg-gray-100 rounded-full px-4 py-1.5">
                    <span className="body-s text-gray-400">sollerpower.app</span>
                  </div>
                </div>

                {/* Content area - placeholder */}
                <div className="bg-sky-100 aspect-[1100/653] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sky-200 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-sky-300" />
                    </div>
                    <p className="text-sky-600 body-l">Dashboard Preview</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-8 -left-8 w-[148px] h-[148px] rounded-full bg-amber-400 hidden lg:block" />
              <div className="absolute -top-8 -left-8 w-[89px] h-[45px] rounded-b-full bg-purple-700 hidden lg:block" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
