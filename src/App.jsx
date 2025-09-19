import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingPage from "./components/LoadingPage";
import MobileMenu from "./components/MobileMenu";
import NavBar from "./components/NavBar";
import StarBackground from "./components/StarBackground";
import ArrowUp from "./components/ArrowUp";
import ScrollToSection from "./ScrollToSection";

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
        <Routes>
          <Route path="/" element={<ScrollToSection sectionId="home" />} />
          <Route
            path="/about"
            element={<ScrollToSection sectionId="about" />}
          />
          <Route
            path="/project"
            element={<ScrollToSection sectionId="project" />}
          />
          <Route
            path="/contact"
            element={<ScrollToSection sectionId="contact" />}
          />
          <Route
            path="*"
            element={<h1 className="text-white">404 - Page Not Found</h1>}
          />
        </Routes>
        <ArrowUp />
      </div>
    </>
  );
}

export default App;
