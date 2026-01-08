// Core Council Data - Student leadership team
// Hierarchical structure: President -> VP & Secretary -> Team Heads
// These cards are clickable and show detailed popup information

export const coreCouncilData = {
  president: {
    id: 11,
    name: 'Devansh Kumar Dhangar',
    role: 'President\nCybersecurity Lead',
    subtitle: '',
    image: '/Council_Member/Devansh_Kumar_Dhangar.png',
    linkedin: 'https://www.linkedin.com/in/devansh-kumar-dhangar-837b55223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/Roccodevil',
    bio: 'As President of STAR, Devansh leads the society with vision and dedication, driving innovation and collaboration across all technical domains. He oversees strategic initiatives, coordinates between different teams, and ensures that STAR continues to push the boundaries of technology and automation.',
    expertise: ['Leadership', 'Project Management', 'Strategic Planning', 'Team Coordination']
  },
  vicePresidentAndSecretary: [
    {
      id: 12,
      name: 'Akshat Gupta',
      role: 'Vice President\nIoT Lead',
      subtitle: '',
      image: '/Council_Member/Akshat_Gupta.png',
      linkedin: 'https://www.linkedin.com/in/akshat-gupta-88b129325',
      github: 'https://github.com/akshat-gupta-111',
      bio: 'As Vice President of STAR, Akshat plays a crucial role in supporting the society\'s mission and coordinating various technical initiatives. He works closely with team leads to ensure smooth execution of projects and events while fostering a culture of innovation and learning.',
      expertise: ['Technical Coordination', 'Event Management', 'Problem Solving', 'Student Mentorship']
    },
    {
      id: 13,
      name: 'Keerti',
      role: 'Secretary\nOperations Lead',
      subtitle: '',
      image: '/Council_Member/Keerti.png',
      linkedin: 'http://www.linkedin.com/in/keerti-yaduvanshi-4813b9280',
      github: 'https://github.com/Keerti-12',
      bio: 'As Secretary and Operations Lead of TARS, Keerti manages the administrative operations and ensures effective communication across the society. She maintains documentation, coordinates meetings, and handles outreach activities while supporting the technical teams in their initiatives.',
      expertise: ['Administration', 'Communication', 'Documentation', 'Team Coordination']
    }
  ],
  teamHeads: [
    {
      id: 14,
      name: 'Amrita',
      role: 'AIML Lead',
      subtitle: '',
      image: '/Council_Member/Amrita.png',
      linkedin: 'https://www.linkedin.com/in/amrita-singh-308333326/',
      github: 'https://github.com/Amritasingh600',
      bio: 'As AIML Lead, Amrita drives artificial intelligence and machine learning initiatives at TARS. She guides team members in developing cutting-edge AI projects, organizing workshops on neural networks and deep learning, and promoting research in emerging AI technologies.',
      expertise: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Python', 'Data Science']
    },
    {
      id: 21,
      name: 'Anmol Sharma',
      role: 'Synergy',
      subtitle: '',
      image: '/Council_Member/Anmol_Sharma.png',
      linkedin: 'https://www.linkedin.com/in/anmol-sharma-26a67b324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: 'https://github.com/AnmolSharma1711',
      bio: 'As Synergy Lead, Anmol works to foster collaboration and coordination between different teams within TARS. He ensures smooth communication, facilitates cross-functional projects, and helps create synergistic partnerships that amplify the impact of collective efforts.',
      expertise: ['Team Collaboration', 'Cross-functional Coordination', 'Project Integration', 'Communication', 'Partnership Building']
    },
    {
      id: 15,
      name: 'Utkarsh Agrawal',
      role: 'E-Sports/Gaming Lead',
      subtitle: '',
      image: '/Council_Member/Utkarsh_Agrawal.png',
      linkedin: 'https://www.linkedin.com/in/utkarsh-agrawal-508192326/',
      github: 'https://github.com/Utkarsh45650',
      bio: 'As E-Sports/Gaming Lead, Utkarsh bridges the gap between gaming and technology. He organizes competitive gaming events, explores game development technologies, and leads projects involving game AI, physics engines, and interactive simulations.',
      expertise: ['Game Development', 'Unity', 'Gaming Technology', 'Event Organization', 'Competitive Gaming']
    },
    {
      id: 16,
      name: 'Kushal Soni',
      role: 'Competitive Programming Lead',
      subtitle: '',
      image: '/Council_Member/Kushal_Soni.png',
      linkedin: 'https://www.linkedin.com/in/soni-kushal/',
      github: 'https://github.com/kushal-soni01',
      bio: 'As Competitive Programming Lead, Kushal spearheads Internet of Things projects and smart automation systems. He mentors students in embedded systems, sensor integration, and cloud connectivity, developing innovative solutions for smart homes and industrial automation.',
      expertise: ['IoT', 'Embedded Systems', 'Arduino', 'Raspberry Pi', 'Sensor Networks', 'Smart Automation']
    },
    {
      id: 17,
      name: 'Akshay Kumar',
      role: 'R&D Lead',
      subtitle: '',
      image: '/Council_Member/Akshay_Kumar.png',
      linkedin: 'https://www.linkedin.com/in/akshay-kumar-525560322/',
      github: 'https://github.com/AkshayKumar977',
      bio: 'As R&D Lead, Akshay focuses on research-driven innovation and experimental technologies. He leads exploratory projects, encourages scientific inquiry, and helps teams develop proof-of-concepts for novel technological solutions.',
      expertise: ['Research & Development', 'Innovation', 'Prototyping', 'Technical Writing', 'Experimental Technologies']
    },
    {
      id: 18,
      name: 'Madhav Garg',
      role: 'R&D Lead',
      subtitle: '',
      image: '/Council_Member/Madhav_Garg.png',
      linkedin: 'https://www.linkedin.com/in/madhav-garg-625402307?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      github: 'https://github.com/Madhav2005-Garg',
      bio: 'As R&D Lead, Madhav contributes to cutting-edge research initiatives and technical innovation at STAR. He collaborates on experimental projects, explores emerging technologies, and helps translate research concepts into practical applications.',
      expertise: ['Research Methodologies', 'Technology Innovation', 'Algorithm Development', 'Data Analysis', 'Technical Documentation']
    },
    {
      id: 19,
      name: 'Kushagra Agrawal',
      role: 'Outreach Lead',
      subtitle: '',
      image: '/Council_Member/Kushagra_Agrawal.png',
      linkedin: 'http://www.linkedin.com/in/kushagra-agrawal-87b193326',
      github: 'https://github.com/Kushagra-SethG',
      bio: 'As Outreach Lead, Kushagra manages external communications, partnerships, and community engagement for STAR. He coordinates with industry partners, organizes collaborative events, and promotes the society\'s achievements across various platforms.',
      expertise: ['Public Relations', 'Partnership Management', 'Community Building', 'Social Media', 'Event Marketing']
    },
    {
      id: 20,
      name: 'Rudraksha Sharma',
      role: 'Aeromodelling Lead',
      subtitle: '',
      image: '/Council_Member/Rudraksha.png',
      linkedin: 'https://www.linkedin.com/in/mr-rudraksha/',
      github: 'https://github.com/rudraksha-sh',
      bio: 'As Aeromodelling Lead, Rudraksha guides teams in designing and building aircraft models and drones. He leads workshops on aerodynamics, flight control systems, and UAV technology, fostering innovation in aerial robotics and autonomous flight systems.',
      expertise: ['Aeromodelling', 'Drone Technology', 'Aerodynamics', 'Flight Control', 'UAV Systems', 'RC Aircraft']
    },
    {
      id: 22,
      name: 'Pranav Jain',
      role: 'DevOps Lead',
      subtitle: '',
      image: '/Council_Member/Pranav_Jain.png',
      linkedin: 'https://www.linkedin.com/in/pranavjain2310/',
      github: 'https://github.com/PranavJa1n',
      bio: 'As a Team Head at TARS, Pranav contributes to the society\'s technical initiatives and helps drive innovation in various projects. He works closely with team members to foster a collaborative environment and ensure successful project delivery.',
      expertise: ['Technical Leadership', 'Project Management', 'Team Coordination', 'Innovation']
    },
    {
      id: 23,
      name: 'Kshitij Singh',
      role: 'Data Lead',
      subtitle: '',
      image: '/Council_Member/Kshitij_Singh.png',
      linkedin: 'https://www.linkedin.com/in/kshitij-singh-829576324/',
      github: 'https://github.com/kshitijp30',
      bio: 'As a Team Head at TARS, Kshitij plays a key role in leading technical projects and mentoring team members. He brings technical expertise and leadership skills to help advance the society\'s mission in technology and automation.',
      expertise: ['Technical Leadership', 'Team Development', 'Project Execution', 'Mentorship']
    }
  ]
};
