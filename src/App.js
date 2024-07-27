import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./styles.css";

import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";
import Main from "./Components/Main";

export default function App() {
  const [isSticky, setIsSticky] = useState({ services: false, about: false });
  const [percent, setPercent] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const backgroundRef = useRef(null);

  const changePercentage = (new_percent) => {
    setPercent(new_percent);
  };

  const changeIsSticky = (new_value, sectionName) => {
    switch (sectionName) {
      case "services":
        setIsSticky({ services: new_value, about: false });
        break;
      case "about":
        setIsSticky({ services: false, about: new_value });
        break;
      default:
        setIsSticky({ services: false, about: false });
        break;
    }
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const background = backgroundRef.current;

    const angle =
      Math.atan2(
        mouseY - window.innerHeight / 2,
        mouseX - window.innerWidth / 2
      ) *
        (180 / Math.PI) +
      90;

    gsap.to(
      background,
      {
        background: `linear-gradient(${angle}deg, rgba(0, 0, 0, 1) 70%, rgba(4,11,14,1) 80%, rgba(23,18,43,1) 100%)`,
        ease: "power2.inOut",
      },
      0
    );
  }, [mouseX, mouseY]);

  return (
    <div className="App" ref={backgroundRef}>
      <Navigation percentage={percent} />
      <Main
        changePercentage={changePercentage}
        percent={percent}
        changeIsSticky={changeIsSticky}
        isSticky={isSticky}
      />
      <Footer percent={percent} isSticky={isSticky} />
    </div>
  );
}
