import { Routes, Route } from "react-router-dom";
import UserProfile from "./components/UserProfile.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;