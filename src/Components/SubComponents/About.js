import React, { useEffect } from "react";
import "./About.css";
import gsap from "gsap";

function about(props) {
  useEffect(() => {
    const element_1 = document.querySelector(
      ".about-wrapper .about-content-wrapper:nth-of-type(1)"
    );

    const element_2 = document.querySelector(
      ".about-wrapper .about-content-wrapper:nth-of-type(2)"
    );

    const services_element_4 = document.querySelector(
      ".services-wrapper .services-content-wrapper:nth-of-type(4)"
    );

    const element_3 = document.querySelector(
      ".about-wrapper .about-content-wrapper:nth-of-type(3)"
    );

    const element_4 = document.querySelector(
      ".about-wrapper .about-content-wrapper:nth-of-type(4)"
    );

    const element_5 = document.querySelector(
      ".about-wrapper .about-content-wrapper:nth-of-type(5)"
    );

    const grid_gsap = gsap.timeline();
    if (props.percent >= 50 && props.percent < 60) {
      grid_gsap
        .to(
          services_element_4,
          {
            x: "-500%",
            opacity: 100,
            duration: 1.5, // Extend the duration for a slower transition
            ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
          },
          "-=1"
        )
        .to(element_1, {
          x: "0",
          opacity: 100,
          duration: 1, // Extend the duration to match services_element_4
          ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
        })
        .set(
          services_element_4,
          {
            duration: 1,
            display: "none",
            gridArea: "1 / 2 / 5 / 6",
            ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
          },
          "+=0.25"
        );
    }

    if (props.percent >= 60 && props.percent < 70) {
      grid_gsap
        .to(element_1, {
          gridArea: "3 / 2 / 5 / 4",
          opacity: 100,
          duration: 1, // Extend the duration
          ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
        })
        .to(
          element_2,
          {
            y: "0",
            opacity: 100,
            display: "flex",
            duration: 1, // Extend the duration
            ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
          },
          "-=0.5"
        )
        .to(
          element_3,
          {
            x: "0",
            opacity: 100,
            display: "flex",
            gridArea: "1 / 4 / 5 / 6",
            duration: 1, // Extend the duration
            ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
          },
          "-=0.5"
        );
    }

    if (props.percent >= 70 && props.percent < 80) {
      grid_gsap
        .to(element_1, {
          y: "500%",
          opacity: 100,
          gridArea: "2 / 2 / 5 / 5",
          duration: 1,
          ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
        })
        .to(
          element_2,
          {
            x: "0",
            opacity: 100,
            display: "flex",
            gridArea: "1 / 2 / 5 / 4",
            duration: 1,
            ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
          },
          "-=1"
        )
        .to(
          element_3,
          {
            opacity: 100,
            display: "flex",
            gridArea: "1 / 4 / 5 / 5",
            duration: 1,
            ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
          },
          "-=0.5"
        )
        .to(
          element_4,
          {
            x: "0",
            opacity: 100,
            display: "flex",
            gridArea: "1 / 5 / 5 / 6",
            duration: 1,
            ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
          },
          "-=0.5"
        );
    }
    if (props.percent >= 80 && props.percent < 90) {
      grid_gsap
        .to(element_2, {
          x: "0",
          opacity: 100,
          display: "flex",
          gridArea: "3 / 2 / 5 / 4",
          duration: 1,
          ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
        })
        .to(
          element_3,
          {
            x: "0",
            opacity: 100,
            display: "flex",
            gridArea: "3 / 4 / 5 / 5",
            duration: 1,
            ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
          },
          "-=0.5"
        )
        .to(
          element_4,
          {
            y: "0",
            opacity: 100,
            display: "flex",
            gridArea: "3 / 5 / 5 / 6",
            duration: 1,
            ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
          },
          "-=0.5"
        )
        .to(
          element_5,
          {
            y: "0",
            opacity: 100,
            display: "flex",
            duration: 1,
            ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
          },
          "-=0.5"
        );
    }

    if (props.percent >= 90 && props.percent < 95) {
      grid_gsap
        .to(element_2, {
          y: "500%",
          display: "none",
          duration: 1,
          ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
        })
        .to(
          element_3,
          {
            y: "500%",
            display: "none",
            duration: 1,
            ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
          },
          "-=0.5"
        )
        .to(
          element_4,
          {
            y: "500%",
            display: "none",
            duration: 1,
            ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
          },
          "-=0.5"
        )
        .to(
          element_5,
          {
            opacity: 100,
            gridArea: "1 / 2 / 5 / 6",
            duration: 1,
            ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
          },
          "-=1"
        );
    }

    if (props.percent >= 95) {
      grid_gsap
        .to(element_1, { display: "none" })
        .to(element_2, { display: "none" })
        .to(element_3, { display: "none" })
        .to(element_4, { display: "none" })
        .to(
          element_5,
          {
            opacity: 100,
            duration: 1,
            gridArea: "1 / 1 / -1 / -1",
            ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
          },
          "-=1"
        );

      const text = new SplitType(".about-content-wrapper_headline");
      char_elements = document.querySelectorAll("div.char");
      char_elements.forEach((element, index) => {
        grid_gsap
          .to(element, {
            visibility: "visible",
            duration: 0.15,
            ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
          })
          .to(
            element,
            {
              y: "0%",
              duration: 0.35,
              ease: CustomEase.create("custom", "M0,0 C0,0.626 0,1 1,1 "),
            },
            "-=0.15"
          );
      });
    }

    return () => {
      grid_gsap.kill();
    };
  }, [props.percent, props.isSticky.about]);

  return (
    <div className={`about-wrapper ${props.isSticky.about ? "sticky" : ""}`}>
      <div className="about-content-wrapper">
        <h2 className="about-headline">Creative Rebellion</h2>
        <p className="about-paragraph">
          We're rebels at heart, challenging the status quo and pushing the
          boundaries of what's possible in web design. From bold layouts to
          unconventional navigation, we dare to be different, redefining the
          digital experience one website at a time.
        </p>
      </div>
      <div className="about-content-wrapper">
        <h2 className="about-headline">Authentic Innovation</h2>
        <p className="about-paragraph">
          Authenticity is at the core of everything we do. We don't just create
          websites; we craft digital identities that are as unique as the brands
          they represent. Our designs are infused with originality, creativity,
          and a touch of the unexpected.
        </p>
      </div>
      <div className="about-content-wrapper">
        <h2 className="about-headline">User-Centric Excellence</h2>
        <p className="about-paragraph">
          Our websites are more than just visually stunning; they're intuitive,
          user-friendly, and designed with the end user in mind. We put
          ourselves in the shoes of your audience to create experiences that
          resonate on a deep and meaningful level.
        </p>
      </div>
      <div className="about-content-wrapper"></div>
      <div className="about-content-wrapper">
        <h1 className="about-content-wrapper_headline">GraphiqueGénie</h1>
      </div>
    </div>
  );
}

export default about;
