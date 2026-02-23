import { Section } from './Section';
import { Code, Layout, Smartphone, Gauge, ShieldCheck, Search, Palette } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Custom Website Development",
    description: "Tailored websites built from scratch to meet your specific business needs. From landing pages to multi-page corporate sites, I deliver clean, semantic code.",
    icon: <Layout className="w-8 h-8 text-white" />,
    gradient: "from-emerald-500 to-teal-500",
    shadow: "shadow-emerald-500/20"
  },
  {
    id: 2,
    title: "Web Application Development",
    description: "Complex, interactive web applications powered by modern frameworks like React and Next.js. I build scalable solutions with robust backend integration.",
    icon: <Code className="w-8 h-8 text-white" />,
    gradient: "from-blue-600 to-indigo-600",
    shadow: "shadow-blue-500/20"
  },
  {
    id: 3,
    title: "Website Redesign & Modernization",
    description: "Transform your outdated website into a modern, high-performing digital asset. I overhaul the design and UX to improve engagement and align with your brand.",
    icon: <Palette className="w-8 h-8 text-white" />,
    gradient: "from-orange-500 to-red-500",
    shadow: "shadow-orange-500/20"
  },
  {
    id: 4,
    title: "Responsive & Mobile-First Design",
    description: "Ensuring your digital presence looks and performs flawlessly across all devices. I prioritize mobile responsiveness to maximize user engagement.",
    icon: <Smartphone className="w-8 h-8 text-white" />,
    gradient: "from-violet-500 to-purple-500",
    shadow: "shadow-violet-500/20"
  },
  {
    id: 5,
    title: "Performance Optimization",
    description: "Speed matters. I optimize your website's performance to ensure fast loading times, better user experience, and improved search engine rankings.",
    icon: <Gauge className="w-8 h-8 text-white" />,
    gradient: "from-pink-500 to-rose-500",
    shadow: "shadow-pink-500/20"
  },
  {
    id: 6,
    title: "SEO & Accessibility",
    description: "Building with best practices to ensure your site is discoverable by search engines and accessible to all users, adhering to WCAG standards.",
    icon: <Search className="w-8 h-8 text-white" />,
    gradient: "from-amber-500 to-yellow-500",
    shadow: "shadow-amber-500/20"
  },
  {
    id: 7,
    title: "Maintenance & Support",
    description: "Ongoing support to keep your website secure and up-to-date. I handle updates, bug fixes, and feature enhancements so you can focus on your business.",
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    gradient: "from-cyan-500 to-blue-500",
    shadow: "shadow-cyan-500/20"
  }
];

export function Services() {
  return (
    <Section id="services">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#111827] dark:text-white">My <span className="text-gradient">Services</span></h2>
        <p className="text-[#374151] dark:text-gray-400 max-w-2xl mx-auto font-medium">
          Comprehensive web development solutions tailored to elevate your online presence and drive business growth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div 
            key={service.id}
            className={`glass p-8 rounded-3xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden border-t border-white/50 dark:border-white/10`}
          >
            {/* Background Gradient Blob */}
            <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${service.gradient} opacity-10 blur-3xl rounded-full group-hover:opacity-20 group-hover:scale-125 transition-all duration-500`} />
            
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-gradient-to-br ${service.gradient} shadow-lg ${service.shadow} relative z-10`}>
              {service.icon}
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-[#111827] dark:text-white relative z-10">
              {service.title}
            </h3>
            
            <p className="text-[#374151] dark:text-gray-300 leading-relaxed font-medium relative z-10">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
