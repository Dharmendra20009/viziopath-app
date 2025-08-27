import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'MOUs & Collabs', href: '/mous' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Top Achievers', href: '/top-achievers' },
    { name: 'Speakers & Trainings', href: '/speakers' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <nav className="flex items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="inline-flex items-center justify-center rounded-full p-[2px] bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-600 shadow-lg shadow-blue-900/10">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white">
                <img
                  src="/Logo2.0.JPG"
                  alt="Viziopath logo"
                  className="h-8 w-8 rounded-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </span>
            </span>
            <span className="font-sans text-xl font-bold text-gray-900">Viziopath</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900"
          >
            <FaBars className="h-6 w-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} to={item.href} className="text-sm font-semibold text-gray-900 hover:text-indigo-600">
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <Link
            to="/login"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="text-sm font-semibold leading-6 text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg transition-colors shadow-sm"
          >
            Sign up
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <span className="inline-flex items-center justify-center rounded-full p-[2px] bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-600">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white">
                  <img src="/Logo2.0.JPG" alt="Viziopath logo" className="h-7 w-7 rounded-full object-cover" />
                </span>
              </span>
              <span className="font-sans text-xl font-bold text-gray-900">Viziopath</span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-900"
            >
              <FaTimes className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="py-6 space-y-2">
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-100 w-full text-left"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 w-full text-left"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;