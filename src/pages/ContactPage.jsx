import React, { useState } from 'react';
import { Mail, MapPin, Phone, MessageSquare, User, Send } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending transmission
    setTimeout(() => {
      setFormData({ name: '', subject: '', message: '' });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }, 500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-20 bg-transparent">
      {/* Background ambient light */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-700/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="down">
          <div className="text-center mb-16">
            <div className="font-orbitron telemetry-small mb-2 text-cyan-500 tracking-widest text-sm">SYS.DIR // SUBSPACE_LINK</div>
            <h1 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 text-gradient uppercase">
              ESTABLISH LINK
            </h1>
            <div className="title-underline mx-auto"></div>
            <p className="text-lg md:text-xl text-gray-400 mt-6 max-w-2xl mx-auto font-inter">
              Open a secure communication channel with STAR Command. Have questions or want to collaborate? We'd love to hear from you.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <ScrollReveal direction="right" delay={0.1}>
              <div className="bg-black/60 backdrop-blur-md rounded-lg p-8 border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 relative group">
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-500"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-500"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-500"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-500"></div>
                
                <h2 className="text-2xl font-orbitron font-bold text-white mb-6 uppercase tracking-wide">Contact Matrix</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center rounded">
                      <Mail className="w-5 h-5 text-cyan-500" />
                    </div>
                    <div>
                      <h3 className="text-gray-400 font-orbitron text-xs tracking-widest mb-1 uppercase">Comm Link</h3>
                      <a href="mailto:s.tarsclubgla@gmail.com" className="text-white hover:text-yellow-400 transition-colors font-inter">
                        s.tarsclubgla@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center rounded">
                      <MapPin className="w-5 h-5 text-cyan-500" />
                    </div>
                    <div>
                      <h3 className="text-gray-400 font-orbitron text-xs tracking-widest mb-1 uppercase">Coordinates</h3>
                      <p className="text-white font-inter">GLA University<br />17km Stone, NH-2, Mathura-Delhi Road<br />PO: Chaumuhan, Mathura-281 406 (UP), India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center rounded">
                      <Phone className="w-5 h-5 text-cyan-500" />
                    </div>
                    <div>
                      <h3 className="text-gray-400 font-orbitron text-xs tracking-widest mb-1 uppercase">External Networks</h3>
                      <div className="flex flex-wrap gap-4 font-inter">
                        <a href="https://www.linkedin.com/in/tars-tars-club-glau-06398939b/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors">
                          LinkedIn
                        </a>
                        <span className="text-gray-600">/</span>
                        <a href="https://www.instagram.com/tars.club_glau?igsh=dWo1ajVnOWtqNXJ4" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors">
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-black/60 backdrop-blur-md rounded-lg p-8 border border-cyan-500/30 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-transparent opacity-50"></div>
                <h3 className="text-xl font-orbitron font-bold text-white mb-4 uppercase tracking-wide">Active Hours</h3>
                <div className="font-inter text-gray-300 space-y-2 text-sm">
                  <p><span className="text-cyan-500 font-bold mr-2">BASE:</span> AB-12, 5018, GLA University Campus</p>
                  <div className="h-px bg-white/10 my-3"></div>
                  <div className="flex justify-between"><span>MON-FRI:</span> <span>0900 - 1800</span></div>
                  <div className="flex justify-between"><span>SAT:</span> <span>1000 - 1600</span></div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="left" delay={0.3}>
            <div className="bg-black/60 backdrop-blur-md rounded-lg p-8 border border-cyan-500/30 relative">
              <h3 className="text-2xl font-orbitron font-bold text-white mb-6 uppercase tracking-wide">Transmit Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-orbitron tracking-widest text-gray-400 mb-2 uppercase">
                    <div className="flex items-center gap-2">
                      <User className="w-3 h-3 text-cyan-500" />
                      Operative Name
                    </div>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded text-white font-inter placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(0,122,255,0.3)] transition-all"
                    placeholder="Enter Name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-orbitron tracking-widest text-gray-400 mb-2 uppercase">
                    Mission Code / Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded text-white font-inter placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(0,122,255,0.3)] transition-all"
                    placeholder="Mission Objective"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-orbitron tracking-widest text-gray-400 mb-2 uppercase">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-3 h-3 text-cyan-500" />
                      Transmission Content
                    </div>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded text-white font-inter placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(0,122,255,0.3)] transition-all resize-none"
                    placeholder="Enter message details here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-cyan-500/10 border border-cyan-500 text-cyan-500 font-orbitron tracking-widest uppercase font-bold rounded hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_20px_rgba(0,122,255,0.5)] transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  INITIATE TRANSMISSION
                </button>
                
                {showSuccess && (
                  <div className="mt-4 p-4 bg-cyan-500/10 border border-cyan-500/50 rounded text-cyan-500 font-orbitron text-sm flex items-center gap-2 animate-pulse">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    TRANSMISSION RECEIVED. STAR COMMAND WILL RESPOND SHORTLY.
                  </div>
                )}
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
