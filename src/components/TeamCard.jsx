import React, { useState, useEffect } from 'react'
import './TeamCard.css'
import { patronData, mentorsData, externalMentorData } from '../data/mentorsData'
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

  const renderCard = (member) => (
    <div 
      className="identity-terminal"
      onClick={() => handleMentorClick(member)}
    >
      <div className="terminal-hud-corners">
        <div className="hud-corner hud-corner-tl"></div>
        <div className="hud-corner hud-corner-tr"></div>
        <div className="hud-corner hud-corner-bl"></div>
        <div className="hud-corner hud-corner-br"></div>
      </div>
      
      <div className="terminal-image-wrapper">
        <div className="terminal-scanline"></div>
        <img src={member.image} alt={member.name} className="terminal-image" />
      </div>
      
      <div className="terminal-info">
        <div className="terminal-name">{member.name}</div>
        <div className="terminal-role">{member.role}</div>
        {member.subtitle && <div className="terminal-subtitle">{member.subtitle}</div>}
      </div>
      
      <div className="terminal-footer">
        <div className="terminal-status">
          <div className="pulse-dot"></div>
          ACTIVE
        </div>
        <div className="terminal-links">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              onClick={(e) => e.stopPropagation()}
            >
              LI
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              onClick={(e) => e.stopPropagation()}
              style={{ marginLeft: '10px' }}
            >
              GH
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="team" className="team-section">
      <div className="team-container">
        <div className="section-header">
          <div className="telemetry-small">SYSTEM.MEMBERS.QUERY()</div>
          <h2 className="team-title text-gradient glow">Our Team</h2>
          <p className="team-description text-gray-400 mt-2">Meet the brilliant minds behind STAR</p>
          <div className="title-underline glow-border"></div>
        </div>
        
        {/* Mentors Section */}
        <div className="mentors-section" style={{ marginBottom: '4rem' }}>
          <h3 className="section-subtitle text-cyan-500">Patron</h3>
          <div className="hierarchy-tree">
            <div className="hierarchy-level">
              <div className="node-wrapper">
                {renderCard(patronData)}
                <div className="hierarchy-line-down"></div>
              </div>
            </div>
            
            <h3 className="section-subtitle text-cyan-500" style={{ marginTop: '2rem' }}>Faculty Mentors</h3>
            <div className="hierarchy-level">
              <div className="hierarchy-horizontal-line"></div>
              <div className="hierarchy-nodes">
                {mentorsData.map((mentor) => (
                  <div key={mentor.id} className="node-wrapper">
                    <div className="hierarchy-line-up"></div>
                    {renderCard(mentor)}
                  </div>
                ))}
              </div>
            </div>

            <h3 className="section-subtitle text-cyan-500" style={{ marginTop: '4rem' }}>External Mentor</h3>
            <div className="hierarchy-level">
              <div className="node-wrapper">
                {renderCard(externalMentorData)}
              </div>
            </div>
          </div>
        </div>

        {/* Core Council Section */}
        <div className="council-section">
          <h3 className="section-subtitle text-cyan-500 text-center mb-8">Core Council</h3>
          
          <div className="hierarchy-tree">
            {/* President */}
            <div className="hierarchy-level">
              <div className="node-wrapper">
                {renderCard(coreCouncilData.president)}
                <div className="hierarchy-line-down"></div>
              </div>
            </div>

            {/* Vice President & Secretary */}
            <div className="hierarchy-level">
              <div className="hierarchy-horizontal-line wide-line"></div>
              <div className="hierarchy-nodes">
                {coreCouncilData.vicePresidentAndSecretary.map((member) => (
                  <div key={member.id} className="node-wrapper">
                    <div className="hierarchy-line-up"></div>
                    {renderCard(member)}
                    <div className="hierarchy-line-down"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Heads */}
            <div className="hierarchy-level mt-8">
              <div className="hierarchy-horizontal-line wide-line"></div>
              <div className="hierarchy-nodes" style={{ gap: '1rem', justifyContent: 'center' }}>
                {coreCouncilData.teamHeads.map((member) => (
                  <div key={member.id} className="node-wrapper" style={{ flex: '0 1 200px' }}>
                    <div className="hierarchy-line-up"></div>
                    {renderCard(member)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mentor Details Popup */}
      {selectedMentor && (
        <div className="mentor-popup-overlay" onClick={closePopup}>
          <div className="briefing-terminal" onClick={(e) => e.stopPropagation()}>
            <div className="briefing-header">
              <div className="telemetry-small" style={{ marginBottom: 0 }}>MISSION_FILE // PERSONNEL_DOSSIER</div>
              <button className="popup-close" onClick={closePopup}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="briefing-content max-h-[80vh] overflow-y-auto no-scrollbar">
              <div className="briefing-image-col">
                <div className="terminal-image-wrapper" style={{ margin: '0 auto', maxWidth: '250px' }}>
                  <div className="terminal-scanline"></div>
                  <img src={selectedMentor.image} alt={selectedMentor.name} className="terminal-image" style={{ filter: 'grayscale(20%) contrast(110%)' }} />
                </div>
              </div>
              
              <div className="briefing-info-col">
                <div style={{ marginBottom: '2rem' }}>
                  <h3 className="team-title text-gradient glow" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', lineHeight: '1.2' }}>{selectedMentor.name}</h3>
                  <div className="terminal-role" style={{ fontSize: '1.1rem', color: '#00E5FF', marginTop: '1rem' }}>{selectedMentor.role}</div>
                  {selectedMentor.subtitle && <div className="terminal-subtitle" style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>{selectedMentor.subtitle}</div>}
                </div>
                
                {selectedMentor.bio && (
                  <div className="briefing-section" style={{ marginBottom: '2rem' }}>
                    <div className="telemetry-small">BACKGROUND_INFO</div>
                    <p style={{ color: '#C0C0C0', fontSize: '0.95rem', lineHeight: '1.7' }}>{selectedMentor.bio}</p>
                  </div>
                )}
                
                {selectedMentor.expertise && selectedMentor.expertise.length > 0 && (
                  <div className="briefing-section" style={{ marginBottom: '2rem' }}>
                    <div className="telemetry-small">CORE_COMPETENCIES</div>
                    <div className="expertise-tags" style={{ marginTop: '0.5rem' }}>
                      {selectedMentor.expertise.map((skill, index) => (
                        <span key={index} className="expertise-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="briefing-section">
                  <div className="telemetry-small">COMM_CHANNELS</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
                    {selectedMentor.email && (
                      <a href={`mailto:${selectedMentor.email}`} className="cta-button" style={{ textDecoration: 'none' }}>
                        EMAIL_LINK
                        <div className="cta-glow"></div>
                      </a>
                    )}
                    {selectedMentor.linkedin && (
                      <a href={selectedMentor.linkedin} target="_blank" rel="noopener noreferrer" className="cta-button" style={{ textDecoration: 'none' }}>
                        LINKEDIN
                        <div className="cta-glow"></div>
                      </a>
                    )}
                    {selectedMentor.github && (
                      <a href={selectedMentor.github} target="_blank" rel="noopener noreferrer" className="cta-button" style={{ textDecoration: 'none' }}>
                        GITHUB
                        <div className="cta-glow"></div>
                      </a>
                    )}
                  </div>
                </div>
                {/* Spacer to ensure bottom padding doesn't collapse */}
                <div style={{ height: '2rem' }}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default TeamCard
