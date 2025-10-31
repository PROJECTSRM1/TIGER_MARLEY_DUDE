import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import GeekTshirts from "./pages/GeekTshirts";
import GeekHoodies from "./pages/GeekHoodies";
import AnimeOversized from "./pages/AnimeOversized";
import AnimeHoodies from "./pages/AnimeHoodies";
import SportOversized from "./pages/SportOversized";
import SportHoodies from "./pages/SportHoodies";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/geek/tshirts" element={<GeekTshirts />} />
        <Route path="/geek/hoodies" element={<GeekHoodies />} />
        <Route path="/anime/oversized" element={<AnimeOversized />} />
        <Route path="/anime/hoodies" element={<AnimeHoodies />} />
        <Route path="/sport/oversized" element={<SportOversized />} />
        <Route path="/sport/hoodies" element={<SportHoodies />} />

      </Routes>
    </Router>
  );
}

export default App;
