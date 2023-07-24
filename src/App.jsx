import "./App.css";
import HeroSection from "./components/layout/HeroSection";
import Navbar from "./components/layout/Navbar";
import ClientSection from "./components/layout/ClientSection";
import HelpingSection from "./components/layout/HelpingSection";
import CardsSection from "./components/layout/CardsSection";
import FooterSection from "./components/layout/FooterSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ClientSection />
      <HelpingSection/>
      <CardsSection/>
      <FooterSection/>
    </>
  );
}

export default App;
