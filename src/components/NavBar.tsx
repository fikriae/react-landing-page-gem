
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar transition-all duration-200 ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="container-custom mx-auto">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-brand-700 flex items-center">
              Brand<span className="text-brand-500">Name</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-brand-600 transition-colors">Home</a>
            <a href="#features" className="text-gray-700 hover:text-brand-600 transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-700 hover:text-brand-600 transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-brand-600 transition-colors">Contact</a>
            <Button className="btn btn-primary">Get Started</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-brand-600 transition-colors py-2" onClick={toggleMenu}>Home</a>
              <a href="#features" className="text-gray-700 hover:text-brand-600 transition-colors py-2" onClick={toggleMenu}>Features</a>
              <a href="#testimonials" className="text-gray-700 hover:text-brand-600 transition-colors py-2" onClick={toggleMenu}>Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-brand-600 transition-colors py-2" onClick={toggleMenu}>Contact</a>
              <Button className="btn btn-primary w-full">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
