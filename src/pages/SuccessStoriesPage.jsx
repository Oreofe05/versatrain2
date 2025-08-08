import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Briefcase, Star, ArrowRight } from 'lucide-react';

const SuccessStoriesPage = () => {
  const successStories = [
    {
      name: 'Sarah Martinez',
      beforeRole: 'Retail Sales Associate',
      afterRole: 'Senior UX Designer at Spotify',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      course: 'UI/UX Design Fundamentals',
      salaryIncrease: 180,
      timeToJob: '4 months',
      story: 'After 5 years in retail, I felt stuck with no clear career path. The UI/UX course at VersaTrain Academy opened up a whole new world for me. The practical projects and mentorship helped me build a portfolio that landed me interviews at top tech companies.',
      highlights: [
        'Built 5 portfolio projects during the course',
        'Received 1-on-1 mentorship from industry professionals',
        'Landed job offer within 2 months of graduation'
      ]
    },
    {
      name: 'Michael Rodriguez',
      beforeRole: 'Restaurant Manager',
      afterRole: 'Full-Stack Developer at Tesla',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      course: 'Full-Stack Web Development',
      salaryIncrease: 220,
      timeToJob: '6 months',
      story: 'I had always been interested in technology but never thought I could make the transition. The comprehensive curriculum and hands-on approach at VersaTrain Academy gave me the confidence and skills to pursue my dream career in tech.',
      highlights: [
        'Mastered React, Node.js, and database technologies',
        'Created 3 full-stack applications for portfolio',
        'Received job offer from Tesla after final project presentation'
      ]
    },
    {
      name: 'Jennifer Chen',
      beforeRole: 'Administrative Assistant',
      afterRole: 'Digital Marketing Director at Airbnb',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      course: 'Digital Marketing & Social Media',
      salaryIncrease: 150,
      timeToJob: '3 months',
      story: 'I wanted to break into marketing but didn\'t have any formal experience. The course taught me everything from SEO to social media strategy. The real-world projects and case studies prepared me for the challenges of digital marketing.',
      highlights: [
        'Launched successful campaigns for 3 local businesses',
        'Achieved Google Ads and Facebook Blueprint certifications',
        'Grew personal LinkedIn following by 500% during course'
      ]
    },
    {
      name: 'David Thompson',
      beforeRole: 'High School Teacher',
      afterRole: 'Leadership Consultant & Executive Coach',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
      course: 'Leadership Excellence Workshop',
      salaryIncrease: 200,
      timeToJob: '2 months',
      story: 'Teaching gave me people skills, but I wanted to help leaders in the corporate world. The leadership workshop provided me with frameworks and tools to start my own consulting practice. I now work with C-level executives.',
      highlights: [
        'Started consulting practice immediately after graduation',
        'Secured 5 corporate clients within first quarter',
        'Speaks at leadership conferences nationwide'
      ]
    },
    {
      name: 'Lisa Park',
      beforeRole: 'Freelance Photographer',
      afterRole: 'Creative Director at Nike',
      image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg',
      course: 'Complete Graphic Design Mastery',
      salaryIncrease: 160,
      timeToJob: '5 months',
      story: 'I had the creative eye but lacked the technical design skills for corporate work. The graphic design course taught me industry-standard tools and design principles. My portfolio transformation was incredible.',
      highlights: [
        'Mastered Adobe Creative Suite within 8 weeks',
        'Redesigned brand identity for 3 major clients',
        'Won "Creative of the Year" award at Nike within first year'
      ]
    },
    {
      name: 'Carlos Mendoza',
      beforeRole: 'Construction Worker',
      afterRole: 'Data Scientist at Microsoft',
      image: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg',
      course: 'Python Programming & Data Science',
      salaryIncrease: 250,
      timeToJob: '7 months',
      story: 'I had no programming experience when I started. The course structure made complex concepts understandable. The career support team helped me navigate the tech interview process and negotiate my salary.',
      highlights: [
        'Completed 15 data science projects using real datasets',
        'Contributed to open-source Python libraries',
        'Achieved Microsoft Azure Data Scientist certification'
      ]
    }
  ];

  const companyLogos = [
    'Google', 'Microsoft', 'Apple', 'Amazon', 'Tesla', 'Netflix', 'Spotify', 'Airbnb', 'Nike', 'Adobe'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Success Stories</h1>
            <p className="text-xl md:text-2xl text-green-200 max-w-3xl mx-auto mb-8">
              Real people, real transformations, real career growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">180%</div>
              <div className="text-gray-600">Average Salary Increase</div>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">2,500+</div>
              <div className="text-gray-600">Graduates Placed</div>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <Briefcase className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">4.2</div>
              <div className="text-gray-600">Months Average Job Placement</div>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">92%</div>
              <div className="text-gray-600">Employment Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Graduate Success Stories</h2>
            <p className="text-lg text-gray-600">Meet some of our amazing graduates who transformed their careers</p>
          </motion.div>

          <div className="space-y-16">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-96 object-cover rounded-xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{story.name}</h3>
                      <div className="flex items-center space-x-2 text-sm">
                        <span className="bg-red-500 px-2 py-1 rounded">Before</span>
                        <span>{story.beforeRole}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm mt-1">
                        <span className="bg-green-500 px-2 py-1 rounded">After</span>
                        <span>{story.afterRole}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="space-y-6">
                    <div>
                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        {story.course}
                      </span>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{story.name}</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">+{story.salaryIncrease}%</div>
                        <div className="text-sm text-gray-600">Salary Increase</div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{story.timeToJob}</div>
                        <div className="text-sm text-gray-600">Time to Job</div>
                      </div>
                    </div>

                    <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                      "{story.story}"
                    </blockquote>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {story.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start space-x-2">
                            <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Graduates Work At</h2>
            <p className="text-lg text-gray-600">Top companies worldwide trust our graduates</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {companyLogos.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-2xl font-bold text-gray-700">{company}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Join thousands of professionals who have transformed their careers with VersaTrain Academy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Talk to an Advisor
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default SuccessStoriesPage;