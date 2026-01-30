import { Button } from '../ui/Button';
import { Quote } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatar?: string;
  };
  image?: string;
}

export function HeroSection({ title, subtitle, testimonial, image }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 pb-0 md:pb-0">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[673px] h-[694px] bg-sky-200 rounded-bl-[50%] opacity-80 -z-10 hidden lg:block" />

      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 py-10 lg:py-20">
          {/* Left Column - Text Content */}
          <div className="flex-1 flex flex-col gap-8 lg:gap-32">
            {/* Main content */}
            <div className="flex flex-col gap-6">
              <h1 className="heading-1 text-gray-900">
                {title}
              </h1>
              <p className="body-xl text-gray-600">
                {subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="filled" color="amber" iconRight="arrow">
                  Request a Quote
                </Button>
              </div>
            </div>

            {/* Testimonial */}
            {testimonial && (
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-2">
                  <Quote className="text-amber-400 w-6 h-6 flex-shrink-0 mt-1" />
                  <p className="body-m text-gray-600 italic">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="flex items-center gap-3 ml-8">
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-700 font-bold">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <p className="subtitle-m text-gray-900">{testimonial.author}</p>
                    <p className="body-s text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Image */}
          <div className="flex-1 relative">
            {/* Decorative circles */}
            <div className="absolute -left-4 -top-8 w-[149px] h-[149px] rounded-full bg-amber-500 hidden lg:block" />
            <div className="absolute right-8 -top-12 w-[23px] h-[23px] rounded-full bg-sky-100 hidden lg:block" />
            <div className="absolute right-0 bottom-0 w-[70px] h-[70px] rounded-full bg-sky-100 hidden lg:block" />
            <div className="absolute left-[15%] bottom-[15%] w-[74px] h-[74px] rounded-full bg-purple-500 hidden lg:block" />

            {/* Hero image with blue blob */}
            <div className="relative">
              <svg
                className="absolute -z-10 w-full h-full"
                viewBox="0 0 673 694"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M673 0C673 0 673 277.6 673 416.4C673 555.2 522.22 694 336.5 694C150.78 694 0 555.2 0 416.4C0 277.6 0 0 0 0H673Z"
                  fill="#BAE6FD"
                />
              </svg>
              {image ? (
                <img
                  src={image}
                  alt="Solar power professionals"
                  className="w-full h-auto relative z-10"
                  loading="eager"
                />
              ) : (
                <div className="w-full aspect-square bg-sky-200 rounded-2xl flex items-center justify-center">
                  <span className="text-sky-600 body-l">Hero Image</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
