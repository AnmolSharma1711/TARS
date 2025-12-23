import React from 'react'
import './EventCards.css'
import { eventsData } from '../data/eventsData'

function EventCards() {
  return (
    <section className="events-section">
      <div className="events-container">
        <h2 className="events-title text-gradient">Upcoming Events</h2>
        <p className="events-description">Join us in our exciting tech events and workshops</p>
        <div className="title-underline"></div>

        <div className="events-grid">
          {eventsData.map((event) => (
            <div key={event.id} className="event-card">
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
                      <span>{event.attendees} attendees expected</span>
                    </div>
                  </div>
                  <button className="event-register-btn">Register Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventCards
