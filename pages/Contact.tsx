import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { PHONE_NUMBER, EMAIL, ADDRESS, MAP_EMBED_URL } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Get in Touch"
          subtitle="Contact Us"
          description="We are currently accepting new patients. Call us or fill out the form below to schedule."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="p-3 bg-white w-fit rounded-full text-brand-cyan shadow-sm mb-4">
                        <Phone size={24} />
                    </div>
                    <h4 className="font-serif font-bold text-lg text-slate-900 mb-2">Phone</h4>
                    <p className="text-slate-600 text-sm mb-2">Call for appointments</p>
                    <p className="font-bold text-brand-navy">{PHONE_NUMBER}</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="p-3 bg-white w-fit rounded-full text-brand-cyan shadow-sm mb-4">
                        <Mail size={24} />
                    </div>
                    <h4 className="font-serif font-bold text-lg text-slate-900 mb-2">Email</h4>
                    <p className="text-slate-600 text-sm mb-2">For general inquiries</p>
                    <p className="font-bold text-brand-navy break-all">{EMAIL}</p>
                </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <div className="flex items-start gap-4 mb-6">
                    <MapPin className="text-brand-cyan shrink-0 mt-1" size={24} />
                    <div>
                        <h4 className="font-serif font-bold text-lg text-slate-900">Our Location</h4>
                        <p className="text-slate-600 mt-1">{ADDRESS}</p>
                    </div>
                </div>
                {/* Map */}
                <div className="h-64 bg-slate-200 rounded-2xl overflow-hidden shadow-inner">
                    <iframe 
                        src={MAP_EMBED_URL}
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 p-8 md:p-12 rounded-3xl h-fit sticky top-28">
            <div className="mb-8">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Request Appointment</h3>
                <p className="text-slate-600">Fill out the form below and our team will contact you to confirm your appointment.</p>
            </div>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all" placeholder="jane@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all" placeholder="(555) 123-4567" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Reason for Visit</label>
                <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all text-slate-700">
                    <option>New Patient Exam</option>
                    <option>Routine Cleaning</option>
                    <option>Whitening / Cosmetic</option>
                    <option>Tooth Pain / Emergency</option>
                    <option>Orthodontics</option>
                    <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message (Optional)</label>
                <textarea rows={3} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all" placeholder="Any specific concerns?"></textarea>
              </div>

              <Button className="w-full mt-4" size="lg">Submit Request</Button>
              <p className="text-xs text-center text-slate-400 mt-4">
                By submitting this form, you agree to our privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;