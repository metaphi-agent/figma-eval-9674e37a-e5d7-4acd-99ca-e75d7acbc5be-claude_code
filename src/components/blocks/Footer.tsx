interface FooterProps {
  logoText?: string;
  variant?: 'light' | 'dark';
}

export function Footer({ logoText = 'soller', variant = 'light' }: FooterProps) {
  const bgColor = variant === 'light' ? 'bg-white' : 'bg-gray-900';
  const textColor = variant === 'light' ? 'text-gray-600' : 'text-gray-400';
  const logoColor = variant === 'light' ? 'text-gray-900' : 'text-white';

  return (
    <footer className={`${bgColor} py-6`}>
      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="/" className={`text-2xl font-bold ${logoColor}`}>
            {logoText}
          </a>

          {/* Copyright */}
          <p className={`${textColor} text-sm`}>
            @ 2023 Soller, Inc. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <a href="#terms" className={`${textColor} text-sm hover:opacity-70 transition-opacity`}>
              Terms
            </a>
            <a href="#privacy" className={`${textColor} text-sm hover:opacity-70 transition-opacity`}>
              Privacy
            </a>
            <a href="#support" className={`${textColor} text-sm hover:opacity-70 transition-opacity`}>
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
