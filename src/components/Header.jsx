import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-1">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Orvea Estates" className="h-24 md:h-28 lg:h-32 w-auto cursor-pointer" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-teal transition-all duration-300 font-medium">Home</a>
            <a href="#about" className="text-white hover:text-teal transition-all duration-300 font-medium">About Us</a>
            <a href="#properties" className="text-white hover:text-teal transition-all duration-300 font-medium">Our Properties</a>
            <a href="#contact" className="text-white hover:text-teal transition-all duration-300 font-medium">Contact Us</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#contact"
              className="bg-teal text-white px-6 py-2 rounded-lg hover:bg-teal-dark transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Sell
            </a>
            <a
              href="#properties"
              className="bg-teal text-white px-6 py-2 rounded-lg hover:bg-teal-dark transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Buy
            </a>
            <a
              href="tel:+919911114978"
              className="border-2 border-teal text-teal px-6 py-2 rounded-lg hover:bg-teal hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Call us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-700 pt-4">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-white hover:text-teal transition-all duration-300 py-2">Home</a>
              <a href="#about" className="text-white hover:text-teal transition-all duration-300 py-2">About Us</a>
              <a href="#properties" className="text-white hover:text-teal transition-all duration-300 py-2">Our Properties</a>
              <a href="#contact" className="text-white hover:text-teal transition-all duration-300 py-2">Contact Us</a>
              <div className="flex flex-col space-y-2 pt-2">
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-teal text-white px-6 py-2 rounded-lg hover:bg-teal-dark transition-all duration-300 text-center shadow-md"
                >
                  Sell
                </a>
                <a
                  href="#properties"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-teal text-white px-6 py-2 rounded-lg hover:bg-teal-dark transition-all duration-300 text-center shadow-md"
                >
                  Buy
                </a>
                <a
                  href="tel:+919911114978"
                  className="border-2 border-teal text-teal px-6 py-2 rounded-lg hover:bg-teal hover:text-white transition-all duration-300 text-center"
                >
                  Call us: +91 99111 14978
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
