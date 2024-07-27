import React, { useEffect } from "react";
import "./Services.css";
import gsap from "gsap";

function Services(props) {
  gsap.registerPlugin(CustomEase);

  useEffect(() => {
    const service_wrapper = document.querySelector(".services-wrapper");

    const element_1 = document.querySelector(
      ".services-wrapper .services-content-wrapper:nth-of-type(1)"
    );

    const element_2 = document.querySelector(
      ".services-wrapper .services-content-wrapper:nth-of-type(2)"
    );

    const element_3 = document.querySelector(
      ".services-wrapper .services-content-wrapper:nth-of-type(3)"
    );

    const element_4 = document.querySelector(
      ".services-wrapper .services-content-wrapper:nth-of-type(4)"
    );

    const element_5 = document.querySelector(
      ".services-wrapper .services-content-wrapper:nth-of-type(5)"
    );

    if (props.isSticky.services) {
      // Create a GSAP timeline
      const grid_stuck = gsap.timeline();

      // Add animations to the timeline
      grid_stuck
        .to(element_1, {
          y: 0,
          duration: 1,
          ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
        })
        .to(
          element_2,
          {
            y: 0,
            duration: 1,
            ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
          },
          "-=0.5"
        )
        .to(
          element_3,
          {
            y: 0,
            duration: 1,
            ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
          },
          "-=0.5"
        );
    }

    const grid_gsap = gsap.timeline(); // Initialize grid_gsap_16_20
    if (props.percent >= 20 && props.percent < 30) {
      grid_gsap
        .to(
          element_1,
          {
            gridArea: "3 / 2 / 5 / 3",
            duration: 1,
            ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
          },
          "-=0.1"
        )
        .to(element_5, {
          transform: "translate(0px, 0px)",
          gridArea: "1 / 2 / 3 / 3",
          duration: 1,
          ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
        })
        .to(
          element_3,
          {
            gridArea: "1 / 5 / 3 / 6",
            duration: 1,
            ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
          },
          "-=1"
        )
        .to(element_4, {
          transform: "translate(0px, 0px)",
          gridArea: "3 / 5 / 5 / 6",
          duration: 1,
          ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
        });
    }

    if (props.percent >= 30 && props.percent < 40) {
      // Animation for elements 5, 1, and 2 (pushing away)
      grid_gsap
        .to(element_5, {
          display: "none",
          x: "-400%",
          duration: 1.25, // Adjust duration as needed
          ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
        })
        .to(
          element_1,
          {
            display: "none",
            x: "-400%",
            duration: 1.25, // Adjust duration as needed
            ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
          },
          "-=0.5"
        )
        .to(
          element_2,
          {
            display: "none",
            x: "-400%",
            duration: 1.25, // Adjust duration as needed
            ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
          },
          "-=0.5"
        )
        .to(
          element_3,
          {
            gridArea: "1 / 2 / 3 / 6",
            duration: 1.25, // Adjust duration as needed
            ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
          },
          "-=1.8"
        )
        .to(
          element_4,
          {
            gridArea: "3 / 2 / 5 / 6",
            duration: 1.25, // Adjust duration as needed
            ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
          },
          "-=1.5"
        );
    }

    if (props.percent >= 40 && props.percent < 50) {
      // Continue with upward movement animation of element 3
      grid_gsap
        .to(
          element_3,
          {
            display: "none",
            y: "-400%",
            gridArea: "3 / 2 / 5 / 6",
            duration: 1,
            ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
          },
          "-=0.5"
        )
        .to(
          element_4,
          {
            gridArea: "1 / 2 / 5 / 6",
            duration: 0.5,
            ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
          },
          "-=0.5"
        );
    }

    if (props.percent >= 50) {
      // Add animations to the timeline
      grid_gsap
        .to(service_wrapper, {
          display: "None",
          duration: 1,
          ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
        })
        .to(element_1, { display: "none" })
        .to(element_2, { display: "none" })
        .to(element_3, { display: "none" })
        .to(element_4, { display: "none" })
        .to(element_5, { display: "none" });
    }

    return () => {
      grid_gsap.kill(); // Kill the GSAP animation when component unmounts or effect re-runs
    };
  }, [props.percent, props.isSticky.services]);

  return (
    <div
      className={`services-wrapper ${props.isSticky.services ? "sticky" : ""}`}
    >
      <div className="services-content-wrapper">
        <h2 className="services-headline">Creative Rebellion</h2>
        <p className="services-paragraph">
          We're rebels at heart, challenging the status quo and pushing the
          boundaries of what's possible in web design. From bold layouts to
          unconventional navigation, we dare to be different, redefining the
          digital experience one website at a time.
        </p>
      </div>
      <div className="services-content-wrapper">
        <h2 className="services-headline">Authentic Innovation</h2>
        <p className="services-paragraph">
          Authenticity is at the core of everything we do. We don't just create
          websites; we craft digital identities that are as unique as the brands
          they represent. Our designs are infused with originality, creativity,
          and a touch of the unexpected.
        </p>
      </div>
      <div className="services-content-wrapper">
        <h2 className="services-headline">User-Centric Excellence</h2>
        <p className="services-paragraph">
          Our websites are more than just visually stunning; they're intuitive,
          user-friendly, and designed with the end user in mind. We put
          ourselves in the shoes of your audience to create experiences that
          resonate on a deep and meaningful level.
        </p>
      </div>
      <div className="services-content-wrapper"></div>
      <div className="services-content-wrapper"></div>
    </div>
  );
}

export default Services;
