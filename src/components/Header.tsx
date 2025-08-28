import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'MOUs & Collabs', href: '/mous' },
    { name: 'Job Portal', href: '/jobportal' },
    { name: 'Top Achievers', href: '/top-achievers' },
    { name: 'Speakers & Trainings', href: '/speakers' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8 md:-mt-3">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="text-2xl font-extrabold tracking-wider uppercase bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
              Viziopath
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <FaBars className="h-6 w-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} to={item.href} className="text-sm font-semibold text-white">
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <Link
            to="/login"
            className="text-sm font-semibold leading-6 text-white hover:text-indigo-300 transition-colors"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="text-sm font-semibold leading-6 text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg transition-colors"
          >
            Sign up
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="text-xl font-extrabold tracking-wider uppercase bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                Viziopath
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <FaTimes className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-800"
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
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-gray-800 w-full text-left"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-indigo-400 hover:bg-gray-800 w-full text-left"
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