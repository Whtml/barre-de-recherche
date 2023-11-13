import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeamList from "./componnents/TeamList";
import TeamDetails from "./componnents/TeamDetails"; // Importez la page de détails de l'équipe

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TeamList />} />
        {/* Définissez une route pour afficher la page de détails de l'équipe avec le paramètre "teamName" */}
        <Route path="/:id" element={<TeamDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
