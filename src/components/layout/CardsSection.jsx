import "../../style/cardsSection.css";
import cradimg1 from "../../assets/image 18.png";
import cradimg2 from "../../assets/image 19.png";
import cradimg3 from "../../assets/image 20.png";
import right from "../../assets/Right.png";

const CardsSection = () => {
  return (
    <div className="cardsec">
        <h1 className="sec8">Caring is the new marketing</h1>
        <p className="sec9">
        The Nexcent blog is the best place to read about the latest membership insights, trends and more. See whos joining the community, read about how our community are increasing their membership income and lots more.
        </p>
        <div className="cardcontainer">
        <div className="card">
               <div className="subcard">
                <img src={cradimg1} alt="" className="cardimg1" />
               </div>
               <div className="cardcontent">
<h3 className="cardh3">Creating Streamlined Safeguarding Processes with OneRen</h3>
<div className="cardread">
<a href="#" className="cardlink"><span>ReadMore </span></a>
       <img src={right} className="cardright" alt="" />
</div>
               </div>
        </div>
        <div className="card">
               <div className="subcard">
               <img src={cradimg2} alt="" className="cardimg1" />
               </div>
               <div className="cardcontent">
               <h3 className="cardh3">What are your safeguarding responsibilities and how can you manage them?</h3>
<div className="cardread">
<a href="#" className="cardlink"><span>ReadMore </span></a>
       <img src={right} className="cardright" alt="" />
</div>
               </div>
        </div>
        <div className="card">
               <div className="subcard">
               <img src={cradimg3} alt="" className="cardimg1" />
               </div>
               <div className="cardcontent">
               <h3 className="cardh3">Revamping the Membership Model with Triathlon Australia</h3>
<div className="cardread">
<a href="#" className="cardlink"><span>ReadMore </span></a>
       <img src={right} className="cardright" alt="" />
</div>
               </div>
        </div>
        </div>
    </div>
  )
}

export default CardsSection