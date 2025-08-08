import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Play, 
  CheckCircle, 
  Download, 
  Award, 
  BarChart3,
  Clock,
  User,
  Settings,
  LogOut
} from 'lucide-react';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('courses');

  const enrolledCourses = [
    {
      id: 1,
      title: 'Complete Graphic Design Mastery',
      progress: 65,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      totalLessons: 49,
      completedLessons: 32,
      nextLesson: 'Advanced Layer Techniques',
      timeRemaining: '4 weeks',
      certificate: false
    },
    {
      id: 2,
      title: 'Full-Stack Web Development',
      progress: 30,
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
      totalLessons: 68,
      completedLessons: 20,
      nextLesson: 'React Hooks Deep Dive',
      timeRemaining: '10 weeks',
      certificate: false
    },
    {
      id: 3,
      title: 'Personal Branding & Leadership',
      progress: 100,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      totalLessons: 25,
      completedLessons: 25,
      nextLesson: 'Completed',
      timeRemaining: 'Completed',
      certificate: true
    }
  ];

  const recentActivity = [
    { course: 'Graphic Design Mastery', lesson: 'Color Theory Fundamentals', date: '2 hours ago', type: 'completed' },
    { course: 'Web Development', lesson: 'JavaScript ES6 Features', date: '1 day ago', type: 'completed' },
    { course: 'Personal Branding', lesson: 'LinkedIn Optimization', date: '3 days ago', type: 'completed' },
    { course: 'Graphic Design Mastery', lesson: 'Typography Basics', date: '5 days ago', type: 'completed' }
  ];

  const achievements = [
    { title: 'First Course Completed', icon: '🎉', date: 'Jan 15, 2025' },
    { title: 'Speed Learner', icon: '⚡', date: 'Jan 10, 2025' },
    { title: 'Perfect Attendance', icon: '📅', date: 'Jan 5, 2025' },
    { title: 'Community Helper', icon: '🤝', date: 'Dec 28, 2024' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 min-h-screen bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, John!</h1>
          <p className="text-gray-600 mt-2">Continue your learning journey</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Courses Enrolled</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Hours Learned</p>
                <p className="text-2xl font-bold text-gray-900">87</p>
              </div>
              <Clock className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">1</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Certificates</p>
                <p className="text-2xl font-bold text-gray-900">1</p>
              </div>
              <Award className="h-8 w-8 text-yellow-600" />
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-white p-1 rounded-lg shadow-sm">
          <button
            onClick={() => setActiveTab('courses')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'courses'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <BookOpen className="h-4 w-4" />
            <span>My Courses</span>
          </button>
          <button
            onClick={() => setActiveTab('progress')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'progress'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <BarChart3 className="h-4 w-4" />
            <span>Progress</span>
          </button>
          <button
            onClick={() => setActiveTab('certificates')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'certificates'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <Award className="h-4 w-4" />
            <span>Certificates</span>
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'profile'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <User className="h-4 w-4" />
            <span>Profile</span>
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'courses' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">My Courses</h2>
              <div className="space-y-6">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-start space-x-4">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-24 h-24 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                          <div className="flex items-center space-x-4 mb-4">
                            <span className="text-sm text-gray-600">
                              {course.completedLessons}/{course.totalLessons} lessons
                            </span>
                            <span className="text-sm text-gray-600">{course.timeRemaining}</span>
                          </div>
                          
                          <div className="mb-4">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm text-gray-600">Progress</span>
                              <span className="text-sm font-medium text-gray-900">{course.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              {course.progress === 100 ? (
                                <span className="text-green-600 font-medium">✓ Completed</span>
                              ) : (
                                <span className="text-gray-600">Next: {course.nextLesson}</span>
                              )}
                            </div>
                            <div className="flex space-x-2">
                              {course.progress === 100 && course.certificate && (
                                <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-1">
                                  <Award className="h-4 w-4" />
                                  <span>Certificate</span>
                                </button>
                              )}
                              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-1">
                                <Play className="h-4 w-4" />
                                <span>{course.progress === 100 ? 'Review' : 'Continue'}</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">{activity.lesson}</p>
                        <p className="text-sm text-gray-600">{activity.course}</p>
                        <p className="text-xs text-gray-400">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Achievements</h3>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-2xl">{achievement.icon}</span>
                      <div>
                        <p className="font-medium text-gray-900">{achievement.title}</p>
                        <p className="text-sm text-gray-600">{achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Progress</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map((course) => (
                <div key={course.id} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <div className="mb-2">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    {course.completedLessons} of {course.totalLessons} lessons completed
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'certificates' && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">My Certificates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses
                .filter(course => course.certificate)
                .map((course) => (
                  <div key={course.id} className="border border-gray-200 rounded-lg p-6 text-center">
                    <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">Completed with Excellence</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-1 mx-auto">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  </div>
                ))}
              {enrolledCourses.filter(course => course.certificate).length === 0 && (
                <div className="col-span-full text-center py-12">
                  <Award className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No certificates yet</h3>
                  <p className="text-gray-600">Complete your courses to earn certificates</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Settings</h2>
            <div className="max-w-2xl">
              <div className="flex items-center space-x-6 mb-8">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                  alt="Profile"
                  className="w-24 h-24 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">John Doe</h3>
                  <p className="text-gray-600">john.doe@example.com</p>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Change Photo
                  </button>
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      defaultValue="John"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bio
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about yourself..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default StudentDashboard;