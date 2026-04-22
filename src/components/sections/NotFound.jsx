import { NavLink } from "react-router-dom";
import { MdSearchOff } from "react-icons/md";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 text-gray-400">
      <MdSearchOff size={50} />
      <h1 className="mb-2">Page Not Found</h1>
      <NavLink
        to={"/"}
        className="relative overflow-hidden rounded-full bg-linear-to-r from-blue-800 to-cyan-400 px-5 py-2 font-bold tracking-wider text-white uppercase transition-all hover:translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
      >
        Back to Home Page
      </NavLink>
    </div>
  );
}
