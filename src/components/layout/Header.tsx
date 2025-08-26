'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { smoothScrollTo } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    smoothScrollTo(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Name */}
          <button 
            onClick={() => handleNavClick('#hero')}
            className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg p-1 -m-1 group"
            aria-label="Go to homepage"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-teal-500/30">
              <Image
                src="/images/profile/jim-profile-1.jpg"
                alt="Jim Elli"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col items-start">
              <span className="text-white font-semibold text-sm leading-tight group-hover:text-teal-400 transition-colors">
                Jim Elli
              </span>
              <span className="text-slate-400 text-xs leading-tight">
                MultiMedia Producer
              </span>
            </div>
            <div className="relative h-8 w-auto ml-2">
              <Image
                src="/logos/visual-vanguard-logo.svg"
                alt="Visual Vanguard Media Logo"
                width={80}
                height={32}
                className="h-8 w-auto brightness-0 invert opacity-70 group-hover:scale-105 transition-transform"
                priority
              />
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-slate-300 hover:text-teal-400 transition-colors font-medium focus:outline-none focus:text-teal-400"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleNavClick('#contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:text-teal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-slate-700">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-slate-300 hover:text-teal-400 transition-colors font-medium text-left focus:outline-none focus:text-teal-400"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleNavClick('#contact')}
                  className="w-full"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
