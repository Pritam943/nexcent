import "../../style/HeroSection.css";
import illu from "../../assets/illustration.png"

const HeroSection = () => {
  return (
    <>
      <header className="head">
      <div className="hero">
      <h1>Lessons and insights
        <span><br></br> from 8 years</span> </h1>
        <h5>Where to grow your business as a photographer: site or social media?</h5>
        <button className="register">Register</button>
      </div>
      <div className="hero2">
        <img src={illu} alt="" />
      </div>
      </header>
    </>
  )
}

export default HeroSection