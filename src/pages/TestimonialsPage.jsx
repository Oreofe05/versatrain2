import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Play, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, Links } from 'react-router-dom';

const TestimonialsPage = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  // const videoTestimonials = [
  //   {
  //     id: 1,
  //     name: 'Sarah Johnson',
  //     role: 'Graphic Designer at Adobe',
  //     course: 'Complete Graphic Design Mastery',
  //     thumbnail: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  //     rating: 5,
  //     quote: 'VersaTrain Academy completely transformed my career trajectory.'
  //   },
  //   {
  //     id: 2,
  //     name: 'Michael Chen',
  //     role: 'Full-Stack Developer at Google',
  //     course: 'Full-Stack Web Development',
  //     thumbnail: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
  //     rating: 5,
  //     quote: 'The practical approach and real-world projects made all the difference.'
  //   },
  //   {
  //     id: 3,
  //     name: 'Emily Rodriguez',
  //     role: 'Team Lead at Microsoft',
  //     course: 'Leadership Excellence Workshop',
  //     thumbnail: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
  //     rating: 5,
  //     quote: 'I gained confidence and leadership skills that I use every day.'
  //   }
  // ];

  const writtenTestimonials = [
    {
      name: 'David Adeoye',
      role: 'Brand Designer',
      course: 'Graphics Design',
      // image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
      rating: 5,
      content: 'Learning graphic design at Versatrain Academy was a game-changer for me. The training was practical, easy to follow, and helped me start creating professional designs in no time!',
      date: 'January 2025'
    },
    {
      name: 'Ade Thompson',
      role: 'Visual Designer',
      course: 'Graphics Designer',
      // image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg',
      rating: 5,
      content: 'Versatrain Academy made graphic design simple and exciting. I gained real skills that I now use to earn and create with confidenceThis course gave me the practical skills I needed to excel in digital marketing. The real-world case studies and hands-on projects helped me understand how to create effective campaigns. I saw immediate results in my work performance.',
      date: 'December 2024'
    },
    {
      name: 'James Wilson',
      role: 'Frontend developer',
      course: 'Full stack-webdevelopment',
      // image: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg',
      rating: 5,
      content: 'Learning frontend development at Versatrain Academy gave me the skills and confidence to create stunning, responsive websites. The hands-on projects and expert guidance made all the difference',
      date: 'November 2024'
    },
    {
      name: 'Adeola Ajibola',
      role: 'Web developer',
      course: 'Front-end development',
      // image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
      rating: 5,
      content: 'Versatrain Academy’s frontend course transformed my coding skills and helped me build real-world projects. The support from instructors was amazing',
      date: 'October 2024'
    },
    {
      name: 'Precious',
      role: 'Information manager',
      course: 'Information Management',
      // image: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg',
      rating: 4,
      content: 'VersaTrain Academy taught me how to organize and protect critical data efficiently — now I’m confident managing information across any system.',
      date: 'September 2024'
    },
    {
      name: 'Amara',
      role: 'Information System Specialist',
      course: 'Information Management',
      // image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      rating: 5,
      content: ' Learning information management here gave me the tools to turn data into actionable insights. Highly recommend ',
      date: 'August 2024'
    }
  ];

  // const nextVideo = () => {
  //   setCurrentVideo((prev) => (prev + 1) % videoTestimonials.length);
  // };

  // const prevVideo = () => {
  //   setCurrentVideo((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
  // };

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Student Testimonials</h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Hear from our successful graduates who transformed their careers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Testimonials */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Video Testimonials</h2>
            <p className="text-lg text-gray-600">Watch our students share their success stories</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative aspect-video bg-gray-900">
                <img
                  src={videoTestimonials[currentVideo].thumbnail}
                  alt={videoTestimonials[currentVideo].name}
                  className="w-full h-full object-cover opacity-60"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                  <Play className="h-16 w-16 text-white" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={videoTestimonials[currentVideo].thumbnail}
                      alt={videoTestimonials[currentVideo].name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{videoTestimonials[currentVideo].name}</h3>
                      <p className="text-gray-600 text-sm">{videoTestimonials[currentVideo].role}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(videoTestimonials[currentVideo].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-lg text-gray-800 mb-4">
                  "{videoTestimonials[currentVideo].quote}"
                </blockquote>
                
                <p className="text-sm text-gray-600">
                  Course: {videoTestimonials[currentVideo].course}
                </p>
              </div>
            </div>

            <button
              onClick={prevVideo}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextVideo}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Video Navigation Dots */}
          {/*<div className="flex justify-center space-x-2 mt-8">
            {videoTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideo(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentVideo ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Written Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Written Reviews</h2>
            <p className="text-lg text-gray-600">Read detailed experiences from our graduates</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {writtenTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 relative"
              >
                <Quote className="h-8 w-8 text-blue-600 opacity-20 absolute top-4 right-4" />
                
                {/* <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div> */}

                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.content}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Course: {testimonial.course}</span>
                  <span>{testimonial.date}</span>
                </div>
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
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-200">Average Rating</div>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <div className="text-blue-200">Happy Students</div>
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
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-blue-200">Career Advancement</div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2  className="text-4xl font-bold text-gray-900 mb-4">Ready to Join Them?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Start your transformation journey today and become our next success story
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Link to='/courses' className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors" > 
              View Courses
              </Link>
              
              <Link to='/contact' button className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us    
              </Link>


          
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default TestimonialsPage;