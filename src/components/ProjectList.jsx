import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch(
        `https://sherwoodprojectdata.blob.core.windows.net/tech-challenge/projects.json`
      );
      // setProjects(res.json());
      const data = await res.json();
      setProjects(data);
      // console.log(data);
    };
    fetchProjects();
  }, []);

  return (
    <div className="project-list">
      {/* Title */}
      <h3 className="project-list__title">Project List</h3>

      {/* Grid */}
      <div className="project-list__grid">
        {projects.map((project) => (
          <Card project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
