import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera, Award, Users, Calendar } from 'lucide-react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'training', name: 'Training Sessions' },
    { id: 'graduation', name: 'Graduations' },
    { id: 'workshops', name: 'Workshops' },
    { id: 'events', name: 'Events' },
    { id: 'facilities', name: 'Facilities' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      title: 'Leadership Workshop Session',
      description: 'Students engaging in interactive leadership exercises',
      category: 'training',
      date: 'January 2025'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      title: 'Graphic Design Lab',
      description: 'Students working on design projects in our modern computer lab',
      category: 'training',
      date: 'December 2024'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      title: 'Graduation Ceremony 2024',
      description: 'Proud graduates celebrating their achievements',
      category: 'graduation',
      date: 'December 2024'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
      title: 'Web Development Bootcamp',
      description: 'Intensive coding session with expert instructors',
      category: 'workshops',
      date: 'November 2024'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg',
      title: 'Student Presentation',
      description: 'Final project presentations by our talented students',
      category: 'events',
      date: 'November 2024'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      title: 'Modern Classroom',
      description: 'State-of-the-art learning environment',
      category: 'facilities',
      date: 'October 2024'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg',
      title: 'Remote Learning Setup',
      description: 'Professional video recording studio for online courses',
      category: 'facilities',
      date: 'October 2024'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      title: 'One-on-One Mentoring',
      description: 'Personalized guidance from industry experts',
      category: 'training',
      date: 'September 2024'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      title: 'Team Building Workshop',
      description: 'Corporate training session for leadership development',
      category: 'workshops',
      date: 'September 2024'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      title: 'Certificate Presentation',
      description: 'Instructor presenting completion certificates',
      category: 'graduation',
      date: 'August 2024'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg',
      title: 'Digital Marketing Seminar',
      description: 'Interactive session on social media strategies',
      category: 'events',
      date: 'August 2024'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      title: 'Python Programming Class',
      description: 'Data science workshop in progress',
      category: 'training',
      date: 'July 2024'
    }
  ];

  const achievements = [
    { icon: <Users className="h-8 w-8" />, number: '5,000+', label: 'Students Trained' },
    { icon: <Award className="h-8 w-8" />, number: '500+', label: 'Certificates Awarded' },
    { icon: <Calendar className="h-8 w-8" />, number: '100+', label: 'Events Hosted' },
    { icon: <Camera className="h-8 w-8" />, number: '50+', label: 'Workshops Conducted' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Capturing moments of learning, growth, and achievement at VersaTrain Academy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievements Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-blue-600 shadow-lg">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => openLightbox(image)}
              >
                <div className="relative aspect-square">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No images found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <div className="bg-white rounded-lg overflow-hidden max-h-[90vh] flex flex-col">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[70vh] object-contain bg-gray-100"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600 mb-2">{selectedImage.description}</p>
                <p className="text-sm text-gray-500">{selectedImage.date}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Be Part of Our Story?</h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Join our community of learners and create your own success story
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Courses
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default GalleryPage;