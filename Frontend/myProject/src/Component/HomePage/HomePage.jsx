import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Destinations from "./Destinations";
import Packages from "./Packages";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import "../Home.css";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Destinations />
      <Packages />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
