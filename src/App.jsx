import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Blog from "./Components/Pages/Blog";
import Services from "./Components/Pages/Services";
import Contact from "./Components/Pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Pages/Footer";
function App() {
  return (
    <main className="md:max-w-9xl mx-auto">
      <Navbar />
          <div className="md:right-50 right-5  z-30 md:bottom-30 bottom-30 fixed text-white">
          
          <div className="flex">
            <img src="/Whatsapp.jpeg" alt="whatsapp" className="w-20" />
       
            <img src="/facebook.jpeg" alt="whatsapp" className="w-20" />
          </div>
        </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
