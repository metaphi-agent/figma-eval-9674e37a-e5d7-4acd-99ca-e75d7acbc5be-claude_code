import { useState } from "react";
import { Link } from "react-router-dom";

// Header Component
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-slate-700">
          mabi
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
          <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
          <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Features</a>
          <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Resources</a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Log in</a>
          <button className="bg-slate-700 text-white px-5 py-2 rounded-lg hover:bg-slate-800 transition-colors">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-slate-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg p-4">
          <nav className="flex flex-col gap-4">
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Features</a>
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Resources</a>
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Log in</a>
              <button className="bg-slate-700 text-white px-5 py-2 rounded-lg hover:bg-slate-800 transition-colors">
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="bg-slate-100 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <img
          src="./assets/images/102-91033.png"
          alt="Launch Your App - Grow Your Business"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// Partners Section
function PartnersSection() {
  return (
    <section className="py-16 lg:py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
          Our Top Partners
        </h2>

        <img
          src="./assets/images/116-10610.png"
          alt="Partner logos"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
          How it works
        </h2>

        <img
          src="./assets/images/116-11070.png"
          alt="How it works process"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// Feature Section 1
function FeatureSection1() {
  return (
    <section className="py-16 lg:py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <img
          src="./assets/images/116-11399.png"
          alt="Turpis risus facilisi feature"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// Feature Section 2
function FeatureSection2() {
  return (
    <section className="py-16 lg:py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <img
          src="./assets/images/116-11458.png"
          alt="Sagittis sapien viverra feature"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// Feature Section 3
function FeatureSection3() {
  return (
    <section className="py-16 lg:py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <img
          src="./assets/images/116-11508.png"
          alt="Non commodo nec feature"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <img
          src="./assets/images/122-37086.png"
          alt="Launch Your App Today CTA"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  const footerLinks = {
    Company: ["About Us", "Careers", "Press", "Blog"],
    Products: ["Features", "Pricing", "Integrations", "API"],
    Resources: ["Documentation", "Tutorials", "Support", "FAQ"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  const socialIcons = [
    { name: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
    { name: "Twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
    { name: "Instagram", path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z" },
    { name: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" },
  ];

  return (
    <footer className="bg-slate-600 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="text-2xl font-bold text-white mb-4 block">
              mabi
            </Link>
            <p className="text-slate-300 text-sm mb-6">
              Launch your app and grow your business with our platform.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((icon) => (
                <a
                  key={icon.name}
                  href="#"
                  className="w-10 h-10 bg-slate-500 rounded-full flex items-center justify-center text-slate-300 hover:bg-slate-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            &copy; 2023 Mabi. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function LandingPage11() {
  return (
    <div className="min-h-screen bg-white relative">
      <Header />
      <main>
        <HeroSection />
        <PartnersSection />
        <HowItWorksSection />
        <FeatureSection1 />
        <FeatureSection2 />
        <FeatureSection3 />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
