import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <section className="global-header-container">
      <a className="logo-name" href="/">
        Star Wars
      </a>
      <Link to={{ pathname: "/characters" }} className="nav-header-link">
        Characters
      </Link>
      <Link to={{ pathname: "/planets" }} className="nav-header-link">
        Planets
      </Link>
    </section>
  );
};

export default Header;
