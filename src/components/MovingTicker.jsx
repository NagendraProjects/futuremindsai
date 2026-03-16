import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaCloud, FaUsers, FaBriefcase } from 'react-icons/fa';
import { SiGraphql } from 'react-icons/si';

const MovingTicker = () => {
  const announcements = [
    { icon: <FaGraduationCap />, text: "🚀 New Batch Starting: AI & ML Data Science" },
    { icon: <FaLaptopCode />, text: "💼 100% Placement Assistance!" },
    { icon: <FaCloud />, text: "☁️ Cloud Computing & DevOps" },
    { icon: <SiGraphql />, text: "⚡ Full Stack Mastery Workshop" },
    { icon: <FaUsers />, text: "🎓 Alumni Network: 500+ Placed in Top MNCs" },
    { icon: <FaBriefcase />, text: "🏢 Interview Preparation Bootcamp - Starts Every Monday" },
  ];

  return (
    <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-2 overflow-hidden">
      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex whitespace-nowrap py-1"
          animate={{ x: [0, -1920] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...announcements, ...announcements].map((item, index) => (
            <span key={index} className="mx-8 flex items-center space-x-2">
              <span className="text-yellow-300">{item.icon}</span>
              <span className="font-medium">{item.text}</span>
              <span className="w-1 h-1 bg-white rounded-full mx-4"></span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MovingTicker;