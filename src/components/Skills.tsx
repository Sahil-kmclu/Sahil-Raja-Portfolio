import { Section } from './Section';
import { Code, Database, Layout, Smartphone, Server, Zap } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6 text-white" />,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
    gradient: "from-emerald-500 to-teal-500",
    shadow: "shadow-emerald-500/20"
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6 text-white" />,
    items: ["Node.js", "Express", "Python", "PostgreSQL", "GraphQL", "Firebase"],
    gradient: "from-violet-600 to-indigo-600",
    shadow: "shadow-violet-500/20"
  },
  {
    category: "Tools & Others",
    icon: <Zap className="w-6 h-6 text-white" />,
    items: ["Git", "Docker", "AWS", "Figma", "Jest", "CI/CD"],
    gradient: "from-amber-500 to-orange-500",
    shadow: "shadow-amber-500/20"
  }
];

export function Skills() {
  return (
    <Section id="skills">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A120B] dark:text-white">Technical <span className="text-gradient">Expertise</span></h2>
        <p className="text-[#3E2723] dark:text-gray-300 max-w-2xl mx-auto font-medium">
          A curated set of technologies I use to build high-performance, scalable, and beautiful digital products.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="glass p-8 rounded-3xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden border-t border-white/50 dark:border-white/10"
          >
            {/* Background Gradient Blob */}
            <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${skill.gradient} opacity-10 blur-3xl rounded-full group-hover:opacity-20 group-hover:scale-125 transition-all duration-500`} />
            
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-gradient-to-br ${skill.gradient} shadow-lg ${skill.shadow} relative z-10`}>
              {skill.icon}
            </div>
            
            <h3 className="text-xl font-bold mb-6 text-[#1A120B] dark:text-white relative z-10">
              {skill.category}
            </h3>
            
            <div className="flex flex-wrap gap-3 relative z-10">
              {skill.items.map((item) => (
                <span 
                  key={item}
                  className="px-3 py-1 text-sm font-medium bg-white/50 dark:bg-gray-800/50 text-[#1A120B] dark:text-gray-200 rounded-full border border-gray-200 dark:border-gray-700 hover:border-transparent hover:text-white hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all cursor-default"
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
