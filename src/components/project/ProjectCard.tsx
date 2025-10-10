import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import ProjectItem from "./ProjectItem";

const ProjectCard = () => {
  return (
    <>
      <Card className="p-4 bg-card/10 gap-2">
        <div className="grid grid-cols-5 gap-4 place-content-center place-items-center font-semibold text-[15px]">
          <div className="">Project Name</div>
          <div className="">Description</div>
          <div className="">Members</div>
          <div className="">Created</div>
          <div className="">Action</div>
        </div>

        <Separator className="" />

        <div className="flex flex-col justify-center gap-3 ">
          {" "}
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </Card>
    </>
  );
};

export default ProjectCard;
