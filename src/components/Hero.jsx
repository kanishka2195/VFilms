import React from "react";
import "./Hero.css";

// Importing all images from src/assets
import NavbarImg from "../assets/Navbar.png";
import HeroMandala from "../assets/hero_mandala.png";
import VFilmsLogo from "../assets/vfilms_logo.png";
import HomeImg from "../assets/home.png"; 
import BGImg from "../assets/BG.png"; // Background image

export default function Hero() {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-start"
      style={{
        backgroundImage: `url(${BGImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      

      {/* Background Texture Overlay */}
      <div className="absolute inset-0 bg-texture opacity-70 z-10"></div>

      {/* Left Side: Mandala + V Films Logo */}
      <div
        className="absolute flex flex-col items-center justify-center"
        style={{
          width: "565px",
          height: "565px",
          top: "50%",
          left: "50px",
          transform: "translateY(-50%)",
          zIndex: 20,
        }}
      >
        {/* Mandala behind */}
        <img
          src={HeroMandala}
          alt="Mandala Background"
          className="absolute w-full h-full object-contain"
          style={{
            zIndex: 10,
            opacity: 0.3,
            filter:
              "brightness(40%) sepia(100%) hue-rotate(-20deg) saturate(500%)",
          }}
        />

        {/* V Films Logo above */}
        <img
          src={VFilmsLogo}
          alt="V Films Logo"
          className="relative w-[400px] h-auto"
          style={{ zIndex: 50 }}
        />
      </div>

      {/* Right Side: Tagline + Home Image + Paragraph */}
      <div
        className="absolute right-side-text"
        style={{
          top: "50%",
          right: "150px",
          transform: "translateY(-50%)",
          zIndex: 30,
          textAlign: "right",
        }}
      >
        <h1 className="tagline">
          Varnan is where stories<br /> find their voice and form
        </h1>

        {/* Home image just below tagline */}
        <img
          src={HomeImg}
          alt="Home"
          className="home-image"
        />
        <br />

        {/* Paragraph below Home Image */}
   <p className="story-para">
  Since 2009, V’ve been telling stories - stories of people, their journeys,
  and the places that shape them. Some begin in polished boardrooms, others
  in humble village squares. But every story starts the same way - by
  listening with intention. V believes it takes trust, patience, and an eye
  for the unseen to capture what truly matters.
  <span className="nowrap"> V doesn’t just tell stories - V honors them.</span>
</p>

      </div>

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
}
