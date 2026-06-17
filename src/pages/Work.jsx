import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaArrowRight } from 'react-icons/fa';
import InquiryModal from '../components/InquiryModal';

const Work = () => {
  const [showForm, setShowForm] = useState(false);

  const stats = [
    { value: '40+', label: 'AI Systems Shipped' },
    { value: '60+', label: 'Models in Production' },
    { value: '15+', label: 'Enterprise Clients' },
    { value: '3x', label: 'Avg. Faster Delivery' },
  ];

  const caseStudies = [
    {
      tag: 'Generative AI',
      title: 'Knowledge Copilot for a FinTech Support Team',
      problem: 'Support agents spent hours searching scattered docs, slowing response times.',
      solution: 'A RAG copilot over policy and product knowledge with citations and an automated eval harness.',
      results: ['62% faster first response', '38% fewer escalations', '4.7/5 agent satisfaction'],
      stack: ['LLMs', 'RAG', 'FastAPI', 'Vector DB', 'React'],
    },
    {
      tag: 'Agentic AI',
      title: 'Autonomous Ops Agent for a Logistics Platform',
      problem: 'Manual exception handling across systems created delays and errors at scale.',
      solution: 'A tool-using agent with human-in-the-loop approvals that triages and resolves routine exceptions.',
      results: ['70% of exceptions auto-resolved', '24/7 coverage', '~$400k/yr operational savings'],
      stack: ['Agents', 'MCP', 'Python', 'Kubernetes', 'Postgres'],
    },
    {
      tag: 'Full-Stack + AI',
      title: 'AI-Native SaaS Product, 0 → 1',
      problem: 'A startup needed to ship an AI-first product fast without compromising on quality.',
      solution: 'End-to-end product engineering: architecture, LLM features, billing, and cloud deployment.',
      results: ['MVP shipped in 10 weeks', 'Scaled to 20k users', 'SOC 2-ready foundation'],
      stack: ['React', 'Node.js', 'TypeScript', 'AWS', 'OpenAI'],
    },
    {
      tag: 'Data & MLOps',
      title: 'Production MLOps Platform for a Retail Group',
      problem: 'Models were trained ad-hoc and rarely made it reliably into production.',
      solution: 'A standardized pipeline with feature store, automated retraining, and drift monitoring.',
      results: ['Deploy time: weeks → hours', '12 models in production', 'Full lineage & monitoring'],
      stack: ['MLOps', 'Airflow', 'Docker', 'Feature Store', 'Azure'],
    },
  ];

  const testimonials = [
    {
      quote: 'They behaved like an in-house team — research-savvy but obsessed with shipping. The system has run reliably in production for months.',
      name: 'VP Engineering',
      org: 'FinTech Scale-up',
    },
    {
      quote: 'Honest benchmarking saved us from a costly bet. They told us what would actually work, then built it.',
      name: 'Head of Product',
      org: 'Logistics Platform',
    },
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
            Our Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            Selected projects where applied AI and solid engineering delivered measurable outcomes.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((cs, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
              >
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-4">
                  {cs.tag}
                </span>
                <h3 className="text-2xl font-bold mb-4">{cs.title}</h3>
                <div className="space-y-3 mb-5 text-gray-600">
                  <p><span className="font-semibold text-gray-900">Challenge: </span>{cs.problem}</p>
                  <p><span className="font-semibold text-gray-900">What we built: </span>{cs.solution}</p>
                </div>
                <ul className="space-y-2 mb-5">
                  {cs.results.map((r, idx) => (
                    <li key={idx} className="flex items-center text-gray-800 font-medium">
                      <span className="text-primary-500 mr-2">↑</span>{r}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {cs.stack.map((t, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-700">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl border border-gray-100"
              >
                <FaQuoteLeft className="text-3xl text-primary-300 mb-4" />
                <p className="text-lg text-gray-700 mb-6">{t.quote}</p>
                <div className="font-bold text-gray-900">{t.name}</div>
                <div className="text-gray-500 text-sm">{t.org}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-900">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's build your next AI system.</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Bring us the problem — we'll bring the research, engineering, and product judgment.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-white text-primary-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition inline-flex items-center gap-2"
          >
            Start a Project <FaArrowRight />
          </button>
        </div>
      </section>

      <InquiryModal open={showForm} onClose={() => setShowForm(false)} />
    </div>
  );
};

export default Work;
