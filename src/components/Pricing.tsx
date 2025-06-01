import React, { useState } from "react";

const courseBundles = [
  {
    title: "ডিজিটাল মার্কেটিং বান্ডেল",
    price: "BDT 1249",
    oldPrice: "BDT 10,999",
    image:
      "https://learningbangladesh.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-11-at-13.55.57_23f9d9ab.jpg.webp",
    features: [
      "Digital Marketing Fundamental",
      "Let's Learn Facebook Ads",
      "Lead Genaration & Automation",
    ],
    link: "https://learningbangladesh.com/checkout/?add-to-cart=117388",
  },
  {
    title: "ক্রিয়েটিভ বান্ডেল অফার",
    price: "BDT 2,499",
    oldPrice: "BDT 11,499",
    image:
      "https://learningbangladesh.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-11-at-13.18.14_bdb062b6.jpg.webp",
    features: [
      "After Effects A to Z",
      "2D Character Rigging After Effects",
      "Passive Income from Content Creation",
    ],
    link: "https://learningbangladesh.com/checkout/?add-to-cart=117389",
  },
  {
    title: "AI কোর্স বান্ডেল অফার",
    price: "BDT 1299",
    oldPrice: "BDT 14,999",
    image:
      "https://learningbangladesh.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-11-at-13.16.34_38ae4c63.jpg.webp",
    features: [
      "Content Creation with AI",
      "Everyday AI 100+ Quick Hacks",
      "Midjourney & ChatGPT",
    ],
    link: "https://learningbangladesh.com/checkout/?add-to-cart=117198",
  },
  {
    title: "ক্যারিয়ার বান্ডেল অফার",
    price: "BDT 999",
    oldPrice: "BDT 8,999",
    image:
      "https://learningbangladesh.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-11-at-13.16.34_6bac14ba.jpg.webp",
    features: [
      "LinkedIn for Everyone",
      "5 Start CV Writing",
      "News Presentation & Anchoring",
    ],
    link: "https://learningbangladesh.com/checkout/?add-to-cart=117190",
  },
];

const ebookBundle = {
  title: "স্পেশাল ই-বুক বান্ডেল অফার",
  price: "BDT 299",
  oldPrice: "BDT 599",
  image:
    "https://learningbangladesh.com/ebook/wp-content/uploads/2025/03/learning-bd-2.jpg",
  features: [
    "চ্যাটজিপিটি প্রম্পট ইঞ্জিনিয়ারিং",
    "৫০+ মার্কেটিং কেইস স্টাডি",
    "৫০টি বিহেভিয়ারাল মার্কেটিং কেইস স্টাডি",
    "চাকরির পাশাপাশি বিজনেজ",
  ],
  link: "https://learningbangladesh.com/ebook/shop/?add-to-cart=8807",
};

const Pricing = () => {
  const [showEbook, setShowEbook] = useState(false);

  return (
    <section id="pricing" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-4">
          Flexible <span className="text-bkash-pink">Bundle</span> Offers
        </h2>
        <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
          Choose the bundles that works best for your learning goals and budget.
        </p>

        <div className="flex justify-center mb-12">
          <div className="pricing-toggle relative inline-flex items-center cursor-pointer">
            <span className="mr-4 text-sm font-medium">Course</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={showEbook}
                onChange={() => setShowEbook(!showEbook)}
              />
              <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-bkash-pink/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-bkash-pink"></div>
            </label>
            <span className="ml-4 text-sm font-medium">eBook</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {showEbook ? (
            <BundleCard {...ebookBundle} />
          ) : (
            courseBundles.map((bundle, index) => (
              <BundleCard key={index} {...bundle} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

type BundleProps = {
  title: string;
  price: string;
  oldPrice: string;
  image: string;
  features: string[];
  link: string;
};

const BundleCard: React.FC<BundleProps> = ({
  title,
  price,
  oldPrice,
  image,
  features,
  link,
}) => (
  <div
    id="pricing"
    className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
  >
    <img src={image} alt={title} className="w-full" />
    <div className="p-6">
      <p className="text-4xl font-bold font-hind mb-2">{price}</p>
      <p className="text-gray-600 mb-6 font-hind">
        টোটাল <del className="text-gray-500 font-hind">{oldPrice}</del>
      </p>
      <h3 className="text-2xl font-semibold font-hind mb-2">{title}</h3>

      <ul className="space-y-3 font-hind mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center">
            <svg
              className="w-5 h-5 text-green-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <a
          href={link}
          className="w-full text-center font-hind bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 lg:px-14 px-6 rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all font-medium"
        >
          ৩টি কোর্সের বান্ডেল কিনুন
        </a>
      </div>
    </div>
  </div>
);

export default Pricing;
