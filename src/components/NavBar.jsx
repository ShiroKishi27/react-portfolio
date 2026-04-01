import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronRight, FaDownload, FaRegEye } from "react-icons/fa";

function NavBar({ menuOpen, setMenuOpen, setResumeOpen, resumeOpen }) {
  const dropdownRef = useRef(null);
  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Project", to: "/project" },
    { name: "Contact", to: "/contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setResumeOpen(false);
      }
    }

    function handleScroll() {
      setResumeOpen(false);
    }
    console.log("Adding event listeners");

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="fixed top-0 z-40 w-full border-b border-white/10 bg-[rgba(10,10,10,0.8)] shadow-lg backdrop-blur-lg">
        <div className="mx-auto max-w-5xl px-8">
          <div className="flex h-16 items-center justify-between">
            <NavLink
              to="/"
              end
              className="relative px-3 py-2 font-mono text-xl font-bold text-gray-300 transition-colors duration-200 hover:text-white"
            >
              The{" "}
              <span className="bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </NavLink>
            <div
              className="relative z-40 h-5 w-7 cursor-pointer md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>
            <div className="hidden items-center space-x-8 md:flex">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `relative px-3 py-2 transition-colors duration-200 ${
                      isActive
                        ? "bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text font-bold text-transparent after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-linear-to-r after:from-blue-500 after:to-cyan-400 after:content-['']"
                        : "text-gray-300 hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setResumeOpen((prev) => !prev)}
                  className="flex items-center gap-1 px-3 py-2 text-gray-300 transition-colors duration-200 hover:text-white"
                >
                  Resume{" "}
                  <FaChevronRight
                    className={`transition-transform duration-200 ${resumeOpen ? "rotate-90" : ""}`}
                    size={12}
                  />
                </button>

                {resumeOpen && (
                  <div className="absolute right-0 mt-2 w-50 rounded-lg border border-white/10 bg-[rgba(10,10,10,0.95)] shadow-lg backdrop-blur-lg">
                    <a
                      href="/Heimsly_Calauagan_SoftwareEngineer_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white"
                    >
                      <FaRegEye className="mr-2 inline-block" />
                      View Resume
                    </a>

                    <a
                      href="/Heimsly_Calauagan_SoftwareEngineer_Resume.pdf"
                      download
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white"
                    >
                      <FaDownload className="mr-2 inline-block" />
                      Download Resume
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
