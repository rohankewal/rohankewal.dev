import React from "react";
import portfolio from "../data/projects";
import PortfolioItem from "./ProjectsItem";
import Title from "./Title";

export default function Portfolio() {
  return (
    <div class="max-w-5xl w-11/12 mx-auto">
      <Title>Projects</Title>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.map((project) => (
            <PortfolioItem
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
