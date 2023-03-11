import React from "react";

// import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackTopBtn from "./components/BackTopBtn";
import Github from "./components/Github";
import Connection from "./components/Connection";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    <div className="bg-white relative">
      <CustomCursor />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Github />

      {/* <Brands /> */}



      {/* <Services /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
      <BackTopBtn />
      <Connection />
    </div>
  );
};

export default App;
