import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import KPI from "./Pages/KPI";
import Layouts from "./Pages/Layouts";
import Storyboard from "./Pages/Storyboard";
import FeaturedPage from "./Pages/FeaturedPage";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="container-fluid">
          <div className="w-50 m-auto text-center">
            <Home />
            <Routes>
              <Route path="/" element={<FeaturedPage />} />
              <Route path="/featured" element={<FeaturedPage />} />
              <Route path="/kpi" element={<KPI />} />
              <Route path="/kpi/:id" element={<KPI />} />
              <Route path="/layouts" element={<Layouts />} />
              <Route path="/storyboard" element={<Storyboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
