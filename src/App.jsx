import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Hero";
import Services from "./pages/Services";
import AboutTeam from "./pages/AboutTeam";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import FilmProduction from "./pages/FilmProduction";
import Branding from "./pages/Branding";
import ArtCuration from "./pages/ArtCuration";  

export default function App(){
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<AboutTeam />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/filmproduction" element={<FilmProduction />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/artcuration" element={<ArtCuration />} />
      </Routes>
    </Layout>
  );
}
