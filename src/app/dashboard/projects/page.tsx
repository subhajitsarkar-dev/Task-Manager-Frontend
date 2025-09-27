import CreateProject from "@/components/project/CreateProject";
import ProjectCard from "@/components/project/ProjectCard";
import React from "react";

const page = () => {
  return (
    <>
      <div className="space-y-5 mt-12">
        <CreateProject />
        <ProjectCard />
      </div>
    </>
  );
};

export default page;
