
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scrolling effect on navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/7cba74f8-04a3-4da2-9f74-4d85f8a61d6e.png" 
            alt="H.R.D. Construction" 
            className="h-12"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-hrd-black hover:text-hrd-red transition-colors font-medium">Home</a>
          <a href="#services" className="text-hrd-black hover:text-hrd-red transition-colors font-medium">Services</a>
          <a href="#projects" className="text-hrd-black hover:text-hrd-red transition-colors font-medium">Projects</a>
          <a href="#about" className="text-hrd-black hover:text-hrd-red transition-colors font-medium">About</a>
          <a href="#contact" className="text-hrd-black hover:text-hrd-red transition-colors font-medium">Contact</a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-hrd-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-hrd-black hover:text-hrd-red transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a 
                href="#services" 
                className="text-hrd-black hover:text-hrd-red transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a 
                href="#projects" 
                className="text-hrd-black hover:text-hrd-red transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#about" 
                className="text-hrd-black hover:text-hrd-red transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-hrd-black hover:text-hrd-red transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
