import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqItems: FaqItem[] = [
    {
      question: "How long do I have access to the courses?",
      answer: "You have lifetime access to all purchased courses. Once you enroll, you can access the course content indefinitely, including any future updates to the material."
    },
    {
      question: "Are the Eid discounts available year-round?",
      answer: "No, our Eid special discounts are limited-time offers available during the Eid celebration period. These are our most significant discounts of the year, so it's the best time to enroll in our courses."
    },
    {
      question: "Can I switch between different courses?",
      answer: "Yes, with our Premium and Family plans, you can access all courses on our platform and switch between them as you wish. The Starter plan provides access to one course of your choice."
    },
    {
      question: "Are the certificates recognized professionally?",
      answer: "Our certificates verify your course completion and acquired skills. While they are not accredited by formal educational institutions, many employers value the practical skills and knowledge demonstrated by completing our comprehensive courses."
    },
    {
      question: "Can I download the course content for offline viewing?",
      answer: "Yes, Premium and Family plan subscribers can download course videos and materials for offline viewing. This feature is especially useful for learning on the go or in areas with limited internet connectivity."
    },
    {
      question: "What if I'm not satisfied with a course?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with your purchase, you can request a full refund within 30 days of enrollment, no questions asked."
    },
    {
      question: "Do you offer courses in languages other than English?",
      answer: "Currently, most of our courses are taught in English, but many include subtitles in multiple languages including Arabic, Urdu, Turkish, French, and Spanish. We're continually expanding our multilingual content offerings."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-emerald-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our courses, pricing, and special Eid offers.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto divide-y divide-gray-200 border-t border-b border-gray-200">
          {faqItems.map((item, index) => (
            <div key={index} className="py-5">
              <button
                className="flex w-full justify-between items-center text-left focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="text-lg font-medium text-gray-800">{item.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              <div 
                className={`mt-2 transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="bg-white text-emerald-600 border border-emerald-200 px-6 py-2 rounded-full hover:shadow-md hover:border-emerald-300 transition-all font-medium">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;