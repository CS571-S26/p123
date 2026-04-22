import ProjectCard from "./projectCard";

function Section({ title, id, projects }) {
  return (
    <section id={id} className="py-10 px-5 scroll-mt-12">
      <h2 className="text-2xl font-semibold mb-6 tracking-tight">
        {title}
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Section;