import { Routes, Route } from "react-router-dom";
import "./pages/Homepage";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Info from "./pages/Info";

// import Container from "./components/container.js";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Info" element={<Info />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
