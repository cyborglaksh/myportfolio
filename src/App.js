// src/App.js

import React from "react";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
// import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Socials from "./components/Socials";


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Socials />
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
}