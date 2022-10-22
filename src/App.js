import { Routes, Route } from "react-router-dom";
import '../src/components/pages/Homepage'
import Homepage from '../src/components/pages/Homepage';
import Login from "./components/pages/Login";
import Footer from "./components/Footer";


// import Container from "./components/container.js";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
