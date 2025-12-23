import React from 'react'
import './TeamCard.css'
import { teamMembersData } from '../data/teamMembersData'

function TeamCard() {
  return (
    <section id="team" className="team-section">
      <div className="team-container">
        <h2 className="team-title text-gradient">Our Team</h2>
        <p className="team-description">Meet the brilliant minds behind TARS</p>
        <div className="title-underline"></div>
        
        <div className="team-grid">
          {teamMembersData.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-card-top">
                <div className="team-profile-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-social-media">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <svg className="team-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <svg className="team-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <div className="team-card-bottom">
                <span className="team-member-name">{member.name}</span>
                <div className="team-role-row">
                  <div className="team-role-item">
                    <span className="team-role-big">{member.role}</span>
                    <span className="team-role-small">{member.subtitle}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamCard
