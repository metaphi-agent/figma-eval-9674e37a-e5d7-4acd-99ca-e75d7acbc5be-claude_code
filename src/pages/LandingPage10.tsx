import { useState } from "react";
import { Link } from "react-router-dom";

// Header Component
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-b from-amber-50 to-white py-4 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          Collers
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#" className="text-gray-700 hover:text-amber-700 transition-colors">Home</a>
          <a href="#" className="text-gray-700 hover:text-amber-700 transition-colors">About</a>
          <a href="#" className="text-gray-700 hover:text-amber-700 transition-colors">Support</a>
          <a href="#" className="text-gray-700 hover:text-amber-700 transition-colors">FAQ</a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#" className="text-gray-700 hover:text-amber-700 transition-colors">Log in</a>
          <button className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-700"
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
        <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
          <nav className="flex flex-col gap-4">
            <a href="#" className="text-gray-700 hover:text-amber-700 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-amber-700 transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-amber-700 transition-colors">Support</a>
            <a href="#" className="text-gray-700 hover:text-amber-700 transition-colors">FAQ</a>
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
              <a href="#" className="text-gray-700 hover:text-amber-700 transition-colors">Log in</a>
              <button className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors">
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
    <section className="bg-gradient-to-b from-amber-50 to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <img
          src="./assets/images/86-230671.png"
          alt="Collectible Sneakers hero"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// Best of the Best Section
function BestSection() {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            The best of the best
          </h2>
        </div>

        <img
          src="./assets/images/92-35386.png"
          alt="Best sneakers showcase"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// Why Join Us Section (Dark)
function WhyJoinSection() {
  return (
    <section className="py-16 lg:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <img
          src="./assets/images/92-11225.png"
          alt="Why join us features"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// Because They Love Us Section
function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
          Because they love us
        </h2>

        <img
          src="./assets/images/92-35337.png"
          alt="Customer testimonials"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// Grow Your Collection Section
function GrowCollectionSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
          Grow your collection
        </h2>

        <img
          src="./assets/images/92-34262.png"
          alt="Grow your collection stats"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// Articles Section
function ArticlesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
          Articles by Collectors
        </h2>

        <img
          src="./assets/images/92-9275.png"
          alt="Articles by collectors"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// Stats Section (Brown)
function StatsSection() {
  return (
    <section className="py-16 lg:py-24 bg-amber-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <img
          src="./assets/images/86-230688.png"
          alt="Collection statistics with world map"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// Amazing Events Section
function EventsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
          Amazing events
        </h2>

        <img
          src="./assets/images/86-231638.png"
          alt="Upcoming sneaker events"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// CTA Section (Dark)
function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <img
          src="./assets/images/92-36252.png"
          alt="Collect more sneakers today CTA"
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
    Products: ["Collectibles", "Marketplace", "Auctions", "Authentication"],
    Company: ["About Us", "Careers", "Press", "Blog"],
    Resources: ["Help Center", "Partners", "Community", "FAQ"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  const socialIcons = [
    { name: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
    { name: "Twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
    { name: "Instagram", path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z" },
    { name: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" },
  ];

  return (
    <footer className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="text-2xl font-bold text-white mb-4 block">
              Collers
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              The ultimate platform for sneaker collectors worldwide.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((icon) => (
                <a
                  key={icon.name}
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-amber-600 hover:text-white transition-colors"
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
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            Collers &copy; 2023. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function LandingPage10() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <BestSection />
        <WhyJoinSection />
        <TestimonialsSection />
        <GrowCollectionSection />
        <ArticlesSection />
        <StatsSection />
        <EventsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
