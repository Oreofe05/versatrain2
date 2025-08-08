import React from 'react';
import { motion } from 'framer-motion';
import { Building, Users, Award, Handshake, Mail, Phone, CheckCircle, ArrowRight } from 'lucide-react';

const PartnershipsPage = () => {
  const partners = [
    {
      name: 'TechCorp Solutions',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      type: 'Corporate Training Partner',
      description: 'Providing custom web development training for their 500+ employee workforce.',
      results: ['85% skill improvement', '40+ employees certified', '3 month implementation'],
      testimonial: 'VersaTrain Academy helped us upskill our entire development team efficiently and effectively.',
      contact: 'Jennifer Walsh, HR Director'
    },
    {
      name: 'Creative Institute',
      logo: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      type: 'Educational Institution',
      description: 'Integrated our graphic design curriculum into their continuing education programs.',
      results: ['200+ students enrolled', '95% completion rate', 'Ongoing partnership'],
      testimonial: 'The partnership has enhanced our design program significantly and student outcomes are excellent.',
      contact: 'Dr. Michael Rodriguez, Dean'
    },
    {
      name: 'StartupHub Accelerator',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      type: 'Business Accelerator',
      description: 'Providing leadership and entrepreneurship training for their startup cohorts.',
      results: ['50+ startups trained', '75% funding success rate', '2 year partnership'],
      testimonial: 'Their leadership training has been instrumental in preparing our founders for success.',
      contact: 'Sarah Kim, Program Director'
    },
    {
      name: 'Metropolitan University',
      logo: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg',
      type: 'Academic Partner',
      description: 'Offering our courses as accredited continuing education units for their students.',
      results: ['500+ students served', 'Credit recognition', 'Faculty collaboration'],
      testimonial: 'The quality of instruction and practical approach perfectly complements our academic program.',
      contact: 'Prof. David Chen, Computer Science Dept.'
    }
  ];

  const partnershipTypes = [
    {
      icon: <Building className="h-8 w-8" />,
      title: 'Corporate Training',
      description: 'Custom skill development programs for your employees',
      benefits: [
        'Tailored curriculum for your industry needs',
        'On-site and virtual training options',
        'Progress tracking and reporting',
        'Bulk pricing and flexible scheduling'
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Educational Institutions',
      description: 'Curriculum integration and student programs',
      benefits: [
        'Accredited course offerings',
        'Faculty training and development',
        'Student placement assistance',
        'Shared resource development'
      ]
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Certification Bodies',
      description: 'Joint certification and credentialing programs',
      benefits: [
        'Industry-recognized certifications',
        'Assessment and validation services',
        'Continuing education credits',
        'Professional development pathways'
      ]
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: 'Technology Partners',
      description: 'Integration with platforms and tools',
      benefits: [
        'LMS and platform integrations',
        'Content distribution partnerships',
        'Technology stack training',
        'Co-marketing opportunities'
      ]
    }
  ];

  const partnershipProcess = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'We discuss your organization\'s goals, challenges, and training needs.'
    },
    {
      step: 2,
      title: 'Proposal Development',
      description: 'Our team creates a customized partnership proposal with specific deliverables.'
    },
    {
      step: 3,
      title: 'Agreement & Setup',
      description: 'We finalize the partnership terms and begin program implementation.'
    },
    {
      step: 4,
      title: 'Program Launch',
      description: 'Training begins with ongoing support and progress monitoring.'
    },
    {
      step: 5,
      title: 'Evaluation & Growth',
      description: 'Regular reviews ensure success and identify expansion opportunities.'
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
      <section className="bg-gradient-to-r from-blue-900 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Partnerships</h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto mb-8">
              Collaborate with us to deliver exceptional learning experiences and drive organizational growth
            </p>
            <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Become a Partner
            </button>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer flexible partnership models designed to meet your organization's unique needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{type.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <ul className="space-y-3">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-lg text-gray-600">Organizations we're proud to work with</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{partner.name}</h3>
                      <p className="text-blue-600 font-medium">{partner.type}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{partner.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {partner.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className="text-sm font-medium text-gray-900">{result}</div>
                      </div>
                    ))}
                  </div>

                  <blockquote className="text-gray-700 italic mb-4">
                    "{partner.testimonial}"
                  </blockquote>

                  <p className="text-sm text-gray-600">— {partner.contact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partnership Process</h2>
            <p className="text-lg text-gray-600">Simple steps to start our collaboration</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>
            
            {partnershipProcess.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-blue-200">The advantages of working with VersaTrain Academy</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-200 mb-4">Years of Experience</div>
              <p className="text-sm text-blue-100">Proven track record in delivering quality education and training programs</p>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200 mb-4">Expert Instructors</div>
              <p className="text-sm text-blue-100">Industry professionals with real-world experience and teaching expertise</p>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-200 mb-4">Partner Satisfaction</div>
              <p className="text-sm text-blue-100">High satisfaction rates and long-term partnership relationships</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-white text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Partner With Us?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can work together to achieve your training and development goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:partnerships@versatrain.academy"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Email Us</span>
              </a>
              <a
                href="tel:+15551234567"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default PartnershipsPage;