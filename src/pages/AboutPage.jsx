import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye, Target, Lightbulb, Rocket, Shield, Star } from 'lucide-react';


const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Mr. Robert Peter',
      role: 'Founder & CEO',
      image: 'src/assets/Mr Peter.jpg',
      // bio: 'Educational technology expert with 15+ years in adult learning and skill development.'
    },
    {
      name: 'Mr David',
      role: 'VersaTrain Academy Training Overseer',
      image: 'src/assets/BroDavidVersaTrain.jpg',
      // bio: 'Full-stack developer and former tech lead at major Silicon Valley companies.'
    },
    {
      name: 'Mr Balogun Olamilekan',
      role: 'Chief Operating Officer(COO) and head of IT',
      image: 'src/assets/Mr Balogun.jpg',
      // bio: 'Award-winning graphic designer with expertise in digital media and brand identity.'
    },
    {
      name: 'Mr Ore-ofe',
      role: 'Personal Development Coach',
      image: 'src/assets/Ore-.jpg',
      // bio: 'Certified life coach specializing in leadership development and emotional intelligence.'
    },
    {
      name: 'Miss Akinyele Ifeoluwa',
      role: 'Voice of VersaTrain Academy',
      image: 'src/assets/Miss Ifeoluwaa.jpg',
      // bio: 'Certified life coach specializing in leadership development and emotional intelligence.'
    }
  ];

  const coreValues = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Empowerment',
      description: 'We believe everyone has the potential to grow and succeed with the right guidance and tools.'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We constantly evolve our teaching methods to incorporate the latest industry trends and technologies.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and transparency in all our interactions.'
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We strive for exceptional quality in everything we do, from course content to student support.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About VersaTrain Academy</h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Transforming lives through education, one skill at a time
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
               VersaTrain Academy is a training institute dedicated to teaching various skills (e.g tech) that empowers
               individuals to grow and succeed in their careers and personal development
              </p>
              {/* <p className="text-lg text-gray-600 mb-6">
                What started as weekend workshops in a small community center has grown into a comprehensive 
                learning platform serving thousands of students worldwide. We've maintained our core belief 
                that quality education should be accessible, practical, and transformative.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to offer both online and in-person training programs that have helped 
                over 5,000 individuals launch new careers, start businesses, and achieve their personal 
                development goals.
              </p> */}
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Our Story"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                {/* To become the global leader in accessible, practical education that empowers individuals 
                to thrive in an ever-changing world. We envision a future where anyone, anywhere, can 
                acquire the skills they need to achieve their dreams. */}
                To provide training that gives people different skills for success in life and work
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 ">Our Mission</h3>
              <p className="text-lg text-gray-600">
                {/* To provide high-quality, practical education in graphic design, technology, and personal 
                development through innovative online and in-person programs. We're committed to helping 
                our students develop both technical skills and the confidence to apply them. */}
                To provide training that gives people different skills for success in life and work
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 ">Motto</h3>
              <p className="text-lg text-gray-600 ">
                {/* To provide high-quality, practical education in graphic design, technology, and personal 
                development through innovative online and in-person programs. We're committed to helping 
                our students develop both technical skills and the confidence to apply them. */}
              ...Your growth is our mission
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              Passionate educators and industry experts dedicated to your success
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 sm:h-72 md:h-80 lg:h-96 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg text-blue-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-blue-200">Students Trained</div>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Courses Available</div>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Completion Rate</div>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-200">Average Rating</div>
            </motion.div>
          </div>
        </div>
      </section> */}
    </motion.div>
  );
};

export default AboutPage;