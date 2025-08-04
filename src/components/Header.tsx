import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'MOUs & Collabs', href: '/mous' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Top Achievers', href: '/top-achievers' },
    { name: 'Speakers & Trainings', href: '/speakers' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8 md:-mt-3">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 font-sans text-xl font-bold text-sky-500">
            Elevatr
          </a>
        </div>

        <div className="flex lg:hidden">
          <button className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
            <FaBars className="h-6 w-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold text-white">
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <button className="text-sm font-semibold leading-6 text-white hover:text-indigo-300 transition-colors">
            Log in
          </button>
          <button className="text-sm font-semibold leading-6 text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg transition-colors">
            Sign up
          </button>
        </div>
      </nav>

      <div className="lg:hidden">
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5 font-sans text-xl font-bold text-sky-500">
              Elevatr
            </a>
            <button className="-m-2.5 rounded-md p-2.5 text-white">
              <FaTimes className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="py-6 space-y-2">
                <button className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-gray-800 w-full text-left">
                  Log in
                </button>
                <button className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-indigo-400 hover:bg-gray-800 w-full text-left">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
