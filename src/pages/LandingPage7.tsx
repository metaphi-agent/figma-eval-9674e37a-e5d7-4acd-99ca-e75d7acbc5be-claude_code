import { useState } from "react";
import { Link } from "react-router-dom";

// Header Component
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 px-6 lg:px-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          xinder
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#" className="text-gray-700 hover:text-rose-900 transition-colors">Home</a>
          <a href="#" className="text-gray-700 hover:text-rose-900 transition-colors">Market</a>
          <a href="#" className="text-gray-700 hover:text-rose-900 transition-colors">Gallery</a>
          <a href="#" className="text-gray-700 hover:text-rose-900 transition-colors">Blog</a>
          <a href="#" className="text-gray-700 hover:text-rose-900 transition-colors">Pages</a>
          <a href="#" className="text-gray-700 hover:text-rose-900 transition-colors">Elements</a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="p-2 text-gray-700 hover:text-rose-900 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <a href="#" className="text-gray-700 hover:text-rose-900 transition-colors">Log in</a>
          <button className="bg-rose-900 text-white px-5 py-2 rounded-lg hover:bg-rose-800 transition-colors">
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
        <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
          <nav className="flex flex-col gap-4">
            <a href="#" className="text-gray-700 hover:text-rose-900 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-rose-900 transition-colors">Market</a>
            <a href="#" className="text-gray-700 hover:text-rose-900 transition-colors">Gallery</a>
            <a href="#" className="text-gray-700 hover:text-rose-900 transition-colors">Blog</a>
            <a href="#" className="text-gray-700 hover:text-rose-900 transition-colors">Pages</a>
            <a href="#" className="text-gray-700 hover:text-rose-900 transition-colors">Elements</a>
            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
              <a href="#" className="text-gray-700 hover:text-rose-900 transition-colors">Log in</a>
              <button className="bg-rose-900 text-white px-5 py-2 rounded-lg hover:bg-rose-800 transition-colors">
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
  const categories = ["Painting", "Video", "3D-artist", "Styles", "NFT"];
  const partners = ["Envato", "Sketch", "Dropbox", "NVIDIA", "Spotify", "Behance"];

  return (
    <section className="bg-rose-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
              Search the work of the best artists
            </h1>

            {/* Search Bar */}
            <div className="flex mb-6">
              <input
                type="text"
                placeholder="Enter your keyword here"
                className="flex-1 px-6 py-4 rounded-l-lg text-gray-900 placeholder-gray-500 focus:outline-none"
              />
              <button className="bg-gray-900 text-white px-6 py-4 rounded-r-lg hover:bg-gray-800 transition-colors">
                Search
              </button>
            </div>

            {/* Category Tags */}
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 border border-white/30 rounded-full text-sm text-white/90 hover:bg-white/10 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Partner Logos */}
            <div className="flex flex-wrap items-center gap-6 opacity-70">
              {partners.map((partner) => (
                <span key={partner} className="text-white/80 text-sm font-medium">{partner}</span>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <img
              src="./assets/images/32-11119.png"
              alt="Artist with paint"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Featured Art Categories Section
function FeaturedCategoriesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-10">
          Featured art categories
        </h2>

        <img
          src="./assets/images/35-11907.png"
          alt="Featured art categories grid"
          loading="lazy"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
}

// Latest Masterpieces Section
function MasterpiecesSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Latest masterpieces
          </h2>
          <a href="#" className="text-rose-900 hover:text-rose-800 font-medium transition-colors flex items-center gap-2">
            More artworks
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <img
          src="./assets/images/37-8385.png"
          alt="Latest masterpieces gallery"
          loading="lazy"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
}

// Expanding Services Section
function ServicesSection() {
  const services = [
    { title: "Web solutions", desc: "Custom web development" },
    { title: "Personal content", desc: "Tailored creative content" },
    { title: "Social Networks/platform", desc: "Community building" },
    { title: "Event organizers", desc: "Art event management" },
    { title: "Branding/agency", desc: "Brand identity design" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
          Expanding services
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-sm font-medium text-gray-900">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Best Solutions Section
function SolutionsSection() {
  const features = [
    "Video tutorials and downloads for easy set up",
    "Advance theme options to get total control",
    "Exceptionally crafted with care",
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Best solutions for your demanding collection
            </h2>
            <p className="text-gray-400 mb-8">
              Discover premium tools and features designed to help you manage and showcase your art collection with elegance and precision.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-rose-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="bg-rose-900 text-white px-6 py-3 rounded-lg hover:bg-rose-800 transition-colors">
              Learn More
            </button>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="./assets/images/39-14600.png"
              alt="Collection solutions preview"
              loading="lazy"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonial Section
function TestimonialSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-900 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-6 lg:px-20 text-center">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
        </div>

        <blockquote className="text-xl lg:text-2xl text-white mb-8 leading-relaxed">
          "In utroque, si quid est, quod te praesidio, quod te defensione, quod te advocati diligentia tueatur et conservet."
        </blockquote>

        <div className="flex items-center justify-center gap-4">
          <img
            src="./assets/images/53-119990.png"
            alt="Testimonial author"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="text-left">
            <p className="text-white font-medium">Michael Thornton</p>
            <p className="text-gray-400 text-sm">Art Collector, New York</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Be Incredible Section
function BeIncredibleSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="./assets/images/53-119990.png"
              alt="Be incredible artist"
              loading="lazy"
              className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Be incredible
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Join our community of artists and collectors. Showcase your work, discover new talents, and be part of a growing movement that celebrates creativity and artistic expression.
            </p>

            <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
              Explore Artists
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Art Events Section
function EventsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-10">
          Art events
        </h2>

        <img
          src="./assets/images/53-163515.png"
          alt="Upcoming art events"
          loading="lazy"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-rose-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Add more masterpieces to your growing collection
              </h2>
              <button className="bg-white text-rose-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Join Now
              </button>
            </div>

            {/* Right Image */}
            <div className="hidden lg:block">
              <img
                src="./assets/images/37-8254.png"
                alt="Art collection preview"
                loading="lazy"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
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
    <footer className="bg-white py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="text-2xl font-bold text-gray-900 mb-4 block">
              xinder
            </Link>
            <p className="text-gray-600 text-sm mb-6">
              Discover and collect extraordinary artworks from artists around the world.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((icon) => (
                <a
                  key={icon.name}
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-rose-900 hover:text-white transition-colors"
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
                    <a href="#" className="text-gray-600 hover:text-rose-900 text-sm transition-colors">
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
            &copy; 2024 xinder. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-rose-900 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-rose-900 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function LandingPage7() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturedCategoriesSection />
        <MasterpiecesSection />
        <ServicesSection />
        <SolutionsSection />
        <TestimonialSection />
        <BeIncredibleSection />
        <EventsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
