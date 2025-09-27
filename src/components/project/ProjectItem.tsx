"use client";

import { useRouter } from "next/navigation";
import { Delete, Edit, Users } from "../svg/Icons";
import { Separator } from "../ui/separator";

const ProjectItem = () => {
  const { push } = useRouter();
  return (
    <div className="space-y-2 hover:bg-primary/5 p-4 rounded-lg transition-all duration-300">
      <div className="grid grid-cols-5 gap-4 place-content-center place-items-center font-semibold text-[15px]">
        <div className="">Project Name</div>
        <div className="">Description</div>
        <div className="">Members</div>
        <div className="">Created</div>
        <div className="">Action</div>
      </div>
      <Separator className="" />

      <div className="grid grid-cols-5 gap-4 place-content-center place-items-center font-normal">
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
    </div>
  );
};

export default ProjectItem;
