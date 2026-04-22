import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingPage from "./components/LoadingPage";
import MobileMenu from "./components/MobileMenu";
import NavBar from "./components/NavBar";
import StarBackground from "./components/StarBackground";
import ArrowUp from "./components/ArrowUp";
import ScrollToSection from "./ScrollToSection";
import NotFound from "./components/sections/NotFound";
import { Toaster } from "sonner";
import { useSessionState } from "./hooks/useSessionState";

function App() {
  const [isLoaded, setIsLoaded] = useSessionState("app_loaded", false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingPage onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}
      >
        <StarBackground />
        <Toaster position="top-right" richColors theme="dark" />
        <NavBar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          resumeOpen={resumeOpen}
          setResumeOpen={setResumeOpen}
        />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ArrowUp />
      </div>
    </>
  );
}

export default App;
