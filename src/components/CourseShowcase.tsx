import React, { useEffect, useState } from "react";
interface Course {
  title: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  level: string;
  students: number;
  price: number;
  originalPrice: number;
  enrollBtn: string;
}

type CourseCardProps = Course;

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  image,
  category,
  price,
  originalPrice,
  enrollBtn,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full transform hover:-translate-y-1">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover " />
        <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
          {category}
        </div>
        {originalPrice > price && (
          <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            Eid Special
          </div>
        )}
      </div>

      <div className="p-6 flex-grow">
        <h3 className="lg:text-xl text-[15px] leading-[1.2] font-bold mb-2 text-gray-800">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      <div className="px-6 pb-6 mt-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-4">
          <div className="flex items-end">
            <span className="text-xl font-bold text-emerald-600">
              BDT {price}
            </span>
            {originalPrice > price && (
              <span className="text-sm text-gray-500 line-through ml-2">
                ${originalPrice}
              </span>
            )}
          </div>
          {originalPrice > price && (
            <span className="text-amber-600 text-[12px] font-medium">
              Up TO 90% off
            </span>
          )}
        </div>
        <div className="flex justify-center">
          <a
            className="w-full text-center  bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 lg:px-14 px-6 rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all font-medium"
            href={enrollBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
};

const CourseShowcase: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Failed to load courses.json", err));
  }, []);

  return (
    <section id="courses" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
            Featured Courses
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Eid Special Collection
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated courses designed to enrich your
            knowledge and skills during this blessed season.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseShowcase;
