import { ArrowRight } from 'lucide-react';

interface CaseStudySectionProps {
  caption: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  image?: string;
}

export function CaseStudySection({
  caption,
  title,
  description,
  linkText,
  linkHref,
  image,
}: CaseStudySectionProps) {
  return (
    <section className="py-20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Image */}
          <div className="flex-1 w-full">
            {image ? (
              <img
                src={image}
                alt="Case study"
                className="w-full h-auto rounded-2xl"
                loading="lazy"
              />
            ) : (
              <div className="w-full aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-purple-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-purple-400" />
                  </div>
                  <p className="text-purple-600 body-l">Case Study Image</p>
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col gap-6">
            <span className="caption-m text-amber-600">{caption}</span>
            <h2 className="heading-2 text-gray-900">{title}</h2>
            <p className="body-xl text-gray-600">{description}</p>
            <a
              href={linkHref}
              className="inline-flex items-center gap-2 text-purple-700 font-bold hover:text-purple-800 transition-colors"
            >
              {linkText}
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
