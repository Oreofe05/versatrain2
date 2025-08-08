// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Calendar, User, Clock, Tag, Search, TrendingUp, BookOpen, Users } from 'lucide-react';

// const BlogPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');

//   const categories = [
//     { id: 'all', name: 'All Posts', count: 24 },
//     { id: 'design', name: 'Design', count: 8 },
//     { id: 'technology', name: 'Technology', count: 7 },
//     { id: 'career', name: 'Career Development', count: 6 },
//     { id: 'learning', name: 'Learning Tips', count: 3 }
//   ];

  
//   const featuredPost = {
//     id: 1,
//     title: 'The Future of Remote Work: Skills You Need to Thrive in 2025',
//     excerpt: 'Discover the essential skills and strategies for succeeding in the remote work landscape, from technical proficiency to soft skills that matter most.',
//     image: 'https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg',
//     author: 'Sarah Mitchell',
//     authorImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
//     date: 'January 15, 2025',
//     readTime: '8 min read',
//     category: 'career',
//     featured: true
//   };

//   const blogPosts = [
//     {
//       id: 2,
//       title: 'Mastering Design Systems: A Complete Guide for 2025',
//       excerpt: 'Learn how to create and maintain effective design systems that improve consistency and efficiency across your design projects.',
//       image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
//       author: 'Elena Rodriguez',
//       authorImage: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
//       date: 'January 12, 2025',
//       readTime: '12 min read',
//       category: 'design'
//     },
//     {
//       id: 3,
//       title: 'Python vs JavaScript: Which Language Should You Learn First?',
//       excerpt: 'A comprehensive comparison of Python and JavaScript to help you choose the right programming language for your career goals.',
//       image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
//       author: 'Marcus Johnson',
//       authorImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
//       date: 'January 10, 2025',
//       readTime: '10 min read',
//       category: 'technology'
//     },
//     {
//       id: 4,
//       title: 'Building Confidence as a New Leader: Practical Strategies',
//       excerpt: 'Actionable tips and techniques for developing leadership confidence and effectively managing teams in your new role.',
//       image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
//       author: 'David Chen',
//       authorImage: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
//       date: 'January 8, 2025',
//       readTime: '7 min read',
//       category: 'career'
//     },
//     {
//       id: 5,
//       title: 'The Art of Effective Learning: How to Retain Information Better',
//       excerpt: 'Science-backed techniques and strategies to improve your learning efficiency and information retention.',
//       image: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg',
//       author: 'Dr. Sarah Mitchell',
//       authorImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
//       date: 'January 5, 2025',
//       readTime: '9 min read',
//       category: 'learning'
//     },
//     {
//       id: 6,
//       title: 'UI/UX Trends That Will Dominate 2025',
//       excerpt: 'Stay ahead of the curve with the latest user interface and user experience design trends shaping the digital landscape.',
//       image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
//       author: 'Elena Rodriguez',
//       authorImage: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
//       date: 'January 3, 2025',
//       readTime: '11 min read',
//       category: 'design'
//     },
//     {
//       id: 7,
//       title: 'Machine Learning for Beginners: Your First Steps',
//       excerpt: 'A beginner-friendly introduction to machine learning concepts, tools, and resources to start your AI journey.',
//       image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
//       author: 'Marcus Johnson',
//       authorImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
//       date: 'December 30, 2024',
//       readTime: '15 min read',
//       category: 'technology'
//     },
//     {
//       id: 8,
//       title: 'Networking Strategies for Introverts: Building Professional Connections',
//       excerpt: 'Practical networking approaches tailored for introverted professionals looking to expand their career opportunities.',
//       image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
//       author: 'David Chen',
//       authorImage: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
//       date: 'December 28, 2024',
//       readTime: '6 min read',
//       category: 'career'
//     },
//     {
//       id: 9,
//       title: 'Creating Compelling Brand Identities: A Designer\'s Guide',
//       excerpt: 'Step-by-step process for developing memorable and effective brand identities that resonate with target audiences.',
//       image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
//       author: 'Elena Rodriguez',
//       authorImage: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
//       date: 'December 25, 2024',
//       readTime: '13 min read',
//       category: 'design'
//     }
//   ];

//   const filteredPosts = blogPosts.filter(post => {
//     const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
//     const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="pt-16"
//     >
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             className="text-center"
//           >
//             <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog & Resources</h1>
//             <p className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto">
//               Insights, tutorials, and industry trends to accelerate your learning journey
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Search and Filters */}
//       <section className="py-12 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
//             {/* Search */}
//             <div className="relative flex-1 max-w-md">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search articles..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {/* Categories */}
//             <div className="flex flex-wrap gap-2">
//               {categories.map(category => (
//                 <button
//                   key={category.id}
//                   onClick={() => setSelectedCategory(category.id)}
//                   className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//                     selectedCategory === category.id
//                       ? 'bg-blue-600 text-white'
//                       : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
//                   }`}
//                 >
//                   {category.name} ({category.count})
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Post */}
//       <section className="py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             className="bg-white rounded-xl shadow-lg overflow-hidden"
//           >
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
//               <div className="relative">
//                 <img
//                   src={featuredPost.image}
//                   alt={featuredPost.title}
//                   className="w-full h-80 lg:h-full object-cover"
//                 />
//                 <div className="absolute top-4 left-4">
//                   <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
//                     Featured
//                   </span>
//                 </div>
//               </div>
//               <div className="p-8 lg:p-12 flex flex-col justify-center">
//                 <div className="flex items-center space-x-2 mb-4">
//                   <Tag className="h-4 w-4 text-blue-600" />
//                   <span className="text-blue-600 font-medium capitalize">{featuredPost.category}</span>
//                 </div>
//                 <h2 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
//                 <p className="text-lg text-gray-600 mb-6">{featuredPost.excerpt}</p>
//                 <div className="flex items-center space-x-4 mb-6">
//                   <img
//                     src={featuredPost.authorImage}
//                     alt={featuredPost.author}
//                     className="w-10 h-10 rounded-full"
//                   />
//                   <div className="text-sm text-gray-600">
//                     <div className="font-medium text-gray-900">{featuredPost.author}</div>
//                     <div className="flex items-center space-x-4">
//                       <span>{featuredPost.date}</span>
//                       <span>•</span>
//                       <span>{featuredPost.readTime}</span>
//                     </div>
//                   </div>
//                 </div>
//                 <Link
//                   to={`/blog/${featuredPost.id}`}
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2 w-fit"
//                 >
//                   <span>Read Article</span>
//                   <BookOpen className="h-4 w-4" />
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Blog Posts Grid */}
//       <section className="py-12 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredPosts.map((post, index) => (
//               <motion.article
//                 key={post.id}
//                 initial={{ y: 50, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
//               >
//                 <div className="relative">
//                   <img
//                     src={post.image}
//                     alt={post.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
//                       {post.category}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
//                     {post.title}
//                   </h3>
//                   <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
//                   <div className="flex items-center space-x-3 mb-4">
//                     <img
//                       src={post.authorImage}
//                       alt={post.author}
//                       className="w-8 h-8 rounded-full"
//                     />
//                     <div className="text-sm text-gray-600">
//                       <div className="font-medium text-gray-900">{post.author}</div>
//                       <div className="flex items-center space-x-2">
//                         <span>{post.date}</span>
//                         <span>•</span>
//                         <span>{post.readTime}</span>
//                       </div>
//                     </div>
//                   </div>

//                   <Link
//                     to={`/blog/${post.id}`}
//                     className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
//                   >
//                     Read More →
//                   </Link>
//                 </div>
//               </motion.article>
//             ))}
//           </div>

//           {filteredPosts.length === 0 && (
//             <div className="text-center py-12">
//               <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
//               <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
//               <p className="text-gray-600">Try adjusting your search or filter criteria</p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Newsletter CTA */}
//       <section className="py-20 bg-blue-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-center"
//           >
//             <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
//             <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
//               Get the latest articles, tutorials, and industry insights delivered to your inbox
//             </p>
//             <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
//               <input
//                 type="email"
//                 placeholder="Your email address"
//                 className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//               <button
//                 type="submit"
//                 className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       </section>
//     </motion.div>
//   );
// };

// export default BlogPage;