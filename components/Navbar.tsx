
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS, PHONE_NUMBER, COMPANY_NAME, LOGO_URL } from '../constants';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4 lg:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="relative z-50 flex items-center h-full flex-shrink-0 pr-8">
            <img 
              src={LOGO_URL} 
              alt={COMPANY_NAME} 
              className={`w-auto transition-all duration-300 object-contain ${scrolled ? 'h-10 md:h-12' : 'h-12 md:h-14 brightness-0 invert drop-shadow-md'}`}
            />
          </Link>

          {/* Desktop Nav - Moved to right with ml-auto and added padding-left for separation */}
          <div className="hidden lg:flex items-center gap-8 h-full ml-auto pl-16">
            {NAV_ITEMS.map((item) => (
              item.isButton ? (
                <Link key={item.path} to={item.path}>
                  <Button size="sm" variant={scrolled ? 'primary' : 'primary'}>
                    {item.label}
                  </Button>
                </Link>
              ) : (
                <Link 
                  key={item.path} 
                  to={item.path}
                  className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-brand-cyan ${
                    scrolled ? 'text-brand-navy' : 'text-white text-shadow-sm'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
            <a href={`tel:${PHONE_NUMBER}`} className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-brand-cyan transition-colors ${scrolled ? 'text-brand-navy' : 'text-white text-shadow-sm'}`}>
              <div className={`p-2 rounded-full ${scrolled ? 'bg-brand-light text-brand-navy' : 'bg-white/20 backdrop-blur-sm text-white'}`}>
                <Phone size={16} />
              </div>
              {PHONE_NUMBER}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center z-50">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${isOpen ? 'text-slate-900' : (scrolled ? 'text-brand-navy' : 'text-white')}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-center items-center ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6 text-center p-8 w-full">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-2xl font-serif font-bold text-brand-navy hover:text-brand-cyan transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-8">
             <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center gap-2 px-6 py-3 bg-brand-navy text-white rounded-full font-bold shadow-lg">
                <Phone size={20} />
                {PHONE_NUMBER}
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
