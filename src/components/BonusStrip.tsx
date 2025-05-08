import React, { useEffect, useRef } from 'react';
import { Gift } from 'lucide-react';

const BonusStrip: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    
    if (scrollWidth <= clientWidth) return;
    
    let scrollPosition = 0;
    const scrollSpeed = 1;
    
    const scroll = () => {
      if (!scrollContainer) return;
      
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.style.transform = `translateX(${-scrollPosition}px)`;
      requestAnimationFrame(scroll);
    };
    
    const animation = requestAnimationFrame(scroll);
    
    return () => cancelAnimationFrame(animation);
  }, []);

  const bonuses = [
    "Free Eid E-Book Collection",
    "30-Day Mentor Support",
    "Exclusive Webinar Access",
    "Digital Eid Greeting Cards",
    "Islamic Art Templates",
    "Private Community Access",
    "Course Completion Certificate",
    "1-on-1 Feedback Session"
  ];

  return (
    <section className="py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <div 
          ref={scrollRef}
          className="inline-flex whitespace-nowrap"
          style={{ 
            willChange: "transform",
            width: "fit-content" 
          }}
        >
          {/* Double the content to create seamless looping */}
          {[...bonuses, ...bonuses].map((bonus, index) => (
            <div 
              key={index} 
              className="flex items-center px-8"
            >
              <Gift className="h-5 w-5 mr-2 flex-shrink-0" />
              <span className="font-medium">{bonus}</span>
              <span className="mx-4 text-amber-200">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusStrip;