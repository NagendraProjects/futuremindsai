import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaRobot } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Placement Program',
    message: ''
  });
  const API_BASE = "https://n2aiassistant-backend-cqccg2dmfcexcxdm.southindia-01.azurewebsites.net" || "http://localhost:8000";
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE}/post-enquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          course: 'Placement Program',
          message: ''
        });
        setShowForm(false);
      } else {
        alert('Failed to submit. Please try again later.');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
    }
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/courses', label: 'Courses' },
    { path: '/placement', label: 'Placement' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <FaRobot className="text-4xl text-primary-600" />
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                  Futureminds AI Labs
                </span>
                <span className="block text-xs text-gray-500">Training & Placement</span>
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
              Enroll Now
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
              <button className="w-full mt-4 btn-primary" onClick={() => setShowForm(true)}>
                Enroll Now
              </button>
            </motion.div>
          )}
          {showForm && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md relative">
                <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl" onClick={() => setShowForm(false)}>&times;</button>
                <h2 className="text-2xl font-bold mb-6 text-primary-700">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="Tell us about your career goals..."
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full btn-primary py-4">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;