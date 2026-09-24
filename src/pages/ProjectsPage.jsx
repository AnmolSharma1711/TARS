import React, { useState, useMemo } from "react";
import { Search, X, Filter } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { projectsData } from "../data/projectsData.js";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

const CATEGORIES = [
  "ALL",
  "ROBOTICS",
  "AUTONOMOUS SYSTEMS",
  "AI & SUMMIT",
  "IOT & WEB",
  "EXPO & COMPETITION",
  "APPS & EXTENSIONS"
];

function matchesCategory(projectCategory, filter) {
  if (filter === "ALL") return true;
  const cat = (projectCategory || "").toUpperCase();
  if (filter === "ROBOTICS") return cat.includes("ROBOTICS") && !cat.includes("COMPETITION");
  if (filter === "AUTONOMOUS SYSTEMS") return cat.includes("AUTONOMOUS");
  if (filter === "AI & SUMMIT") return cat.includes("AI");
  if (filter === "IOT & WEB") return cat.includes("IOT") || cat.includes("WEB");
  if (filter === "EXPO & COMPETITION") return cat.includes("EXPO") || cat.includes("COMPETITION");
  if (filter === "APPS & EXTENSIONS") return cat.includes("APP") || cat.includes("EXTENSION");
  return true;
}

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCat = matchesCategory(project.category, activeCategory);
      if (!matchesCat) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const titleMatch = project.title?.toLowerCase().includes(q);
      const devMatch = project.developer?.toLowerCase().includes(q);
      const techMatch = project.technologies?.toLowerCase().includes(q);
      const descMatch = project.description?.toLowerCase().includes(q);

      return titleMatch || devMatch || techMatch || descMatch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="w-full min-h-screen py-16 px-4">
      {/* Page Header */}
      <ScrollReveal direction="down">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <div className="font-orbitron telemetry-small mb-2 text-cyan-500 tracking-widest text-sm">
            SYS.DIR // PROJECTS
          </div>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 text-gradient">
            MISSION ARCHIVES
          </h2>
          <div className="title-underline mx-auto"></div>
          <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-3xl mx-auto font-orbitron telemetry-small">
            Explore classified mission archives and cutting-edge technologies engineered by STAR Command.
          </p>
        </div>
      </ScrollReveal>

      {/* Search and Category Filter Toolbar */}
      <div className="max-w-7xl mx-auto mb-12 space-y-6">
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-cyan-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH BY MISSION, TECH, OR OPERATIVE..."
              className="w-full pl-12 pr-10 py-3.5 bg-black/60 border border-cyan-500/30 rounded-xl text-white font-orbitron text-xs sm:text-sm tracking-wider placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,229,255,0.25)] transition-all backdrop-blur-md"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 p-1 text-gray-400 hover:text-white transition-colors"
                aria-label="Clear Search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-orbitron text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-300 border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,229,255,0.4)]"
                    : "bg-black/40 text-gray-400 border border-white/10 hover:border-cyan-500/40 hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center text-xs font-orbitron text-cyan-500/70 tracking-widest px-2">
          <span>STATUS: ONLINE</span>
          <span>
            SHOWING {filteredProjects.length} OF {projectsData.length} MISSIONS
          </span>
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} direction="up" delay={index * 0.05}>
              <CardContainer className="inter-var w-full">
                <CardBody className="bg-black/40 backdrop-blur-md relative group/card hover:shadow-2xl hover:shadow-cyan-500/20 border-cyan-500/30 w-full h-auto rounded-xl p-6 border transition-all duration-500">
                  <div className="flex justify-between items-start mb-2">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-orbitron font-bold text-white group-hover/card:text-yellow-400 transition-colors"
                    >
                      {project.title}
                    </CardItem>
                  </div>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-400 text-sm font-inter mb-4"
                  >
                    LEAD ENGINEER:{" "}
                    <span className="text-cyan-400 font-semibold">
                      {project.developer}
                    </span>
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-2 relative">
                    <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity z-10 rounded-xl pointer-events-none"></div>
                    <img
                      src={project.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl grayscale-[30%] group-hover/card:grayscale-0 transition-all duration-500"
                      alt={project.title}
                      loading="lazy"
                    />
                  </CardItem>
                  <div className="flex justify-center items-center mt-6">
                    <CardItem
                      translateZ={20}
                      as="button"
                      onClick={() => setSelectedProject(project)}
                      className="px-6 py-2 rounded border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 text-sm font-orbitron tracking-wider uppercase transition-all cursor-pointer"
                    >
                      Access File
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </ScrollReveal>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="max-w-md mx-auto text-center py-20 px-4 bg-black/40 border border-cyan-500/20 rounded-2xl backdrop-blur-md">
          <Filter className="w-12 h-12 text-cyan-400/50 mx-auto mb-4" />
          <h3 className="text-xl font-orbitron font-bold text-white mb-2">
            NO MISSIONS LOCATED
          </h3>
          <p className="text-sm font-inter text-gray-400 mb-6">
            No telemetry records match your current search and filter criteria.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("ALL");
            }}
            className="px-6 py-2.5 bg-cyan-500/10 border border-cyan-500 text-cyan-300 font-orbitron text-xs tracking-wider uppercase rounded hover:bg-cyan-500/20 transition-all cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

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
                  className="absolute top-4 right-4 w-8 h-8 border border-cyan-500/30 rounded flex items-center justify-center hover:bg-cyan-500/20 transition-colors text-cyan-500 cursor-pointer"
                  aria-label="Close Modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="font-orbitron text-cyan-500/70 text-xs tracking-[0.3em] mb-6">
                  PROJECT_FILE // {selectedProject.id || "DATA"}
                </div>

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-80 object-cover rounded-lg mb-8 border border-white/5"
                />

                {selectedProject.additionalImages &&
                  selectedProject.additionalImages.length > 0 && (
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {selectedProject.additionalImages.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`${selectedProject.title} - ${index + 1}`}
                          className="w-full h-auto object-cover rounded-lg border border-white/5"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  )}

                <div className="mb-8">
                  <span className="text-cyan-500 text-sm font-orbitron tracking-wider uppercase border border-cyan-500/30 px-3 py-1 rounded bg-cyan-500/10">
                    {selectedProject.category || "PROJECT"}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mt-4 mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-400 font-inter">
                    LEAD ENGINEER:{" "}
                    <span className="font-semibold text-yellow-400">
                      {selectedProject.developer}
                    </span>
                  </p>
                  {selectedProject.teamMembers && (
                    <div className="mt-4">
                      <p className="text-xs font-orbitron text-gray-500 tracking-wider mb-2">
                        OPERATIVE SQUAD:
                      </p>
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
                      <h3 className="text-sm font-orbitron text-cyan-500 tracking-wider mb-3">
                        MISSION_PARAMETERS
                      </h3>
                      <p className="text-gray-300 font-inter leading-relaxed text-sm">
                        {selectedProject.description}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-orbitron text-cyan-500 tracking-wider mb-3">
                        TECH_STACK
                      </h3>
                      <p className="text-white font-inter text-sm bg-white/5 border border-white/10 p-3 rounded">
                        {selectedProject.technologies}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-orbitron text-cyan-500 tracking-wider mb-3">
                      ACCESS_LINKS
                    </h3>
                    <div className="flex flex-col gap-3">
                      {selectedProject.links?.website &&
                        selectedProject.links.website !== "#" && (
                          <a
                            href={selectedProject.links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-500 rounded font-orbitron text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                          >
                            LIVE SYSTEM
                          </a>
                        )}
                      {selectedProject.links?.github && (
                        <a
                          href={selectedProject.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white rounded font-orbitron text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                        >
                          REPOSITORY
                        </a>
                      )}
                      {selectedProject.links?.apk && (
                        <a
                          href={selectedProject.links.apk}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 rounded font-orbitron text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                        >
                          DOWNLOAD APK
                        </a>
                      )}
                      {(!selectedProject.links ||
                        Object.keys(selectedProject.links).length === 0) && (
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
