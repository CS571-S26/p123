import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";

export default function Home() {
  // Filter projects by category
  const modelingProjects = projects.filter(
    (p) => p.category === "modeling"
  );

  const designProjects = projects.filter(
    (p) => p.category === "design"
  );

  const gameProjects = projects.filter(
    (p) => p.category === "game"
  );

  return (
    <div style={{ padding: "20px" }}>
      <Section
        title="3D Modeling"
        id="modeling"
        projects={modelingProjects}
      />

      <Section
        title="Design"
        id="design"
        projects={designProjects}
      />

      <Section
        title="Game Dev"
        id="games"
        projects={gameProjects}
      />
    </div>
  );
}