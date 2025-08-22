import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Apply Now', href: '/apply' },
    { name: 'Contact', href: '/contact' },
    { name: 'About Us', href: '/about' },
    { name: 'Terms', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Refund Policy', href: '#' },
    { name: 'Login', href: '/login' },
    { name: 'Sign Up', href: '/signup' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">Viziopath</span>
                <span className="text-sm text-gray-400">Empowering Future Innovators</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Transforming aspirations into expertise. Journey with us from imaginative visions to real-world experience through high-quality training and internship opportunities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p>viziopath</p>
              <p>Khushi Tola, Near Khiriya Ghat</p>
              <p>Betiiah, Bihar, 845438, India</p>
              <p className="pt-2">Phone: +91 8210381000</p>
              <p>WhatsApp: +91 6203757233</p>
              <p>Email: viziopath@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Viziopath Empowering Future Minds. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;