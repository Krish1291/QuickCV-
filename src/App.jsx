import { useState } from "react";
import Home from "./Components/Home";
import "./App.css";
import ResumeBuilder from "./Components/ResumeBuilder";
import ChooseTemplate from "./Components/ChooseTemplate";
import Preview from "./Components/Preview";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/builder" element={<ResumeBuilder />} />
          <Route path="/choose-template" element={<ChooseTemplate />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
