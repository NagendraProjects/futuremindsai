import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaTrophy, FaUsers, FaChartLine, FaHandshake, FaRocket } from 'react-icons/fa';

const Placement = () => {
  const companies = [
    'Wipro', 'IBM', 'Capgemini', 'Infosys', 'Cognizant', 'Accenture', 'HCL', 'Tech Mahindra', 'LTI', 'Mphasis', 'Lifecell', 'Virtusa',
  ];

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
            We don't just teach, we ensure your career takes off. Join our alumni network of 500+ successful professionals.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '95%', label: 'Placement Rate', icon: <FaChartLine /> },
              { value: '20+', label: 'Hiring Partners', icon: <FaUsers /> },
              { value: '52LPA', label: 'Highest Package', icon: <FaTrophy /> },
              { value: '500+', label: 'Alumni Network', icon: <FaHandshake /> }
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
            <h2 className="text-4xl font-bold mb-4">Companies Hiring Our Trainees</h2>
            <p className="text-xl text-gray-600">
              200+ top companies select our trained professionals—including experienced candidates and students from all backgrounds. Placement is based on your skills, not college or institute affiliation.
            </p>
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
          <button className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition" onClick={() => setShowForm(true)}>
            Apply for Placement Program
          </button>
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
      </section>
    </div>
  );
};

export default Placement;