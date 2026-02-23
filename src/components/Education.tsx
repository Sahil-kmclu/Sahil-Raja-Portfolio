import { Section } from './Section';
import { GraduationCap, Calendar, MapPin, Building2 } from 'lucide-react';

export function Education() {
  return (
    <Section id="education">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A120B] dark:text-white">My <span className="text-gradient">Education</span></h2>
        <p className="text-[#3E2723] dark:text-gray-400 max-w-2xl mx-auto font-medium">
          Academic background and qualifications.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="glass p-8 rounded-3xl hover:border-[#166534]/30 transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="shrink-0 p-6 bg-[#166534]/10 rounded-2xl text-[#166534] dark:text-[#A4B494]">
              <GraduationCap size={48} />
            </div>
            
            <div className="flex-1 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="text-2xl font-bold text-[#1A120B] dark:text-white">B.Tech - Computer Science Engineering</h3>
                <div className="flex items-center gap-2 text-[#166534] font-semibold bg-[#166534]/10 px-4 py-1.5 rounded-full w-fit">
                  <Calendar size={16} />
                  2024 - 2028
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-lg font-semibold text-[#3E2723] dark:text-gray-200">
                  <Building2 size={20} className="text-[#166534]" />
                  Khwaja Moinuddin Chishti Language University
                </div>
                
                <div className="flex items-center gap-2 text-[#3E2723]/80 dark:text-gray-400">
                  <MapPin size={18} className="text-[#166534]" />
                  Lucknow - 226013 (State Government University)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
