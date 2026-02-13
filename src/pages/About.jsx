import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaTrophy, FaHeart, FaLightbulb, FaHandsHelping } from 'react-icons/fa';

const About = () => {
  const team = [
    { name: 'Mr Nagendra Govindu', role: 'Founder & AI & ML Expert', exp: '10+ years' },
    { name: 'Mr Naresh G', role: 'Founder & AI & Full Stack Expert', exp: '13+ years' },
    { name: 'Thanuja P', role: 'QA Architect', exp: '10+ years' },
    { name: 'Satishkumar P', role: 'DevOps Architect', exp: '9+ years' },
    { name: 'Kumar J', role: 'AI & Mobile Architect', exp: '18+ years' }
  ];

  const values = [
    {
      icon: <FaHeart />,
      title: 'Student First',
      desc: 'Every decision we make puts our students success first'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      desc: 'We constantly update our curriculum with latest technologies'
    },
    {
      icon: <FaHandsHelping />,
      title: 'Mentorship',
      desc: 'Personalized guidance from industry experts'
    },
    {
      icon: <FaAward />,
      title: 'Excellence',
      desc: 'Committed to providing the highest quality education'
    }
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
            Empowering Tech Careers Since 2020
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            We're on a mission to bridge the gap between academic learning and industry requirements
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2024, FutureMinds AI Academy started with a simple idea: make quality tech education 
                accessible to everyone. What began as a small bootcamp has now grown into a premier 
                training institution with over 100 successful placements.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our unique approach combines industry-aligned curriculum, hands-on projects, and 
                personalized mentorship to ensure our students are not just job-ready, but career-ready.
              </p>
              <div className="flex items-center space-x-8">
                <div>
                  <div className="text-3xl font-bold text-primary-600">100+</div>
                  <div className="text-gray-600">Students Placed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">10+</div>
                  <div className="text-gray-600">Expert Trainers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">20+</div>
                  <div className="text-gray-600">Partner Companies</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Team"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
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
                <div className="text-5xl text-primary-600 mb-4">{value.icon}</div>
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
            <h2 className="text-4xl font-bold mb-4">Meet Our Experts</h2>
            <p className="text-xl text-gray-600">Industry veterans with decades of combined experience</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="w-32 h-32 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-primary-600 font-bold">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary-600 mb-2">{member.role}</p>
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