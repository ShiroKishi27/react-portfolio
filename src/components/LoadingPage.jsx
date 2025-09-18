import { useEffect, useState } from "react";

function LoadingPage({ onComplete }) {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const fullText = "< Hello & Welcome />";

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        setIsVisible(false);
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1500);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      document.body.classList.remove("overflow-hidden");
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-gray-100">
      <div className="mb-4 font-mono text-4xl font-bold">
        {text} <span className="animate-blink ml-1">{isVisible && "|"}</span>
      </div>

      <div className="relative h-[2px] w-[200px] overflow-hidden rounded bg-gray-800">
        <div className="animate-loading-bar h-full w-[40%] bg-blue-500 shadow-[0_0_15px_#3b82f6]"></div>
      </div>
    </div>
  );
}

export default LoadingPage;
