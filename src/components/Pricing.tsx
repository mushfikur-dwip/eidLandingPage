import React, { useState } from 'react';
import { Check, AlertCircle } from 'lucide-react';

interface PricingOption {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  features: string[];
  isPopular: boolean;
  label?: string;
}

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  
  const pricingOptions: PricingOption[] = [
    {
      id: 'starter',
      name: 'Starter',
      price: billingCycle === 'monthly' ? 19 : 149,
      originalPrice: billingCycle === 'monthly' ? 29 : 249,
      description: 'Perfect for beginners looking to explore our platform',
      features: [
        'Access to 1 course of your choice',
        'Basic course materials and resources',
        '30-day access to community forum',
        'Email support',
        'Course completion certificate',
      ],
      isPopular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      price: billingCycle === 'monthly' ? 49 : 399,
      originalPrice: billingCycle === 'monthly' ? 79 : 599,
      description: 'Our most popular plan for serious learners',
      features: [
        'Access to all available courses',
        'All premium learning resources',
        'Full community access',
        'Priority support',
        'All certificates and digital badges',
        'Monthly live Q&A sessions',
        'Downloadable course content',
      ],
      isPopular: true,
      label: 'EID SPECIAL'
    },
    {
      id: 'family',
      name: 'Family',
      price: billingCycle === 'monthly' ? 79 : 599,
      originalPrice: billingCycle === 'monthly' ? 129 : 999,
      description: 'Share the gift of knowledge with your loved ones',
      features: [
        'Everything in Premium plan',
        'Up to 5 family member accounts',
        'Personalized learning paths',
        'Family progress dashboard',
        'Dedicated family support specialist',
        'Private family discussion group',
        'Exclusive family workshops',
      ],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
            Eid Special Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Investment in Knowledge</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Special Eid discounts on all plans. Choose the option that best fits your learning goals.
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-full inline-flex">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingCycle === 'monthly' 
                    ? 'bg-white shadow-sm text-gray-800' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${
                  billingCycle === 'yearly' 
                    ? 'bg-white shadow-sm text-gray-800' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setBillingCycle('yearly')}
              >
                <span>Yearly</span>
                <span className="ml-1 bg-emerald-100 text-emerald-800 text-xs py-0.5 px-1.5 rounded-full">
                  Save 40%
                </span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingOptions.map((option) => (
            <div 
              key={option.id}
              className={`border rounded-2xl p-6 md:p-8 relative ${
                option.isPopular 
                  ? 'border-emerald-200 shadow-xl' 
                  : 'border-gray-200 shadow-sm'
              }`}
            >
              {option.isPopular && (
                <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
                  <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold px-4 py-1 rounded-full inline-block shadow-sm">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              {option.label && (
                <div className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-md transform rotate-12 shadow-sm">
                  {option.label}
                </div>
              )}
              
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{option.name}</h3>
                <p className="text-gray-600 text-sm">{option.description}</p>
              </div>
              
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold text-gray-800">${option.price}</span>
                {option.originalPrice > option.price && (
                  <span className="text-gray-500 line-through ml-2 mb-1">${option.originalPrice}</span>
                )}
                <span className="text-gray-500 ml-2 mb-1">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {option.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  option.isPopular
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700'
                    : 'border border-emerald-500 text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                {option.isPopular ? 'Get Started Now' : 'Choose Plan'}
              </button>
              
              {option.isPopular && (
                <div className="mt-4 text-center">
                  <span className="flex justify-center items-center text-xs text-amber-600">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    Limited time Eid offer
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto text-sm">
            All plans come with a 30-day money-back guarantee. If you're not satisfied with your learning experience, we'll provide a full refund.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;