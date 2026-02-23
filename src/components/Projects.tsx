import { Section } from './Section';
import { ExternalLink, Github, Eye, Building2, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';

const projects = [
  {
    id: 1,
    title: "Masjid Manager",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1555421689-d68471e18963?auto=format&fit=crop&q=80&w=1920",
    description: "A comprehensive digital solution for masjid management trusted by 100+ masjids. Features donation tracking, expense management, member directory, and automated PDF receipt generation via WhatsApp.",
    features: [
      "Secure Donation Tracking & History",
      "Daily Expense Management & Reports",
      "Digital Member Directory",
      "Automated WhatsApp PDF Receipts",
      "Imam Salary Management",
      "Data Backup & Export (Excel/JSON)"
    ],
    stack: ["React", "Node.js", "MongoDB", "PDF Kit", "WhatsApp API"],
    liveUrl: "https://www.masjidmanager.in/",
    githubUrl: "#",
    logo: "/masjidmanagerlogo11 (1).png"
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    category: "Web App",
    image: "https://picsum.photos/seed/project1/800/600",
    description: "A comprehensive analytics dashboard for online retailers featuring real-time data visualization, inventory management, and sales reporting.",
    stack: ["React", "Tailwind", "Recharts", "Node.js"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "AI Content Generator",
    category: "SaaS Platform",
    image: "https://picsum.photos/seed/project2/800/600",
    description: "An AI-powered platform helping creators generate blog posts, social media captions, and marketing copy in seconds.",
    stack: ["Next.js", "OpenAI API", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Luxury Real Estate",
    category: "Website",
    image: "https://picsum.photos/seed/project3/800/600",
    description: "A premium property listing website with virtual tours, high-res galleries, and advanced filtering for high-net-worth clients.",
    stack: ["Vue.js", "Nuxt", "GSAP", "Firebase"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

function ProjectCard({ project, onClick }: { project: typeof projects[0], onClick: () => void }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);
  const imageX = useTransform(mouseX, [-300, 300], [-10, 10]);
  const imageY = useTransform(mouseY, [-300, 300], [-10, 10]);

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      className="group relative rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-white dark:bg-gray-900 border border-[var(--card-border)]"
    >
      <div style={{ transform: "translateZ(20px)" }} className="aspect-square md:aspect-video overflow-hidden relative">
        <motion.img 
          style={{ x: imageX, y: imageY, scale: 1.1 }}
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        {(project as any).logo && (
          <div className="absolute inset-0 bg-white">
            {typeof (project as any).logo === 'string' ? (
              <img 
                src={(project as any).logo} 
                alt={`${project.title} Logo`} 
                className="w-full h-full object-contain p-8 md:p-0" 
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-black/40">
                <Building2 className="w-20 h-20 text-[#556B4E] mb-4 fill-white/80" />
                <span className="text-white font-bold text-3xl tracking-wide">Masjid Manager</span>
              </div>
            )}
          </div>
        )}
      </div>
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6 md:p-8"
      >
        <span className="text-[#C89F78] text-xs md:text-sm font-medium mb-1 md:mb-2">{project.category}</span>
        <h3 className="text-white text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-200 text-sm line-clamp-2 mb-3 md:mb-4">{project.description}</p>
        <div className="flex gap-2 flex-wrap">
          {project.stack.slice(0, 3).map(tech => (
            <span key={tech} className="text-[10px] md:text-xs text-white/90 bg-white/10 px-2 py-1 rounded backdrop-blur-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <Section id="projects">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A120B] dark:text-white">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-[#3E2723] dark:text-gray-400 max-w-xl font-medium">
            A selection of my recent work, showcasing complex web applications and premium user interfaces.
          </p>
        </div>
        <a href="https://github.com/Sahil-kmclu" className="text-[#166534] font-medium hover:underline flex items-center gap-2">
          View Github <Github size={16} />
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8 perspective-1000">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onClick={() => setSelectedProject(project)} 
          />
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-80">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2 text-[#1A120B] dark:text-white">{selectedProject.title}</h3>
                    <p className="text-[#556B4E] font-medium">{selectedProject.category}</p>
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={selectedProject.liveUrl}
                      className="px-6 py-2 bg-[#556B4E] text-white rounded-full font-medium hover:bg-[#3A4A35] transition-colors flex items-center gap-2"
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>
                    <a 
                      href={selectedProject.githubUrl}
                      className="px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
                    >
                      Code <Github size={16} />
                    </a>
                  </div>
                </div>

                <p className="text-[#1a1a1a] dark:text-gray-300 leading-relaxed mb-8 text-lg">
                  {selectedProject.description}
                </p>

                {(selectedProject as any).features && (
                  <div className="mb-8">
                    <h4 className="font-bold mb-4 text-lg text-[#1a1a1a] dark:text-white">Key Features</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {(selectedProject as any).features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-center gap-2 text-[#556B4E] dark:text-gray-300">
                          <CheckCircle2 size={18} className="text-[#556B4E] flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="font-bold mb-4 text-lg text-[#1a1a1a] dark:text-white">Tech Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.stack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-4 py-2 bg-gray-100 text-[#1a1a1a] dark:bg-gray-800 dark:text-gray-300 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
