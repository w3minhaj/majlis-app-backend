import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import playstore from "./google-play-badge.png";
import "./Navbar.css";
function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
        {/* <a href="/#">Home</a>
            <a href="/#">About</a>
            <a href="/#">Screen</a>
            <a href="/#">features</a> */}
        {/* <img
          src={playstore}
          ClassName="nav_img"
          alt="playstore_image"
          srcset=""
        /> */}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      {/* <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button> */}
    </header>
  );
}

export default Navbar;
