"use client";

import { useRouter } from "next/navigation";
import { Delete, Edit, Users } from "../svg/Icons";

const ProjectItem = () => {
  const { push } = useRouter();
  return (
    <div className="grid grid-cols-5 gap-4 place-content-center place-items-center font-normal py-2 hover:bg-gray-300 rounded-lg">
      <div className="text-primary">Random</div>
      <div className="">Description</div>
      <div className="gap-1 bg-primary text-primary-foreground flex items-center py-0.5 px-1.5 rounded-full font-medium text-xs">
        <Users />2
      </div>
      <div className="">Created</div>
      <div className="flex items-center gap-1.5">
        <Edit className="size-5 text-sky-300 drop-shadow-2xl" />
        <Delete className="size-5 text-destructive text-shadow-2xs" />
      </div>
    </div>
  );
};

export default ProjectItem;
