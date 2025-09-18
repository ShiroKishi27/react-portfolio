import { useEffect, useRef } from "react";

function AnimateOnScroll({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("active");
        } else {
          ref.current.classList.remove("active");
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" },
    );
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}

export default AnimateOnScroll;
