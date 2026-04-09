import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/project/${project.title}`)}
      style={{
        width: "250px",
        height: "250px",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden"
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={hovered && project.coverGif ? project.coverGif : project.coverImg ? project.coverImg : "/p123/ProjectsMedia/placeholder.jpg"}
        alt={project.title}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />

      {hovered && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            background: "rgba(0,0,0,0.6)",
            color: "white",
            textAlign: "center",
            padding: "5px"
          }}
        >
          {project.title}
        </div>
      )}
    </div>
  );
}