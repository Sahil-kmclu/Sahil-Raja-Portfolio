import { Section } from './Section';
import { Code, Database, Layout, Smartphone, Server, Zap } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6 text-[#556B4E]" />,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"]
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6 text-[#C89F78]" />,
    items: ["Node.js", "Express", "Python", "PostgreSQL", "GraphQL", "Firebase"]
  },
  {
    category: "Tools & Others",
    icon: <Zap className="w-6 h-6 text-[#A4B494]" />,
    items: ["Git", "Docker", "AWS", "Figma", "Jest", "CI/CD"]
  }
];

export function Skills() {
  return (
    <Section id="skills">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#111827] dark:text-white">Technical <span className="text-gradient">Expertise</span></h2>
        <p className="text-[#374151] dark:text-gray-300 max-w-2xl mx-auto font-medium">
          A curated set of technologies I use to build high-performance, scalable, and beautiful digital products.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="glass p-8 rounded-3xl hover:shadow-xl transition-all duration-300 group"
          >
            <div className="bg-gray-100 dark:bg-gray-800 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {skill.icon}
            </div>
            <h3 className="text-xl font-bold mb-6 text-[#111827] dark:text-white">{skill.category}</h3>
            <div className="flex flex-wrap gap-3">
              {skill.items.map((item) => (
                <span 
                  key={item}
                  className="px-3 py-1 text-sm font-medium bg-gray-100 text-[#111827] dark:bg-gray-800 dark:text-gray-200 rounded-full border border-gray-200 dark:border-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
