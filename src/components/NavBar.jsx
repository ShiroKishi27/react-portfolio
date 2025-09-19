import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function NavBar({ menuOpen, setMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Project", to: "/project" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 z-40 w-full border-b border-white/10 bg-[rgba(10,10,10,0.8)] shadow-lg backdrop-blur-lg">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex h-16 items-center justify-between">
            <NavLink
              to="/"
              end
              className="relative px-3 py-2 font-mono text-xl font-bold text-gray-300 transition-colors duration-200 hover:text-white"
            >
              The{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </NavLink>
            {/* <a href="#home" className="font-mono text-xl font-bold text-white">
              The{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </a> */}
            <div
              className="relative z-40 h-5 w-7 cursor-pointer md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>
            <div className="hidden items-center space-x-8 md:flex">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `relative px-3 py-2 transition-colors duration-200 ${
                      isActive
                        ? "text-cyan-400 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-cyan-400 after:content-['']"
                        : "text-gray-300 hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            {/* <a
                href="#home"
                className="text-gray-300 transition-colors hover:text-white"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-300 transition-colors hover:text-white"
              >
                About
              </a>
              <a
                href="#project"
                className="text-gray-300 transition-colors hover:text-white"
              >
                Project
              </a>
              <a
                href="#contact"
                className="text-gray-300 transition-colors hover:text-white"
              >
                Contact
              </a> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
