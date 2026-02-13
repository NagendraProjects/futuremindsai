import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Have questions? Our career advisors are here to help you 24/7
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6 -mt-24">
            {[
              { icon: <FaPhone />, title: 'Call Us', info: '+91 8919609488 / 9035103449', desc: 'Mon-Fri 9am-8pm' },
              { icon: <FaEnvelope />, title: 'Email Us', info: 'info@futureminds-ai.com', desc: '24/7 Support' },
              { icon: <FaMapMarkerAlt />, title: 'Visit Us', info: 'Marathahalli, Bangalore, India', desc: 'Book appointment' },
              { icon: <FaClock />, title: 'Quick Response', info: 'Within 1 hour', desc: 'Guaranteed' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-xl text-center"
              >
                <div className="text-4xl text-primary-600 mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-800 font-semibold">{item.info}</p>
                <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
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
                
                <div className="grid md:grid-cols-2 gap-6">
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
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Interested Course</label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  >
                    <option value="">Select a course</option>
                    <option value="full-stack-ai">Full Stack AI Development</option>
                    <option value="azure-devops">Azure DevOps</option>
                    <option value="graphql">GraphQL Mastery</option>
                    <option value="cloud">Cloud Computing</option>
                    <option value="data-science">Data Science & ML</option>
                  </select>
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Visit Our Campus</h3>
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.636253370913!2d-122.08409568468898!3d37.42206597982554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba024d9a8fbb%3A0x6c3c5c5d5c5c5c5c!2sGoogleplex!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center text-gray-700">
                    <FaMapMarkerAlt className="text-primary-600 mr-2" />
                    12th Cross Rd, CKB Layout, Kasavanahalli Village, Marathahalli, Bengaluru, Karnataka 560037
                  </p>
                  <p className="flex items-center text-gray-700">
                    <FaClock className="text-primary-600 mr-2" />
                    Monday - Friday: 9:00 AM - 8:00 PM, Saturday: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="bg-primary-50 p-6 rounded-xl border border-primary-200">
                <h3 className="text-xl font-bold mb-3 text-primary-800">
                  🎓 Free Career Counseling
                </h3>
                <p className="text-gray-700 mb-4">
                  Not sure which course is right for you? Schedule a free 30-minute session with our career experts.
                </p>
                <button className="btn-primary">
                  Schedule Now
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;