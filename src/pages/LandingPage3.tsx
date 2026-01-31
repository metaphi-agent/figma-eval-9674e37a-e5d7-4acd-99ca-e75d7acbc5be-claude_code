import { useState } from 'react';
import { Link } from 'react-router-dom';

// Header Component
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white py-6 px-6 lg:px-20">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-900">teach</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-12">
          <a href="#products" className="text-gray-600 hover:text-gray-900 transition-colors">Products</a>
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
          <a href="#resources" className="text-gray-600 hover:text-gray-900 transition-colors">Resources</a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
            Log in
          </button>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
            Sign Up Free
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
          <nav className="flex flex-col gap-4">
            <a href="#products" className="text-gray-600 hover:text-gray-900">Products</a>
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#resources" className="text-gray-600 hover:text-gray-900">Resources</a>
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <button className="text-gray-700 font-medium">Log in</button>
            <button className="bg-amber-500 text-white px-6 py-3 rounded-full font-medium">
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
  return (
    <section className="px-6 lg:px-20 py-12 lg:py-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center gap-2 text-amber-600 font-medium text-sm">
            <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
            Join us, A Better Future
          </span>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
            Teach students worldwide
          </h1>
          <p className="text-gray-600 text-lg max-w-lg">
            Donec nunc nunc, duis aliquet sit et nulla amet non.
            Fafis ullamcorper ullamcorper turpis aliquam lacus gravida ac.
            Risus ipsum sed pellentesque risus ultricies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-medium transition-colors">
              Sign Up Now
            </button>
            <button className="flex items-center justify-center gap-2 text-gray-700 hover:text-gray-900 font-medium">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <polygon points="10,8 16,12 10,16" fill="currentColor"/>
              </svg>
              How it Works
            </button>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-3">Trusted by leading companies</p>
            <div className="flex flex-wrap items-center gap-6 opacity-50">
              <span className="font-bold text-gray-400">Microsoft</span>
              <span className="font-bold text-gray-400">Google</span>
              <span className="font-bold text-gray-400">Airbnb</span>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="flex-1 relative">
          <img
            src="./assets/images/92-57969.png"
            alt="Students learning worldwide"
            className="w-full h-auto rounded-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

// Tools Section
function ToolsSection() {
  const companies = ['Microsoft', 'Webflow', 'Volant', 'Dribble', 'Invision'];

  return (
    <section className="bg-[#F1F5F9] py-20 px-6 lg:px-20 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-300/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            All the <span className="text-amber-500">tools</span> that you need
          </h2>
          <p className="text-gray-600">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.
            Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
          </p>
        </div>

        {/* Browser Mockup */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Browser header */}
          <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-white rounded px-3 py-1 text-sm text-gray-500 max-w-xs">
                teach.io/dashboard
              </div>
            </div>
          </div>
          {/* Content area */}
          <div className="aspect-video bg-gradient-to-br from-amber-50 to-white p-8">
            <div className="h-full bg-gradient-to-br from-gray-50 to-white rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-400">
                <svg className="w-16 h-16 mx-auto mb-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="font-medium text-gray-500">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
          {companies.map((company) => (
            <span key={company} className="text-gray-400 font-semibold text-lg">
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// All-in-one App Section
function AppSection() {
  const features = [
    'Dui et nibhneque congue efficitur ut ipsum aliquet.',
    'Eget et pharetra magna adipiscing porta vulputate.',
    'Tellus arcu sed consequat ac velit id nibhandit.',
    'Ullamcorper ornare et egestas aliquet.',
  ];

  return (
    <section className="py-20 px-6 lg:px-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            An <span className="text-amber-500">all-in-one</span> app<br/>
            that makes it easier
          </h2>
          <p className="text-gray-600">
            Sit elit feugiat turpis sed integer integer accumsan turpis.
            Sed suspendisse nec lorem mauris.
            Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
          </p>

          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>

          <a href="#learn-more" className="inline-flex items-center gap-2 text-amber-600 font-medium hover:text-amber-700">
            Find more about the app
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Right Content - App Image */}
        <div className="flex-1 relative">
          <div className="absolute -z-10 top-1/2 right-0 transform -translate-y-1/2 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
          <img
            src="./assets/images/102-87318.png"
            alt="App interface showing video player"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

// International Section
function InternationalSection() {
  const categories = ['Languages', 'Math', 'Science', 'History', 'Design', 'Technology'];

  return (
    <section className="py-20 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
        {/* Right Content - Text */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Meet international<br/>
            students & <span className="text-amber-500">teachers</span>
          </h2>
          <p className="text-gray-600">
            Id orci senectus et eu elit. Urna arcula elit at orci pulvinar aliquet ac ipsum.
            Tristique tincidunt dignissim interdum magna rhoncus nunc congue enim.
            Pharetra habitant sapien scelerisque.
          </p>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <span
                key={category}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                {category}
              </span>
            ))}
          </div>

          <a href="#explore" className="inline-flex items-center gap-2 text-amber-600 font-medium hover:text-amber-700">
            Explore teachers and students
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Left Content - Image Grid */}
        <div className="flex-1">
          <img
            src="./assets/images/102-88221.png"
            alt="International students and teachers"
            className="w-full h-auto rounded-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

// Stats Section
function StatsSection() {
  const stats = [
    { value: '195', label: 'Countries', prefix: '' },
    { value: '1M', label: 'Registered users', prefix: '+' },
    { value: '17M', label: 'Happy students', prefix: '' },
  ];

  return (
    <section className="bg-[#0F172A] py-20 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-5xl lg:text-6xl font-bold text-amber-500 mb-2">
              {stat.prefix}{stat.value}
            </div>
            <div className="text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Lorem ipsum sit amet cons adipiscing elit. Nam aliq turpis tortor sit. Maecenas sit nisl nisi, Nisl facilisis a nec scelerisque volutpa feugia urna. Ornare pretium ut ultrices consectetur velit viverra.",
      author: "Wade Warren",
      role: "",
    },
    {
      quote: "Erat iaculis a lacus in natque. Morbis ut et cursus natoque volutpat sit amet. Id porttitor sed vulputate maecena. Sed volutpat pharetra tortor risus. Tempor amet volutpat faucibus.",
      author: "Leslie Alexander",
      role: "",
    },
    {
      quote: "Cursus sed sit velit vitae. Auctor cursus tellus ultricies eu amet tincidun. Morbi in nibh volutpat amet. Dictum neque cursus.",
      author: "Dianne Russell",
      role: "",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-20">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          What everyone says
        </h2>
        <div className="flex gap-3">
          <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center hover:bg-amber-600 transition-colors">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
          >
            <div className="mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400 inline" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <span className="font-medium text-gray-900">{testimonial.author}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  return (
    <section className="py-20 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            All the cool <span className="text-amber-500">features</span>
          </h2>
          <p className="text-gray-600">
            Id orci senectus et eu elit. Urna arcula elit at orci pulvinar aliquet ac ipsum.
            Tristique tincidunt dignissim interdum magna rhoncus nunc congue enim.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Video live lessons</h3>
                <p className="text-gray-600 text-sm">Engage with live video streaming</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Design for free people</h3>
                <p className="text-gray-600 text-sm">Open platform for everyone</p>
              </div>
            </div>

            <a href="#features" className="inline-flex items-center gap-2 text-amber-600 font-medium hover:text-amber-700">
              View all the features
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="flex-1">
          <img
            src="./assets/images/102-88994.png"
            alt="Features showcase with people images"
            className="w-full h-auto rounded-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="bg-[#FACC15] py-24 lg:py-32 px-6 lg:px-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 opacity-20">
        <div className="w-64 h-64 border-4 border-amber-600 rounded-full"></div>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 opacity-20">
        <div className="w-64 h-64 border-4 border-amber-600 rounded-full"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
          Join a world of learning
        </h2>
        <p className="text-gray-800 mb-8">
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
          Risus elit et fringilla habitant ut facilisi.
        </p>
        <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium transition-colors">
          Sign Up Now
        </button>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  const footerLinks = {
    Teach: ['Features', 'Enterprise', 'Pricing', 'Security', 'Teams', 'Docs'],
    Product: ['Integrations', 'Changelog', 'Blog', 'Media', 'Apps', 'Partners'],
    Resources: ['Accessibility', 'Webinars', 'E-books', 'Stories', 'APIs', 'Events'],
    Company: ['Newsroom', 'Investors', 'Diversity', 'Jobs', 'Legal'],
    Support: ['Talk to sales', 'Help center', 'Contact us', 'Privacy'],
  };

  return (
    <footer className="bg-[#0F172A] text-white py-16 px-6 lg:px-20">
      {/* Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b border-gray-700">
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h3 className="font-semibold text-white mb-4">{category}</h3>
            <ul className="space-y-2">
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

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">Get latest news and updates</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm flex-1 min-w-0"
            />
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-xl font-bold">teach</span>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          uteach @ 2023. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {['facebook', 'twitter', 'instagram', 'linkedin', 'youtube'].map((social) => (
            <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors">
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                <span className="sr-only">{social}</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// Main Landing Page Component
export default function LandingPage3() {
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
        <ToolsSection />
        <AppSection />
        <InternationalSection />
        <StatsSection />
        <TestimonialsSection />
        <FeaturesSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
