import "./App.css";
import HeroSection from "./components/layout/HeroSection";
import Navbar from "./components/layout/Navbar";
import ClientSection from "./components/layout/ClientSection";
import HelpingSection from "./components/layout/HelpingSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ClientSection />
      <HelpingSection/>
    </>
  );
}

export default App;
