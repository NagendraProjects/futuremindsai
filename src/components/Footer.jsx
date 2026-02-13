import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              FutureMinds AI
            </h3>
            <p className="text-gray-400 mb-4">
              Empowering careers with cutting-edge AI, Machine Learning, Data Science, Full Stack, MERN & MEAN and Cloud technologies.
              100% placement assistance guaranteed.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary-400 transition">Home</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-primary-400 transition">Courses</Link></li>
              <li><Link to="/placement" className="text-gray-400 hover:text-primary-400 transition">Placement</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary-400 transition">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary-400 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Popular Courses</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-primary-400 transition">Full Stack AI</li>
              <li className="text-gray-400 hover:text-primary-400 transition">Azure DevOps</li>
              <li className="text-gray-400 hover:text-primary-400 transition">GraphQL Mastery</li>
              <li className="text-gray-400 hover:text-primary-400 transition">Cloud Computing</li>
              <li className="text-gray-400 hover:text-primary-400 transition">Machine Learning</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400">
                <FaMapMarkerAlt className="text-primary-400" />
                <span>Marathahalli, Bangalore, India</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <FaPhone className="text-primary-400" />
                <span>+91 8919609488 / 9035103449</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <FaEnvelope className="text-primary-400" />
                <span>info@futureminds-ai.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} FutureMinds AI. All rights reserved. | 
            Training & Placement Division
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;