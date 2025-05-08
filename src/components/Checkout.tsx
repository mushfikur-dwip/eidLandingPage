import React, { useState } from 'react';
import { Check, AlertCircle } from 'lucide-react';

const Checkout: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('premium');
  
  const plans = [
    { id: 'starter', name: 'Starter', price: 149, originalPrice: 249 },
    { id: 'premium', name: 'Premium', price: 399, originalPrice: 599 },
    { id: 'family', name: 'Family', price: 599, originalPrice: 999 }
  ];
  
  const benefits = [
    "Exclusive Eid Bonuses Worth $450",
    "30-Day Money-Back Guarantee",
    "Instant Access After Purchase",
    "Secure Payment Processing"
  ];

  return (
    <section id="checkout" className="py-16 md:py-24 bg-gradient-to-br from-emerald-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-white bg-opacity-20 text-white rounded-full text-sm font-medium mb-4">
            Limited Time Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Claim Your Eid Special Discount</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto">
            Join thousands of students who have already taken advantage of our special Eid promotion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-6">Select Your Plan</h3>
              
              <div className="space-y-4 mb-8">
                {plans.map((plan) => (
                  <div 
                    key={plan.id}
                    className={`border rounded-xl p-4 cursor-pointer transition-all ${
                      selectedPlan === plan.id 
                        ? 'border-emerald-400 bg-white bg-opacity-10' 
                        : 'border-white border-opacity-20 hover:border-white hover:border-opacity-40'
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                          selectedPlan === plan.id 
                            ? 'border-emerald-400 bg-emerald-400' 
                            : 'border-white'
                        }`}>
                          {selectedPlan === plan.id && (
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                          )}
                        </div>
                        <span className="font-medium">{plan.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="flex items-end justify-end">
                          <span className="text-xl font-bold">${plan.price}</span>
                          <span className="ml-2 text-sm line-through text-emerald-200">${plan.originalPrice}</span>
                        </div>
                        <span className="text-xs text-emerald-200">Yearly plan</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mb-8">
                <h4 className="font-medium mb-3">What you'll get:</h4>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-emerald-400 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-6 flex items-center">
                <AlertCircle className="h-5 w-5 text-amber-400 mr-3 flex-shrink-0" />
                <p className="text-sm">
                  This special Eid offer expires soon. Enroll now to lock in your discount!
                </p>
              </div>
              
              <button className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-emerald-900 py-3 rounded-lg font-bold hover:from-amber-500 hover:to-amber-600 transition-colors">
                Secure Your Spot Now
              </button>
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 mb-6">
              <h3 className="text-2xl font-bold mb-6">Join Our Community</h3>
              <p className="mb-4">
                When you enroll today, you'll gain access to:
              </p>
              
              <ul className="space-y-4 mb-6">
                <li className="flex">
                  <div className="h-10 w-10 rounded-full bg-emerald-400 text-emerald-900 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-medium text-lg">Full Course Library</h4>
                    <p className="text-emerald-100 text-sm">All current and future courses with Premium & Family plans</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="h-10 w-10 rounded-full bg-emerald-400 text-emerald-900 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-medium text-lg">Supportive Community</h4>
                    <p className="text-emerald-100 text-sm">Connect with fellow learners and instructors worldwide</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="h-10 w-10 rounded-full bg-emerald-400 text-emerald-900 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-medium text-lg">Special Eid Bonuses</h4>
                    <p className="text-emerald-100 text-sm">Exclusive digital resources and templates only available during Eid</p>
                  </div>
                </li>
              </ul>
              
              <div className="bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg p-4 text-purple-900">
                <p className="font-medium">
                  "These courses have transformed how I understand and practice my faith. The knowledge I've gained is priceless." — Amina Syed
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center">
                <img 
                  src="https://placehold.co/60x30/FFFFFF/10B981?text=SSL" 
                  alt="Secure payments"
                  className="h-8 mr-2"
                />
                <span>Secure<br />Payment</span>
              </div>
              <div className="flex items-center">
                <img 
                  src="https://placehold.co/60x30/FFFFFF/10B981?text=30d" 
                  alt="30-day guarantee"
                  className="h-8 mr-2"
                />
                <span>30-Day<br />Guarantee</span>
              </div>
              <div className="flex items-center">
                <img 
                  src="https://placehold.co/60x30/FFFFFF/10B981?text=24/7" 
                  alt="24/7 support"
                  className="h-8 mr-2"
                />
                <span>24/7<br />Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;