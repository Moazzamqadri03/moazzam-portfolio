import Footer from "./components/Footer";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import AnimatedBg from "./components/AnimatedBg.jsx";
function App() {
  return (
    <>
      <Navbar />

      <main>
     <section id="home" style={{ position: "relative", overflow: "hidden" }}>
  <AnimatedBg />
  <div className="hero-wrapper container">
    <h1 className="hero-title">Moazzam Hussain Qadri</h1>
    <p className="hero-subtitle">Frontend Developer </p>
    <div className="hero-dash" />
  </div>
</section>

        <About />
        <Skills />
        <Footer />

      </main>
    </>
  );
}

export default App;