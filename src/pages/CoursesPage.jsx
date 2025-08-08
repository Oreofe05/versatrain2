import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Users, Clock, MapPin, Calendar, Filter } from 'lucide-react';

const CoursesPage = () => {
  const [activeTab, setActiveTab] = useState('online');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const onlineCourses = [

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


    // {
    //   id: 1,
    //   title: 'Complete Graphic Design Mastery',
    //   description: 'Master Photoshop, Illustrator, and design principles from beginner to professional level.',
    //   image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    //   price: '$299',
    //   originalPrice: '$399',
    //   duration: '12 weeks',
    //   students: 1250,
    //   rating: 4.9,
    //   instructor: 'Elena Rodriguez',
    //   category: 'design',
    //   level: 'Beginner to Advanced',
    //   modules: 8
    // },
    // {
    //   id: 2,
    //   title: 'Full-Stack Web Development',
    //   description: 'Learn React, Node.js, and modern web technologies to build complete applications.',
    //   image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
    //   price: '$399',
    //   originalPrice: '$499',
    //   duration: '16 weeks',
    //   students: 980,
    //   rating: 4.8,
    //   instructor: 'Marcus Johnson',
    //   category: 'tech',
    //   level: 'Intermediate',
    //   modules: 12
    // },
    // {
    //   id: 3,
    //   title: 'Digital Marketing & Social Media',
    //   description: 'Build your brand and grow your business with modern digital marketing strategies.',
    //   image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg',
    //   price: '$249',
    //   originalPrice: '$349',
    //   duration: '10 weeks',
    //   students: 750,
    //   rating: 4.7,
    //   instructor: 'Sarah Mitchell',
    //   category: 'marketing',
    //   level: 'Beginner',
    //   modules: 6
    // },
    // {
    //   id: 4,
    //   title: 'Personal Branding & Leadership',
    //   description: 'Develop your personal brand and leadership skills for career advancement.',
    //   image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    //   price: '$199',
    //   originalPrice: '$299',
    //   duration: '8 weeks',
    //   students: 640,
    //   rating: 4.9,
    //   instructor: 'David Chen',
    //   category: 'personal',
    //   level: 'All Levels',
    //   modules: 5
    // },
    // {
    //   id: 5,
    //   title: 'UI/UX Design Fundamentals',
    //   description: 'Learn user interface and user experience design principles and tools.',
    //   image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    //   price: '$349',
    //   originalPrice: '$449',
    //   duration: '14 weeks',
    //   students: 890,
    //   rating: 4.8,
    //   instructor: 'Elena Rodriguez',
    //   category: 'design',
    //   level: 'Beginner to Intermediate',
    //   modules: 10
    // },
    // {
    //   id: 6,
    //   title: 'Python Programming & Data Science',
    //   description: 'Master Python programming and dive into data analysis and machine learning.',
    //   image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    //   price: '$429',
    //   originalPrice: '$529',
    //   duration: '18 weeks',
    //   students: 720,
    //   rating: 4.9,
    //   instructor: 'Marcus Johnson',
    //   category: 'tech',
    //   level: 'Beginner to Advanced',
    //   modules: 14
    // }
  ];

  const physicalCourses = [

    {
      id: 3,
      title: 'Graphic Design',
      description: 'Master visual storytelling with tools like Photoshop, Illustrator, and Figma to create stunning digital designs.',
      image: 'https://media.istockphoto.com/id/1191609321/photo/graphic-designer-drawing-sketches-logo-design.jpg?b=1&s=612x612&w=0&k=20&c=ZWbjNb2gAkLchllNn_4PxEztzqQD3VmF3HblNhgn2vU=',
      // price: '$299',
      // type: 'online',
      // students: 1250,
      // rating: 4.9
    },
    {
      id: 4,
      title: 'Full-Stack Web Development',
      description: 'Learn React, Node.js, and modern web technologies to build complete applications.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
      // price: '$399',
      // type: 'online',
      // students: 980,
      // rating: 4.8
    },
    {
      id: 5,
      title: 'Information Management',
      description: 'Learn to organize, manage, and analyze digital information using systems and tools that support effective decision-making.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg',
      // price: '$199',
      // type: 'physical',
      // students: 150,
      // rating: 5.0
    }

    // {
    //   id: 7,
    //   title: 'Leadership Excellence Workshop',
    //   description: 'Intensive 3-day workshop on leadership skills and team management.',
    //   image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    //   price: '$199',
    //   duration: '3 days',
    //   location: 'New York, NY',
    //   dates: 'Mar 15-17, 2025',
    //   students: 150,
    //   rating: 5.0,
    //   instructor: 'David Chen',
    //   category: 'personal',
    //   maxStudents: 25
    // },
    // {
    //   id: 8,
    //   title: 'Advanced Photoshop Bootcamp',
    //   description: 'Hands-on intensive training in advanced Photoshop techniques.',
    //   image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    //   price: '$299',
    //   duration: '2 days',
    //   location: 'Los Angeles, CA',
    //   dates: 'Apr 8-9, 2025',
    //   students: 95,
    //   rating: 4.9,
    //   instructor: 'Elena Rodriguez',
    //   category: 'design',
    //   maxStudents: 20
    // },
    // {
    //   id: 9,
    //   title: 'Entrepreneurship Masterclass',
    //   description: 'Learn to build and scale your startup from successful entrepreneurs.',
    //   image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    //   price: '$399',
    //   duration: '4 days',
    //   location: 'San Francisco, CA',
    //   dates: 'May 20-23, 2025',
    //   students: 200,
    //   rating: 4.8,
    //   instructor: 'Sarah Mitchell',
    //   category: 'business',
    //   maxStudents: 30
    // }
  ];

  // const categories = [
  //   { id: 'all', name: 'All Courses' },
  //   { id: 'design', name: 'Design' },
  //   { id: 'tech', name: 'Technology' },
  //   { id: 'personal', name: 'Personal Development' },
  //   { id: 'marketing', name: 'Marketing' },
  //   { id: 'business', name: 'Business' }
  // ];

  const filteredOnlineCourses = selectedCategory === 'all' 
    ? onlineCourses 
    : onlineCourses.filter(course => course.category === selectedCategory);

  const filteredPhysicalCourses = selectedCategory === 'all' 
    ? physicalCourses 
    : physicalCourses.filter(course => course.category === selectedCategory);

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Courses</h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Choose from our comprehensive range of online and in-person courses
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course Tabs & Filters */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-md">
              <button
                onClick={() => setActiveTab('online')}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === 'online'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Online Courses
              </button>
              <button
                onClick={() => setActiveTab('physical')}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === 'physical'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                In-Person Courses
              </button>
            </div>
          </div>

          {/* Category Filter */}
          {/* <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div> */}
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'online' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredOnlineCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        Online
                      </span>
                    </div>
                    {course.originalPrice && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                          Sale
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
                    
                    {/* <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-gray-600">{course.rating}</span>
                        <span className="text-sm text-gray-400">({course.students})</span>
                      </div>
                      <span className="text-sm text-gray-600">{course.level}</span>
                    </div>

                    <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div>
                        {course.modules} modules
                      </div>
                    </div> */}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                        {course.originalPrice && (
                          <span className="text-lg text-gray-400 line-through">{course.originalPrice}</span>
                        )}
                      </div>
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
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPhysicalCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                        In-Person
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
                    
                    {/* <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-gray-600">{course.rating}</span>
                        <span className="text-sm text-gray-400">({course.students})</span>
                      </div>
                      <span className="text-sm text-gray-600">{course.instructor}</span>
                    </div> */}

                    {/* <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{course.dates}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{course.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div> */}

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-orange-600">{course.price}</span>
                      {/* <Link
                        to={`/course/${course.id}`}
                        className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        Register
                      </Link> */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default CoursesPage;