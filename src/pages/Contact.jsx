import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaBriefcase } from 'react-icons/fa';

const API_BASE =
  'https://n2aiassistant-backend-cqccg2dmfcexcxdm.southindia-01.azurewebsites.net' ||
  'http://localhost:8000';

const projectTypes = [
  'Generative AI / LLM Application',
  'Agentic AI & Automation',
  'AI Strategy & R&D Consulting',
  'Full-Stack Product Engineering',
  'Data Engineering & MLOps',
  'Cloud & Platform Modernization',
  'Careers / Join the team',
  'Other',
];

const budgets = ['Under $10k', '$10k – $50k', '$50k – $150k', '$150k+', 'Not sure yet'];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: projectTypes[0],
    budget: budgets[1],
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Map B2B fields onto the existing /post-enquiry contract (name/email/phone/course/message).
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      course: formData.projectType,
      message: `Company: ${formData.company || 'N/A'}\nBudget: ${formData.budget}\n\n${formData.message}`,
    };
    try {
      const response = await fetch(`${API_BASE}/post-enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        alert('Thanks for reaching out! Our team will get back to you within one business day.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: projectTypes[0],
          budget: budgets[1],
          message: '',
        });
      } else {
        alert('Failed to submit. Please try again later.');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">Let's Talk</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Whether you're scoping an AI project or exploring a partnership, we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6 -mt-24">
            {[
              { icon: <FaPhone />, title: 'Call Us', info: '+91 9606636714 / 9597018187', desc: 'Mon-Fri 9am-8pm' },
              { icon: <FaEnvelope />, title: 'Email Us', info: 'info@futuremindsailabs.com', desc: 'Replies within 1 business day' },
              { icon: <FaMapMarkerAlt />, title: 'Visit Us', info: 'Munnekolala, Varthur, Bengaluru', desc: 'By appointment' },
              { icon: <FaClock />, title: 'Discovery Call', info: 'Free 30-min session', desc: 'No commitment' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-xl text-center"
              >
                <div className="text-4xl text-primary-600 mb-4 flex justify-center">{item.icon}</div>
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
              <h2 className="text-3xl font-bold mb-6">Tell us about your project</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                    >
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Estimated Budget</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                    >
                      {budgets.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                    placeholder="What are you trying to build, and what does success look like?"
                  ></textarea>
                </div>

                <button type="submit" disabled={submitting} className="w-full btn-primary py-4 disabled:opacity-60">
                  {submitting ? 'Sending...' : 'Send Inquiry'}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Where We Are</h3>
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <iframe
                    title="FutureMinds AI Labs location"
                    src="https://www.google.com/maps?q=Munnekolala%2C%20Varthur%20Hobli%2C%20Bengaluru%2C%20Karnataka%20560037&output=embed"
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
                    1st Floor, Khatta No 42/2-3, Munnekolala, Varthur Hobli, Bengaluru, Karnataka 560037
                  </p>
                  <p className="flex items-center text-gray-700">
                    <FaClock className="text-primary-600 mr-2" />
                    Monday - Friday: 9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>

              <div className="bg-primary-50 p-6 rounded-xl border border-primary-200">
                <h3 className="text-xl font-bold mb-3 text-primary-800 flex items-center gap-2">
                  <FaBriefcase /> Join the Team
                </h3>
                <p className="text-gray-700 mb-2">
                  We're always looking for exceptional AI researchers and full-stack engineers who
                  love shipping. Remote-friendly, high-ownership work on the AI frontier.
                </p>
                <p className="text-gray-600 text-sm">
                  Interested? Select <span className="font-semibold">"Careers / Join the team"</span> in the
                  form and tell us what you'd like to work on.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
