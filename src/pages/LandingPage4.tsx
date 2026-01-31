import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

// Header Component
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full py-6 px-5 md:px-20">
      <div className="mx-auto max-w-[1000px]">
        <div className="flex items-center justify-between bg-white/5 rounded-[20px] px-6 py-6 shadow-[0_0_15px_rgba(0,0,0,0.07),0_25px_50px_-12px_rgba(0,0,0,0.25)]">
          {/* Logo */}
          <div className="flex items-center gap-10">
            <Link to="/" className="text-white text-2xl font-bold">
              weeb
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {['About Us', 'Solutions', 'Pricing', 'Resources'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white/80 hover:text-white transition-colors text-sm font-medium flex items-center gap-1"
                >
                  {item}
                  <ChevronDown size={16} />
                </a>
              ))}
            </nav>
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Sign In
            </a>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-purple-700 transition-colors">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 bg-white/5 rounded-[20px] p-6">
            {['About Us', 'Solutions', 'Pricing', 'Resources'].map((item) => (
              <a
                key={item}
                href="#"
                className="block py-3 text-white/80 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Sign In
              </a>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-purple-700 transition-colors">
                Sign Up
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="px-5 md:px-20 py-20">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-20">
        {/* Text Content */}
        <div className="text-center max-w-[800px]">
          <h1 className="heading-1 text-white mb-8">
            Design Faster &{' '}
            <span className="relative inline-block">
              Better
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-purple-400 rounded-full" />
            </span>
          </h1>
          <p className="body-l text-white/80 mb-8">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.
            <br />
            Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-full font-bold hover:bg-purple-700 transition-colors flex items-center gap-2">
              Get Started
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
              Hire Us
            </button>
          </div>
        </div>

        {/* Desktop App Mockup */}
        <div className="w-full max-w-[1100px]">
          <div className="bg-white rounded-[20px] shadow-[0_0_15px_rgba(0,0,0,0.07),0_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-gray-100 rounded-full px-4 py-1 text-sm text-gray-500 flex items-center gap-2">
                  <span>←</span>
                  <span>→</span>
                  <span className="bg-white rounded-full px-3 py-0.5">weeb.com/dashboard</span>
                </div>
              </div>
            </div>
            {/* Screen Content */}
            <div className="bg-blue-100 aspect-[16/9] flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-lg" />
                </div>
                <p className="text-blue-600 font-medium">App Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Logos Section
function LogosSection() {
  const logos = ['SmartFinder', 'Zoomerr', 'Shell', 'Waves', 'ArtVenue'];

  return (
    <section className="px-5 md:px-20 py-20">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-20">
        <h2 className="heading-4 text-white text-center">Join Leading Companies</h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {logos.map((logo) => (
            <div key={logo} className="text-white/60 text-lg font-bold flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-lg" />
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Feature Section Component
interface FeatureSectionProps {
  caption: string;
  title: string;
  description: string;
  ctaText?: string;
  imagePosition?: 'left' | 'right';
  decorationType?: 'circles' | 'squares' | 'app';
}

function FeatureSection({
  caption,
  title,
  description,
  ctaText,
  imagePosition = 'right',
  decorationType = 'app',
}: FeatureSectionProps) {
  const renderDecoration = () => {
    if (decorationType === 'circles') {
      return (
        <div className="relative w-full h-[379px]">
          {/* Outer circle */}
          <div className="absolute right-0 top-8 w-[245px] h-[303px] rounded-full border-[5px] border-purple-600" />
          {/* Inner circle */}
          <div className="absolute right-[37px] top-[100px] w-[171px] h-[174px] rounded-full border-[5px] border-purple-300" />
          {/* Filled quarter */}
          <div className="absolute right-[51px] top-[112px] w-[145px] h-[148px] bg-orange-600 rounded-full" style={{ clipPath: 'polygon(50% 50%, 100% 50%, 100% 0, 50% 0)' }} />
          {/* Square */}
          <div className="absolute right-[-40px] top-0 w-[252px] h-[252px] border-[5px] border-purple-900" />
        </div>
      );
    }

    if (decorationType === 'squares') {
      return (
        <div className="relative w-full h-[284px] flex items-center justify-center">
          {/* Rotating squares */}
          <div className="absolute w-[256px] h-[256px] border-[5px] border-purple-900" />
          <div className="absolute w-[260px] h-[260px] border-[5px] border-purple-900 rotate-[15deg]" />
          <div className="absolute w-[284px] h-[284px] border-[5px] border-purple-900 rotate-[30deg]" />
          <div className="absolute w-[284px] h-[284px] border-[5px] border-purple-900 rotate-[45deg]" />
          <div className="absolute w-[196px] h-[196px] bg-pink-700 rotate-[15deg]" />
        </div>
      );
    }

    // Default: App mockup
    return (
      <div className="bg-white rounded-[20px] shadow-[0_0_10px_rgba(0,0,0,0.07),0_20px_25px_-5px_rgba(0,0,0,0.1)] overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
        </div>
        <div className="bg-blue-100 aspect-[750/439] flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-xl" />
        </div>
      </div>
    );
  };

  const content = (
    <div className="flex flex-col gap-8 max-w-[450px]">
      <span className="caption-m text-purple-400">{caption}</span>
      <h2 className="heading-4 text-white">{title}</h2>
      <p className="body-m text-white/70">{description}</p>
      {ctaText && (
        <button className="w-fit bg-purple-600 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-700 transition-colors flex items-center gap-2">
          {ctaText}
          <ArrowRight size={20} />
        </button>
      )}
    </div>
  );

  const visual = (
    <div className="flex-1">
      {renderDecoration()}
    </div>
  );

  return (
    <section className="px-5 md:px-20 py-20">
      <div className="max-w-[1280px] mx-auto">
        <div className={`flex flex-col ${imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-20`}>
          <div className="lg:w-[450px]">{content}</div>
          <div className="flex-1">{visual}</div>
        </div>
      </div>
    </section>
  );
}

// Testimonial Section
function TestimonialSection() {
  return (
    <section className="bg-purple-900 px-5 md:px-20 py-20">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-20">
        {/* Left Content */}
        <div className="flex flex-col gap-8 flex-1">
          <span className="caption-m text-purple-400">Testimonials</span>
          <h2 className="heading-4 text-white relative inline-block">
            Bigapp got to the next level
            <span className="absolute -bottom-2 left-0 w-[174px] h-[5px] bg-purple-400" />
          </h2>
          <button className="w-fit bg-purple-600 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-700 transition-colors flex items-center gap-2">
            See All Stories
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Mobile App Mockup */}
        <div className="relative">
          <div className="w-[350px] h-[750px] bg-blue-100 rounded-[50px] shadow-[0_0_15px_rgba(0,0,0,0.07),0_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
            {/* App Content Placeholder */}
            <div className="flex flex-col h-full">
              <div className="flex-1 p-8">
                <div className="w-full h-48 bg-blue-200 rounded-2xl mb-6" />
                <div className="space-y-4">
                  <div className="h-4 bg-blue-200 rounded w-3/4" />
                  <div className="h-4 bg-blue-200 rounded w-1/2" />
                </div>
              </div>
              {/* Bottom Nav */}
              <div className="h-24 border-t-[3px] border-white flex items-center justify-around px-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 bg-blue-200 rounded-lg" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Testimonial */}
        <div className="flex flex-col gap-4 flex-1">
          <p className="body-l text-white/90 italic">
            "Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus."
          </p>
          <div className="flex items-center gap-4 pt-4">
            <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
              R
            </div>
            <div>
              <p className="subtitle-m text-white">Rwanda Melflor</p>
              <p className="body-s text-purple-300">Co-founder Bigapp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Event Card Component
interface EventCardProps {
  category: string;
  title: string;
  imageColor: string;
}

function EventCard({ category, title, imageColor }: EventCardProps) {
  return (
    <div className="flex flex-col">
      {/* Image */}
      <div className={`aspect-[4/3] rounded-2xl mb-4 ${imageColor} relative overflow-hidden`}>
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900">
          {category}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-white/30 rounded-2xl" />
        </div>
      </div>
      {/* Content */}
      <h3 className="heading-6 text-gray-900 mb-3">{title}</h3>
      <button className="text-purple-700 font-bold flex items-center gap-2 hover:text-purple-800 transition-colors">
        Learn More
        <ArrowRight size={20} />
      </button>
    </div>
  );
}

// Events Section
function EventsSection() {
  const events = [
    { category: 'Design Thinking', title: 'Wild Horse Event', imageColor: 'bg-amber-200' },
    { category: 'Festival', title: 'Music & Colors', imageColor: 'bg-pink-200' },
    { category: 'Bootcamp', title: "Happy Father's Day", imageColor: 'bg-sky-200' },
  ];

  return (
    <section className="bg-white px-5 md:px-20 py-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <h2 className="heading-4 text-gray-900">Design events near your</h2>
          <button className="text-purple-700 font-bold flex items-center gap-2 hover:text-purple-800 transition-colors">
            Explore Events
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  const footerLinks = {
    Products: ['Overview', 'Solutions', 'Pricing', 'Customers'],
    Company: ['About', 'Investor Relations', 'Jobs'],
    Support: ['Contact', 'Documentation', 'Chat'],
    Legal: ['Privacy', 'Cookies', 'Terms'],
  };

  return (
    <footer className="bg-white border-t border-gray-200 px-5 md:px-20 py-16">
      <div className="max-w-[1280px] mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
          {/* Logo and Description */}
          <div className="max-w-[300px]">
            <div className="text-2xl font-bold text-gray-900 mb-4">weeb</div>
            <p className="body-s text-gray-600 mb-6">
              Design amazing digital experiences that create more happy in the world.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {['twitter', 'linkedin', 'facebook', 'github', 'dribbble'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  <div className="w-5 h-5 bg-gray-400 rounded" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-bold text-gray-900 mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            @ 2023 Weeb, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Landing Page Component
export default function LandingPage4() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <HeroSection />
      <LogosSection />

      <FeatureSection
        caption="Discover"
        title="Unlimited ideas for your next great projects"
        description="Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia."
        ctaText="Discover More"
        decorationType="circles"
      />

      <FeatureSection
        caption="Powerful"
        title="All the tools you can imagine"
        description="Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia."
        imagePosition="left"
        decorationType="app"
      />

      <FeatureSection
        caption="Customers"
        title="Target customers with our powerful AI kit"
        description="Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia."
        ctaText="Start Targeting Customers Now"
        decorationType="squares"
      />

      <FeatureSection
        caption="Speed"
        title="Work fast, w/o interruptions"
        description="Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia."
        imagePosition="left"
        decorationType="app"
      />

      <TestimonialSection />
      <EventsSection />
      <Footer />
    </div>
  );
}
