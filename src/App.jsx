import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Blog from "./Components/Pages/Blog";
import Services from "./Components/Pages/Services";
import Contact from "./Components/Pages/Contact";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <main className="md:max-w-9xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default App;
