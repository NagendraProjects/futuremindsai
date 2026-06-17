import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaDatabase, FaArrowRight,
  FaRobot, FaProjectDiagram, FaNetworkWired, FaMicrochip, FaGlobeEurope,
} from 'react-icons/fa';
import { SiKubernetes, SiTensorflow, SiOpenai, SiFastapi, SiPytorch, SiTypescript } from 'react-icons/si';
import InquiryModal from '../components/InquiryModal';

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const technologies = [
    { icon: <SiOpenai />, name: 'LLMs', color: 'text-emerald-600' },
    { icon: <SiPytorch />, name: 'PyTorch', color: 'text-orange-600' },
    { icon: <SiTensorflow />, name: 'TensorFlow', color: 'text-orange-500' },
    { icon: <FaPython />, name: 'Python', color: 'text-blue-500' },
    { icon: <SiFastapi />, name: 'FastAPI', color: 'text-teal-600' },
    { icon: <FaReact />, name: 'React', color: 'text-blue-400' },
    { icon: <SiTypescript />, name: 'TypeScript', color: 'text-blue-600' },
    { icon: <FaNodeJs />, name: 'Node.js', color: 'text-green-600' },
    { icon: <FaAws />, name: 'AWS / Azure', color: 'text-orange-500' },
    { icon: <SiKubernetes />, name: 'Kubernetes', color: 'text-blue-500' },
    { icon: <FaDocker />, name: 'Docker', color: 'text-sky-600' },
    { icon: <FaDatabase />, name: 'Vector DBs', color: 'text-cyan-700' },
  ];

  const stats = [
    { label: 'AI Systems Shipped', value: '40+' },
    { label: 'Enterprise Clients', value: '15+' },
    { label: 'Avg. Engineer Experience', value: '12 yrs' },
    { label: 'Models in Production', value: '60+' },
  ];

  const capabilities = [
    {
      title: 'Generative AI & LLM Applications',
      desc: 'RAG pipelines, copilots, and domain-tuned LLM products built on a rigorous evaluation harness — not demos.',
      features: ['RAG & Knowledge Systems', 'Fine-tuning & Evaluation', 'Guardrails & Safety'],
    },
    {
      title: 'Agentic AI & Automation',
      desc: 'Autonomous and human-in-the-loop agents that plan, use tools, and act reliably across your workflows.',
      features: ['Multi-agent Orchestration', 'Tool & MCP Integration', 'Workflow Automation'],
    },
    {
      title: 'Full-Stack Product Engineering',
      desc: 'Senior product teams that take AI features from idea to a scalable, well-tested production application.',
      features: ['React / Node / Python', 'API & Platform Design', 'Cloud-native Deployment'],
    },
    {
      title: 'Data Engineering & MLOps',
      desc: 'The unglamorous foundation that makes AI work — pipelines, feature stores, monitoring, and CI/CD for models.',
      features: ['ETL & Streaming', 'Vector & Feature Stores', 'Model Monitoring'],
    },
    {
      title: 'Applied AI R&D',
      desc: 'A research-minded team that prototypes fast, benchmarks honestly, and de-risks emerging AI for your roadmap.',
      features: ['Rapid Prototyping', 'Benchmarking & PoCs', 'Tech Due Diligence'],
    },
    {
      title: 'AI Strategy & Consulting',
      desc: 'We help leadership identify high-ROI AI opportunities and a pragmatic path to production.',
      features: ['Opportunity Mapping', 'Architecture Reviews', 'Build vs. Buy'],
    },
  ];

  const frontier = [
    {
      icon: <FaRobot />,
      title: 'Autonomous AI Agents',
      desc: 'We research and ship goal-driven agents that plan, reason, and use tools to complete real work — with reliability and cost under control.',
    },
    {
      icon: <FaProjectDiagram />,
      title: 'Multi-Agent Systems',
      desc: 'Orchestrated teams of specialized agents that collaborate, critique, and self-correct on complex, long-running tasks.',
    },
    {
      icon: <FaNetworkWired />,
      title: 'Model Context Protocol (MCP)',
      desc: 'Standardized tool and data connectivity so agents safely tap into your systems, APIs, and knowledge bases.',
    },
    {
      icon: <FaMicrochip />,
      title: 'Frontier Model Research',
      desc: 'Continuous evaluation of the latest LLMs, reasoning models, and open weights — so you adopt what actually works.',
    },
  ];

  const regions = [
    {
      flag: '🇪🇺',
      title: 'Europe',
      desc: 'Trusted delivery partner for EU scale-ups and enterprises — GDPR-aware, time-zone aligned, and senior by default.',
    },
    {
      flag: '🇬🇧',
      title: 'United Kingdom',
      desc: 'Dedicated AI and full-stack pods for UK companies building production-grade GenAI and agentic products.',
    },
    {
      flag: '🇨🇦',
      title: 'Canada',
      desc: 'Nearshore-friendly overlap and flexible engagement models for Canadian teams shipping AI features fast.',
    },
  ];

  return (
    <div>
      {/* 1 — Who We Are (About-first) */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
              <span className="inline-block px-4 py-1 mb-5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                An applied AI consulting & <span className="text-primary-600">R&D lab</span>
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                FutureMinds AI Labs is a team of senior engineers and researchers who close the gap
                between AI's promise and AI that actually works in production. We design, build, and
                ship Generative AI, Agentic AI, and full-stack systems.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We operate as a remote-first delivery partner, working with clients across
                <span className="font-semibold text-gray-900"> Europe, the UK, and Canada</span> — combining
                frontier research with the engineering discipline to put it into production.
              </p>
              <Link to="/about" className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-2">
                More about us <FaArrowRight />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100">
                  <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2 — Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 mb-6 rounded-full bg-white shadow-sm text-primary-700 text-sm font-semibold">
                Applied AI · R&D · Engineering
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                We build{' '}
                <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                  AI that ships
                </span>
                <br />to production
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                From research prototype to reliable, scalable product — we partner with companies
                to deliver Generative AI, Agentic AI, and full-stack systems that drive real outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => setShowForm(true)} className="btn-primary text-lg flex items-center gap-2">
                  Start a Project <FaArrowRight />
                </button>
                <Link to="/work" className="btn-secondary text-lg">
                  See Our Work
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <p className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wide">Our Stack</p>
                <div className="grid grid-cols-4 gap-6">
                  {technologies.map((tech, index) => (
                    <div key={index} className="text-center group">
                      <div className={`text-4xl ${tech.color} group-hover:scale-110 transition-transform duration-300 flex justify-center`}>
                        {tech.icon}
                      </div>
                      <p className="text-xs mt-2 text-gray-600">{tech.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3 — What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A senior, research-driven team covering the full path from AI strategy to production engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <h3 className="text-2xl font-bold mb-4 text-primary-700">{cap.title}</h3>
                <p className="text-gray-600 mb-6">{cap.desc}</p>
                <ul className="space-y-2 mb-6">
                  {cap.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-primary-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="text-primary-600 font-semibold hover:text-primary-700">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Frontier R&D / AI Agents */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 mb-4 rounded-full bg-primary-600/20 text-primary-300 text-sm font-semibold">
              On the Frontier
            </span>
            <h2 className="text-4xl font-bold mb-4">Researching & building the next generation of AI agents</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We invest in active R&D so our clients ride the cutting edge — not last year's playbook.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {frontier.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-primary-500 transition-all"
              >
                <div className="text-4xl text-primary-400 mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Global Delivery */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="text-4xl text-primary-600 mb-4 flex justify-center"><FaGlobeEurope /></div>
            <h2 className="text-4xl font-bold mb-4">Global delivery, senior by default</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A remote-first AI partner for international teams. We outsource engineering excellence to
              clients across Europe, the UK, and Canada — with clear communication and time-zone overlap.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 text-center border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{region.flag}</div>
                <h3 className="text-xl font-bold mb-3">{region.title}</h3>
                <p className="text-gray-600">{region.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-900">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Have an AI idea worth building?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Tell us about your problem. We'll bring the research, engineering, and product judgment to ship it.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-white text-primary-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Book a Discovery Call
          </button>
        </div>
      </section>

      <InquiryModal open={showForm} onClose={() => setShowForm(false)} />
    </div>
  );
};

export default Home;
