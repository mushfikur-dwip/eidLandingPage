import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center text-xl font-bold bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent">
            <img
              className="  w-[125px] lg:w-[185px] mr-2"
              src="https://learningbangladesh.com/wp-content/uploads/2024/06/lb_english.png.webp"
              alt=""
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("courses")}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Courses
            </button>
            {/* <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-emerald-600 transition-colors">
              Features
            </button> */}
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Bundles
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("courses")}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-lg mt-2 p-4 shadow-lg absolute left-4 right-4 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("courses")}
                className="text-gray-700 hover:text-emerald-600 transition-colors py-2"
              >
                Courses
              </button>
              {/* <button
                onClick={() => scrollToSection("features")}
                className="text-gray-700 hover:text-emerald-600 transition-colors py-2"
              >
                Features
              </button> */}
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-gray-700 hover:text-emerald-600 transition-colors py-2"
              >
                Bundles
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-700 hover:text-emerald-600 transition-colors py-2"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-700 hover:text-emerald-600 transition-colors py-2"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("checkout")}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all"
              >
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
