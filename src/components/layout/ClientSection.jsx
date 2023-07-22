import "../../style/ClientSection.css";
import logo from "../../assets/Logo.png";
import logo1 from "../../assets/Logo1.png";
import logo2 from "../../assets/Logo2.png";
import logo3 from "../../assets/Logo3.png";
import logo4 from "../../assets/Logo4.png";
import logo5 from "../../assets/Logo5.png";
import logo6 from "../../assets/Logo6.png";
import logo7 from "../../assets/Logo7.png";
import logo8 from "../../assets/Logo8.png";
import logo9 from "../../assets/Logo9.png";
import frame from "../../assets/Frame 35.png";

const ClientSection = () => {
  return (
    <div className="head1">
       <div className="client">
         <h1 className="first">Our Clients</h1>
         <h5 className="third">We have been working with some Fortune 500+ clients</h5>
         <div className="logo1">
       <img src={logo} alt="" />
       <img src={logo1} alt="" />
       <img src={logo2} alt="" />
       <img src={logo3} alt="" />
       <img src={logo4} alt="" />
       <img src={logo5} alt="" />
       <img src={logo6} alt="" />

    </div>
    </div>
    <div className="section1">
        <h1 className="second">
        Manage your entire community 
        </h1>
        <h1 className="second">
        in a single system
        </h1>
        <h5 className="third">Who is Nextcent suitable for?
</h5>
      </div>
    <div className="client2">
       <div className="box">
        <img className="icon1" src={logo7} alt="" />
        <h2>Membership Organisations</h2>
        <h6>Our membership management software provides full automation of membership renewals and payments</h6>
       </div>
       <div className="box">
        <img className="icon1" src={logo8} alt="" />
        <h2>National Associations</h2>
        <h6>Our membership management software provides full automation of membership renewals and payments</h6>
       </div>
       <div className="box">
        <img className="icon1" src={logo9} alt="" />
        <h2>Clubs And Groups</h2>
        <h6>Our membership management software provides full automation of membership renewals and payments</h6>
       </div>
    </div>

    <div className="client3">
      <img className="frame" src={frame} alt="" />

      <div className="section2">
        <h1 className="fourth">The unseen of spending three years at Pixelgrade</h1>
        <h6 className="fifth">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</h6>
        <button className="learn">Learn More</button>
      </div>
    </div>
    
    </div>
   
  )
}

export default ClientSection
