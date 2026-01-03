import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, User, MessageSquare, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:s.tarsclubgla@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }, 500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-6">
            <Mail className="w-6 h-6 text-sky-300 animate-pulse" />
            <span className="text-sky-300 font-semibold tracking-wider text-sm uppercase glow">Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gradient leading-tight glow drop-shadow-[0_12px_30px_rgba(14,165,233,0.18)]">
            Contact Us
          </h1>
          <p className="text-lg text-cyan-200/80 max-w-2xl mx-auto">
            Have questions or want to collaborate? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <a href="mailto:s.tarsclubgla@gmail.com" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                      s.tarsclubgla@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Location</h3>
                    <p className="text-gray-300">
                      GLA University, Mathura<br />
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-teal-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Follow Us</h3>
                    <div className="flex gap-4 mt-2">
                      <a href="https://www.linkedin.com/in/tars-tars-club-glau-06398939b/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                        LinkedIn
                      </a>
                      <a href="https://www.instagram.com/tars.club_glau?igsh=dWo1ajVnOWtqNXJ4" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Office Hours</h3>
              <p className="text-gray-300">
                AB-12, 5018<br />
                GLA University Campus<br /><br />
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Your Name
                  </div>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </div>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Message
                  </div>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-sky-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-sky-400/40 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
            
            {showSuccess && (
              <div className="mt-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <p className="text-green-300 font-medium">Email client opened! Complete sending from your email app.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
