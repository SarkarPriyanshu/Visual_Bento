import "./Footer.css";

import { FooterSVGIcon } from "./NavigationSvg";

function Footer(props) {
  const percent = props.percent;
  return (
    <footer className="footer-wrapper">
      <h2
        className={
          props.isSticky.services | props.isSticky.about
            ? "footer-h2-sticky"
            : "footer-h2"
        }
      >
        {props.isSticky.services | props.isSticky.about
          ? percent + " %"
          : `Collaboration`}
      </h2>
      <p className="footer-p">
        "At GraphiqueGénie, Empowering Architects Visions: Leading the Future in
        Skyscraper Glass."
      </p>
      <FooterSVGIcon />
    </footer>
  );
}

export default Footer;
