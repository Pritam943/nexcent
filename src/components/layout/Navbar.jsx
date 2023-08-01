import "../../style/navbar.css";
import icon from "../../assets/Icon.png";
import Nexcent from "../../assets/Nexcent.png";
import {RxHamburgerMenu} from "react-icons/rx";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
      <div className="logo">
      <div className="hamberger">
      <RxHamburgerMenu/>
      </div>
      <img src={icon} alt="" />
          <img src={Nexcent} alt="" />
      </div>
        <ul>
          <li>Home</li>
          <li>Service</li>
          <li>Feature</li>
          <li>Product</li>
          <li>Testimonials</li>
          <li>FAQ</li>
        </ul>
        <div className="userenter">
          <button id="log">Login</button>
          <button id="sig">Sign Up</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
