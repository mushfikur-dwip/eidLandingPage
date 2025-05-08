import React from 'react';
import { Moon, Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Moon className="h-8 w-8 text-emerald-500 mr-2" />
              <span className="text-xl font-bold text-white">EidCourses</span>
            </div>
            <p className="mb-4">
              Empowering minds through quality education with a focus on Islamic knowledge and skills.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Home</a></li>
              <li><a href="#courses" className="hover:text-emerald-500 transition-colors">Courses</a></li>
              <li><a href="#pricing" className="hover:text-emerald-500 transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-emerald-500 transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-emerald-500 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Course Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Quranic Studies</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Islamic Art</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Islamic Finance</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Cultural Cooking</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Arabic Language</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>support@eidcourses.com</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-white font-medium mb-2">Subscribe to Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 text-white rounded-l-lg px-4 py-2 flex-grow focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-r-lg hover:bg-emerald-700 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-sm text-center">
          <p className="mb-2">
            © {new Date().getFullYear()} EidCourses. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;