import { NavLink } from "react-router-dom";

function MobileMenu({ menuOpen, setMenuOpen }) {
  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Project", to: "/project" },
    { name: "Contact", to: "/contact" },
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
            key={link.to}
            to={link.to}
            onClick={() => setMenuOpen(false)}
            end={link.to === "/"}
            className={`my-4 transform text-2xl font-semibold text-white transition-transform duration-300 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default MobileMenu;
