import { useState } from "react";

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        width: "250px",
        cursor: "pointer",
        position: "relative"
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={hovered && project.coverGif ? project.coverGif : project.coverImg ? project.coverImg : "/p123/ProjectsMedia/placeholder.jpg"}
        alt={project.title}
        style={{ width: "100%", display: "block" }}
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