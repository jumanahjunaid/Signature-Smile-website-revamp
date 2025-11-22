
import React from 'react';
import { DOCTORS } from '../constants';
import SectionHeading from '../components/SectionHeading';
import { Award, GraduationCap } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          subtitle="Expert Care"
          title="Meet Our Specialists"
          description="Our team of highly trained specialists works together to provide comprehensive, multi-disciplinary care under one roof."
        />

        <div className="grid grid-cols-1 gap-12 mt-12">
          {DOCTORS.map((doc, index) => (
            <div key={doc.id} className={`flex flex-col lg:flex-row gap-0 lg:gap-12 bg-white rounded-3xl shadow-soft overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image Section */}
              <div className="w-full lg:w-5/12 h-[400px] lg:h-[500px] relative">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover object-top" 
                />
                <div className="absolute inset-0 bg-brand-navy/5 mix-blend-multiply"></div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-7/12 p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block w-fit px-4 py-1.5 bg-brand-light text-brand-navy rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                  {doc.title}
                </span>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">{doc.name}</h3>
                <div className="h-1 w-16 bg-brand-cyan mb-6 rounded-full"></div>
                
                <p className="text-brand-text leading-relaxed text-lg mb-8">
                  {doc.bio}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                        <Award className="text-brand-cyan shrink-0 mt-1" size={20} />
                        <div>
                            <h5 className="font-bold text-slate-900">Certified Expert</h5>
                            <p className="text-sm text-slate-500">Board certified in their respective fields.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <GraduationCap className="text-brand-cyan shrink-0 mt-1" size={20} />
                        <div>
                            <h5 className="font-bold text-slate-900">Continuous Learning</h5>
                            <p className="text-sm text-slate-500">Dedicated to ongoing education and techniques.</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
