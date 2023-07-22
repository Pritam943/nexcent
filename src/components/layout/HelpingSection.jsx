import "../../style/helpingSection.css";
import hicon1 from "../../assets/Hicon1.png";
import hicon2 from "../../assets/Hicon2.png";
import hicon3 from "../../assets/Hicon3.png";
import hicon4 from "../../assets/Hicon4.png";
import pana from "../../assets/pana.png";
import timg from "../../assets/Timg.png";

import logo from "../../assets/Logo.png";
import logo1 from "../../assets/Logo1.png";
import logo2 from "../../assets/Logo2.png";
import logo3 from "../../assets/Logo3.png";
import logo4 from "../../assets/Logo4.png";
import logo5 from "../../assets/Logo5.png";
import right from "../../assets/Right.png";

const HelpingSection = () => {
  return (
    <>
    <div className="section3">
       <div className="hline1">
        <h1 className="sec1">
        Helping a local <span>business reinvent itself</span>
        </h1>
        <h6 className="sec2">We reached here with our hard work and dedication</h6>
       </div>

       <div className="counts">

       <div className="subcounts">
       <div className="c1">
        <img src={hicon1} alt="" className="himg" />

        <div className="hline2">
        <h1 className="sec3">2,245,341</h1>
        <h6 className="sec4">Members</h6>
        </div>
        </div>

        <div className="c1">
        <img src={hicon2} alt="" className="himg" />

        <div className="hline2">
        <h1 className="sec3">46,328</h1>
        <h6 className="sec4">Clubs</h6>
        </div>
        </div>
       </div>


       <div className="subcounts">
       <div className="c1">
        <img src={hicon3} alt="" className="himg" />

        <div className="hline2">
        <h1 className="sec3">828,867</h1>
        <h6 className="sec4">Event Booking</h6>
        </div>
        </div>

        <div className="c1">
        <img src={hicon4} alt="" className="himg" />

        <div className="hline2">
        <h1 className="sec3">1,926,436</h1>
        <h6 className="sec4">Payments</h6>
        </div>
        </div>
       </div>

       </div>
    </div>

   <div className="section4">
    <div className="client3">
      <img className="frame" src={pana} alt="" />

      <div className="section2">
        <h1 className="fourth">How to design your site footer like we did</h1>
        <h6 className="fifth">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</h6>
        <button className="learn">Learn More</button>
      </div>
    </div>
    </div>
    
    <div className="section5">
      <img src={timg} alt="" className="timg" />

      <div className="hline3">
        <h6 className="sec5">
        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
        </h6>
        <h4 className="sec6"><span>Tim Smith</span></h4>
        <h6 className="sec5">British Dragon Boat Racing Association</h6>
        <div className="hline4">
        <img src={logo} alt="" />
       <img src={logo1} alt="" />
       <img src={logo2} alt="" />
       <img src={logo3} alt="" />
       <img src={logo4} alt="" />
       <img src={logo5} alt="" />
       <a href="#" className="link"><span>Meet All Customers </span><img src={right}className="right" alt="" /></a>
        </div>
      </div>
    </div>
</>
  )
}

export default HelpingSection