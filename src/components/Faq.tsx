import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FaqItem[] = [
    {
      question: "কোর্স কি অনলাইন নাকি অফলাইন?",
      answer: "আমাদের প্রতিটা কোর্স অনলাইন রেকোর্ডেড",
    },
    {
      question: "কোর্সের মেয়াদ কত দিন?",
      answer: "কোর্স এনরোল করার সময় থেকে আগামী ২ বছর",
    },
    {
      question: "আমি কি মোবাইল দিয়ে কোর্স করতে পারব?",
      answer: "জি অবশ্যই আপনি মোবাইল, পিসি, ল্যাপটপ দিয়ে কোর্স করতে পারবেন।",
    },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200 border-t border-b border-gray-200">
          {faqItems.map((item, index) => (
            <div key={index} className="py-5">
              <button
                className="flex w-full justify-between items-center text-left focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="text-lg font-medium font-hind text-gray-800">
                  {item.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              <div
                className={`mt-2 transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 font-hind">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="bg-white text-emerald-600 border border-emerald-200 px-6 py-2 rounded-full hover:shadow-md hover:border-emerald-300 transition-all font-medium">
            Contact Support
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Faq;
