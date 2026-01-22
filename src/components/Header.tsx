import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setIsLoggingOut(true);
    // Add a small delay to show the animation
    await new Promise(resolve => setTimeout(resolve, 1000));
    await signOut();
    setIsLoggingOut(false);
    setIsMenuOpen(false);
    navigate('/login');
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Resume Checker', href: '/mocs' },
    { name: 'Job Portal', href: '/jobportal' },
    { name: 'Courses & Trainings', href: '/speakers' },
    { name: 'Resume Templates', href: '/resumeTemplates' },
    { name: 'Contact Us', href: '/contact' },
    // { name: 'AI Assistant', href: '/ai-assistant' }, // Remove or comment this line
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
          {user && (
            <Link to="/my-projects" className="text-sm font-semibold text-white hover:text-indigo-300">
              My Projects
            </Link>
          )}
          {user?.email === 'dharmendrakumartdh@gmail.com' && (
            <Link to="/admin/resume" className="text-sm font-semibold text-yellow-400 hover:text-yellow-300">
              Admin Dashboard
            </Link>
          )}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          {user ? (
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="text-sm font-semibold leading-6 text-white bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isLoggingOut ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging out...
                </>
              ) : (
                'Logout'
              )}
            </button>
          ) : (
            <>
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
            </>
          )}
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
                {user && (
                  <Link
                    to="/my-projects"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Projects
                  </Link>
                )}
                {user?.email === 'dharmendrakumartdh@gmail.com' && (
                  <Link
                    to="/admin/resume"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-yellow-400 hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Admin Dashboard
                  </Link>
                )}
              </div>

              <div className="py-6 space-y-2">
                {user ? (
                  <button
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-red-500 hover:bg-gray-800 w-full text-left flex items-center gap-2"
                  >
                    {isLoggingOut ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Logging out...
                      </>
                    ) : (
                      'Logout'
                    )}
                  </button>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;