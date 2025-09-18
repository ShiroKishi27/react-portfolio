import "./App.css";
import { useState } from "react";
import LoadingPage from "./components/LoadingPage";
import MobileMenu from "./components/MobileMenu";
import NavBar from "./components/NavBar";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Project from "./components/sections/Project";
import Contact from "./components/sections/Contact";
import StarBackground from "./components/StarBackground";
import ArrowUp from "./components/ArrowUp";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingPage onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}
      >
        <StarBackground />
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Project />
        <Contact />
        <ArrowUp />
      </div>
    </>
  );
}

export default App;
