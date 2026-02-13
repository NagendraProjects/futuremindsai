import { motion } from 'framer-motion';
import { FaClock, FaUsers, FaStar, FaDownload } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Full Stack AI Development',
      duration: '6 Months',
      students: '250+',
      rating: 4.9,
      price: '9999',
      topics: ['React', 'Node.js', 'Python', 'TensorFlow', 'MongoDB', 'AWS'],
      level: 'Beginner to Advanced'
    },
    {
      id: 2,
      title: 'Azure DevOps Engineer',
      duration: '4 Months',
      students: '180+',
      rating: 4.8,
      price: '9999',
      topics: ['Azure Services', 'CI/CD', 'Kubernetes', 'Terraform', 'Monitoring'],
      level: 'Intermediate'
    },
    {
      id: 3,
      title: 'GraphQL Masterclass',
      duration: '3 Months',
      students: '150+',
      rating: 4.9,
      price: '9999',
      topics: ['Apollo', 'Prisma', 'Subscriptions', 'Federation', 'Security'],
      level: 'All Levels'
    },
    {
      id: 4,
      title: 'Cloud Computing (AWS/Azure)',
      duration: '5 Months',
      students: '200+',
      rating: 4.7,
      price: '9999',
      topics: ['AWS', 'Azure', 'Serverless', 'Microservices', 'DevOps'],
      level: 'Beginner to Advanced'
    },
    {
      id: 5,
      title: 'Data Science & ML',
      duration: '6 Months',
      students: '190+',
      rating: 4.8,
      price: '9999',
      topics: ['Python', 'Statistics', 'ML Algorithms', 'Deep Learning', 'NLP'],
      level: 'Intermediate'
    },
    {
      id: 6,
      title: 'MERN Stack Specialization',
      duration: '4 Months',
      students: '300+',
      rating: 4.9,
      price: '9999',
      topics: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux'],
      level: 'All Levels'
    }
  ];

  return (
    <div>
      <section className="bg-primary-900 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">Our Courses</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Industry-recognized certifications with hands-on projects and 100% placement assistance
          </p>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center">
            {['All', 'Full Stack', 'Cloud', 'AI/ML', 'DevOps', 'GraphQL'].map((filter) => (
              <button
                key={filter}
                className="px-6 py-2 rounded-full border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                      {course.level}
                    </span>
                    <span className="text-2xl font-bold text-primary-600">{course.price}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <FaClock className="mr-1" /> {course.duration}
                    </span>
                    <span className="flex items-center">
                      <FaUsers className="mr-1" /> {course.students}
                    </span>
                    <span className="flex items-center text-yellow-500">
                      <FaStar className="mr-1" /> {course.rating}
                    </span>
                  </div>

                  <div className="mb-6">
                    <p className="font-semibold mb-2">Topics Covered:</p>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 rounded text-xs">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 btn-primary">
                      Enroll Now
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                      <MdDownload />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;