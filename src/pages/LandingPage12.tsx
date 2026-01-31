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
          protech
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#" className="text-white/80 hover:text-white transition-colors">Products</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Pricing</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Resources</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#" className="text-white/80 hover:text-white transition-colors">Log in</a>
          <button className="bg-white text-purple-900 px-5 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium">
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
        <div className="lg:hidden mt-4 pb-4 bg-purple-800 rounded-lg p-4">
          <nav className="flex flex-col gap-4">
            <a href="#" className="text-white/80 hover:text-white transition-colors">Products</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Resources</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Contact</a>
            <div className="flex items-center gap-4 pt-4 border-t border-purple-600">
              <a href="#" className="text-white/80 hover:text-white transition-colors">Log in</a>
              <button className="bg-white text-purple-900 px-5 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium">
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
    <section className="bg-purple-800 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <img
          src="./assets/images/149-12687.png"
          alt="Technology design tools for engineers and hobbyists"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// Partners Section
function PartnersSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <img
          src="./assets/images/151-13485.png"
          alt="Partner logos"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// Efficient Collaboration Section
function CollaborationSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <img
          src="./assets/images/176-14091.png"
          alt="Efficient collaboration feature"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// Work from Anywhere Section
function WorkAnywhereSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <img
          src="./assets/images/178-22902.png"
          alt="Work from anywhere feature"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// Tools Combined Section (Cyan)
function ToolsCombinedSection() {
  return (
    <section className="py-16 lg:py-24 bg-cyan-600">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <img
          src="./assets/images/176-13690.png"
          alt="All the tech and design tools combined"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// Grow Fast Section
function GrowFastSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
          Get your business to grow fast
        </h2>

        <img
          src="./assets/images/176-14180.png"
          alt="Business growth features"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// Features Section (Yellow)
function FeaturesSection() {
  return (
    <section className="py-16 lg:py-24 bg-yellow-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
          The features you were looking for
        </h2>

        <img
          src="./assets/images/184-14062.png"
          alt="Key features showcase"
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
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
          Technology design articles
        </h2>

        <img
          src="./assets/images/178-23671.png"
          alt="Technology design articles"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
          Frequently asked questions
        </h2>

        <img
          src="./assets/images/178-23661.png"
          alt="Frequently asked questions"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <img
          src="./assets/images/178-23293.png"
          alt="Customer testimonials"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// CTA Section (Purple)
function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-purple-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <img
          src="./assets/images/149-12750.png"
          alt="Ready for your next project CTA"
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
    Products: ["Features", "Integrations", "Pricing", "Changelog"],
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
    <footer className="bg-white py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="text-2xl font-bold text-purple-900 mb-4 block">
              protech
            </Link>
            <p className="text-gray-600 text-sm mb-6">
              Technology design tools for engineers and hobbyists.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((icon) => (
                <a
                  key={icon.name}
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-purple-800 hover:text-white transition-colors"
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
              <h3 className="text-gray-900 font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-purple-800 text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2023 Protech, Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-purple-800 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-800 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function LandingPage12() {
  return (
    <div className="min-h-screen bg-white relative">
      <Header />
      <main>
        <HeroSection />
        <PartnersSection />
        <CollaborationSection />
        <WorkAnywhereSection />
        <ToolsCombinedSection />
        <GrowFastSection />
        <FeaturesSection />
        <ArticlesSection />
        <FAQSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
