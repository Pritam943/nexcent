import "../../style/navbar.css";
import icon from "../../assets/Icon.png";
import Nexcent from"../../assets/Nexcent.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
      <div className="logo">
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
        <div>
          <button id="log">Login</button>
          <button id="sig">Sign Up</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
