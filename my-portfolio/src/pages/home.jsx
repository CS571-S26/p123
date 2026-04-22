import projects from "../data/projects";
import Section from "../components/section.jsx";
import Hero from "../components/hero.jsx";

export default function Home() {
  const groupedProjects = {
    modeling: projects.filter((p) => p.category === "modeling"),
    design: projects.filter((p) => p.category === "design"),
    game: projects.filter((p) => p.category === "game"),
  };

  return (
    <>
    <Hero />
    <div className="px-5 py-10">
      <Section
        title="3D Modeling"
        id="modeling"
        projects={groupedProjects.modeling}
      />

      <Section
        title="Design"
        id="design"
        projects={groupedProjects.design}
      />

      <Section
        title="Game Dev"
        id="game"
        projects={groupedProjects.game}
      />
    </div>
    </>
  );
}