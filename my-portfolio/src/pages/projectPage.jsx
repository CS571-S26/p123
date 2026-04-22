import { useParams } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectPage() {
  const { title } = useParams();

  const project = projects.find((p) => p.title === title);

  if (!project) {
    return (
      <div className="px-6 py-20 text-center">
        <h1 className="text-2xl font-semibold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-3">{project.title}</h1>
      <p className="text-zinc-600 mb-10 leading-relaxed">
        {project.description}
      </p>

      {/* Media Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {project.images?.map((image, i) => (
          <img
            key={i}
            src={image}
            alt={`${project.title} ${i}`}
            className="w-full aspect-square object-cover rounded-lg shadow-md"
          />
        ))}

        {project.videos?.map((video, i) => (
          <video
            key={i}
            controls
            className="w-full aspect-square object-cover rounded-lg shadow-md"
          >
            <source src={video} />
          </video>
        ))}
      </div>
    </div>
  );
}