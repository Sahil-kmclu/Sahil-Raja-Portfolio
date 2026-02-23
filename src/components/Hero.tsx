import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { ReactNode, useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#556B4E]/20 rounded-full blur-[100px] opacity-50" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#C89F78]/20 rounded-full blur-[120px] opacity-50" 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl mix-blend-overlay" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-soft-light"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-[#166534]/10 text-[#166534] text-sm font-semibold mb-6 border border-[#166534]/20"
          >
            Available for Freelance Work
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-[#1A120B] dark:text-white">
            Building the <br />
            <span className="text-gradient">Digital Future</span>
          </h1>
          <p className="text-lg md:text-xl text-[#3E2723] dark:text-gray-200 mb-8 max-w-lg leading-relaxed font-medium">
            I craft minimalist, high-performance web experiences with a focus on premium design and seamless interactivity.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-[#166534] hover:bg-[#14532d] text-white rounded-full font-medium transition-all shadow-lg hover:shadow-[#166534]/30 flex items-center gap-2 group"
            >
              View Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-[14px] rounded-full font-medium transition-all flex items-center gap-2 border-2 border-[#3E2723] text-[#3E2723] hover:bg-[#3E2723] hover:text-[#FFFAF0] dark:border-white/20 dark:text-white dark:hover:bg-white/10 dark:hover:text-white group shadow-sm hover:shadow-md"
            >
              Contact Me <Mail size={18} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <SocialLink href="https://github.com/Sahil-kmclu" icon={<Github size={20} />} />
            <SocialLink href="https://www.linkedin.com/in/sahil-raja-6544112a4/" icon={<Linkedin size={20} />} />
            <SocialLink href="#" icon={<Twitter size={20} />} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#556B4E] to-[#C89F78] blur-2xl opacity-40 animate-pulse" />
            <div className="absolute inset-4 rounded-full bg-white dark:bg-gray-900 z-0" />
            <img
              src="/sahil photo.jpg"
              alt="Sahil Raja"
              className="relative w-full h-full object-cover rounded-full border-8 border-white/10 shadow-2xl z-10"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating Cards */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5, scale: 1.1 }}
      className="relative p-3 rounded-full bg-gray-100 dark:bg-gray-800/50 text-[#1a1a1a] dark:text-gray-300 transition-all duration-300 border border-transparent hover:border-[#6B8E65] group"
    >
      <div className="absolute inset-0 rounded-full bg-[#556B4E]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10 group-hover:text-[#556B4E] transition-colors">
        {icon}
      </div>
    </motion.a>
  );
}
