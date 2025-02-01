import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Accueil } from "./Accueil";
import Contact from "./Contact";
import Header from "./Header";
import Services from "./Services";

function App() {
  return (
    <Router>
      <Header />  {/* Le header est maintenant visible sur toutes les pages */}
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
