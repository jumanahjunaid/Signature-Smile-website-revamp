
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, ShieldCheck } from 'lucide-react';
import { COMPANY_NAME, ADDRESS, PHONE_NUMBER, EMAIL, LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
                <img src={LOGO_URL} alt={COMPANY_NAME} className="h-10 brightness-0 invert opacity-90" />
            </div>
            <p className="mb-6 text-white/70 leading-relaxed text-sm font-light">
              Signature Smile is your home for premium dental care in Royse City. We combine modern technology with a gentle touch to create smiles that last a lifetime.
            </p>
            <div className="flex gap-3">
              <a href="#" className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-cyan transition-colors"><Facebook size={16} /></a>
              <a href="#" className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-cyan transition-colors"><Instagram size={16} /></a>
              <a href="#" className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-cyan transition-colors"><Twitter size={16} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-lg font-serif font-bold text-white mb-5">Patient Links</h4>
            <ul className="space-y-2.5 text-sm text-white/70 font-light">
              <li><Link to="/team" className="hover:text-brand-cyan transition-colors">Meet the Team</Link></li>
              <li><Link to="/services" className="hover:text-brand-cyan transition-colors">Our Services</Link></li>
              <li><Link to="/patients" className="hover:text-brand-cyan transition-colors">New Patient Forms</Link></li>
              <li><Link to="/insurance" className="hover:text-brand-cyan transition-colors">Insurance & Finance</Link></li>
              <li><Link to="/contact" className="hover:text-brand-cyan transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-5">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/70 font-light">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-cyan shrink-0 mt-0.5" size={18} />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-cyan shrink-0" size={18} />
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-white transition-colors">{PHONE_NUMBER}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-cyan shrink-0" size={18} />
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">{EMAIL}</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-5">Opening Hours</h4>
            <ul className="space-y-2.5 text-sm text-white/70 font-light">
              <li className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>Mon - Fri</span>
                <span className="text-white font-medium">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>Saturday</span>
                <span className="text-white/40">Closed</span>
              </li>
              <li className="flex justify-between items-center pb-2">
                <span>Sunday</span>
                <span className="text-white/40">Closed</span>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-2 text-xs text-white/50">
                <ShieldCheck size={14} />
                <span>HIPAA Compliant Practice</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
