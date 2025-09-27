import Link from "next/link";
import { Moon } from "./svg/Icons";
import ThemeToggle from "./ThemeToggle";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  return (
    <nav className="p-4 flex items-center justify-between border-b-2">
      {/* Left */}
      <SidebarTrigger />
      {/* Right */}
      <div className="flex items-center gap-4">
        <Link href={"/dashboard"}>Dashboard</Link>
        <div className="flex items-center justify-center gap-3">
          <div className="size-10 bg-accent border-l-amber-900 rounded-full flex items-center justify-center">
            <h1 className="z-50 text-primary font-semibold">S</h1>
          </div>

          <h1 className="text-primary">Subhajit</h1>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
