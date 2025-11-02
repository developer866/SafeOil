import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Blog from "./Components/Pages/Blog";
import Services from "./Components/Pages/Services";
import Contact from "./Components/Pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Pages/Footer";
import ScrollToTop from "./Components/ScrollTop";

function App() {
  return (
    <main className="md:max-w-9xl mx-auto">
      <Navbar />

      {/* Floating social media icons */}
      <div className="fixed right-5 bottom-5 z-30 flex gap-2">
        <img
          src="/Whatsapp.jpeg"
          alt="whatsapp"
          className="w-16 rounded-full"
        />
        <img
          src="/facebook.jpeg"
          alt="facebook"
          className="w-16 rounded-full"
        />
      </div>

      <ScrollToTop />
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
