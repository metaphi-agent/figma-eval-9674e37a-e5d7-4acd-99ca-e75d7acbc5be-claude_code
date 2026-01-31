import { useState } from 'react';
import { Link } from 'react-router-dom';

// Header Component
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 py-6 px-6 lg:px-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-12">
          <span className="text-2xl font-bold text-blue-600">Apex</span>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#products" className="text-gray-600 hover:text-gray-900 transition-colors">Products</a>
            <a href="#resources" className="text-gray-600 hover:text-gray-900 transition-colors">Resources</a>
            <a href="#help" className="text-gray-600 hover:text-gray-900 transition-colors">Help Center</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
          </nav>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="text-gray-700 hover:text-gray-900 font-medium">
            Log in
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
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
            <a href="#resources" className="text-gray-600 hover:text-gray-900">Resources</a>
            <a href="#help" className="text-gray-600 hover:text-gray-900">Help Center</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
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
  return (
    <section className="border-b border-gray-200 py-20 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
            Building apps just<br/>
            got easier
          </h1>
          <p className="text-gray-600 text-lg max-w-lg mx-auto lg:mx-0">
            Pellentesque viverra nibh sit in aliquet sapien verisatis. Integer
            nulla malesuada blandit fringilla nam in pulvinar tellus. Faucibus
            elit nulla consectetur tincidunt malesuada vestibulum morbi.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors">
            Get Started
          </button>
        </div>

        {/* Right Content - App Image */}
        <div className="flex-1">
          <img
            src="./assets/images/30-7026.png"
            alt="App interface mockup"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

// Features Cards Section
function FeaturesCardsSection() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Feature name',
      description: 'A risus magna sed molestie amet. Tellus lectus ipsum et sagittis sit quis ultricies.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: 'Algorithm power',
      description: 'Diam amet enim cursus gravida cras faucibus auctor ipsum. Non amet integer.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Great interface',
      description: 'Maecenas praesent congue pharetra fringilla pulvinar. Natoque in non at cras ornare.',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-20 px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Essential Tools Section
function EssentialToolsSection() {
  return (
    <section className="py-20 px-6 lg:px-20">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          All the essential tools
        </h2>
        <p className="text-gray-600">
          Odio vulputate cras vel lacinia turpis volutpat adipiscing.
          Sollicitudin at velit, blandit tempus nunc in.
        </p>
      </div>

      {/* Tools Image */}
      <div className="max-w-5xl mx-auto">
        <img
          src="./assets/images/32-8378.png"
          alt="Essential tools interface"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
    </section>
  );
}

// Focus Section
function FocusSection() {
  return (
    <section className="py-20 px-6 lg:px-20">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Focus on what matters
        </h2>
        <p className="text-gray-600">
          Eget at purus mauris euismod metus vitae eget.
          Diam massa venenatis pellentesque facilisis nunc, varius.
        </p>
      </div>

      {/* Focus Image */}
      <div className="max-w-5xl mx-auto mb-12">
        <img
          src="./assets/images/32-8835.png"
          alt="Focus on features"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>

      <div className="text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
}

// Demo Section
function DemoSection() {
  return (
    <section className="bg-gray-100 py-20 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <img
          src="./assets/images/32-10254.png"
          alt="Product demo"
          className="w-full h-auto rounded-2xl"
          loading="lazy"
        />
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Lorem quibusdam consequatur ut ibus fuisue tempore. Aenean amet natoque?',
      answer: 'Suspendisse molis ante mauris in molestie semper. Quisque cursus et amet. Maecenas aliquet urna molestie elit.',
    },
    {
      question: 'Mauris vitae, an ultrices varius morbi molestis nulla integer. Amet lectus?',
      answer: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      question: 'Duis sed enim in erat aliquam suspendisse orci fusce dui in sit?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies.',
    },
    {
      question: 'Vestibulum hendrerit adipiscing integer pulvinar elit non in ut dolor?',
      answer: 'Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada.',
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-20">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Answers to your questions
        </h2>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left"
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-5">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="bg-gray-100 py-20 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Start now and get the<br/>
            best services
          </h2>
          <p className="text-gray-600">
            Faucibus urna eu cursus. Duis sed cras fermentum risque faucibus
            donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis
            at amet. Purus malesuada placerat arcu at enim elit in accumsan.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">Suspendisse elit quis sed donec et turpis pulvinar purus</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">Neque ut tellus ultrices malesuada amet aliquet sed diam</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">Nullam at duis quis gravida vitae in sit in tellus</span>
            </div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors">
            Get Started
          </button>
        </div>

        {/* Right - Image */}
        <div className="flex-1">
          <img
            src="./assets/images/32-9148.png"
            alt="App mockup"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  const footerSections = {
    Product: ['Overview', 'Features', 'Pricing', 'Releases'],
    Company: ['About', 'Press', 'Careers', 'Contact'],
    Resources: ['Blog', 'Newsletter', 'Events', 'Help center'],
    Social: ['Twitter', 'LinkedIn', 'Facebook', 'Dribbble'],
    Legal: ['Terms', 'Privacy', 'Cookies', 'Settings'],
  };

  return (
    <footer className="bg-white py-16 px-6 lg:px-20">
      {/* Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b border-gray-200">
        {/* Logo */}
        <div>
          <span className="text-xl font-bold text-blue-600">Apex</span>
        </div>

        {Object.entries(footerSections).map(([category, links]) => (
          <div key={category}>
            <h3 className="font-semibold text-gray-900 mb-4">{category}</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          @ 2023 All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {['twitter', 'facebook', 'linkedin', 'instagram'].map((social) => (
            <a key={social} href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">
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
export default function LandingPage6() {
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
        <FeaturesCardsSection />
        <EssentialToolsSection />
        <FocusSection />
        <DemoSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
