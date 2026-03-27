import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Solution from "./components/Solution";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#2ECC71]/20 selection:text-[#2ECC71]">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Solution />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
