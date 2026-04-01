import { NavLink } from "react-router-dom";
import { FaChevronRight, FaDownload, FaRegEye } from "react-icons/fa";

function MobileMenu({ menuOpen, setMenuOpen }) {
  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Project", to: "/project" },
    { name: "Contact", to: "/contact" },
    {
      name: "View Resume",
      to: "/Heimsly_Calauagan_SoftwareEngineer_Resume.pdf",
    },
    {
      name: "Download Resume",
      to: "/Heimsly_Calauagan_SoftwareEngineer_Resume.pdf",
    },
  ];
  return (
    <>
      <div
        className={`fixed top-0 left-0 z-40 flex w-full flex-col items-center justify-center bg-[rgba(10,10,10,0.8)] transition-all duration-300 ease-in-out ${menuOpen ? "pointer-events-auto h-screen opacity-100" : "pointer-events-none h-0 opacity-0"}`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 cursor-pointer text-3xl text-white focus:outline-none"
          aria-label="Close Menu"
        >
          &times;
        </button>
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.to}
            target={
              link.to.startsWith(
                "/Heimsly_Calauagan_SoftwareEngineer_Resume.pdf",
              )
                ? "_blank"
                : "_self"
            }
            download={link.name === "Download Resume"}
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            end={link.to === "/"}
            className={`my-4 transform text-2xl font-semibold text-white transition-transform duration-300 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
          >
            {link.name}
          </NavLink>
        ))}
        {/* <div className="relative">
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
            <div className="absolute left-0 mt-2 w-50 rounded-lg border border-white/10 bg-[rgba(10,10,10,0.95)] shadow-lg backdrop-blur-lg">
              <a
                href="/HeimslyCalauaganJr-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white"
              >
                <FaRegEye className="mr-2 inline-block" />
                View Resume
              </a>

              <a
                href="/HeimslyCalauaganJr-Resume.pdf"
                download
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white"
              >
                <FaDownload className="mr-2 inline-block" />
                Download Resume
              </a>
            </div>
          )}
        </div> */}
      </div>
    </>
  );
}

export default MobileMenu;
