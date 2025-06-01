import React, { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = 
    [
      {
        id: 1,
        name: "Debojit Saha",
        role: "Learner",
        image: "https://placehold.co/300x300/10B981/FFFFFF?text=DS",
        rating: 5,
        text: "This course is an overall summary of Videography, Canva, Premiere Pro, Midjourney, OpenAI, and many more. The new way of thinking by using ChatGPT will help you in every aspect of life. You will feel the dedication of Sabbir Bhai when you find out 2h+ tutorial video on Premiere Pro, 45min+ full dedicated LinkedIn video when the course is for Midjourney and ChatGPT. This course is so encouraging.",
      },
      {
        id: 2,
        name: "Mohammed Yeasin Arafat",
        role: "Learner",
        image: "https://placehold.co/300x300/10B981/FFFFFF?text=MYA",
        rating: 5,
        text: "Simply excellent courses conducted by Sabbir Bhai. He has presented his nature very easily, making it easy for anyone to learn. Even a non-tech-savvy person can learn the course with ease. Most importantly, he has shown so many important & tricky issues in a very simple way. I wish all the very best to Instructor Sabbir Bhai.",
      },
      {
        id: 3,
        name: "Saiful Islam",
        role: "Learner",
        image: "https://placehold.co/300x300/10B981/FFFFFF?text=SI",
        rating: 5,
        text: "চ্যাটজিপিটি আগেও জানতাম তবে, সিম্পল জিনিস টাও যে অসাধারণ ভাবে করা যায় তা সাব্বির ভাই দারুণ ভাবে বুঝিয়েছেন। চ্যাটজিপিটি ফ্রি ভার্সন ব্যবহার করেও আপনি দারুণ ভাবে আপনার প্রোডাক্টিভি বাড়াতে পারেন। মডিউল টাও দারুণ ভাবে সাজিয়েছেন, প্রতিটা কন্টেন্ট প্রতিটা মানুষের জন্য গুরুত্বপূর্ণ। ফ্রিল্যান্স বা জব হোল্ডার সবার জন্যই এই কোর্স বেস্ট চয়েজ। মেন্টর হিসাবে চ্যাটজিপিটি হতে পারে আপনার সব থেকে কাছের বন্ধু।",
      },
      {
        id: 4,
        name: "Abdullah Nur",
        role: "Digital Marketing Student",
        image: "https://placehold.co/300x300/10B981/FFFFFF?text=AN",
        rating: 5,
        text: "This course really opened my eyes to how ChatGPT can be used to increase productivity. The methods shown are easy to apply, and Sabbir Bhai’s teaching style is really engaging. I recommend this course to anyone looking to enhance their skills.",
      },
    ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);

  const goToPrevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, [testimonials.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNextSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      goToNextSlide();
    } else if (diff < -50) {
      goToPrevSlide();
    }

    setTouchStart(null);
  };

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-gradient-to-b from-emerald-50 to-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            Student Voices
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Students Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read about the experiences of students who have transformed their
            knowledge and skills with our courses.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-lg p-8 my-4 md:p-10">
                    <div className="flex items-center mb-6">
                      <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                        <div className="flex mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < testimonial.rating
                                  ? "text-amber-500 fill-amber-500"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.text}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-emerald-600 hover:text-emerald-700 focus:outline-none z-10 md:-left-6"
            onClick={goToPrevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-emerald-600 hover:text-emerald-700 focus:outline-none z-10 md:-right-6"
            onClick={goToNextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-emerald-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
