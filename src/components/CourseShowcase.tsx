import React from 'react';
import { BookOpen, Clock, Award, Users } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  level: string;
  students: number;
  price: number;
  originalPrice: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  image,
  category,
  duration,
  level,
  students,
  price,
  originalPrice
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {category}
        </div>
        {originalPrice > price && (
          <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            Eid Special
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        
        <div className="grid grid-cols-2 gap-2 text-sm mb-4">
          <div className="flex items-center text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Award className="h-4 w-4 mr-1" />
            <span>{level}</span>
          </div>
          <div className="flex items-center text-gray-500 col-span-2">
            <Users className="h-4 w-4 mr-1" />
            <span>{students.toLocaleString()} students</span>
          </div>
        </div>
      </div>
      
      <div className="px-6 pb-6 mt-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-end">
            <span className="text-2xl font-bold text-emerald-600">${price}</span>
            {originalPrice > price && (
              <span className="text-sm text-gray-500 line-through ml-2">${originalPrice}</span>
            )}
          </div>
          {originalPrice > price && (
            <span className="text-amber-600 text-sm font-medium">
              {Math.round((1 - price / originalPrice) * 100)}% off
            </span>
          )}
        </div>
        <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-2 rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all font-medium">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

const CourseShowcase: React.FC = () => {
  const courses = [
    {
      title: "Quranic Arabic Mastery",
      description: "Learn to read, understand and interpret the Quran in its original language with confidence.",
      image: "https://placehold.co/800x600/10B981/FFFFFF?text=Quranic+Arabic",
      category: "Language",
      duration: "8 weeks",
      level: "Beginner",
      students: 1250,
      price: 79,
      originalPrice: 129
    },
    {
      title: "Islamic Calligraphy Art",
      description: "Master the beautiful art of Arabic calligraphy with traditional and modern techniques.",
      image: "https://placehold.co/800x600/8B5CF6/FFFFFF?text=Islamic+Calligraphy",
      category: "Art",
      duration: "6 weeks",
      level: "All Levels",
      students: 875,
      price: 89,
      originalPrice: 149
    },
    {
      title: "Eid Cooking Masterclass",
      description: "Learn to prepare traditional Eid dishes from different Islamic cultures around the world.",
      image: "https://placehold.co/800x600/F59E0B/FFFFFF?text=Eid+Cooking",
      category: "Culinary",
      duration: "4 weeks",
      level: "Intermediate",
      students: 2150,
      price: 69,
      originalPrice: 119
    },
    {
      title: "Islamic Finance Fundamentals",
      description: "Understand Shariah-compliant investing and financial principles for ethical wealth management.",
      image: "https://placehold.co/800x600/3B82F6/FFFFFF?text=Islamic+Finance",
      category: "Finance",
      duration: "10 weeks",
      level: "Advanced",
      students: 950,
      price: 99,
      originalPrice: 179
    }
  ];

  return (
    <section id="courses" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
            Featured Courses
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Eid Special Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated courses designed to enrich your knowledge and skills during this blessed season.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700">
            <span className="mr-2">View All Courses</span>
            <BookOpen className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseShowcase;