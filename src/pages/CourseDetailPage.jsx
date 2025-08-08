import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Play, 
  Star, 
  Clock, 
  Users, 
  CheckCircle, 
  Download, 
  Award,
  Calendar,
  MapPin,
  User
} from 'lucide-react';

const CourseDetailPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock course data - in a real app, this would come from an API
  const courseData = {
    1: {
      title: 'Complete Graphic Design Mastery',
      description: 'Master Photoshop, Illustrator, and design principles from beginner to professional level. This comprehensive course will take you through every aspect of graphic design.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      videoPreview: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      price: '$299',
      originalPrice: '$399',
      duration: '12 weeks',
      students: 1250,
      rating: 4.9,
      reviews: 423,
      instructor: {
        name: 'Elena Rodriguez',
        bio: 'Award-winning graphic designer with 10+ years of experience working with Fortune 500 companies.',
        image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
        credentials: 'Senior Designer at Adobe, 15+ years experience'
      },
      type: 'online',
      level: 'Beginner to Advanced',
      modules: [
        { title: 'Introduction to Graphic Design', lessons: 5, duration: '2 hours' },
        { title: 'Mastering Photoshop Basics', lessons: 8, duration: '4 hours' },
        { title: 'Advanced Photoshop Techniques', lessons: 10, duration: '5 hours' },
        { title: 'Adobe Illustrator Fundamentals', lessons: 7, duration: '3.5 hours' },
        { title: 'Logo Design & Branding', lessons: 6, duration: '3 hours' },
        { title: 'Typography & Layout Design', lessons: 9, duration: '4.5 hours' },
        { title: 'Print Design & Preparation', lessons: 5, duration: '2.5 hours' },
        { title: 'Portfolio Development', lessons: 4, duration: '2 hours' }
      ],
      learningObjectives: [
        'Master Adobe Photoshop and Illustrator',
        'Create professional logos and brand identities',
        'Design print and digital marketing materials',
        'Understand color theory and typography',
        'Build a professional design portfolio',
        'Work with clients and manage design projects'
      ],
      requirements: [
        'Computer with internet connection',
        'Adobe Creative Suite (trial version acceptable)',
        'Basic computer skills',
        'Eagerness to learn and practice'
      ],
      faqs: [
        {
          question: 'Do I need prior design experience?',
          answer: 'No! This course is designed for complete beginners and will take you from zero to professional level.'
        },
        {
          question: 'What software do I need?',
          answer: 'You\'ll need Adobe Photoshop and Illustrator. We provide guidance on getting started with free trials.'
        },
        {
          question: 'How long do I have access to the course?',
          answer: 'You have lifetime access to all course materials and updates.'
        },
        {
          question: 'Is there a money-back guarantee?',
          answer: 'Yes! We offer a 30-day money-back guarantee if you\'re not satisfied.'
        }
      ]
    },
    7: {
      title: 'Leadership Excellence Workshop',
      description: 'Intensive 3-day workshop on leadership skills and team management designed for emerging and established leaders.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      price: '$199',
      duration: '3 days',
      location: 'New York, NY',
      dates: 'Mar 15-17, 2025',
      students: 150,
      rating: 5.0,
      reviews: 89,
      instructor: {
        name: 'David Chen',
        bio: 'Certified leadership coach with 20+ years of corporate leadership experience.',
        image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
        credentials: 'MBA, Certified Executive Coach'
      },
      type: 'physical',
      maxStudents: 25,
      schedule: [
        { day: 'Day 1', topics: ['Leadership Foundations', 'Self-Assessment', 'Communication Skills'] },
        { day: 'Day 2', topics: ['Team Building', 'Conflict Resolution', 'Decision Making'] },
        { day: 'Day 3', topics: ['Strategic Thinking', 'Change Management', 'Action Planning'] }
      ],
      included: [
        'All workshop materials',
        'Lunch and refreshments',
        'Certificate of completion',
        'Follow-up coaching session',
        'Access to exclusive resources'
      ]
    }
  };

  const course = courseData[id] || courseData[1];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Course Header */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  course.type === 'online' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  {course.type === 'online' ? 'Online Course' : 'In-Person Workshop'}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{course.title}</h1>
              <p className="text-xl text-blue-200 mb-6">{course.description}</p>
              
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-blue-200">({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-5 w-5 text-blue-300" />
                  <span>{course.students} students</span>
                </div>
                {course.duration && (
                  <div className="flex items-center space-x-1">
                    <Clock className="h-5 w-5 text-blue-300" />
                    <span>{course.duration}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-4">
                <img
                  src={course.instructor.image}
                  alt={course.instructor.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold">{course.instructor.name}</div>
                  <div className="text-blue-200 text-sm">{course.instructor.credentials}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-xl p-6 text-gray-900">
                <div className="relative mb-4">
                  <img
                    src={course.videoPreview || course.image}
                    alt="Course Preview"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <button className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg hover:bg-black/30 transition-colors">
                    <Play className="h-12 w-12 text-white" />
                  </button>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-blue-600">{course.price}</span>
                    {course.originalPrice && (
                      <span className="text-xl text-gray-400 line-through">{course.originalPrice}</span>
                    )}
                  </div>
                  {course.originalPrice && (
                    <p className="text-sm text-green-600 font-medium">Save {Math.round(((parseInt(course.originalPrice.slice(1)) - parseInt(course.price.slice(1))) / parseInt(course.originalPrice.slice(1))) * 100)}%</p>
                  )}
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold mb-4 transition-colors">
                  {course.type === 'online' ? 'Enroll Now' : 'Register Now'}
                </button>

                {course.type === 'physical' && (
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{course.dates}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{course.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>Max {course.maxStudents} students</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                    activeTab === 'overview'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('curriculum')}
                  className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                    activeTab === 'curriculum'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {course.type === 'online' ? 'Curriculum' : 'Schedule'}
                </button>
                <button
                  onClick={() => setActiveTab('instructor')}
                  className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                    activeTab === 'instructor'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Instructor
                </button>
                <button
                  onClick={() => setActiveTab('faq')}
                  className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                    activeTab === 'faq'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  FAQ
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {course.learningObjectives?.map((objective, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{objective}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {course.requirements && (
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
                      <ul className="space-y-2">
                        {course.requirements.map((req, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {course.included && (
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Included</h2>
                      <ul className="space-y-2">
                        {course.included.map((item, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'curriculum' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {course.type === 'online' ? 'Course Curriculum' : 'Workshop Schedule'}
                  </h2>
                  <div className="space-y-4">
                    {course.modules?.map((module, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>{module.lessons} lessons</span>
                            <span>{module.duration}</span>
                          </div>
                        </div>
                      </div>
                    )) || course.schedule?.map((day, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{day.day}</h3>
                        <ul className="space-y-1">
                          {day.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="text-gray-700">• {topic}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'instructor' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Meet Your Instructor</h2>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      <img
                        src={course.instructor.image}
                        alt={course.instructor.name}
                        className="w-20 h-20 rounded-full"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900">{course.instructor.name}</h3>
                        <p className="text-blue-600 font-medium mb-3">{course.instructor.credentials}</p>
                        <p className="text-gray-700">{course.instructor.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'faq' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {course.faqs?.map((faq, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    <span>Certificate of Completion</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Download className="h-5 w-5 text-blue-600" />
                    <span>Downloadable Resources</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span>Community Access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-blue-600" />
                    <span>Instructor Support</span>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Share this course</h4>
                  <div className="flex space-x-2">
                    <button className="bg-blue-600 text-white p-2 rounded">
                      <span className="text-sm">FB</span>
                    </button>
                    <button className="bg-blue-400 text-white p-2 rounded">
                      <span className="text-sm">TW</span>
                    </button>
                    <button className="bg-blue-700 text-white p-2 rounded">
                      <span className="text-sm">LI</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CourseDetailPage;