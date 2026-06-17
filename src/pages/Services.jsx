import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaBrain, FaRobot, FaLayerGroup, FaDatabase, FaFlask, FaCompass,
  FaSearch, FaDraftingCompass, FaCogs, FaRocket,
} from 'react-icons/fa';
import InquiryModal from '../components/InquiryModal';

const Services = () => {
  const [showForm, setShowForm] = useState(false);

  const services = [
    {
      icon: <FaBrain />,
      title: 'Generative AI & LLM Applications',
      desc: 'We build LLM-powered products that are accurate, observable, and safe — backed by real evaluation, not vibes.',
      points: ['RAG & knowledge assistants', 'Domain fine-tuning & distillation', 'Eval harnesses & guardrails', 'Prompt & context engineering'],
    },
    {
      icon: <FaRobot />,
      title: 'Agentic AI & Automation',
      desc: 'Reliable agents that plan, call tools, and complete real tasks — with the right human-in-the-loop controls.',
      points: ['Multi-agent orchestration', 'Tool & MCP integrations', 'Workflow & process automation', 'Reliability & cost optimization'],
    },
    {
      icon: <FaLayerGroup />,
      title: 'Full-Stack Product Engineering',
      desc: 'Senior product teams that turn AI capabilities into polished, scalable applications your users love.',
      points: ['React / Next.js front-ends', 'Node.js & Python (FastAPI) APIs', 'System & platform architecture', 'Testing & CI/CD'],
    },
    {
      icon: <FaDatabase />,
      title: 'Data Engineering & MLOps',
      desc: 'The production backbone for AI — pipelines, vector stores, monitoring, and model lifecycle automation.',
      points: ['Batch & streaming pipelines', 'Vector & feature stores', 'Model deployment & monitoring', 'Observability & drift detection'],
    },
    {
      icon: <FaFlask />,
      title: 'Applied AI R&D',
      desc: 'A research-minded team to de-risk the bleeding edge — rapid prototypes benchmarked against your real data.',
      points: ['Proof-of-concept builds', 'Honest benchmarking', 'Model & vendor evaluation', 'Technical due diligence'],
    },
    {
      icon: <FaCompass />,
      title: 'AI Strategy & Consulting',
      desc: 'We help leadership find high-ROI AI opportunities and a pragmatic, low-risk path to production.',
      points: ['Opportunity mapping', 'Architecture & security reviews', 'Build vs. buy decisions', 'Team enablement'],
    },
  ];

  const process = [
    { icon: <FaSearch />, step: '01', title: 'Discover', desc: 'We dig into your problem, data, and constraints to define what success actually looks like.' },
    { icon: <FaDraftingCompass />, step: '02', title: 'Design', desc: 'Architecture, evaluation criteria, and a scoped plan — so you know what we ship and why.' },
    { icon: <FaCogs />, step: '03', title: 'Build', desc: 'Tight iteration with senior engineers, transparent progress, and production-grade quality.' },
    { icon: <FaRocket />, step: '04', title: 'Ship & Scale', desc: 'Deployment, monitoring, and handover — plus ongoing support as you grow.' },
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
            Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            End-to-end AI engineering and R&D — from strategy and prototype to production systems your business can rely on.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-4xl text-primary-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-5">{service.desc}</p>
                <ul className="space-y-2">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 text-sm">
                      <span className="text-primary-500 mr-2 mt-0.5">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How We Engage</h2>
            <p className="text-xl text-gray-600">A focused, transparent process built around shipping.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg relative hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl text-primary-100 font-bold absolute top-4 right-4">
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
          <div className="bg-gradient-to-r from-primary-700 to-primary-900 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not sure where AI fits in your roadmap?
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Book a discovery call and we'll map the highest-impact opportunities — no commitment.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-white text-primary-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
            >
              Start a Project
            </button>
          </div>
        </div>
      </section>

      <InquiryModal open={showForm} onClose={() => setShowForm(false)} />
    </div>
  );
};

export default Services;
