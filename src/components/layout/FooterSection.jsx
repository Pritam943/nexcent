import "../../style/footerSection.css";
import right1 from "../../assets/Right1.png"
import ficon from "../../assets/fIcon.png";
import Nexcent1 from "../../assets/Nexcent1.png";
import scicons from "../../assets/Social Links.png";

const FooterSection = () => {
  return (
    <div className="footer">
        <div className="footsec1">
            <h1 className="foothead">
            Pellentesque suscipit fringilla libero eu.
            </h1>
            <button className="flearn">Get a Demo <img className="right1" src={right1} alt="" /></button>
        </div>



        <div className="lastfoot">
            <div className="footsec2">
            <div className="logo">
      <img src={ficon} alt="" />
          <img src={Nexcent1} alt="" /></div>

          <p className="lf1">
          Copyright © 2020 Nexcent ltd.
          </p>
          <p className="lf2">All rights reserved</p>
          <img src={scicons} alt="" className="scicons" />
            </div>
            
            <div className="subfootsec">
            <div className="footsec3">
                <h3 className="lf3">Company</h3>
                <p>About Us</p>
                <p>Blog</p>
                <p>Contact Us</p>
                <p>Pricing</p>
                <p>Testimonials</p>
            </div>
            <div className="footsec4">
            <h3 className="lf3">Support</h3>
                <p>Help center</p>
                <p>Term of sevice</p>
                <p>Legal</p>
                <p>Privacy policy</p>
                <p>Status</p>
            </div>
            <div className="footsec5">
            <h3 className="lf3">Stay Uptodate</h3>
            
            <div className="femail">
            <input type="text" placeholder="Your email address"  className="useremail" />
            <input type="submit" value="Submit" />
            </div>
            
            </div>
            </div>
        </div>
    </div>
  )
}

export default FooterSection