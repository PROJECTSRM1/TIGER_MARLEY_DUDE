import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import GeekTshirts from "./pages/GeekTshirts";
import GeekHoodies from "./pages/GeekHoodies";
import AnimeHoodies from "./pages/AnimeHoodies";
import AnimeOversized from "./pages/GeekOversized";
import SportHoodies from "./pages/SportHoodies";
import SportOversized from "./pages/SportsOversized";

function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/geek/tshirts" element={<GeekTshirts />} />
        <Route path="/geek/hoodies" element={<GeekHoodies />} />
         <Route path="/anime/oversized" element={<AnimeHoodies />} />
          <Route path="/anime/hoodies" element={<AnimeOversized />} />
           <Route path="/sport/oversized" element={<SportHoodies />} />
            <Route path="/sport/hoodies" element={<SportOversized />} />
      </Routes>
    </Router>
  );
}

export default App;
