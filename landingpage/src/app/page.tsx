"use client"
import React from "react";
import About from "./about/page";
import Achievements from "./achivements/page";
import Courses from "./courses/page";
import Services from "./services/page";
import Testimonial from "./testimonial/page";

const Home = () => {
  return (
    <div>
      <About/>
      <Achievements/>
      <Courses/>
      <Services/>
      <Testimonial/>
    </div>
  );
};


export default Home;
