import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MessageSquare, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl">VersaTrain Academy</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering individuals through comprehensive skill development in graphic design, 
              technology, and personal growth. Learn online or in-person with expert instructors.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1Nmvxus4W5/" target='_blank' className="text-gray-300 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/VersaTrain_A?t=G5YGWGrfSDKcS--WC8C4rQ&s=09" target='_blank' className="text-gray-300 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/versatrain_academy?igsh=MTJleGthMm9ucnZ5OA==" target='_blank' className="text-gray-300 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" target='_blank' className="text-gray-300 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</Link></li>
              {/* <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-white transition-colors">Partnerships</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+234 814 609 6468</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">versatrainacademy@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">WhatsApp Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 VersaTrain Academy. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;