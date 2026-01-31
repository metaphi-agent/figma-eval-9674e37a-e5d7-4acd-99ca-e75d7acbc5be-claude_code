import { useState } from "react";
import { Link } from "react-router-dom";

// Header Component
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 py-4 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          Trakor
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Resources</a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Log in</a>
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-300"
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
        <div className="lg:hidden mt-4 pb-4 border-t border-slate-700 pt-4">
          <nav className="flex flex-col gap-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Resources</a>
            <div className="flex items-center gap-4 pt-4 border-t border-slate-700">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Log in</a>
              <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
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
    <section className="bg-slate-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Track your team progress
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Keep your projects on track with powerful team collaboration and progress tracking tools.
            Stay connected and achieve more together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
              Get Started
            </button>
            <button className="border border-gray-600 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <img
          src="./assets/images/79-210240.png"
          alt="Trakor dashboard preview"
          className="w-full h-auto rounded-xl"
        />
      </div>
    </section>
  );
}

// Team Together Section
function TeamTogetherSection() {
  return (
    <section className="bg-slate-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Your team. Your projects.
        </h2>
        <p className="text-2xl lg:text-3xl font-bold text-indigo-400 mb-8">
          Always together.
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Bring your team together with seamless collaboration tools designed for modern teams.
        </p>
      </div>
    </section>
  );
}

// Bigger Team Section
function BiggerTeamSection() {
  return (
    <section className="bg-slate-900 py-16 lg:py-24 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <img
              src="./assets/images/79-210351.png"
              alt="Team collaboration"
              loading="lazy"
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Bigger team.
            </h2>
            <p className="text-xl text-indigo-400 mb-6">More time.</p>
            <p className="text-gray-400 mb-8">
              Scale your team effortlessly while saving time. Our platform grows with you,
              making collaboration easier as your team expands.
            </p>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Open Space Banner Section
function BannerSection() {
  return (
    <section className="bg-indigo-600 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Open spaces for real it. Elegant lorem, colloges, intelligent and clean.
            </h2>
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="./assets/images/79-7953.png"
              alt="Open space collaboration"
              loading="lazy"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Powerful Tools Section
function PowerfulToolsSection() {
  return (
    <section className="bg-slate-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <img
          src="./assets/images/79-210816.png"
          alt="Powerful tools showcase"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// Team Management Section
function TeamManagementSection() {
  return (
    <section className="bg-slate-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Team management.
            </h2>
            <p className="text-xl text-indigo-400 mb-6">Effortless synchronization.</p>
            <p className="text-gray-400 mb-6">
              Manage your team with powerful tools that keep everyone in sync.
              Track progress, assign tasks, and collaborate seamlessly.
            </p>
            <p className="text-gray-500 text-sm mb-8">
              Ultimate data, insights, showcases<br />
              precise location clients.
            </p>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Learn More
            </button>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="./assets/images/82-212711.png"
              alt="Team management dashboard"
              loading="lazy"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Control the Flow Section
function ControlFlowSection() {
  return (
    <section className="bg-slate-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <img
              src="./assets/images/82-222053.png"
              alt="Control the flow dashboard"
              loading="lazy"
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Control the flow.
            </h2>
            <p className="text-xl text-indigo-400 mb-6">Work. Passion.</p>
            <p className="text-gray-400 mb-8">
              Take control of your workflow with intuitive tools designed for maximum productivity.
              Streamline processes and achieve better results.
            </p>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Explore Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Partners Section
function PartnersSection() {
  return (
    <section className="bg-slate-900 py-16 lg:py-24 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Our partners. Our Friends.
          </h2>
          <p className="text-indigo-400 text-lg">They love us.</p>
        </div>

        <img
          src="./assets/images/79-8399.png"
          alt="Partner logos"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// Gallery Section
function GallerySection() {
  return (
    <section className="bg-slate-800 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <img
          src="./assets/images/79-210643.png"
          alt="Team gallery"
          loading="lazy"
          className="w-full h-auto rounded-xl"
        />
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  return (
    <section className="bg-slate-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <img
          src="./assets/images/79-9030.png"
          alt="Customer testimonials"
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
    <section className="bg-slate-900 py-16 lg:py-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Your team. Your projects.
            </h2>
            <p className="text-xl text-indigo-400 mb-8">Always together.</p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                Get Started
              </button>
              <button className="border border-gray-600 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="./assets/images/79-8816.png"
              alt="CTA illustration"
              loading="lazy"
              className="w-full h-auto"
            />
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
    <footer className="bg-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="text-2xl font-bold text-white mb-4 block">
              Trakor
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Track your team progress and achieve more together.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((icon) => (
                <a
                  key={icon.name}
                  href="#"
                  className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-colors"
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

        {/* App Download Badges */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <a href="#" className="bg-slate-900 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-slate-700 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <p className="text-xs opacity-70">Download on the</p>
              <p className="text-sm font-semibold">App Store</p>
            </div>
          </a>
          <a href="#" className="bg-slate-900 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-slate-700 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5h15c.83 0 1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5h-15c-.83 0-1.5-.67-1.5-1.5zm9-14.5l-5 9h10l-5-9z"/>
            </svg>
            <div className="text-left">
              <p className="text-xs opacity-70">Get it on</p>
              <p className="text-sm font-semibold">Google Play</p>
            </div>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            Trakor &copy; 2023
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
export default function LandingPage9() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        <HeroSection />
        <TeamTogetherSection />
        <BiggerTeamSection />
        <BannerSection />
        <PowerfulToolsSection />
        <TeamManagementSection />
        <ControlFlowSection />
        <PartnersSection />
        <GallerySection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
