import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { projectsData } from "../data/projectsData.js";
import { motion, AnimatePresence } from "framer-motion";

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="w-full min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Our Accomplishments
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl">
          Explore the innovative accomplishments and cutting-edge technologies we're working on at STAR.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
        {projectsData.map((project) => (
          <CardContainer key={project.id} className="inter-var w-full">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-cyan-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white mb-4"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm dark:text-neutral-400 mb-4"
              >
                Developed by: <span className="text-cyan-500 dark:text-cyan-400 font-semibold">{project.developer}</span>
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={project.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                  alt={project.title}
                />
              </CardItem>
              <div className="flex justify-center items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  onClick={() => setSelectedProject(project)}
                  className="px-6 py-3 rounded-xl bg-cyan-500 dark:bg-cyan-600 text-white text-sm font-bold hover:bg-cyan-600 dark:hover:bg-cyan-700 transition-colors"
                >
                  Learn More →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {/* Modal for Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-lg"
              onClick={() => setSelectedProject(null)}
            />
            <div className="relative min-h-screen flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-neutral-900 rounded-2xl max-w-3xl w-full my-8 p-8 relative z-10"
                onClick={(e) => e.stopPropagation()}
              >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white dark:text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-contain rounded-xl mb-6"
              />

              {selectedProject.additionalImages && selectedProject.additionalImages.length > 0 && (
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {selectedProject.additionalImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${selectedProject.title} - ${index + 1}`}
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  ))}
                </div>
              )}

              <div className="mb-4">
                <span className="text-cyan-500 dark:text-cyan-400 text-sm font-semibold uppercase">
                  {selectedProject.category}
                </span>
                <h2 className="text-3xl font-bold text-neutral-800 dark:text-white mt-2">
                  {selectedProject.title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 mt-2">
                  Developed by: <span className="font-semibold text-cyan-600 dark:text-cyan-400">{selectedProject.developer}</span>
                </p>
                {selectedProject.teamMembers && (
                  <div className="mt-3">
                    <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Team Members:</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.teamMembers.map((member, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-xs font-medium"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-2">Description</h3>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-2">Technologies</h3>
                <p className="text-cyan-600 dark:text-cyan-400 font-medium">
                  {selectedProject.technologies}
                </p>
              </div>

              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-4">Links</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.links?.website && selectedProject.links.website !== "#" && (
                    <a
                      href={selectedProject.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      Website
                    </a>
                  )}
                  {selectedProject.links?.vercel && (
                    <a
                      href={selectedProject.links.vercel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-black hover:bg-neutral-800 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 22.525H0l12-21.05 12 21.05z" />
                      </svg>
                      Vercel
                    </a>
                  )}
                  {selectedProject.links?.apk && (
                    <a
                      href={selectedProject.links.apk}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.523 15.341l-.003-.001-5.52-3.189-5.521 3.189v-6.378l5.521-3.189 5.52 3.189.003 6.379zm-.003-8.14l-5.52-3.189-5.521 3.189V.823l5.521-3.189 5.52 3.189v6.378z"/>
                      </svg>
                      Download APK
                    </a>
                  )}
                  {selectedProject.links?.github && (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                  {!selectedProject.links && (
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm italic">
                      No external links available for this project.
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProjectsPage;

