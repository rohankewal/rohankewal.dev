import portfolio from "../data/projects";
import ProjectsItem from "./ProjectsItem";
import Title from "./Title";

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <Title>Projects</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {portfolio.map((project) => (
          <ProjectsItem
            key={project.title}
            title={project.title}
            description={project.description}
            stack={project.stack}
            link={project.link}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </div>
  );
}
