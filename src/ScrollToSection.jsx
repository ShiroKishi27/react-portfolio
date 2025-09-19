import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Project from "./components/sections/Project";
import Contact from "./components/sections/Contact";

export default function ScrollToSection({ sectionId }) {
  const location = useLocation();

  useEffect(() => {
    const el = document.getElementById(sectionId);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }, [location, sectionId]);

  return (
    <>
      <Home />
      <About />
      <Project />
      <Contact />
    </>
  );
}
