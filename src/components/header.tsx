import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLocation } from "wouter";


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDataOpen, setIsMobileDataOpen] = useState(false);
  const [location, setLocation] = useLocation();


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-t-4 border-raj-orange">
      <div className="heritage-pattern absolute inset-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Bar */}
        <div className="flex justify-between items-center py-4">
          {/* Logo + Title */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-1">
                <img
                  src="/doitc-logo.png"
                  alt="DOITC Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-cyan-600 government-heading">DOITC Buhana</h1>
                <p className="text-sm text-gray-600">Department of Information Technology & Communication</p>
                <p className="text-xs text-raj-orange font-medium">Government of Rajasthan</p>
              </div>
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex space-x-8 items-center">

            {/* HOME */}
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-raj-orange font-medium transition-colors duration-200"
            >
              Home
            </button>

            {/* Data Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-raj-orange font-medium transition-colors duration-200 flex items-center space-x-1">
                <span>Data</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                              transition-all duration-200">

                <button
                  onClick={() => setLocation("/staffwisegp")}
                  className="
                              flex 
                              items-center 
                              justify-center 
                              px-4 
                              py-2 
                              bg-orange-100 
                              text-raj-orange 
                              font-medium 
                              rounded-xl 
                              whitespace-nowrap
                              hover:bg-orange-200 
                              transition-all 
                              duration-200
                            "
                >
                  Staff wise GP
                </button>

              </div>
            </div>



            {/* OTHER LINKS */}
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-raj-orange font-medium transition-colors duration-200"
            >
              Services
            </button>

            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-raj-orange font-medium transition-colors duration-200"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-raj-orange font-medium transition-colors duration-200"
            >
              Contact
            </button>

          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-raj-orange hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">

              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-raj-orange font-medium transition-colors duration-200 text-left"
              >
                Home
              </button>

              {/* MOBILE DATA DROPDOWN */}
              <div>
                <button
                  onClick={() => setIsMobileDataOpen(!isMobileDataOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-raj-orange font-medium transition-colors duration-200"
                >
                  Data
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform ${isMobileDataOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isMobileDataOpen && (
                  <div className="ml-4 mt-2 space-y-3">

                    <button
                      onClick={() => setLocation("/staffwisegp")}
                      className="text-gray-700 hover:text-raj-orange text-left"
                    >
                      Staff wise GP
                    </button>

                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-raj-orange font-medium transition-colors duration-200 text-left"
              >
                Services
              </button>

              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-raj-orange font-medium transition-colors duration-200 text-left"
              >
                About
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-raj-orange font-medium transition-colors duration-200 text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
