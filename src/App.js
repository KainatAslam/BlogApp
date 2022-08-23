import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import IndexCSS from "./Components/IndexCSS.css";
import AboutUS from "./Components/AboutUs";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Navbar />} />
        <Route path="/AboutUS" element={<AboutUS />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
