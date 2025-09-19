import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ArrowUp() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const scrollToTop = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      onClick={scrollToTop}
      className={`${
        scrolled ? "" : "hidden"
      } group fixed right-6 bottom-6 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/70 font-bold text-black hover:translate-y-1 sm:right-10 sm:bottom-10`}
    >
      <span className="absolute bottom-full left-1/2 mb-2 hidden w-20 -translate-x-1/2 rounded bg-gray-800 px-2 py-1 text-center text-xs text-white shadow transition-all group-hover:block">
        Back to Top
      </span>
      ↑
    </div>
  );
}

export default ArrowUp;
