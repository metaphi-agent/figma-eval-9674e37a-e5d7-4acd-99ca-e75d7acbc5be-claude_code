import { Star } from 'lucide-react';
import { Button } from '../ui/Button';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  rating?: number;
}

interface TestimonialsSectionProps {
  caption: string;
  title: string;
  description?: string;
  testimonials: Testimonial[];
  backgroundColor?: 'white' | 'purple';
  showCTA?: boolean;
}

export function TestimonialsSection({
  caption,
  title,
  description,
  testimonials,
  backgroundColor = 'purple',
  showCTA = false,
}: TestimonialsSectionProps) {
  const bgClass = backgroundColor === 'purple' ? 'bg-purple-900' : 'bg-white';
  const textColor = backgroundColor === 'purple' ? 'text-white' : 'text-gray-900';
  const captionColor = backgroundColor === 'purple' ? 'text-amber-300' : 'text-amber-600';
  const descColor = backgroundColor === 'purple' ? 'text-purple-200' : 'text-gray-600';

  return (
    <section className={`${bgClass} py-20`}>
      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="flex flex-col gap-4 max-w-[600px]">
              <span className={`caption-m ${captionColor}`}>{caption}</span>
              <h2 className={`heading-2 ${textColor}`}>{title}</h2>
              {description && <p className={`body-l ${descColor}`}>{description}</p>}
            </div>
            {showCTA && (
              <Button variant="filled" color="amber" iconRight="arrow">
                Request a Quote
              </Button>
            )}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col gap-4"
              >
                <p className={`body-m ${backgroundColor === 'purple' ? 'text-purple-100' : 'text-gray-600'} flex-1`}>
                  {testimonial.quote}
                </p>

                {/* Rating */}
                {testimonial.rating && (
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < testimonial.rating! ? 'text-amber-400 fill-amber-400' : 'text-gray-400'}
                      />
                    ))}
                  </div>
                )}

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center">
                      <span className="text-amber-900 font-bold text-sm">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <p className={`subtitle-m ${textColor}`}>{testimonial.author}</p>
                    <p className={`body-xs ${backgroundColor === 'purple' ? 'text-purple-300' : 'text-gray-400'}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
