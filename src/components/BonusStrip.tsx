import React from "react";
import { Gift } from "lucide-react";

const BonusStrip: React.FC = () => {
  const bonuses = [
    "Bundle Eid E-Book Collection",
    "30-Days Money Back Guarantee",
    "Exclusive Webinar Access",
    "2 Years Free Updates",
    "Private Community Access",
    "Course Completion Certificate",
    "1-on-1 Feedback Session",
  ];

  return (
    <section className="py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <div
          className="inline-flex whitespace-nowrap animate-scroll"
          style={{ width: "fit-content" }}
        >
          {[...bonuses, ...bonuses].map((bonus, index) => (
            <div key={index} className="flex items-center px-8">
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
