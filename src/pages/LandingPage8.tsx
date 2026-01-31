import { useState } from "react";
import { Link } from "react-router-dom";

// Header Component
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-violet-700">
          wrapp
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#" className="text-gray-700 hover:text-violet-700 transition-colors">Home</a>
          <a href="#" className="text-gray-700 hover:text-violet-700 transition-colors">Features</a>
          <a href="#" className="text-gray-700 hover:text-violet-700 transition-colors">Resources</a>
          <a href="#" className="text-gray-700 hover:text-violet-700 transition-colors">Elements</a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="p-2 text-gray-700 hover:text-violet-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="bg-violet-700 text-white px-5 py-2 rounded-lg hover:bg-violet-800 transition-colors">
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
            <a href="#" className="text-gray-700 hover:text-violet-700 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-violet-700 transition-colors">Features</a>
            <a href="#" className="text-gray-700 hover:text-violet-700 transition-colors">Resources</a>
            <a href="#" className="text-gray-700 hover:text-violet-700 transition-colors">Elements</a>
            <button className="bg-violet-700 text-white px-5 py-2 rounded-lg hover:bg-violet-800 transition-colors w-fit">
              Sign Up
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            All your ideas in one place
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Write down whatever you're on your head, from random ideas to actual
            projects as a digital space to store all of your big thoughts.
          </p>
          <button className="bg-violet-700 text-white px-8 py-3 rounded-lg hover:bg-violet-800 transition-colors font-medium">
            Start For Free
          </button>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <img
            src="./assets/images/53-163799.png"
            alt="Wrapp app interface showing idea management"
            className="w-full h-auto rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    { title: "Tremendous speed", desc: "Lightning fast performance for your workflow" },
    { title: "Organize space", desc: "Keep everything tidy and accessible" },
    { title: "Signature system", desc: "Unique approach to idea management" },
    { title: "Share easily", desc: "Collaborate with your team effortlessly" },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-violet-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-violet-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Brainstorm Section
function BrainstormSection() {
  const features = [
    "Create unlimited ideas and projects",
    "Organize with tags and folders",
    "Real-time collaboration",
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <img
              src="./assets/images/53-164175.png"
              alt="Team brainstorming"
              loading="lazy"
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-violet-700 font-medium mb-2">COLLABORATION</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Easily brainstorm with your team
            </h2>
            <p className="text-gray-600 mb-8">
              Collaborate in real-time with your team members. Share ideas, get feedback,
              and build something amazing together.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-violet-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="bg-violet-700 text-white px-6 py-3 rounded-lg hover:bg-violet-800 transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Find Similar Stories Section
function StoriesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
          Find similar stories
        </h2>

        <img
          src="./assets/images/59-8058.png"
          alt="Similar stories grid"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

// Grow Fast Section
function GrowFastSection() {
  const features = [
    "100% responsive, mobile ready layout",
    "SEO-optimized, auto-generate site maps",
    "All modules: Figma files and source code",
    "Dedicated Support Team",
    "30+ fully crafted and polished pages",
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Get your business to grow fast
            </h2>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-violet-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="./assets/images/53-163807.png"
              alt="Business growth illustration"
              loading="lazy"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Unlimited Ideas Section
function UnlimitedIdeasSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-violet-700 font-medium mb-2">BEST IN CLASS</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Unlimited ideas for your projects
            </h2>
            <p className="text-gray-600 mb-8">
              Never run out of inspiration. Our platform helps you capture, organize,
              and develop your ideas into successful projects.
            </p>
            <button className="border border-violet-700 text-violet-700 px-6 py-3 rounded-lg hover:bg-violet-700 hover:text-white transition-colors">
              Learn More
            </button>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="./assets/images/59-8510.png"
              alt="Project ideas showcase"
              loading="lazy"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Callout Section (Light Purple)
function CalloutSection() {
  return (
    <section className="py-16 lg:py-24 bg-violet-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <img
          src="./assets/images/53-164795.png"
          alt="Unlimited ideas for your projects"
          loading="lazy"
          className="w-full h-auto rounded-xl"
        />
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-violet-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <p className="text-violet-300 font-medium mb-2">START CREATING TODAY</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Brainstorm now!
            </h2>
            <p className="text-violet-200 mb-8">
              Join thousands of teams using Wrapp to bring their ideas to life.
              Start your free trial today.
            </p>
            <button className="bg-white text-violet-800 px-8 py-3 rounded-lg font-medium hover:bg-violet-100 transition-colors">
              Start Free Trial
            </button>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block">
            <img
              src="./assets/images/57-8201.png"
              alt="Brainstorm CTA illustration"
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
    <footer className="bg-white py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="text-2xl font-bold text-violet-700 mb-4 block">
              wrapp
            </Link>
            <p className="text-gray-600 text-sm mb-6">
              All your ideas in one place. The ultimate brainstorming tool for teams.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((icon) => (
                <a
                  key={icon.name}
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-violet-700 hover:text-white transition-colors"
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
                    <a href="#" className="text-gray-600 hover:text-violet-700 text-sm transition-colors">
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
          <a href="#" className="bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <p className="text-xs opacity-70">Download on the</p>
              <p className="text-sm font-semibold">App Store</p>
            </div>
          </a>
          <a href="#" className="bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
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
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2023 Wrapp. All rights reserved
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-violet-700 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-violet-700 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function LandingPage8() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <BrainstormSection />
        <StoriesSection />
        <GrowFastSection />
        <UnlimitedIdeasSection />
        <CalloutSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
