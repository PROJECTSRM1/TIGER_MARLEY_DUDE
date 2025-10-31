import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import GeekTshirts from "./pages/GeekTshirts";
import GeekHoodies from "./pages/GeekHoodies";

function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/geek/tshirts" element={<GeekTshirts />} />
         <Route path="/geek/hoodies" element={<GeekHoodies />} />
      </Routes>
    </Router>
  );
}

export default App;
