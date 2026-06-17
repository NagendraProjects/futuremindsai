import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaBrain } from 'react-icons/fa';
import InquiryModal from './InquiryModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [showForm, setShowForm] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/work', label: 'Work' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <FaBrain className="text-4xl text-primary-600" />
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                  FutureMinds AI Labs
                </span>
                <span className="block text-xs text-gray-500">Applied AI · R&D · Engineering</span>
              </div>
            </Link>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300
                  ${location.pathname === item.path
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'}`}
                >
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </Link>
              ))}
            </div>

            <button className="hidden md:block btn-primary" onClick={() => setShowForm(true)}>
              Start a Project
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-2xl text-gray-700"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t"
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-4 text-sm font-medium
                  ${location.pathname === item.path
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  {item.label}
                </Link>
              ))}
              <button className="w-full mt-4 btn-primary" onClick={() => { setIsOpen(false); setShowForm(true); }}>
                Start a Project
              </button>
            </motion.div>
          )}
        </div>
      </nav>

      <InquiryModal open={showForm} onClose={() => setShowForm(false)} />
    </>
  );
}

export default Navbar;
