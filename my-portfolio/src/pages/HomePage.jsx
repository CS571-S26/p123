import projects from "../data/projects.js";
import Hero from "../components/Hero.jsx";
import CategoryCard from "../components/categoryCard.jsx";
import About from "../components/About.jsx";
import { colors } from "../design-system/tokens/colors.js";

export default function Home() {
  const categories = ["modeling", "design", "game"];

  return (
    <>
      <Hero />
      <About />
      {/* Category Section */}
      <div className="px-6 py-16 max-w-6xl mx-auto">
        <h2 id="my-work" className={`text-3xl font-bold mb-8 text-center ${colors.text.primary}`}>
          Explore My Work
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          <CategoryCard
            title="3D Modeling"
            image="/p123/ProjectsMedia/Wodger/front.jpg"
            route="/projects/modeling"
          />

          <CategoryCard
            title="Graphic Design"
            image="/p123/ProjectsMedia/Broadsheet/Scranton-Times-Broadsheet.jpg"
            route="/projects/design"
          />

          <CategoryCard
            title="Game Development"
            image="/p123/ProjectsMedia/placeholder.jpg"
            route="/projects/game"
          />

        </div>
      </div>
    </>
  );
}