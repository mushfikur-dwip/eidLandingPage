import React from "react";
import { Star } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-3 md:pt-36 md:pb-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 md:right-24 animate-float-slow">
        <Star className="h-10 w-10 text-amber-400 opacity-70" />
      </div>
      <div className="absolute bottom-20 left-10 animate-float">
        <Star className="h-6 w-6 text-amber-400 opacity-60" />
      </div>
      <div className="absolute top-40 left-5 md:left-32 animate-float-delayed">
        <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mx-auto">
          {/* <div className="inline-block mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
              <span className="mr-1">✨</span> Eid-ul-Adha Special 2025
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-emerald-700 via-emerald-600 to-purple-700 bg-clip-text text-transparent">
            Celebrate Eid with Knowledge that Transforms
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Join our special Eid collection of courses designed to enrich your mind and elevate your skills. Limited-time festive discounts available now!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all">
              Explore Courses
            </button>
            <button className="bg-white text-emerald-600 border border-emerald-200 px-8 py-3 rounded-full text-lg font-medium hover:shadow-md hover:border-emerald-300 transition-all">
              View Eid Offers
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img 
                      src={`https://placehold.co/200x200/9CA3AF/FFFFFF?text=${i}`} 
                      alt={`Student ${i}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span>Joined by 2,500+ students</span>
            </div>
            
            <div className="flex items-center">
              <div className="flex items-center text-amber-500 mr-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span>4.9/5 from 350+ reviews</span>
            </div>
          </div> */}
          <img
            src="https://learningbangladesh.com/wp-content/uploads/2025/06/facebook-cover-3-1x.jpg"
            alt="Hero"
            className="w-[1900px] h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
