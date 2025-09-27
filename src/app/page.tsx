import Pattern from "@/components/Pattern";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#020617] relative">
      {/* Cyan Radial Glow Background */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `radial-gradient(circle 500px at 50% 100px, rgba(6,182,212,0.4), transparent)`,
        }}
      />

      {/* Your Content/Components */}
      <div className="lg:max-w-5xl mx-auto relative z-10">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-4">
          <div className="font-semibold text-xl text-white">TaskPrime</div>
          <div className="flex gap-2 items-center">
            <Link href={"/login"}>
              <button
                className="
                  relative cursor-pointer rounded-xl border border-neutral-700 px-6             py-3 text-white
                  bg-transparent
                  shadow-md transition-shadow duration-300
                  hover:shadow-[0_18px_50px_rgba(6,182,212,0.22)]
    "
              >
                <div className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                Login
              </button>
            </Link>
            <Link href={"/signup"}>
              <button
                className="
                  relative cursor-pointer rounded-xl border border-neutral-700 px-6 py-3 text-white
                  bg-transparent shadow-md transition-shadow duration-300
                  hover:shadow-[0_18px_50px_rgba(6,182,212,0.22)]
    "
              >
                <div className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                Signup
              </button>
            </Link>
          </div>
        </nav>

        {/* Hero Title */}
        <div className="flex flex-col justify-center items-center px-6 my-20">
          <h1 className="text-6xl max-w-3xl text-center font-bold tracking-tight leading-16 bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-transparent">
            The Ultimate Task Manager to Boost Productivity
          </h1>
          <p className="max-w-xl text-center text-lg text-neutral-500 mt-10">
            Stay organized and boost productivity with TaskPrime. Create, track,
            and manage tasks effortlessly with a clean, intuitive interface
            designed to help you focus on what matters.
          </p>
          <div className="mt-8">
            <button
              className="
                  relative cursor-pointer rounded-xl border border-neutral-700 px-6             py-3 text-white
                  bg-transparent
                  shadow-md transition-shadow duration-300
                  hover:shadow-[0_18px_50px_rgba(6,182,212,0.22)]
    "
            >
              <div className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
