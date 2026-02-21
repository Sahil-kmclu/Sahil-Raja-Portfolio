import { Section } from './Section';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "The attention to detail and premium feel of the website exceeded our expectations. Truly a master of their craft.",
    avatar: "https://picsum.photos/seed/avatar1/200/200",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Director, InnovateCorp",
    content: "Delivered a complex dashboard ahead of schedule. The code quality is exceptional and the UI is stunning.",
    avatar: "https://picsum.photos/seed/avatar2/200/200",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Founder, ArtGallery",
    content: "Transformed our vision into a digital masterpiece. The animations and interactions are incredibly smooth.",
    avatar: "https://picsum.photos/seed/avatar3/200/200",
    rating: 5
  }
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="testimonials" className="overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#111827] dark:text-white">Client <span className="text-gradient">Stories</span></h2>
        <p className="text-[#374151] dark:text-gray-400 max-w-2xl mx-auto font-medium">
          Feedback from those who have trusted me with their digital vision.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto h-80 md:h-64">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ 
              opacity: activeIndex === index ? 1 : 0,
              x: activeIndex === index ? 0 : activeIndex > index ? -100 : 100,
              scale: activeIndex === index ? 1 : 0.9
            }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
            style={{ pointerEvents: activeIndex === index ? 'auto' : 'none' }}
          >
            <div className="glass p-8 md:p-10 rounded-3xl border border-white/20 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="relative shrink-0">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#556B4E] p-1">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[#556B4E] text-white p-1.5 rounded-full">
                  <Quote size={12} fill="currentColor" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex justify-center md:justify-start gap-1 mb-4 text-[#C89F78]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg md:text-xl font-medium italic text-[#1a1a1a] dark:text-gray-100 mb-6">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-bold text-lg text-[#1a1a1a] dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-[#1a1a1a] dark:text-gray-300 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeIndex === index ? 'w-8 bg-[#556B4E]' : 'bg-gray-300 dark:bg-gray-700'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </Section>
  );
}
