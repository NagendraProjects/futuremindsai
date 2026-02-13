import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaDatabase } from 'react-icons/fa';
import { SiAzuredevops, SiKubernetes, SiTensorflow, SiGraphql } from 'react-icons/si';

const Home = () => {
  const technologies = [
    { icon: <FaReact />, name: 'React', color: 'text-blue-400' },
    { icon: <FaNodeJs />, name: 'Node.js', color: 'text-green-600' },
    { icon: <FaPython />, name: 'Python', color: 'text-yellow-600' },
    { icon: <FaAws />, name: 'AWS', color: 'text-orange-500' },
    { icon: <SiAzuredevops />, name: 'Azure', color: 'text-blue-600' },
    { icon: <FaDocker />, name: 'Docker', color: 'text-blue-500' },
    { icon: <SiKubernetes />, name: 'K8s', color: 'text-blue-700' },
    { icon: <SiGraphql />, name: 'GraphQL', color: 'text-pink-600' },
    { icon: <SiTensorflow />, name: 'TensorFlow', color: 'text-orange-600' },
    { icon: <FaDatabase />, name: 'MongoDB', color: 'text-green-500' },
  ];

  const stats = [
    { label: 'Students Placed', value: '100+' },
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
            {[
              {
                title: 'Full Stack AI & ML',
                desc: 'Master React, Node.js, Python, AI, and ML integration',
                features: ['20+ Real Projects', 'Industry Mentors', 'Certification']
              },
              {
                title: 'Azure DevOps',
                desc: 'Complete Azure certification preparation with hands-on',
                features: ['AZ-900, AZ-104', 'CI/CD Pipelines', 'Infrastructure as Code']
              },
              {
                title: 'GraphQL Mastery',
                desc: 'Build modern APIs with GraphQL, Apollo, and Prisma',
                features: ['Apollo Server/Client', 'Real-time Subscriptions', 'Federation']
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