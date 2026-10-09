import { Routes, Route } from "react-router-dom";
import UserProfile from "./components/UserProfile.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Navbar from "./components/Navbar.jsx";
import {useState} from "react";
import { ThemeContext } from "./ThemeContext";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  return (
   < ThemeContext.Provider value={{theme, setTheme}}>
    <div className={`app ${theme}`}>
      
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="*" element={<h2>404 : Page Not Found</h2>} />
      </Routes>
    </>
    </div>

    </ThemeContext.Provider>
  );
}

export default App;