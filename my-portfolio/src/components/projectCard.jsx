import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const imageSrc =
    hovered && project.coverGif
      ? project.coverGif
      : project.coverImg
      ? project.coverImg
      : "/p123/ProjectsMedia/placeholder.jpg";

  return (
    <div
      onClick={() => navigate(`/project/${project.title}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full aspect-square cursor-pointer overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02]"
    >
      <img
        src={imageSrc}
        alt={project.title}
        className="h-full w-full object-cover transition-all duration-300"
      />

      {/* Hover overlay */}
      <div
        className={`absolute inset-0 flex items-end justify-center bg-black/50 transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-full p-3 text-center text-white text-sm font-medium">
          {project.title}
        </div>
      </div>
    </div>
  );
}