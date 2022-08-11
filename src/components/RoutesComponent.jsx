import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { Photography } from "../pages/Photography";
import { Projects } from "../pages/Projects";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route exact path="/" element={<About />} />
      <Route path="/about" element={<About />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};
