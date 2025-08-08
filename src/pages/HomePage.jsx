import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight, Star, Users, BookOpen, Award, Mail, Phone, MessageSquare } from 'lucide-react';

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const featuredCourses = [
    {
      id: 1,
      title: 'Graphic Design',
      description: 'Master visual storytelling with tools like Photoshop, Illustrator, and Figma to create stunning digital designs.',
      image: 'https://media.istockphoto.com/id/1191609321/photo/graphic-designer-drawing-sketches-logo-design.jpg?b=1&s=612x612&w=0&k=20&c=ZWbjNb2gAkLchllNn_4PxEztzqQD3VmF3HblNhgn2vU=',
      // price: '$299',
      // type: 'online',
      // students: 1250,
      // rating: 4.9
    },
    {
      id: 2,
      title: 'Full-Stack Web Development',
      description: 'Learn React, Node.js, and modern web technologies to build complete applications.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
      // price: '$399',
      // type: 'online',
      // students: 980,
      // rating: 4.8
    },
    {
      id: 3,
      title: 'Information Management',
      description: 'Learn to organize, manage, and analyze digital information using systems and tools that support effective decision-making.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg',
      // price: '$199',
      // type: 'physical',
      // students: 150,
      // rating: 5.0
    }
  ];

  const testimonials = [
    {
      name: 'Akin Oye',
      role: 'Graphic Designer',
      content: 'VersaTrain Academy transformed my career. The graphic design course was comprehensive and the instructors were incredibly supportive.',
      // image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      rating: 5
    },
    {
      name: 'David Odebola',
      role: 'Full-Stack Developer',
      content: 'The web development program exceeded my expectations. I landed my dream job just two months after completing the course.',
      // image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      rating: 5
    },
    {
      name: 'Ifayemi',
      role: 'Information manager',
      content: 'Completing the Information Management course at VersaTrain Academy gave me practical skills in organizing digital data, using cloud tools, and understanding how information flows in a business. I feel more confident and job-ready than ever.The leadership workshop helped me become a more confident and effective leader. The skills I learned are invaluable.',
      // image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 z-10"></div>
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            poster="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Empowering Self-Development & Skill Mastery
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            Learn Graphic Design, Tech, and Personal Development—Online or In-Person
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/courses"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Explore Courses
            </Link>
            {/*<Link
              to="/courses"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Enroll Now
            </Link>*/}
          </motion.div> 
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About VersaTrain Academy</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're dedicated to empowering individuals through comprehensive skill development programs. 
              Our expert instructors and cutting-edge curriculum ensure you gain practical, industry-relevant 
              skills that transform careers and lives.
            </p>
            <Link
              to="/about"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Courses</h2>
            <p className="text-lg text-gray-600">Discover our  programs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      course.type === 'online' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {course.type === 'online' ? 'Online' : 'In-Person'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600">{course.rating}</span>
                    </div>
                    {/* <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{course.students} students</span>
                    </div> */}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                    {/* <Link
                      to={`/course/${course.id}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      View Course
                    </Link> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-lg text-gray-600">Hear from our successful graduates</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-800 text-center mb-6">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div className="flex items-center justify-center">
                {/* <img
                  // src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full mr-4"
                /> */}
                <div className="text-center">
                  <div className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Quick Links / Contact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp Support</h3>
              <p className="text-gray-600 mb-4">Get instant answers to your questions</p>
              <a
                href="https://wa.me/+2348146096468"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Chat Now
              </a>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your detailed inquiries</p>
              <a
                href="mailto:versatrainacademy@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Send Email
              </a>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our team</p>
              <a
                href="tel:+234814 609 6468"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      {/* <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Join Our Community</h2>
            <p className="text-xl text-blue-200 mb-8">
              Get updates on free resources, new courses, and exclusive offers
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section> */}
    </motion.div>
  );
};

export default HomePage;