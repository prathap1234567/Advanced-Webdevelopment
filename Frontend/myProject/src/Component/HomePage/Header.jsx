import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Header = () => {
  return (
    <header>
      <h2>
        <div href="#">EVENT CRAFT</div>
      </h2>
      <nav>
        <li>
          <Link style={{ color: "white" }} to="/login">
            LOGIN
          </Link>
        </li>
        <li>
          <AnchorLink style={{ color: "white" }} href="#about">
            ABOUT
          </AnchorLink>
        </li>
        <li>
          <AnchorLink Link style={{ color: "white" }} href="#contact">
            CONTACT
          </AnchorLink>
        </li>
      </nav>
    </header>
  );
};

export default Header;
