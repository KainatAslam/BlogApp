import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import IndexCSS from "./Components/IndexCSS.css";
import AboutUS from "./Components/AboutUs";
import Contact from "./Components/contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Navbar />} />
        <Route path="/AboutUS" element={<AboutUS />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
