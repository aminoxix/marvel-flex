// Import components
import Navbar from "./components/Navbar";
import Logo from "./components/Navbar/Logo";
import About from "./pages/About";
import HeroDetails from "./components/Home/HeroDetails";
import Home from "./pages/Home";
import Footer from "./components/Footer/index";
import AppLogo from "./assets/img/iron-man.png"

// Import dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar
          logo={
            <Logo
              width={"10%"}
              src={AppLogo}
              text={"Marbabel"}
            />
          }
        >
          <button
            onClick={() => {
              window.location.pathname = "/";
            }}
            className="btn btn-primary"
          >
            Home
          </button>
          <button
            onClick={() => {
              window.location.pathname = "/about";
            }}
            className="btn btn-primary"
            to={"/about"}
          >
            About
          </button>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/:id" element={<HeroDetails />} />
        </Routes>
      </Router>
      <Footer
        text={"Data provided by Marvel. © 2014 Marvel"}
      />
    </>
  );
}

export default App;
