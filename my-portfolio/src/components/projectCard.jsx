import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../design-system/tokens/colors";

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const image =
    hovered && project.coverGif
      ? project.coverGif
      : project.coverImg || "/p123/ProjectsMedia/placeholder.jpg";

  return (
    <div
      onClick={() => navigate(`/project/${project.title}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative aspect-square overflow-hidden rounded-xl
        ${colors.bg.surface} shadow-md cursor-pointer
        hover:scale-[1.02] transition
      `}
    >
      {/* Image */}
      <img
        src={image}
        className="w-full h-full object-cover"
      />

      {/* Hover overlay */}
      <div
        className={`
          absolute inset-0 flex items-center justify-center
          ${colors.bg.overlay} ${colors.text.primary}
          font-semibold
          transition-opacity duration-300
          ${hovered ? "opacity-100" : "opacity-0"}
        `}
      >
        {project.title}
      </div>
    </div>
  );
}