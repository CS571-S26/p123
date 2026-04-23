import ProjectCard from "./projectCard";
import { colors } from "../design-system/tokens/colors";

export default function Section({ title, id, projects }) {
  return (
    <section id={id} className="py-10 space-y-6">
      {/* Title */}
      <h2 className={`text-2xl font-semibold ${colors.text.primary}`}>
        {title}
      </h2>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}