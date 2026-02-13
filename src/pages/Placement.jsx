import { motion } from 'framer-motion';
import { FaBriefcase, FaTrophy, FaUsers, FaChartLine, FaHandshake, FaRocket } from 'react-icons/fa';

const Placement = () => {
  const companies = [
    'Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix',
    'Adobe', 'Salesforce', 'Uber', 'Airbnb', 'Twitter', 'LinkedIn'
  ];

  const process = [
    {
      step: '01',
      title: 'Resume Building',
      desc: 'Professional resume optimization with industry experts',
      icon: <FaBriefcase />
    },
    {
      step: '02',
      title: 'Technical Training',
      desc: 'Intensive coding practice and mock interviews',
      icon: <FaChartLine />
    },
    {
      step: '03',
      title: 'Soft Skills',
      desc: 'Communication, presentation, and group discussion training',
      icon: <FaUsers />
    },
    {
      step: '04',
      title: 'Company Matching',
      desc: 'Connect with 200+ hiring partners',
      icon: <FaHandshake />
    },
    {
      step: '05',
      title: 'Interview Prep',
      desc: '1-on-1 mentorship and unlimited mock interviews',
      icon: <FaTrophy />
    },
    {
      step: '06',
      title: 'Job Placement',
      desc: 'Guaranteed interviews with top tech companies',
      icon: <FaRocket />
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-primary-800 to-primary-900 text-white py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            100% Placement Assistance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            We don't just teach, we ensure your career takes off. Join our alumni network of 100+ successful professionals.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '95%', label: 'Placement Rate', icon: <FaChartLine /> },
              { value: '20+', label: 'Hiring Partners', icon: <FaUsers /> },
              { value: '25LPA', label: 'Highest Package', icon: <FaTrophy /> },
              { value: '100+', label: 'Alumni Network', icon: <FaHandshake /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl text-primary-600 mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Placement Process</h2>
            <p className="text-xl text-gray-600">Structured approach to land your dream job</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg relative hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl text-primary-200 font-bold absolute top-4 right-4">
                  {item.step}
                </div>
                <div className="text-4xl text-primary-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Hiring Partners</h2>
            <p className="text-xl text-gray-600">200+ companies trust our graduates</p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-50 p-4 rounded-lg text-center hover:bg-primary-50 transition-all duration-300"
              >
                <p className="font-semibold text-gray-800">{company}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join our placement program and get guaranteed interviews with top tech companies
          </p>
          <button className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
            Apply for Placement Program
          </button>
        </div>
      </section>
    </div>
  );
};

export default Placement;