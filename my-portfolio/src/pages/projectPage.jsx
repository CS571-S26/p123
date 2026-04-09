import { useParams } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectPage() {
  const { title } = useParams();

  const project = projects.find((p) => p.title === title);

  if (!project) return <h1>Project not found</h1>;

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", marginTop: "20px" }}>        
        {project.images && project.images.map((image, i) => (
          <img
            key={i}
            src={image}
            alt={`${project.title} ${image}`}
            style={{ width: "100%", borderRadius: "8px" }}
          />
        ))}

        {project.videos && project.videos.map((video, i) => (
          <video
            key={i}
            controls
            style={{ width: "100%", borderRadius: "8px" }}
          >
            <source src={video} />
          </video>
        ))}
      </div>
    </div>
  );
}
