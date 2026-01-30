import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';

// Header component for Breakio
function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold text-purple-700">breakio</a>
          <nav className="hidden md:flex items-center gap-8">
            {['Explore', 'Solutions', 'About', 'Blog'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-purple-700 transition-colors">
                {item}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <a href="#login" className="text-gray-600 hover:text-purple-700">Log In</a>
            <button className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition-colors">
              Start Now
            </button>
          </div>
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileOpen && (
          <nav className="md:hidden py-4 border-t">
            {['Explore', 'Solutions', 'About', 'Blog', 'Log In'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block py-2 text-gray-600">
                {item}
              </a>
            ))}
            <button className="w-full bg-purple-600 text-white px-5 py-2 rounded-full mt-4">
              Start Now
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
          It's time to take a break
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Build your meditation skills with an app that gives you all you need!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your name"
            className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="w-full sm:w-auto bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors whitespace-nowrap">
            Start Now
          </button>
        </div>
      </div>
    </section>
  );
}

// Image Banner
function ImageBanner() {
  return (
    <section className="py-10">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-pink-100 to-purple-100 aspect-[3/1] flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-purple-200 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-purple-300" />
            </div>
            <p className="text-purple-600">Meditation Image</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Get Better Section
function GetBetterSection() {
  return (
    <section className="py-20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Get better everyday
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
        </p>
        <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors">
          Start Now
        </button>
      </div>
    </section>
  );
}

// App Preview Section
function AppPreview() {
  return (
    <section className="py-10">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Desktop mockup */}
          <div className="bg-white rounded-2xl shadow-xl p-4 w-full max-w-lg">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl aspect-[4/3] flex items-center justify-center">
              <p className="text-purple-500">Desktop App Preview</p>
            </div>
          </div>
          {/* Mobile mockups */}
          <div className="flex gap-4">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-xl p-2 w-36">
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl aspect-[9/16] flex items-center justify-center">
                  <p className="text-xs text-purple-500">Mobile {i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Stories Section
function StoriesSection() {
  const stories = [
    { title: 'Flower Decorations', author: 'by Monica Spring' },
    { title: 'Interior', author: 'by Monica Spring' },
    { title: 'Splash', author: 'by Monica Spring' },
    { title: 'Colorful Face', author: 'by Monica Spring' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Stories from our users
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Et pulvinar nec interdum integer id urna molestie porta nullam.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stories.map((story, i) => (
            <div key={i} className="text-center">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl aspect-square mb-4 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-purple-200" />
              </div>
              <h3 className="font-bold text-gray-900">{story.title}</h3>
              <p className="text-sm text-gray-500">{story.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonial Section
function TestimonialSection() {
  return (
    <section className="py-20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
          What other users say
        </h2>
        <div className="bg-purple-50 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Placerat feugiat senectus
          </h3>
          <p className="text-gray-600 mb-6">
            Ultrices pharetra arcu turpis dui massa interdum lorem. Viverra nunc quisque congue tincidunt potentt. Tellus, enim vel habitasse commodo ultrices aenean ultrices.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-200" />
            <div>
              <p className="font-bold text-gray-900">Jane Doe</p>
              <p className="text-sm text-gray-500">Senior Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Tools Section
function ToolsSection() {
  const tools = [
    { title: 'Sapien amet est', desc: 'Viverra rutsu oido nunc ac nibh lorem quis.' },
    { title: 'Tortor ornare', desc: 'Nulla etiam mattis amet suspendisse lacus nulla.' },
    { title: 'Vel lacus', desc: 'Porttitor quis tortor varius quis dolor mode.' },
    { title: 'Hendrerit blandit', desc: 'A aliquam pharetra in nec vitae ultrices.' },
    { title: 'Enim risus turpis', desc: 'Tristique dui vestibulum senectus ac duis etiam.' },
    { title: 'Aliquam lorem et', desc: 'Suspendisse ultrices mollis lacuis sit lorem.' },
    { title: 'Sed aliquam lectus', desc: 'Pharetra ut montes quis erat volutpat.' },
    { title: 'Cursus diam', desc: 'Feugiat consectetur eu commodo odio venenatis.' },
    { title: 'Facilisi vel malesuada', desc: 'Nibh cursus ultrices id neque proin urna viverra.' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Your favourite tools
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            In risus nec molestie at in pulvinar tellus. At integer id condimentum gravida nisi veli.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 rounded bg-purple-300" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{tool.title}</h3>
                <p className="text-sm text-gray-600">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    'Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?',
    'Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor?',
    'Varius ultrices molestie tellus fermentum, viverra ipsum scelerisque etiam lorem?',
    'Nulla etiam vitae, at sagittis, nibh ultrices mattis feugiat faucibus?',
    'Sagittis consectetur gravida nec turpis eros, id sit et, dictum?',
  ];

  return (
    <section className="py-20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-4">
          Frequently asked questions
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Et pulvinar nec interdum integer id urna molestie porta nullam.
        </p>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between text-left py-2"
              >
                <span className="font-medium text-gray-900">{faq}</span>
                {openIndex === i ? (
                  <ChevronUp className="text-purple-600 flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                )}
              </button>
              {openIndex === i && (
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const columns = [
    { title: 'Categories', links: ['User Interface', 'User Experience', 'Digital Media', 'Lifestyle', 'Programming', 'Animation'] },
    { title: 'Product', links: ['Pricing', 'Overview', 'Browse', 'Accessibility', 'Five'] },
    { title: 'Solutions', links: ['Brainstorming', 'Ideation', 'Wireframing', 'Research', 'Design'] },
    { title: 'Resources', links: ['Help Center', 'Blog', 'Tutorials', 'FAQs', 'Community', 'Events'] },
    { title: 'Support', links: ['Contact Us', 'Developers', 'Documentation', 'Integrations', 'Reports', 'Webinar'] },
    { title: 'Company', links: ['About', 'Press', 'Events', 'Careers', 'Customers', 'Partners'] },
  ];

  return (
    <footer className="bg-white border-t py-12">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-gray-900 mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-500 hover:text-purple-600">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t">
          <p className="text-sm text-gray-500">breakio @ 2023 · All rights reserved</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {['F', 'T', 'Y', 'L'].map((social, i) => (
              <a key={i} href="#" className="text-gray-400 hover:text-purple-600">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">
                  {social}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage2() {
  return (
    <div className="min-h-screen bg-white">
      <Link to="/" className="fixed top-4 left-4 z-[60] bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium text-purple-600 hover:bg-purple-50">
        ← Back to Home
      </Link>
      <Header />
      <main>
        <HeroSection />
        <ImageBanner />
        <GetBetterSection />
        <AppPreview />
        <StoriesSection />
        <TestimonialSection />
        <ToolsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
