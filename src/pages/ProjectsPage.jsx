import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { projectsData } from "../data/projectsData.js";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="w-full min-h-screen py-20 px-4">
      <ScrollReveal direction="down">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="font-orbitron telemetry-small mb-2 text-cyan-500 tracking-widest text-sm">SYS.DIR // PROJECTS</div>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 text-gradient">
            MISSION ARCHIVES
          </h2>
          <div className="title-underline mx-auto"></div>
          <p className="text-lg md:text-xl text-gray-400 mt-6 max-w-3xl mx-auto font-orbitron telemetry-small" style={{color:'white'}}>
            Explore the classified mission archives and cutting-edge technologies engineered by STAR Command.
          </p>
        </div>
      </ScrollReveal>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
        {projectsData.map((project, index) => (
          <ScrollReveal key={project.id} direction="up" delay={index * 0.1}>
            <CardContainer className="inter-var w-full">
              <CardBody className="bg-black/40 backdrop-blur-md relative group/card hover:shadow-2xl hover:shadow-cyan-500/20 border-cyan-500/30 w-full h-auto rounded-xl p-6 border transition-all duration-500">
                <CardItem
                  translateZ="50"
                  className="text-xl font-orbitron font-bold text-white mb-2 group-hover/card:text-yellow-400 transition-colors"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-gray-400 text-sm font-inter mb-4"
                >
                  LEAD ENGINEER: <span className="text-cyan-500 font-semibold">{project.developer}</span>
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4 relative">
                  <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity z-10 rounded-xl"></div>
                  <img
                    src={project.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl grayscale-[30%] group-hover/card:grayscale-0 transition-all duration-500"
                    alt={project.title}
                  />
                </CardItem>
                <div className="flex justify-center items-center mt-8">
                  <CardItem
                    translateZ={20}
                    as="button"
                    onClick={() => setSelectedProject(project)}
                    className="px-6 py-2 rounded border border-cyan-500/50 text-cyan-500 hover:bg-cyan-500/20 text-sm font-orbitron tracking-wider uppercase transition-all"
                  >
                    Access File
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </ScrollReveal>
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
              className="fixed inset-0 bg-black/90 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            />
            <div 
              className="relative min-h-screen flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-neutral-950 border border-cyan-500/30 rounded-xl max-w-4xl w-full my-8 p-8 relative z-10 shadow-[0_0_50px_rgba(0,122,255,0.1)]"
                onClick={(e) => e.stopPropagation()}
              >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 border border-cyan-500/30 rounded flex items-center justify-center hover:bg-cyan-500/20 transition-colors text-cyan-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="font-orbitron text-cyan-500/70 text-xs tracking-[0.3em] mb-6">PROJECT_FILE // {selectedProject.id || 'DATA'}</div>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg mb-8 border border-white/5"
              />

              {selectedProject.additionalImages && selectedProject.additionalImages.length > 0 && (
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {selectedProject.additionalImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${selectedProject.title} - ${index + 1}`}
                      className="w-full h-auto object-cover rounded-lg border border-white/5"
                    />
                  ))}
                </div>
              )}

              <div className="mb-8">
                <span className="text-cyan-500 text-sm font-orbitron tracking-wider uppercase border border-cyan-500/30 px-3 py-1 rounded bg-cyan-500/10">
                  {selectedProject.category || 'PROJECT'}
                </span>
                <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mt-4 mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-400 font-inter">
                  LEAD ENGINEER: <span className="font-semibold text-yellow-400">{selectedProject.developer}</span>
                </p>
                {selectedProject.teamMembers && (
                  <div className="mt-4">
                    <p className="text-xs font-orbitron text-gray-500 tracking-wider mb-2">OPERATIVE SQUAD:</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.teamMembers.map((member, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 rounded text-xs font-inter"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-sm font-orbitron text-cyan-500 tracking-wider mb-3">MISSION_PARAMETERS</h3>
                    <p className="text-gray-300 font-inter leading-relaxed text-sm">
                      {selectedProject.description}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-orbitron text-cyan-500 tracking-wider mb-3">TECH_STACK</h3>
                    <p className="text-white font-inter text-sm bg-white/5 border border-white/10 p-3 rounded">
                      {selectedProject.technologies}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-orbitron text-cyan-500 tracking-wider mb-3">ACCESS_LINKS</h3>
                  <div className="flex flex-col gap-3">
                    {selectedProject.links?.website && selectedProject.links.website !== "#" && (
                      <a href={selectedProject.links.website} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-500 rounded font-orbitron text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                        LIVE SYSTEM
                      </a>
                    )}
                    {selectedProject.links?.github && (
                      <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white rounded font-orbitron text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                        REPOSITORY
                      </a>
                    )}
                    {(!selectedProject.links || (Object.keys(selectedProject.links).length === 0)) && (
                      <p className="text-gray-500 font-inter text-xs border border-dashed border-gray-700 p-3 text-center">
                        NO EXTERNAL LINKS AVAILABLE
                      </p>
                    )}
                  </div>
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
