import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CountdownTimer from './components/CountdownTimer';
import CourseShowcase from './components/CourseShowcase';
import Features from './components/Features';
import BonusStrip from './components/BonusStrip';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Checkout from './components/Checkout';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Eid Special Courses - Learn & Celebrate";
    
    // Add favicon
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.setAttribute("href", "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🌙</text></svg>");
    }
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-br from-emerald-50 to-purple-50">
      <Navbar />
      <main>
        <Hero />
        <CountdownTimer />
        <CourseShowcase />
        <Features />
        <BonusStrip />
        <Testimonials />
        <Pricing />
        <Faq />
        <Checkout />
      </main>
      <Footer />
    </div>
  );
}

export default App;