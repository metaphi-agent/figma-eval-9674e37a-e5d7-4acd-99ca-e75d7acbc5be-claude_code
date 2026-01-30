import { Link } from "react-router-dom";

export default function LandingPage13() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-8">
        &larr; Back to Home
      </Link>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Landing Page 13</h1>
      <p className="text-gray-600 text-lg">Coming soon - being built from Figma design</p>
    </div>
  );
}
