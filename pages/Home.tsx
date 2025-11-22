
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Calendar, ArrowRight, Star, ShieldCheck } from 'lucide-react';
import { SERVICES, TESTIMONIALS, DOCTORS } from '../constants';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://signaturesmiledfw.com/wp-content/uploads/2023/10/Header-Video.jpg" 
            alt="Signature Smile Royse City" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-28 lg:pt-32">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <Star size={12} className="text-brand-cyan fill-brand-cyan" />
              Top Rated Dentist in Royse City
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6 drop-shadow-lg">
              Make Your Smile <br />
              <span className="text-brand-cyan">Your Signature.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-xl font-light">
              Experience modern, compassionate dentistry in a warm, judgment-free environment. We combine advanced technology with a personal touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" variant="primary" className="w-full sm:w-auto shadow-xl shadow-brand-cyan/20">
                  Book Online Now
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Treatments
                </Button>
              </Link>
            </div>
            
            <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4">
              <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-navy bg-gray-300 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Patient" className="w-full h-full object-cover" />
                    </div>
                 ))}
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex gap-0.5 mb-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-white text-xs font-bold tracking-wide uppercase">500+ 5-Star Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Banner */}
      <div className="bg-brand-cyan text-white py-4 relative z-20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <ShieldCheck className="hidden md:block h-5 w-5 text-white/90" />
            <p className="font-semibold text-sm md:text-base">Use It or Lose It: Maximize your dental benefits before the year ends.</p>
          </div>
          <Link to="/insurance" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-all">
            Check Coverage <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                {/* Using the clinic's About Us Image */}
                <img 
                  src="https://signaturesmiledfw.com/wp-content/uploads/2023/02/orthodontist-with-latex-glove-handling-dental-equipment_23-2148985839.jpg" 
                  alt="Dentist providing care" 
                  className="w-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-brand-navy/10 mix-blend-multiply"></div>
              </div>
              {/* Floater Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-[260px] border-l-4 border-brand-cyan animate-bounce-subtle">
                <p className="font-serif text-xl font-bold text-brand-navy mb-1">Accepting New Patients</p>
                <p className="text-sm text-brand-text">Same-day appointments available for emergencies.</p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <SectionHeading 
                subtitle="Welcome to Signature Smile"
                title="Modern Dentistry with a Personal Touch"
                alignment="left"
              />
              <p className="text-lg text-brand-text mb-6 leading-relaxed">
                We believe that visiting the dentist should be a positive, empowering experience. Located in <strong className="text-brand-navy">Royse City</strong>, our practice combines state-of-the-art technology with a warm, welcoming environment.
              </p>
              <p className="text-lg text-brand-text mb-8 leading-relaxed">
                Whether you need a routine check-up, cosmetic enhancement, or restorative care, our team of specialists is dedicated to your comfort and long-term oral health.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {['Advanced Technology', 'Judgment-Free Care', 'Flexible Financing', 'Comprehensive Services'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-brand-text font-medium bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <CheckCircle size={20} className="text-brand-cyan" />
                    {item}
                  </div>
                ))}
              </div>

              <Link to="/team">
                <Button variant="secondary">Meet Our Doctors</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            subtitle="Our Expertise"
            title="Comprehensive Care Under One Roof"
            description="From preventative maintenance to complex restorative surgery, we handle it all with precision and care."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group border border-slate-100">
                <div className="h-14 w-14 bg-brand-light text-brand-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-navy group-hover:text-white transition-colors">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-brand-text mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                <Link to="/services" className="inline-flex items-center text-brand-cyan font-bold text-sm uppercase tracking-wide hover:text-brand-navy transition-colors">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Doctors Preview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <SectionHeading 
            subtitle="Our Team"
            title="Meet Your Specialists"
            description="Highly trained experts dedicated to your smile."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
             {DOCTORS.map((doc) => (
                <div key={doc.id} className="group relative overflow-hidden rounded-2xl shadow-md">
                   <img src={doc.image} alt={doc.name} className="w-full h-[400px] object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h4 className="text-white font-serif text-xl font-bold">{doc.name}</h4>
                      <p className="text-brand-cyan text-xs font-bold uppercase tracking-wider">{doc.title}</p>
                   </div>
                </div>
             ))}
          </div>
          <div className="mt-12 text-center">
             <Link to="/team">
                <Button variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white focus:ring-brand-navy">View Full Profiles</Button>
             </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading 
            subtitle="Patient Stories"
            title="Real Smiles, Real Reviews"
            light={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {TESTIMONIALS.map((item) => (
              <div key={item.id} className="glass-card p-8 rounded-2xl border-none bg-white/10 text-white">
                <div className="flex gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg italic text-white/90 mb-6 font-light leading-relaxed">"{item.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-brand-cyan flex items-center justify-center font-bold text-white">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white">{item.name}</p>
                    <p className="text-xs text-white/60 uppercase tracking-wider">Verified Patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-brand rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>

            <div className="relative z-10 flex flex-col items-center">
                <div className="inline-flex items-center justify-center p-4 bg-white/20 backdrop-blur-md rounded-full shadow-inner mb-6 text-white">
                  <Calendar size={28} />
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                  Ready to Transform Your Smile?
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
                  Schedule your consultation today. We accept most insurance plans and offer flexible financing options.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
                  <Link to="/contact">
                      <Button size="lg" variant="white" className="w-full sm:w-auto text-brand-navy">
                        Book Online Now
                      </Button>
                  </Link>
                  <a href="tel:+14697216774">
                      <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                        Call (469) 721-6774
                      </Button>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
