import React from "react";
import { useNavigate } from "react-router-dom";
import BGImg from "../assets/BG.png";
import Group9Img from "../assets/Group_9.png";
import Group2Img from "../assets/Group2.png";
import FilmMakers from "../assets/FilmMakers.png";
import VectorFilmMaker from "../assets/VectorFilmMaker.png";
import ArtCurators from "../assets/ArtCurators.png";
import VectorArt from "../assets/VectorArt.png";
import IndiaGate from "../assets/IndiaGate.png";
import BrandingExperts from "../assets/BrandingExperts.png";
import VectorBrand from "../assets/VectorBrand.png";
import TextAT from "../assets/TextAT.png";
import "./AboutTeam.css";

const AboutTeam = () => {
  const navigate = useNavigate();

  // ✅ Handler to navigate to Portfolio page
  const handleViewPortfolio = () => {
    navigate("/portfolio");
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden flex flex-col items-center justify-start"
      style={{
        backgroundImage: `url(${BGImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Decorative Images */}
      <img src={Group9Img} alt="Decorative Group 9" className="group9-image" />
      <img src={Group2Img} alt="New Decorative" className="group2-image" />
      <img src={FilmMakers} alt="Film Makers" className="FilmMaker" />
      <img src={VectorFilmMaker} alt="Vector Film Maker" className="VectorFilmMaker" />
      <img src={ArtCurators} alt="Art Curators" className="ArtCurators" />
      <img src={VectorArt} alt="Vector Art" className="VectorArt" />
      <img src={IndiaGate} alt="India Gate" className="IndiaGate" />
      <img src={BrandingExperts} alt="Branding Experts" className="BrandingExperts" />
      <img src={VectorBrand} alt="Vector Brand" className="VectorBrand" />
      <img src={TextAT} alt="Text AT" className="TextAT" />

      {/* ✅ View Portfolio Button */}
      <button
        type="button"
        onClick={handleViewPortfolio} // 👈 Navigation
        style={{
          background: "rgba(241, 93, 43, 1)",
          color: "white",
          fontSize: "12px",
          padding: "8px 20px",
          borderRadius: "16px",
          cursor: "pointer",
          textAlign: "center",
          fontWeight: 500,
          display: "inline-block",
          position: "absolute",
          top: "620px",
          left: "980px",
        }}
      >
        View Portfolio
      </button>
<div
  className="absolute bottom-[30px] left-[45px] rounded-md animate-scrollbar"
  style={{
    width: "200px",
    height: "12px",
    background: "#FDD0C1",
    zIndex: 40
  }}
></div>
    </div>
  );
};

export default AboutTeam;
