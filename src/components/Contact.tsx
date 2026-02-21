import { Section } from './Section';
import { Send, Mail, MapPin, Phone, Download } from 'lucide-react';
import { useState, FormEvent } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    
    const mailtoLink = `mailto:sahilraja9876786@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <Section id="contact" className="mb-20">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#111827] dark:text-white">Let's Work <span className="text-gradient">Together</span></h2>
          <p className="text-[#374151] dark:text-gray-300 mb-8 text-lg leading-relaxed font-medium">
            Have a project in mind? I'm always open to discussing new opportunities, creative ideas, or just having a chat.
          </p>

          <div className="space-y-6 mb-8">
            <ContactItem icon={<Mail className="text-[#166534]" />} title="Email" value="sahilraja9876786@gmail.com" />
          <ContactItem icon={<Phone className="text-[#C89F78]" />} title="Phone" value="+91 9709632674" />
          <ContactItem icon={<MapPin className="text-[#A4B494]" />} title="Location" value="India" />
          </div>

          <a 
            href="/resume.pdf" 
            download
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>

        <div className="glass p-8 rounded-3xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold ml-1 text-[#111827] dark:text-white">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-[#111827] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#166534] transition-all placeholder:text-gray-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold ml-1 text-[#111827] dark:text-white">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-[#111827] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#166534] transition-all placeholder:text-gray-500"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-bold ml-1 text-[#111827] dark:text-white">Subject</label>
              <input 
                type="text" 
                id="subject" 
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-[#111827] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#166534] transition-all placeholder:text-gray-500"
                placeholder="Project Inquiry"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold ml-1 text-[#111827] dark:text-white">Message</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-[#1a1a1a] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#556B4E] transition-all placeholder:text-gray-500 mt-1 resize-none"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-[#556B4E] to-[#C89F78] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-[#556B4E]/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}

function ContactItem({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
      <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shadow-sm">
        {icon}
      </div>
      <div>
        <p className="text-sm text-[#1a1a1a] dark:text-gray-400 font-bold">{title}</p>
        <p className="text-lg font-semibold text-[#1a1a1a] dark:text-white">{value}</p>
      </div>
    </div>
  );
}
