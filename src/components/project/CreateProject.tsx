import { Button } from "../ui/button";

const CreateProject = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="text-2xl font-semibold text-primary text-shadow-2xs">
          Projects
        </div>
        <Button className="px-12 cursor-pointer" size={"lg"}>
          Create New Project
        </Button>
      </div>
    </>
  );
};

export default CreateProject;
