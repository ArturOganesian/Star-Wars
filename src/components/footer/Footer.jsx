import "./footer.css";
import { FloatButton } from "antd";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="global-footer-section">
      <div className="footer-logo">
        <h1>Star Wars</h1>
      </div>

      <div className="to-top">
        <FloatButton.BackTop visibilityHeight={0} />
      </div>
      <div className="developer-contacts">
        <h3>Contacts</h3>
        <a
          href="https://www.linkedin.com/in/artur-oganesian-96988926a/"
          target="_blank"
        >
          {" "}
          <img src="linkedinIcon.png"  alt="linkedin"/>
        </a>
        <a href="https://github.com/ArturOganesian">
          <img src="gitLogo.png" target="_blank" alt="gitHub" />
        </a>
        <a></a>
        <p className="creator">
          Created by <span>Artur Oganesian</span> © {currentYear}
        </p>
      </div>
    </section>
  );
};

export default Footer;
