import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaDatabase } from 'react-icons/fa';
import { SiAzuredevops, SiKubernetes, SiTensorflow, SiGraphql } from 'react-icons/si';

const Home = () => {
  const technologies = [
    { icon: <SiTensorflow />, name: 'AI & ML', color: 'text-orange-600' },
    { icon: <FaPython />, name: 'Data Science', color: 'text-yellow-600' },
    { icon: <FaPython />, name: 'Python', color: 'text-blue-500' },
    { icon: <FaAws />, name: 'AWS & Azure', color: 'text-orange-500' },
    { icon: <FaNodeJs />, name: 'Full Stack', color: 'text-green-600' },
    { icon: <FaReact />, name: 'React', color: 'text-blue-400' },
    { icon: <FaDatabase />, name: 'Any DB', color: 'text-green-500' },
    { icon: <SiGraphql />, name: 'LangChain', color: 'text-purple-600' },
    { icon: <FaNodeJs />, name: 'FastAPI', color: 'text-teal-600' },
    { icon: <FaNodeJs />, name: 'MERN/MEAN', color: 'text-green-700' },
    { icon: <SiTensorflow />, name: 'Generative AI', color: 'text-pink-600' },
    { icon: <SiTensorflow />, name: 'Agentic AI', color: 'text-indigo-600' },
    { icon: <FaDatabase />, name: 'Data Engineering', color: 'text-cyan-700' },
  ];

  const stats = [
    { label: 'Students Placed', value: '500+' },
    { label: 'Partner Companies', value: '20+' },
    { label: 'Expert Trainers', value: '10+' },
    { label: 'Placement Rate', value: '95%' },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Master{' '}
                <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                  AI & ML & Full Stack
                </span>
                <br />With Industry Experts
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive training program with 100% placement assistance.
                Learn AI, ML, Full Stack, GraphQL, and Azure DevOps from scratch.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/courses" className="btn-primary text-lg">
                  Explore Courses
                </Link>
                <Link to="/contact" className="btn-secondary text-lg">
                  Talk to Advisor
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <div className="grid grid-cols-5 gap-4">
                  {technologies.map((tech, index) => (
                    <div key={index} className="text-center group">
                      <div className={`text-4xl ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                        {tech.icon}
                      </div>
                      <p className="text-xs mt-1 text-gray-600">{tech.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Industry-Aligned Curriculum</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed by industry experts to make you job-ready from day one
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {
              [
                {
                  title: 'Data Science AI & ML',
                  desc: 'Learn Python, ML algorithms, Deep Learning, and NLP with hands-on projects.',
                  features: ['Industry Mentors', 'Certification', 'Real Projects']
                },
                {
                  title: 'Full Stack with AI',
                  desc: 'Master React, Node.js, Python, and integrate AI into full stack applications.',
                  features: ['AI Integration', 'Full Stack Projects', 'Placement Assistance']
                },
                {
                  title: 'Testing with Selenium & Playwright',
                  desc: 'Automate testing using Selenium, Playwright, and CI/CD pipelines.',
                  features: ['Selenium', 'Playwright', 'CI/CD Automation']
                },
                {
                  title: 'Data Engineering',
                  desc: 'Build ETL pipelines, work with Big Data, Spark, and Data Warehousing.',
                  features: ['ETL', 'Big Data', 'Spark', 'Data Warehousing']
                },
                {
                  title: 'AWS & Azure DevOps',
                  desc: 'Master cloud platforms, DevOps pipelines, and infrastructure automation.',
                  features: ['AWS', 'Azure', 'CI/CD', 'Infrastructure as Code']
                },
                {
                  title: 'Generative AI, Agentic AI & MCP',
                  desc: 'Explore advanced AI concepts, generative models, agentic systems, and Model Context Protocol.',
                  features: ['Generative AI', 'Agentic AI', 'MCP', 'Real-world Projects']
                }
              ].map((course, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all"
                >
                  <h3 className="text-2xl font-bold mb-4 text-primary-700">{course.title}</h3>
                  <p className="text-gray-600 mb-6">{course.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="text-primary-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/courses" className="text-primary-600 font-semibold hover:text-primary-700">
                    Learn More →
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;