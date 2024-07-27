import "./Main.css";
import React, { useRef, useEffect } from "react";
import Intro from "./SubComponents/Intro";
import Services from "./SubComponents/Services";
import About from "./SubComponents/About";

function Main(props) {
  const containerRef = useRef(null);

  const handleScroll = (e) => {
    const container = containerRef.current;
    container.scrollLeft += e.deltaY;

    const services = document.querySelector(".services-wrapper");
    const about = document.querySelector(".about-wrapper");
    const scroll_div = document.querySelector(".horizontal-scroll");
    if (!scroll_div) return; // Check if scroll_div exists

    const scrollLeft = container.scrollLeft;
    const containerWidth = scroll_div.offsetWidth;
    const viewportWidth = window.innerWidth;

    if (containerWidth === 0 || viewportWidth === 0) return; // Check if dimensions are available

    const visibleContainerWidth = Math.min(
      containerWidth,
      viewportWidth + scrollLeft
    );

    // Check if Services has reached the left of the viewport
    const servicesRect = services.getBoundingClientRect();
    const isServicesAtLeftOfViewport = servicesRect.left <= 0;

    const aboutRect = about.getBoundingClientRect();
    const isAboutAtLeftOfViewport = aboutRect.left <= 0;

    // Calculate the percentage
    const percentage = (visibleContainerWidth / viewportWidth) * 6.668;
    props.changePercentage(Math.floor(percentage));

    if (
      isServicesAtLeftOfViewport &&
      props.percent > 13 &&
      props.percent < 50
    ) {
      props.changeIsSticky(true, "services");
    } else if (isAboutAtLeftOfViewport && props.percent >= 50) {
      props.changeIsSticky(true, "about");
    } else {
      props.changeIsSticky(false);
    }
  };

  // Listen for wheel events on component mount
  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("wheel", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <main
      className="main-wrapper horizontal-scroll-container"
      onWheel={handleScroll}
      ref={containerRef}
    >
      <div className="horizontal-scroll">
        <Intro />
        <Services isSticky={props.isSticky} percent={props.percent} />
        <About isSticky={props.isSticky} percent={props.percent} />
      </div>
    </main>
  );
}

export default Main;
