import { useState } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface HeaderProps {
  variant?: 'light' | 'dark';
  logoText?: string;
}

export function Header({ variant = 'light', logoText = 'soller' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const textColor = variant === 'light' ? 'text-gray-900' : 'text-white';
  const bgColor = variant === 'light' ? 'bg-white/80' : 'bg-gray-900/80';

  const navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Services', href: '#services' },
    { label: 'Configure', href: '#configure' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${bgColor} backdrop-blur-sm`}>
      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        <div className="flex items-center justify-between h-24">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-10">
            <a href="/" className={`text-3xl font-bold ${textColor}`}>
              {logoText}
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-3 font-bold ${textColor} hover:opacity-70 transition-opacity`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Side - CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:555818282"
              className={`flex items-center gap-2 px-4 py-3 font-bold ${textColor} hover:opacity-70 transition-opacity`}
            >
              <Phone size={20} />
              555 818 282
            </a>
            <Button
              variant="filled"
              color="amber"
              iconRight="arrow"
            >
              Request a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${textColor}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-3 font-bold ${textColor} hover:bg-gray-100 rounded-lg`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <hr className="my-2" />
              <a
                href="tel:555818282"
                className={`flex items-center gap-2 px-4 py-3 font-bold ${textColor}`}
              >
                <Phone size={20} />
                555 818 282
              </a>
              <div className="px-4 py-2">
                <Button
                  variant="filled"
                  color="amber"
                  iconRight="arrow"
                  className="w-full justify-center"
                >
                  Request a Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
