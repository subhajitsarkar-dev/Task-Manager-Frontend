import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="">App</div>
      <div className="">
        <Link href={"/"}>Home</Link>
        <Link href={"/dashboard"}>Dashboard</Link>
      </div>
    </div>
  );
};

export default Navbar;
