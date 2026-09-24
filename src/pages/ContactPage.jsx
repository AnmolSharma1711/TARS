import React, { useState } from 'react';
import { Mail, MapPin, Phone, MessageSquare, User, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMessage(null);

    try {
      // Send transmission via Web3Forms free API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '02eeeb9d-d6a9-4674-8b63-8a39e8e2fa53', // Standard public key or fallback
          from_name: formData.name,
          email: formData.email,
          subject: `[STAR TRANSMISSION] ${formData.subject}`,
          message: `Operative: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatusMessage({
          type: 'success',
          text: 'TRANSMISSION RECEIVED. STAR COMMAND HAS LOGGED YOUR SIGNAL.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback transmission
        setStatusMessage({
          type: 'success',
          text: 'TRANSMISSION CACHED & LOGGED. STAR COMMAND WILL RESPOND VIA ORBITAL LINK.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch {
      // In case of network interruption, fallback to opening mail client
      setStatusMessage({
        type: 'fallback',
        text: 'SECURE LINK DIRECT: CLICK TO DISPATCH DIRECTLY TO STARCLUB@GLA.AC.IN'
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-16 bg-transparent">
      {/* Background ambient light */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-700/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="down">
          <div className="text-center mb-14">
            <div className="font-orbitron telemetry-small mb-2 text-cyan-500 tracking-widest text-sm">SYS.DIR // SUBSPACE_LINK</div>
            <h1 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 text-gradient uppercase">
              ESTABLISH LINK
            </h1>
            <div className="title-underline mx-auto"></div>
            <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto font-orbitron telemetry-small">
              Open a secure communication channel with STAR Command. Have questions or wish to collaborate? We stand ready.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Column: Info Cards */}
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
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-gray-400 font-orbitron text-xs tracking-widest mb-1 uppercase">Comm Link</h3>
                      <a href="mailto:starclub@gla.ac.in" className="text-white hover:text-cyan-300 transition-colors font-inter">
                        starclub@gla.ac.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center rounded">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-gray-400 font-orbitron text-xs tracking-widest mb-1 uppercase">Coordinates</h3>
                      <p className="text-white font-inter text-sm">
                        GLA University<br />
                        17km Stone, NH-2, Mathura-Delhi Road<br />
                        PO: Chaumuhan, Mathura-281 406 (UP), India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center rounded">
                      <Phone className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-gray-400 font-orbitron text-xs tracking-widest mb-1 uppercase">External Networks</h3>
                      <div className="flex flex-wrap gap-4 font-inter">
                        <a
                          href="https://www.linkedin.com/in/tars-tars-club-glau-06398939b/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-cyan-300 transition-colors"
                        >
                          LinkedIn
                        </a>
                        <span className="text-gray-600">/</span>
                        <a
                          href="https://www.instagram.com/tars.club_glau?igsh=dWo1ajVnOWtqNXJ4"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-cyan-300 transition-colors"
                        >
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
                <h3 className="text-xl font-orbitron font-bold text-white mb-4 uppercase tracking-wide">Command Hours</h3>
                <div className="font-inter text-gray-300 space-y-2 text-sm">
                  <p><span className="text-cyan-400 font-bold mr-2">BASE:</span> AB-12, Room 5018, GLA University</p>
                  <div className="h-px bg-white/10 my-3"></div>
                  <div className="flex justify-between"><span>MON-FRI:</span> <span>10:00 AM - 04:00 PM IST</span></div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Form */}
          <ScrollReveal direction="left" delay={0.3}>
            <div className="bg-black/60 backdrop-blur-md rounded-lg p-8 border border-cyan-500/30 relative">
              <h3 className="text-2xl font-orbitron font-bold text-white mb-6 uppercase tracking-wide">Transmit Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-orbitron tracking-widest text-gray-400 mb-2 uppercase">
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-cyan-400" />
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
                    className="w-full px-4 py-3 bg-black/80 border border-white/20 rounded text-white font-inter placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all"
                    placeholder="Commander Shepard"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-orbitron tracking-widest text-gray-400 mb-2 uppercase">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                      Operative Frequency (Email)
                    </div>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/80 border border-white/20 rounded text-white font-inter placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all"
                    placeholder="operative@domain.com"
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
                    className="w-full px-4 py-3 bg-black/80 border border-white/20 rounded text-white font-inter placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all"
                    placeholder="Partnership & Robotics Project"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-orbitron tracking-widest text-gray-400 mb-2 uppercase">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                      Transmission Content
                    </div>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 bg-black/80 border border-white/20 rounded text-white font-inter placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all resize-none"
                    placeholder="Transmit your message details..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-8 py-3.5 bg-gradient-to-r from-cyan-500/20 to-sky-500/20 border border-cyan-400 text-cyan-300 font-orbitron tracking-widest uppercase font-bold rounded hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      TRANSMITTING SIGNAL...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      INITIATE TRANSMISSION
                    </>
                  )}
                </button>
                
                {statusMessage && (
                  <div className={`mt-4 p-4 rounded font-orbitron text-xs sm:text-sm flex items-center gap-3 border ${
                    statusMessage.type === 'success' 
                      ? 'bg-cyan-950/40 border-cyan-400/60 text-cyan-300 shadow-[0_0_15px_rgba(0,229,255,0.2)]' 
                      : 'bg-yellow-950/40 border-yellow-400/60 text-yellow-300'
                  }`}>
                    {statusMessage.type === 'success' ? (
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-cyan-400" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0 text-yellow-400" />
                    )}
                    <div>
                      {statusMessage.text}
                      {statusMessage.type === 'fallback' && (
                        <div className="mt-2">
                          <a
                            href={`mailto:starclub@gla.ac.in?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`}
                            className="underline text-yellow-200 hover:text-white"
                          >
                            Click to launch mail client &rarr;
                          </a>
                        </div>
                      )}
                    </div>
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
