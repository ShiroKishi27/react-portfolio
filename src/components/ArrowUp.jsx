import { useEffect, useState } from "react";

function ArrowUp() {
  const [scrolled, setScrolled] = useState(false);

  const scrollToTop = () => {
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
      className={`${scrolled ? "" : "hidden"} group fixed bottom-20 left-11/12 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/70 font-bold text-black hover:translate-y-1`}
    >
      <span className="absolute bottom-full left-1/2 mb-2 hidden w-25 -translate-x-1/2 rounded bg-gray-800 px-2 py-1 text-center text-sm text-white shadow transition-all group-hover:block">
        Back to Top
      </span>
      ↑
    </div>
  );
}

export default ArrowUp;
