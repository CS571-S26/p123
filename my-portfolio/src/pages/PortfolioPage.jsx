import { useParams } from "react-router-dom";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { colors } from "../design-system/tokens/colors";

export default function PortfolioPage() {
  const { category } = useParams();
  const titles = {
    modeling: "3D Modeling",
    design: "Graphic Design",
    game: "Game Development",
  };

  // Filter projects by category
  const filteredProjects = projects.filter(
    (p) => p.category === category
  );

  return (
    <div className={`min-h-screen ${colors.bg.base} ${colors.text.primary} px-6 py-12`}>
      <div className="max-w-6xl mx-auto">

        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-8">
          {titles[category] || "Projects"}
        </h1>

        {/* Empty state */}
        {filteredProjects.length === 0 ? (
          <p className="text-neutral-400">
            No projects found.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}