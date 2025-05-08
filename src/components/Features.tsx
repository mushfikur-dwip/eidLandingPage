import React from 'react';
import { BookOpen, AlignCenterVertical as Certificate, MessageSquare, Clock, Smartphone, Download, Globe, HeartHandshake } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Expert-Led Content",
      description: "All courses are created by industry experts and scholars with deep domain knowledge."
    },
    {
      icon: <Certificate className="h-6 w-6" />,
      title: "Certification",
      description: "Receive a verified certificate upon completion to showcase your new skills."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Community Support",
      description: "Join our vibrant learning community and interact with fellow students and instructors."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Lifetime Access",
      description: "Pay once and access your course content forever, including all future updates."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Learning",
      description: "Learn on the go with our mobile-friendly platform accessible on any device."
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Downloadable Resources",
      description: "Access additional learning materials, worksheets, and resources for offline study."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multilingual Subtitles",
      description: "Video content includes subtitles in multiple languages for global accessibility."
    },
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: "Eid Charity Initiative",
      description: "10% of all course purchases during Eid season go to educational charities."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features That Set Us Apart</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform offers a unique learning experience with features designed to maximize your educational journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;