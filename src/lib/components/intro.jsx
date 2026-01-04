import React, { useState, useEffect } from "react";
import Loader from "../ui/introSpinner";

const Intro = ({ isVisible, onFinish }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onFinish?.();
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isVisible, onFinish]);

  return (
        <>
        <section className={`fixed inset-0 flex flex-col justify-center items-center bg-gradient-to-tr from-purple-800 to-blue-900 text-white z-50 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-[Arimo] tracking-wide text-center">
              Welcome to My Portfolio
            </h1>
            <div className="lg:w-[40%] w-[80%] h-auto">
            <Loader />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-[Arimo] tracking-wide">
                {count}%
            </h1>
        </section>
    </>
  );
};

export default Intro;
