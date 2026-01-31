import { useState } from 'react';
import { Link } from 'react-router-dom';

// Header Component
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 py-6 px-6 lg:px-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <span className="text-2xl font-bold text-gray-900">magnifico</span>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          <a href="#products" className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            Products
          </a>
          <a href="#solutions" className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            Solutions
          </a>
          <a href="#services" className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            Services
          </a>
          <a href="#help" className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            Help Center
          </a>
          <a href="#pricing" className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            Pricing
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="text-gray-700 hover:text-gray-900 font-medium">
            Log in
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
            Sign Up Free
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-6 pb-6 border-t border-gray-100 pt-6">
          <nav className="flex flex-col gap-2">
            <a href="#products" className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Products</a>
            <a href="#solutions" className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Solutions</a>
            <a href="#services" className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Services</a>
            <a href="#help" className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Help Center</a>
            <a href="#pricing" className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Pricing</a>
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <button className="text-gray-700 font-medium">Log in</button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">
              Sign Up Free
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

// Hero Section
function HeroSection() {
  const companies = ['SHELLS', 'SmartFinder', 'ArtVenue', 'WAVES'];

  return (
    <section className="border-b border-gray-200 py-20 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
            Team projects,<br/>
            done well
          </h1>
          <p className="text-gray-600 text-lg max-w-lg">
            The only platform that gives your team all the tools needed to work
            together on their awesome projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter work email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
              Sign Up Free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            {companies.map((company) => (
              <span key={company} className="text-gray-400 font-semibold">
                {company}
              </span>
            ))}
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="flex-1 relative">
          <img
            src="./assets/images/346-20684.png"
            alt="Team collaboration"
            className="w-full h-auto rounded-2xl"
            loading="lazy"
          />
          {/* Decorative dots */}
          <div className="absolute -top-8 -right-8 w-32 h-32 opacity-20">
            <div className="grid grid-cols-4 gap-2">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-blue-600" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Enjoy Working Section
function EnjoyWorkingSection() {
  return (
    <section className="py-20 px-6 lg:px-20 relative">
      {/* Decorative dots */}
      <div className="absolute top-20 left-6 w-32 h-32 opacity-20 hidden lg:block">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-blue-600" />
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left - Image */}
        <div className="flex-1">
          <img
            src="./assets/images/20-6576.png"
            alt="Team enjoying work"
            className="w-full h-auto rounded-2xl"
            loading="lazy"
          />
        </div>

        {/* Right - Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Enjoy your time<br/>
            working
          </h2>
          <p className="text-gray-600">
            Etiam condimentum duis molestie malesuada volutpat pellentesque sed.
            Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis
            massa tellus imperdiet aenean nulla id.
          </p>

          <a href="#learn-more" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700">
            See how it helped others
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// Tools Section
function ToolsSection() {
  return (
    <section className="py-20 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
        {/* Left - Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Get all the tools your<br/>
            team needs
          </h2>
          <p className="text-gray-600">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
            Neque pellentesque donec et tellus ac varius tortor, bibendum.
            Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.
          </p>

          <a href="#learn-more" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700">
            Check the tools
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Right - Image */}
        <div className="flex-1">
          <img
            src="./assets/images/346-20683.png"
            alt="Team tools interface"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

// Problems Solved Section
function ProblemsSolvedSection() {
  return (
    <section className="px-6 lg:px-20 py-8">
      <div className="bg-purple-800 rounded-3xl p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-transparent"></div>

        {/* Left - Image */}
        <div className="flex-1 relative z-10">
          <img
            src="./assets/images/20-6683.png"
            alt="Problem solving visualization"
            className="w-full h-auto rounded-2xl"
            loading="lazy"
          />
        </div>

        {/* Right - Content */}
        <div className="flex-1 space-y-6 relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Problems come and<br/>
            get solved with ease
          </h2>
          <p className="text-purple-200">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
            Neque pellentesque donec et tellus ac varius tortor, bibendum.
            Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.
          </p>

          <a href="#learn-more" className="inline-flex items-center gap-2 text-white font-medium hover:text-purple-200">
            Improve workflow
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// Workflow Section
function WorkflowSection() {
  const [activeTab, setActiveTab] = useState('Research');
  const tabs = ['Research', 'Plan', 'Design'];

  return (
    <section className="py-20 px-6 lg:px-20 relative">
      {/* Decorative dots */}
      <div className="absolute top-20 right-6 w-32 h-32 opacity-20 hidden lg:block">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-blue-600" />
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left - Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Improve workflow
          </h2>

          {/* Tabs */}
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <p className="text-gray-600">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
            Neque pellentesque donec et tellus ac varius tortor, bibendum.
            Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.
          </p>

          <a href="#check-tools" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700">
            Check the tools
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Right - Dashboard Preview */}
        <div className="flex-1">
          <div className="bg-gray-100 rounded-2xl p-4">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
                <span className="font-medium text-gray-900">app.magnifico.io</span>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                <div className="h-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="px-6 lg:px-20 py-8">
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Join the community today
          </h2>
          <p className="text-blue-100">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
            Neque pellentesque donec et tellus ac varius tortor, bibendum.
          </p>
          <button className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg font-medium transition-colors flex items-center gap-2 mx-auto">
            Sign Up Free
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  const footerLinks = ['Terms', 'Privacy', 'Support', 'About', 'Resources', 'Contact'];

  return (
    <footer className="bg-white py-12 px-6 lg:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo & Copyright */}
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold text-gray-900">magnifico</span>
          <span className="text-gray-500 text-sm">@ 2023. All rights reserved.</span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

// Main Landing Page Component
export default function LandingPage5() {
  return (
    <div className="min-h-screen bg-white">
      {/* Back to home */}
      <div className="bg-gray-100 py-2 px-6 lg:px-20">
        <Link to="/" className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Landing Pages
        </Link>
      </div>

      <Header />

      <main>
        <HeroSection />
        <EnjoyWorkingSection />
        <ToolsSection />
        <ProblemsSolvedSection />
        <WorkflowSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
