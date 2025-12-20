import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import ContactForm from "./components/ContactForm";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";




function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Hero />
      <Projects />
      <Clients />
      <About />
      <WhyChooseUs />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
