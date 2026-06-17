import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

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
  'Other',
];

const budgets = [
  'Under $10k',
  '$10k – $50k',
  '$50k – $150k',
  '$150k+',
  'Not sure yet',
];

/**
 * Shared "Start a project" inquiry modal.
 * Keeps the existing /post-enquiry wire format (name/email/phone/course/message)
 * while presenting B2B-oriented fields. Company + budget are folded into the
 * message so the existing backend keeps working unchanged.
 */
const InquiryModal = ({ open, onClose }) => {
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
        onClose();
      } else {
        alert('Failed to submit. Please try again later.');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[60] bg-black bg-opacity-60 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg relative max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl"
          onClick={onClose}
          aria-label="Close"
        >
          <FaTimes />
        </button>
        <h2 className="text-2xl font-bold mb-1 text-gray-900">Start a Project</h2>
        <p className="text-gray-500 mb-6">Tell us what you're building. We'll reply within one business day.</p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
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
          <div className="grid md:grid-cols-2 gap-5">
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
          <div className="grid md:grid-cols-2 gap-5">
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
      </div>
    </div>
  );
};

export default InquiryModal;
