import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Autonomous Drone System',
    description: 'AI-powered drone navigation system using computer vision and deep learning for obstacle detection and path planning.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'ROS'],
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 2,
    title: 'Smart Home IoT Hub',
    description: 'Centralized IoT management system for automated home control with real-time monitoring and predictive analytics.',
    tech: ['Node.js', 'MQTT', 'React', 'MongoDB'],
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: 'https://github.com',
  },
  {
    id: 3,
    title: 'ML Gesture Recognition',
    description: 'Real-time hand gesture recognition system for controlling devices using machine learning and computer vision.',
    tech: ['Python', 'MediaPipe', 'Keras', 'Flask'],
    image: 'https://images.pexels.com/photos/7567565/pexels-photo-7567565.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 4,
    title: 'Industrial Robot Arm',
    description: 'Precision robotic arm with inverse kinematics for automated manufacturing and assembly line tasks.',
    tech: ['C++', 'Arduino', 'ROS', 'CAD'],
    image: 'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: 'https://github.com',
  },
  {
    id: 5,
    title: 'NLP Chatbot Framework',
    description: 'Advanced conversational AI framework with context awareness and multi-language support for enterprise applications.',
    tech: ['Python', 'Transformers', 'FastAPI', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 6,
    title: 'Predictive Maintenance AI',
    description: 'Machine learning model for predicting equipment failures in industrial settings using sensor data analysis.',
    tech: ['Python', 'Scikit-learn', 'Grafana', 'InfluxDB'],
    image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: 'https://github.com',
  },
];

export default function ProjectsPage() {
  return (
    <div className="page projects-page">
      <div className="page-header">
        <h1 className="page-title">Our Projects</h1>
        <p className="page-description">Innovation in action - explore our cutting-edge projects</p>
        <div className="title-underline"></div>
      </div>

      <div className="projects-container">
        <div className="projects-scroll">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay"></div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
