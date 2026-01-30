import { Routes, Route, Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Lazy load pages for better performance
const LandingPage1 = lazy(() => import('./pages/LandingPage1'));
const LandingPage2 = lazy(() => import('./pages/LandingPage2'));
const LandingPage3 = lazy(() => import('./pages/LandingPage3'));
const LandingPage4 = lazy(() => import('./pages/LandingPage4'));
const LandingPage5 = lazy(() => import('./pages/LandingPage5'));
const LandingPage6 = lazy(() => import('./pages/LandingPage6'));
const LandingPage7 = lazy(() => import('./pages/LandingPage7'));
const LandingPage8 = lazy(() => import('./pages/LandingPage8'));
const LandingPage9 = lazy(() => import('./pages/LandingPage9'));
const LandingPage10 = lazy(() => import('./pages/LandingPage10'));
const LandingPage11 = lazy(() => import('./pages/LandingPage11'));
const LandingPage12 = lazy(() => import('./pages/LandingPage12'));
const LandingPage13 = lazy(() => import('./pages/LandingPage13'));

// Loading component
function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-amber-300 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
}

// Home page with links to all landing pages
function HomePage() {
  const landingPages = [
    { id: 1, name: 'Landing Page 1 - Solar Energy (Soller)', theme: 'Light with purple/amber' },
    { id: 2, name: 'Landing Page 2 - Business/SaaS', theme: 'Light with blue accents' },
    { id: 3, name: 'Landing Page 3 - Creative Agency', theme: 'Light modern' },
    { id: 4, name: 'Landing Page 4 - Dark Tech/Startup', theme: 'Dark with gradients' },
    { id: 5, name: 'Landing Page 5 - Minimal Business', theme: 'Light minimal' },
    { id: 6, name: 'Landing Page 6 - Product Showcase', theme: 'Light with imagery' },
    { id: 7, name: 'Landing Page 7 - Photography/Portfolio', theme: 'Image-heavy' },
    { id: 8, name: 'Landing Page 8 - Food/Restaurant', theme: 'Warm tones' },
    { id: 9, name: 'Landing Page 9 - Dark Finance/Crypto', theme: 'Dark premium' },
    { id: 10, name: 'Landing Page 10 - E-commerce/Food', theme: 'Warm gradient' },
    { id: 11, name: 'Landing Page 11 - Software/App', theme: 'Clean modern' },
    { id: 12, name: 'Landing Page 12 - Multi-feature SaaS', theme: 'Feature-rich' },
    { id: 13, name: 'Landing Page 13 - Creative Portfolio', theme: 'Bold design' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-gray-900">
              Landing Page Kit
            </h1>
            <span className="text-sm text-gray-500">
              13 Landing Pages Collection
            </span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Choose a Landing Page
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive collection of 13 professionally designed landing pages
            with both desktop and mobile responsive views.
          </p>
        </div>

        {/* Landing pages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {landingPages.map((page) => (
            <Link
              key={page.id}
              to={`/landing-${page.id}`}
              className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:border-purple-300 transition-all duration-200"
            >
              {/* Preview area */}
              <div className="aspect-video bg-gradient-to-br from-purple-50 to-amber-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-purple-600">
                      {page.id}
                    </span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors">
                  {page.name}
                </h3>
                <p className="text-sm text-gray-500">{page.theme}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            Built with React, Vite, and Tailwind CSS v4 from Figma designs.
          </p>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landing-1" element={<LandingPage1 />} />
        <Route path="/landing-2" element={<LandingPage2 />} />
        <Route path="/landing-3" element={<LandingPage3 />} />
        <Route path="/landing-4" element={<LandingPage4 />} />
        <Route path="/landing-5" element={<LandingPage5 />} />
        <Route path="/landing-6" element={<LandingPage6 />} />
        <Route path="/landing-7" element={<LandingPage7 />} />
        <Route path="/landing-8" element={<LandingPage8 />} />
        <Route path="/landing-9" element={<LandingPage9 />} />
        <Route path="/landing-10" element={<LandingPage10 />} />
        <Route path="/landing-11" element={<LandingPage11 />} />
        <Route path="/landing-12" element={<LandingPage12 />} />
        <Route path="/landing-13" element={<LandingPage13 />} />
      </Routes>
    </Suspense>
  );
}
