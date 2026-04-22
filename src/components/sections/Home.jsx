import AnimateOnScroll from "../AnimateOnScroll";
import { NavLink } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

function Home() {
  return (
    <section
      id="home"
      className="relative mb-20 flex min-h-screen items-center justify-center"
    >
      <AnimateOnScroll>
        <div className="z-10 px-6 text-center">
          <h1 className="mb-6 bg-linear-to-r from-blue-800 to-cyan-400 bg-clip-text p-1 text-5xl font-bold text-transparent md:text-7xl">
            Hi, I'm Heimsly
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-center text-lg text-gray-400">
            I'm an aspiring Software Engineer specializing in{" "}
            <strong>Full-Stack Development</strong> and{" "}
            <strong>System Integration</strong>. From crafting logic-driven web
            interfaces to bridging software with <strong>IoT hardware</strong>,
            I build scalable solutions with a focus on clean architecture and
            performance.
          </p>

          <div className="flex justify-center space-x-4">
            <NavLink
              to={"/project"}
              className="relative overflow-hidden rounded-full bg-linear-to-r from-blue-800 to-cyan-400 px-8 py-3 font-bold tracking-wider text-white uppercase transition-all hover:translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              Explore Technical Work
            </NavLink>
            <NavLink
              to={"/contact"}
              className="relative rounded-full border border-blue-500/50 px-8 py-3 font-bold tracking-wider text-blue-400 uppercase transition hover:translate-y-0.5 hover:bg-blue-500/10"
            >
              Contact Me
            </NavLink>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}

export default Home;
