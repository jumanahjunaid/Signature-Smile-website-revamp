import React from 'react';
import { SERVICES } from '../constants';
import SectionHeading from '../components/SectionHeading';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-28 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          subtitle="Treatments"
          title="Our Dental Services"
          description="We utilize cutting-edge technology to deliver precise, comfortable, and effective treatments."
        />

        <div className="grid grid-cols-1 gap-8 mt-12">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col md:flex-row gap-12 items-center bg-white p-8 md:p-12 rounded-3xl shadow-sm ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                <div className="h-16 w-16 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon size={36} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700">
                    <div className="p-1 bg-green-100 rounded-full text-green-600"><Check size={14} /></div>
                    <span>Advanced Technology</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <div className="p-1 bg-green-100 rounded-full text-green-600"><Check size={14} /></div>
                    <span>Personalized Care Plan</span>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 h-64 md:h-auto bg-slate-100 rounded-2xl overflow-hidden relative">
                 {/* Placeholder for service specific image */}
                 <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400">
                    <span className="font-medium">Image: {service.title}</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;