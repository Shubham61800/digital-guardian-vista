
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary-500">CyberShield</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary-500 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-primary-500 transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary-500 transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-500 transition-colors">
              Contact
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-primary-500 transition-colors">
              Sign In
            </Button>
            <Button className="bg-primary-500 hover:bg-primary-500/90 text-white button-glow">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-md">
            <div className="flex flex-col space-y-3 px-4">
              <a href="#features" className="text-gray-700 hover:text-primary-500 transition-colors py-2">
                Features
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-primary-500 transition-colors py-2">
                Pricing
              </a>
              <a href="#about" className="text-gray-700 hover:text-primary-500 transition-colors py-2">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-primary-500 transition-colors py-2">
                Contact
              </a>
              <div className="pt-2 flex flex-col space-y-3">
                <Button variant="outline" className="w-full justify-center">
                  Sign In
                </Button>
                <Button className="w-full justify-center bg-primary-500 hover:bg-primary-500/90">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
