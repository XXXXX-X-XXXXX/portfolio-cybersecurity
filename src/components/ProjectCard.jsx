import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  const hasProjectLink = project.url && project.url !== "#";

  return (
    <motion.div
      className="bg-[#1F232A] rounded-2xl shadow-lg p-5 md:p-6 flex flex-col gap-3 group hover:scale-105 transition-all duration-200 w-full mx-auto border border-[#9CA3AF22] hover:shadow-2xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, type: "spring" }}
    >
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-36 md:h-40 rounded-xl object-cover mb-1 border border-[#2e333a]"
        style={{ background: "#23262a" }}
      />
      <div className="font-bold text-lg md:text-xl text-gray-100">{project.title}</div>
      <div className="text-gray-400 text-sm md:text-base mb-2">{project.description}</div>
      <div className="flex gap-2 flex-wrap mt-auto mb-2">
        {project.tags.map(tag => (
          <span key={tag} className="px-2 md:px-3 py-1 bg-[#9CA3AF22] text-[#9CA3AF] rounded-lg text-xs md:text-sm font-semibold">
            {tag}
          </span>
        ))}
      </div>

      {hasProjectLink ? (
        <button
          onClick={() => navigate(project.url)}
          className="mt-1 px-4 py-2 rounded-lg bg-[#9CA3AF] text-[#23262a] font-semibold transition hover:bg-[#ececec] text-sm"
        >
          Learn more
        </button>
      ) : (
        project.details && (
          <>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="mt-1 px-4 py-2 rounded-lg bg-[#9CA3AF] text-[#23262a] font-semibold transition hover:bg-[#ececec] text-sm"
            >
              {showDetails ? "Close" : "Learn more"}
            </button>
            <AnimatePresence>
              {showDetails && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 p-3 rounded-lg text-gray-300 bg-[#23262a] text-left text-sm shadow-inner"
                  style={{ overflow: "hidden" }}
                >
                  {project.details}
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )
      )}
    </motion.div>
  );
}