import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Work from "./components/sections/Work";
import Process from "./components/sections/Process";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow"


function App() {
  return (
    <>
    <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Process />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;