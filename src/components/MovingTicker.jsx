import { motion } from 'framer-motion';
import { FaBrain, FaRobot, FaCode, FaCloud, FaDatabase, FaFlask } from 'react-icons/fa';

const MovingTicker = () => {
  const announcements = [
    { icon: <FaRobot />, text: "🤖 Researching & building the latest AI agents" },
    { icon: <FaBrain />, text: "🧠 LLM & Generative AI applications, end to end" },
    { icon: <FaFlask />, text: "🔬 Applied AI R&D — from prototype to production" },
    { icon: <FaCode />, text: "🌍 Serving clients across Europe, UK & Canada" },
    { icon: <FaDatabase />, text: "📊 Data engineering & MLOps pipelines" },
    { icon: <FaCloud />, text: "☁️ Cloud-native, scalable AI infrastructure" },
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
