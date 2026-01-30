import { Button } from '../ui/Button';

interface CTASectionProps {
  caption: string;
  title: string;
  subtitle?: string;
  backgroundColor?: 'purple' | 'amber' | 'dark';
  image?: string;
}

export function CTASection({
  caption,
  title,
  subtitle,
  backgroundColor = 'purple',
  image,
}: CTASectionProps) {
  const bgColors = {
    purple: 'bg-purple-700',
    amber: 'bg-amber-500',
    dark: 'bg-gray-900',
  };

  return (
    <section className={`${bgColors[backgroundColor]} py-20 relative overflow-hidden`}>
      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Content */}
          <div className="flex-1 flex flex-col gap-6">
            <span className="caption-m text-amber-300">{caption}</span>
            <h2 className="heading-2 text-white">{title}</h2>
            {subtitle && <p className="body-l text-purple-200">{subtitle}</p>}
            <div className="flex flex-wrap gap-4">
              <Button variant="filled" color="amber" iconRight="arrow">
                Request a Quote
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 w-full">
            {image ? (
              <img
                src={image}
                alt="CTA visual"
                className="w-full h-auto rounded-2xl"
                loading="lazy"
              />
            ) : (
              <div className="w-full aspect-square bg-white/10 rounded-2xl flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-24 h-24 md:w-32 md:h-32 bg-white/20 rounded-xl flex items-center justify-center"
                    >
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-amber-400/50" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
