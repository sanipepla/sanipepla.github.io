import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Solution from "./components/Solution";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-sanipepla-mauve/20 selection:text-sanipepla-indigo">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Solution />
        <About />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
