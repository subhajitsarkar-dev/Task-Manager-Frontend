import { Card } from "../ui/card";
import ProjectItem from "./ProjectItem";

const ProjectCard = () => {
  return (
    <>
      <Card className="p-4 bg-card/10 gap-2">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </Card>
    </>
  );
};

export default ProjectCard;
