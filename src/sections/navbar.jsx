import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { AlignJustify } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        py-4 mx-auto sticky top-0 z-10
        ${isScrolled ? 'backdrop-blur-xl backdrop-filter bg-background/50 shadow-lg' : 'bg-transparent'}
      `}
    >
      <div className="flex container justify-between px-4">
        <div className="flex items-center">
          <img src="/assets/logo-white.png" alt="EasyPass Logo" className="w-16 h-16 mr-2" />
          <a href="/" className="scroll-m-20 text-2xl lg:text-3xl font-semibold tracking-tight">
            EasyPass
          </a>
        </div>

        {/* Menu icon for smaller devices */}
        <Button
          onClick={handleMenuToggle}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          className="md:hidden focus:outline-none"
        >
          <AlignJustify className='h-4 w-4'/> {/* Use the Menu icon from Lucide */}
        </Button>

        {/* Navigation links for larger screens */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <a href="#" className="hover:text-primary font-semibold">Blog</a>
          </li>
          <li>
            <a href="#" className="hover:text-primary font-semibold">Contact</a>
          </li>
          <li>
            <a href="#" className="hover:text-primary font-semibold">About</a>
          </li>
          {/* ... other links */}
        </ul>

        {/* Sign in and Get Started buttons for larger screens */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline">Sign In</Button>
          <Button>Open Account</Button>
        </div>

        {/* Navigation menu for smaller devices */}
        <div
          className={`
          absolute left-0 top-full w-full bg-background/95 shadow-md overflow-hidden md:hidden py-4
          text-center outline outline-primary
            ${isMenuOpen ? 'block' : 'hidden'}
          `}
        >
          {/* ... navigation links here */}
          <ul className='space-y-4 font-semibold'>
            <li>
              <a href="#" className="block hover:text-primary">Blog</a>
            </li>
            <li>
              <a href="#" className="block hover:text-primary">Contact</a>
            </li>
            <li>
              <a href="#" className="block hover:text-primary">About</a>
            </li>
          </ul>
            {/* ... other links */}
          <div className="items-center py-4 space-x-4">
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </div>      
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
