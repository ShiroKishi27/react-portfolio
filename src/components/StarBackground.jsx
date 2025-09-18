import { useEffect, useState } from "react";

function StarBackground() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    generateStars();

    const resizeHandler = () => {
      generateStars();
    };

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 15000,
    );
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        type: Math.random() < 0.3 ? "cross" : "dot",
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 3,
      });
    }

    setStars(newStars);
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`${star.type === "cross" ? "star-cross animate-starburst" : "star animate-pulse-subtle"}`}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        ></div>
      ))}
    </div>
  );
}

export default StarBackground;
