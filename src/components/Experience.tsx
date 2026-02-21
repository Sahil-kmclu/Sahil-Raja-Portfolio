import { Section } from './Section';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Senior Frontend Engineer",
    company: "TechNova Solutions",
    period: "2023 - Present",
    description: "Leading the frontend team in rebuilding the core product dashboard using Next.js and Tailwind. Improved performance by 40%."
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Creative Pulse Agency",
    period: "2021 - 2023",
    description: "Developed custom e-commerce solutions for luxury brands. Integrated payment gateways, headless CMS, and 3D product viewers."
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "StartUp Inc",
    period: "2019 - 2021",
    description: "Collaborated with designers to implement responsive landing pages. Maintained legacy codebases and fixed critical bugs."
  }
];

export function Experience() {
  return (
    <Section id="experience">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#111827] dark:text-white">Work <span className="text-gradient">Experience</span></h2>
        <p className="text-[#374151] dark:text-gray-400 max-w-2xl mx-auto font-medium">
          My professional journey and the companies I've had the privilege to work with.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-800 transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[#166534] rounded-full border-4 border-white dark:border-[#0d1117] transform -translate-x-[7px] md:-translate-x-1/2 mt-1.5 z-10" />

              {/* Content */}
              <div className="ml-8 md:ml-0 md:w-1/2">
                <div className={`glass p-6 rounded-2xl hover:border-[#166534]/30 transition-colors ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="flex items-center gap-2 text-[#166534] text-sm font-medium mb-2">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-[#111827] dark:text-white">{exp.role}</h3>
                  <h4 className="text-[#374151] dark:text-gray-300 font-medium mb-4">{exp.company}</h4>
                  <p className="text-[#374151] dark:text-gray-200 text-sm leading-relaxed font-medium">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
