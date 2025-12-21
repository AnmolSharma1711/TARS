import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import React from "react";

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
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2940&auto=format&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 2,
    title: 'Smart Home IoT Hub',
    description: 'Centralized IoT management system for automated home control with real-time monitoring and predictive analytics.',
    tech: ['Node.js', 'MQTT', 'React', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2940&auto=format&fit=crop',
    github: 'https://github.com',
  },
  {
    id: 3,
    title: 'ML Gesture Recognition',
    description: 'Real-time hand gesture recognition system for controlling devices using machine learning and computer vision.',
    tech: ['Python', 'MediaPipe', 'Keras', 'Flask'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2865&auto=format&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 4,
    title: 'Industrial Robot Arm',
    description: 'Precision robotic arm with inverse kinematics for automated manufacturing and assembly line tasks.',
    tech: ['C++', 'Arduino', 'ROS', 'CAD'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2940&auto=format&fit=crop',
    github: 'https://github.com',
  },
  {
    id: 5,
    title: 'NLP Chatbot Framework',
    description: 'Advanced conversational AI framework with context awareness and multi-language support for enterprise applications.',
    tech: ['Python', 'Transformers', 'FastAPI', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2906&auto=format&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 6,
    title: 'Predictive Maintenance AI',
    description: 'Machine learning model for predicting equipment failures in industrial settings using sensor data analysis.',
    tech: ['Python', 'Scikit-learn', 'Grafana', 'InfluxDB'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop',
    github: 'https://github.com',
  },
];

const ProjectContent = ({ project }: { project: Project }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {project.title}
        </span>{" "}
        - {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-6 justify-center">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-8 justify-center">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-80 transition"
          >
            View on GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-cyan-500 text-white rounded-lg font-medium hover:opacity-80 transition"
          >
            Live Demo
          </a>
        )}
      </div>
      <img
        src={project.image}
        alt={project.title}
        className="md:w-2/3 md:h-2/3 h-full w-full mx-auto object-cover rounded-2xl mt-8"
      />
    </div>
  );
};

export default function ProjectsPage() {
  const cards = projects.map((project, index) => (
    <Card
      key={project.id}
      card={{
        src: project.image,
        title: project.title,
        category: project.tech[0],
        content: <ProjectContent project={project} />,
      }}
      index={index}
    />
  ));

  return (
    <div className="page projects-page">
      <div className="page-header">
        <h1 className="page-title">Our Projects</h1>
        <p className="page-description">Innovation in action - explore our cutting-edge projects</p>
        <div className="title-underline"></div>
      </div>

      <div className="w-full h-full py-10">
        <Carousel items={cards} />
      </div>
    </div>
  );
}
