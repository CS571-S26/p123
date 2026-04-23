import projects from "../data/projects";
import Section from "../components/section";
import Hero from "../components/hero.jsx";

export default function Home() {
  const grouped = {
    modeling: projects.filter((p) => p.category === "modeling"),
    design: projects.filter((p) => p.category === "design"),
    game: projects.filter((p) => p.category === "game"),
  };

  return (
    <>
      <Hero />
      <div className="px-6 py-12 space-y-16">
        <Section title="3D Modeling" id="modeling" projects={grouped.modeling} />
        <Section title="Design" id="design" projects={grouped.design} />
        <Section title="Game Dev" id="game" projects={grouped.game} />
      </div>
    </>
  );
}