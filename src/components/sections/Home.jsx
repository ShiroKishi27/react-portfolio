import AnimateOnScroll from "../AnimateOnScroll";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <section
      id="home"
      className="relative mb-20 flex min-h-screen items-center justify-center"
    >
      <AnimateOnScroll>
        <div className="z-10 px-6 text-center">
          <h1 className="mb-6 bg-gradient-to-r from-blue-800 to-cyan-400 bg-clip-text p-1 text-5xl font-bold text-transparent md:text-7xl">
            Hi, I'm Heimsly
          </h1>
          <p className="mx-auto mb-8 max-w-lg text-lg text-gray-400">
            I'm an aspiring Front-End Developer who loves to learn more for me
            to create a clean, scalable web applications. My goal is to improve
            my skill to create an interface that offers both a delightful user
            experience and exceptional performance.
          </p>
          <div className="flex justify-center space-x-4">
            <NavLink
              to={"/project"}
              className="transistion relative overflow-hidden rounded-4xl bg-blue-500 px-6 py-3 font-medium text-white hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Project
            </NavLink>
            <NavLink
              to={"/contact"}
              className="transistion relative rounded-4xl border border-blue-500/50 px-6 py-3 font-medium text-blue-500 hover:-translate-y-0.5 hover:bg-blue-500/30"
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
