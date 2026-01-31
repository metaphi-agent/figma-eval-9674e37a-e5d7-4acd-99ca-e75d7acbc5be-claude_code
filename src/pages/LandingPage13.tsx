import { useState } from "react";
import { Link } from "react-router-dom";

// Header Component
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          flowt
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#" className="text-white/80 hover:text-white transition-colors">Products</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Pricing</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Resources</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Company</a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#" className="text-white/80 hover:text-white transition-colors">Log in</a>
          <button className="bg-white text-slate-900 px-5 py-2 rounded-full hover:bg-gray-100 transition-colors font-medium">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white"
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
        <div className="lg:hidden mt-4 pb-4 bg-slate-800 rounded-lg p-4">
          <nav className="flex flex-col gap-4">
            <a href="#" className="text-white/80 hover:text-white transition-colors">Products</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Resources</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Company</a>
            <div className="flex items-center gap-4 pt-4 border-t border-slate-600">
              <a href="#" className="text-white/80 hover:text-white transition-colors">Log in</a>
              <button className="bg-white text-slate-900 px-5 py-2 rounded-full hover:bg-gray-100 transition-colors font-medium">
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
    <section className="bg-slate-900 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <img
          src="./assets/images/134-29008.png"
          alt="App Builder For iOS & Android"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// Build Desktop Launch Mobile Section
function BuildDesktopSection() {
  return (
    <section className="py-16 lg:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <img
          src="./assets/images/143-12919.png"
          alt="Build it on desktop, launch it on mobile"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// Partners Section
function PartnersSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <img
          src="./assets/images/143-12982.png"
          alt="Our top partners"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// Feature Section 1 - Turpis risus facilisi
function FeatureSection1() {
  return (
    <section className="py-16 lg:py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <img
          src="./assets/images/143-12408.png"
          alt="Turpis risus facilisi feature"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// Feature Section 2 - Sagittis sapien viverra
function FeatureSection2() {
  return (
    <section className="py-16 lg:py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <img
          src="./assets/images/143-12414.png"
          alt="Sagittis sapien viverra feature"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// Feature Section 3 - Non commodo nec
function FeatureSection3() {
  return (
    <section className="py-16 lg:py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <img
          src="./assets/images/143-12420.png"
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
    <section className="py-16 lg:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <img
          src="./assets/images/143-13051.png"
          alt="Launch your app today"
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
    Products: ["Features", "Integrations", "Pricing", "Templates"],
    Company: ["About Us", "Careers", "Press", "Blog"],
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
    <footer className="bg-slate-900 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="text-2xl font-bold text-white mb-4 block">
              flowt
            </Link>
            <p className="text-slate-400 text-sm mb-6">
              Build your app on desktop and launch it on mobile with ease.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((icon) => (
                <a
                  key={icon.name}
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-purple-600 hover:text-white transition-colors"
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
                    <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* App Store Badges */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <a href="#" className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="text-sm font-semibold">App Store</div>
            </div>
          </a>
          <a href="#" className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs">GET IT ON</div>
              <div className="text-sm font-semibold">Google Play</div>
            </div>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; 2023 Flowt. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function LandingPage13() {
  return (
    <div className="min-h-screen bg-slate-900 relative">
      <Header />
      <main>
        <HeroSection />
        <BuildDesktopSection />
        <PartnersSection />
        <FeatureSection1 />
        <FeatureSection2 />
        <FeatureSection3 />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
