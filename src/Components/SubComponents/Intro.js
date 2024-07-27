import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Intro.css";
import SplitType from "split-type";

function Intro() {
  const introRef = useRef(null);

  useEffect(() => {
    const element = document.querySelector(".intro-headline");
    const characters = new SplitType(element, { types: "chars" });

    // Add event listeners to each character
    const mouseEnterHandler = (char, index) => {
      let text = gsap.timeline();
      text
        .to(
          char,
          {
            duration: 0.1,
            color: "#17122b",
            ease: "expo.inOut",
          },
          0
        )
        .to(
          char,
          {
            duration: 0.2,
            scale: 1.0125,
            fontStyle: "italic",
            fontFamily: '"Lato", sans-serif',
            ease: "expo.inOut",
          },
          0
        );
    };

    const mouseLeaveHandler = (char) => {
      let text = gsap.timeline();
      text.to(char, {
        duration: 1,
        scale: 1,
        fontStyle: "normal",
        color: "#85898c",
        fontFamily: '"Press Start 2P", system-ui',
        // Revert font-family
        ease: "expo.inOut",
      });
    };

    characters.chars.forEach((char, index) => {
      char.addEventListener("mouseenter", () => mouseEnterHandler(char));
      char.addEventListener("mouseleave", () => mouseLeaveHandler(char));
      // Prevent layout shift when scaling up
      char.style.display = "inline-block";
    });

    // Cleanup function to remove event listeners
    return () => {
      characters.chars.forEach((char, index) => {
        char.removeEventListener("mouseenter", mouseEnterHandler);
        char.removeEventListener("mouseleave", mouseLeaveHandler);
      });
    };
  }, []);

  return (
    <div className="intro-wrapper" ref={introRef}>
      <h1 className="intro-headline">Welcome to GraphiqueGénie</h1>
    </div>
  );
}

export default Intro;
