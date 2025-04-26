import React, { ReactNode } from 'react';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-pink-50">
      <header className="border-b border-gray-200 bg-white/70 backdrop-blur-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-indigo-600">
            <Sparkles className="h-6 w-6" />
            <span>PsycheQuest</span>
          </Link>
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link to="/" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  Take the Test
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-2 text-xl font-bold text-white mb-2">
                <Sparkles className="h-5 w-5" />
                <span>PsycheQuest</span>
              </div>
              <p className="text-gray-400">Discover your true personality</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Links</h3>
              <ul className="space-y-1">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/quiz" className="text-gray-400 hover:text-white transition-colors">
                    Take the Test
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© {new Date().getFullYear()} PsycheQuest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};