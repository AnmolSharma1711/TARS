import { Github, Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'President & AI Lead',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    email: 'alex@tars.edu',
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Vice President & Robotics',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    email: 'sarah@tars.edu',
  },
  {
    id: 3,
    name: 'Marcus Rivera',
    role: 'Technical Lead',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    email: 'marcus@tars.edu',
  },
  {
    id: 4,
    name: 'Emily Park',
    role: 'ML Research Head',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    email: 'emily@tars.edu',
  },
  {
    id: 5,
    name: 'David Kumar',
    role: 'IoT Specialist',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    email: 'david@tars.edu',
  },
  {
    id: 6,
    name: 'Lisa Zhang',
    role: 'Automation Engineer',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    email: 'lisa@tars.edu',
  },
];

export default function TeamPage() {
  return (
    <div className="page team-page">
      <div className="page-header">
        <h1 className="page-title">Our Team</h1>
        <p className="page-description">Meet the brilliant minds behind TARS</p>
        <div className="title-underline"></div>
      </div>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="card">
            <div className="top-section">
              <div className="profile-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="social-media">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="svg" size={24} />
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="svg" size={24} />
                  </a>
                )}
              </div>
            </div>
            <div className="bottom-section">
              <span className="title">{member.name}</span>
              <div className="row">
                <div className="item">
                  <span className="big-text">{member.role.split(' ')[0]}</span>
                  <span className="regular-text">{member.role.split(' ').slice(1).join(' ')}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
