import React, { useState, useEffect } from 'react'
import './EventCards.css'
import { upcomingEvents, completedEvents } from '../data/eventsData'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

function EventCards() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event, isCompleted = false) => {
    setSelectedEvent({ ...event, isCompleted });
  };

  const closePopup = () => {
    setSelectedEvent(null);
  };

  // Lock body scroll when popup is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedEvent]);

  return (
    <section className="events-section">
      <div className="events-container">
        {/* Upcoming Events Section */}
        <div className="events-category">
        <ScrollReveal>
          <h2 className="events-title text-gradient" style={{textAlign:'center', fontSize:20}}>Upcoming Missions</h2>
          <p className="events-description font-orbitron telemetry-small" style={{textAlign:'center', color: 'white', fontSize:15}}>Join us in our upcoming exploratory missions and technical operations</p>
          <div className="title-underline"></div>
        </ScrollReveal>

        <div className="events-grid">
          {upcomingEvents.map((event, index) => (
            <ScrollReveal key={event.id} delay={index * 0.1} className="w-full h-full flex justify-center">
              <div className="event-card cursor-pointer" onClick={() => handleEventClick(event, false)}>
                <div className="event-card-inner">
                  {/* Front of Card */}
                  <div className="event-front">
                    <div className="event-image">
                      <img src={event.image} alt={event.title} />
                      <div className="event-category">{event.category}</div>
                    </div>
                    <div className="event-preview">
                      <h3 className="event-title">{event.title}</h3>
                      <div className="event-meta">
                        <div className="event-meta-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                          </svg>
                          <span>{event.date}</span>
                        </div>
                        <div className="event-meta-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          <span>{event.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="event-back">
                    <h3 className="event-title-back">{event.title}</h3>
                    <p className="event-description">{event.description}</p>
                    <div className="event-details">
                      <div className="event-detail-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>{event.location}</span>
                      </div>
                      <div className="event-detail-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <span>{event.attendees} crew members expected</span>
                      </div>
                    </div>
                    <button className="event-register-btn">ESTABLISH CONNECTION</button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        </div>

        {/* Completed Events Section */}
        <div className="events-category" style={{ marginTop: '80px' }}>
        <ScrollReveal>
          <h2 className="events-title text-gradient font-orbitron telemetry-small" style={{textAlign:'center', fontSize:20}}>Mission Archives</h2>
          <p className="events-description font-orbitron telemetry-small" style={{textAlign:'center', color: 'white', fontSize:15}}>Review the telemetry from our successful past missions</p>
          <div className="title-underline"></div>
        </ScrollReveal>

        <div className="events-grid">
          {completedEvents.map((event, index) => (
            <ScrollReveal key={event.id} delay={index * 0.1} className="w-full h-full flex justify-center">
              <div className="event-card cursor-pointer" onClick={() => handleEventClick(event, true)}>
                <div className="event-card-inner">
                  {/* Front of Card */}
                  <div className="event-front">
                    <div className="event-image">
                      <img src={event.image} alt={event.title} />
                      <div className="event-category">{event.category}</div>
                    </div>
                    <div className="event-preview">
                      <h3 className="event-title">{event.title}</h3>
                      <div className="event-meta">
                        <div className="event-meta-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                          </svg>
                          <span>{event.date}</span>
                        </div>
                        <div className="event-meta-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          <span>{event.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="event-back">
                    <h3 className="event-title-back">{event.title}</h3>
                    <p className="event-description">{event.description}</p>
                    <div className="event-details">
                      <div className="event-detail-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>{event.location}</span>
                      </div>
                      <div className="event-detail-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <span>{event.attendees} crew members</span>
                      </div>
                    </div>
                    <button className="event-register-btn" style={{ opacity: 0.6, cursor: 'not-allowed' }} disabled>
                      REVIEW MEMORY LOG
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        </div>
      </div>

      {/* Event Details Popup */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-[9999] overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl"
              onClick={closePopup}
            />
            <div className="relative min-h-screen flex items-center justify-center p-4" onClick={closePopup}>
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-neutral-950 border-2 border-cyan-500 rounded-xl max-w-4xl w-full max-h-[90vh] flex flex-col relative z-10 shadow-[0_0_30px_rgba(0,229,255,0.2),inset_0_0_20px_rgba(0,229,255,0.1)]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Fixed Top Border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 rounded-t-xl z-20"></div>
                
                {/* Fixed Close Button */}
                <button
                  onClick={closePopup}
                  className="absolute top-4 right-4 z-20 w-8 h-8 border border-cyan-500/30 rounded flex items-center justify-center hover:bg-cyan-500/20 transition-colors text-cyan-500 bg-neutral-950/50 backdrop-blur-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Scrollable Inner Content */}
                <div className="p-8 overflow-y-auto no-scrollbar flex-1">
                  <div className="font-orbitron text-cyan-500/70 text-xs tracking-[0.3em] mb-6 uppercase pr-8">MISSION_FILE // {selectedEvent.category}</div>

                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-64 md:h-80 object-cover object-top rounded-lg mb-8 border border-white/5"
                />

                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-2">
                    {selectedEvent.title}
                  </h2>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <div className="flex items-center gap-2 text-gray-400 font-inter text-sm bg-white/5 px-3 py-1 rounded border border-white/10">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      {selectedEvent.date}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 font-inter text-sm bg-white/5 px-3 py-1 rounded border border-white/10">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      {selectedEvent.time}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 font-inter text-sm bg-white/5 px-3 py-1 rounded border border-white/10">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {selectedEvent.location}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 font-inter text-sm bg-white/5 px-3 py-1 rounded border border-white/10">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      {selectedEvent.attendees} CREW MEMBERS
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-orbitron text-cyan-500 tracking-wider mb-3 uppercase">MISSION_PARAMETERS</h3>
                    <p className="text-gray-300 font-inter leading-relaxed text-sm">
                      {selectedEvent.description}
                    </p>
                  </div>
                  
                  {selectedEvent.link && (
                    <div className="mt-8">
                      <a href={selectedEvent.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500 text-cyan-500 rounded font-orbitron tracking-wider transition-all duration-300">
                        {selectedEvent.isCompleted ? "REVIEW MEMORY LOG" : "ESTABLISH CONNECTION"}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                    </div>
                  )}
                </div>
                {/* Spacer to ensure bottom padding doesn't collapse */}
                <div className="h-8"></div>
              </div>
            </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default EventCards
