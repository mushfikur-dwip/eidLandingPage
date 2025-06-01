import React, { useState, useEffect } from 'react';
import Hero from './Hero';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  // Eid-ul-Adha 2025 date (approximate: June 7, 2025)
  const eidDate = new Date('2025-06-07T00:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = eidDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [eidDate]);

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
  };

  return (
    <section className="mt-20 py-16 bg-gradient-to-r from-emerald-900 to-purple-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <img
          src="https://learningbangladesh.com/wp-content/uploads/2025/06/facebook-cover-3-1x.jpg"
          alt="Eid Sale"
          className="w-full h-auto rounded-lg mb-8 shadow-lg"
          loading="lazy"
          decoding="async"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
          referrerPolicy="no-referrer"
        />
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Eid-ul-Adha 2025 Special Offer
          </h2>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
            Our festive sale ends with the celebration. Don't miss out on these
            limited-time discounts!
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 md:w-28 md:h-28 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white border-opacity-20">
              <span className="text-3xl md:text-5xl font-bold">
                {formatNumber(timeLeft.days)}
              </span>
            </div>
            <span className="mt-2 text-sm md:text-base text-emerald-100">
              Days
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 md:w-28 md:h-28 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white border-opacity-20">
              <span className="text-3xl md:text-5xl font-bold">
                {formatNumber(timeLeft.hours)}
              </span>
            </div>
            <span className="mt-2 text-sm md:text-base text-emerald-100">
              Hours
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 md:w-28 md:h-28 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white border-opacity-20">
              <span className="text-3xl md:text-5xl font-bold">
                {formatNumber(timeLeft.minutes)}
              </span>
            </div>
            <span className="mt-2 text-sm md:text-base text-emerald-100">
              Minutes
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 md:w-28 md:h-28 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white border-opacity-20">
              <span className="text-3xl md:text-5xl font-bold">
                {formatNumber(timeLeft.seconds)}
              </span>
            </div>
            <span className="mt-2 text-sm md:text-base text-emerald-100">
              Seconds
            </span>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => scrollToSection("courses")}
            className="bg-white text-emerald-800 px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all"
          >
            Claim Your Eid Discount
          </button>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;