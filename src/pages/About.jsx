import { motion } from 'framer-motion';
import { FaFlask, FaShippingFast, FaShieldAlt, FaHandshake } from 'react-icons/fa';

const About = () => {
  const team = [
    { name: 'Nagendra Govindu', role: 'Co-Founder & Head of AI/ML', exp: '10+ yrs' },
    { name: 'Naresh G', role: 'Co-Founder & Head of Engineering', exp: '13+ yrs' },
    { name: 'Thanuja P', role: 'Head of Quality & Reliability', exp: '10+ yrs' },
    { name: 'Satishkumar Jagatha', role: 'Principal DevOps & Platform', exp: '13+ yrs' },
    { name: 'Venkat Davuluri', role: 'Principal Data & ML Engineer', exp: '20+ yrs' },
    { name: 'Bhargav Ram', role: 'Senior Engineer, Agentic AI', exp: '8+ yrs' },
  ];

  const values = [
    {
      icon: <FaShippingFast />,
      title: 'Ship to Production',
      desc: 'Demos are easy. We measure ourselves by reliable systems running in the real world.',
    },
    {
      icon: <FaFlask />,
      title: 'Research-Driven',
      desc: 'We stay on the frontier and benchmark honestly — no hype, just what works for your data.',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Trust & Safety',
      desc: 'Security, evaluation, and guardrails are built in from day one, not bolted on later.',
    },
    {
      icon: <FaHandshake />,
      title: 'True Partnership',
      desc: 'We work like an extension of your team — transparent, senior, and invested in outcomes.',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            An AI lab built by senior engineers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            We exist to close the gap between AI's promise and AI that actually works in production.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                FutureMinds AI Labs is an applied AI consulting and R&D lab. We started with a
                conviction: the hard part of AI isn't the prototype — it's everything required to
                make it reliable, safe, and valuable in production.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our team blends machine-learning research with deep full-stack and platform
                engineering. As a remote-first delivery partner, we work with clients across
                <span className="font-semibold text-gray-900"> Europe, the UK, and Canada</span> —
                actively researching and building the latest AI agents, then shipping systems
                that hold up under real-world load.
              </p>
              <div className="flex flex-wrap items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary-600">40+</div>
                  <div className="text-gray-600">AI Systems Shipped</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">15+</div>
                  <div className="text-gray-600">Enterprise Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">12 yrs</div>
                  <div className="text-gray-600">Avg. Experience</div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="The team collaborating"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-gray-600">The principles behind every engagement.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl text-primary-600 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Leadership</h2>
            <p className="text-xl text-gray-600">Practitioners with decades of combined experience across AI, data, and engineering.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl text-primary-600 font-bold">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-primary-600 text-sm mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.exp} experience</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
