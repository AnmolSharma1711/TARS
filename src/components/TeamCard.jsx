import React, { useState, useEffect } from 'react'
import './TeamCard.css'
import { patronData, mentorsData } from '../data/mentorsData'
import { coreCouncilData } from '../data/councilData'

function TeamCard() {
  const [selectedMentor, setSelectedMentor] = useState(null);

  const handleMentorClick = (mentor) => {
    setSelectedMentor(mentor);
  };

  const closePopup = () => {
    setSelectedMentor(null);
  };

  // Lock body scroll when popup is open
  useEffect(() => {
    if (selectedMentor) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedMentor]);

  const renderCard = (member, isMentor = false) => (
    <div 
      key={member.id} 
      className={`team-card ${isMentor ? 'mentor-card' : 'council-card'}`}
      onClick={isMentor ? () => handleMentorClick(member) : undefined}
      style={{ cursor: isMentor ? 'pointer' : 'default' }}
    >
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
              onClick={(e) => e.stopPropagation()}
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
              onClick={(e) => e.stopPropagation()}
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
            {member.subtitle && <span className="team-role-small">{member.subtitle}</span>}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="team" className="team-section">
      <div className="team-container">
        <h2 className="team-title text-gradient">Our Team</h2>
        <p className="team-description">Meet the brilliant minds behind TARS</p>
        <div className="title-underline"></div>
        
        {/* Mentors Section */}
        <div className="mentors-section">
          {/* Patron - 1 card centered */}
          <h3 className="section-subtitle">Patron</h3>
          <div className="patron-row">
            {renderCard(patronData, true)}
          </div>

          {/* Mentors - 2 cards */}
          <h3 className="section-subtitle">Faculty Mentors</h3>
          <div className="mentors-grid">
            {mentorsData.map((mentor) => renderCard(mentor, true))}
          </div>
        </div>

        {/* Core Council Section */}
        <div className="council-section">
          <h3 className="section-subtitle">Core Council</h3>
          
          {/* President */}
          <div className="council-row president-row">
            {renderCard(coreCouncilData.president, false)}
          </div>

          {/* Vice President & Secretary */}
          <div className="council-row vp-secretary-row">
            {coreCouncilData.vicePresidentAndSecretary.map((member) => renderCard(member, false))}
          </div>

          {/* Team Heads */}
          <div className="council-row team-heads-row">
            {coreCouncilData.teamHeads.map((member) => renderCard(member, false))}
          </div>
        </div>
      </div>

      {/* Mentor Details Popup */}
      {selectedMentor && (
        <div className="mentor-popup-overlay" onClick={closePopup}>
          <div className="mentor-popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="popup-content">
              <div className="popup-header">
                <div className="popup-image">
                  <img src={selectedMentor.image} alt={selectedMentor.name} />
                </div>
                <div className="popup-info">
                  <h3>{selectedMentor.name}</h3>
                  <p className="popup-role">{selectedMentor.role}</p>
                  {selectedMentor.subtitle && <p className="popup-subtitle">{selectedMentor.subtitle}</p>}
                </div>
              </div>
              
              <div className="popup-body">
                <div className="popup-section">
                  <h4>About</h4>
                  <p>{selectedMentor.bio}</p>
                </div>
                
                <div className="popup-section">
                  <h4>Areas of Expertise</h4>
                  <div className="expertise-tags">
                    {selectedMentor.expertise.map((skill, index) => (
                      <span key={index} className="expertise-tag">{skill}</span>
                    ))}
                  </div>
                </div>
                
                <div className="popup-section">
                  <h4>Contact</h4>
                  <p className="popup-email">{selectedMentor.email}</p>
                </div>
                
                <div className="popup-social">
                  {selectedMentor.linkedin && (
                    <a href={selectedMentor.linkedin} target="_blank" rel="noopener noreferrer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      LinkedIn
                    </a>
                  )}
                  {selectedMentor.github && (
                    <a href={selectedMentor.github} target="_blank" rel="noopener noreferrer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default TeamCard
