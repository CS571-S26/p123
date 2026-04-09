import ProjectCard from "./ProjectCard";

function Section({ title, id, projects }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2 id={id}>{title}</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px"
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Section;