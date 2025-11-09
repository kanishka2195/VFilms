import React from "react";
import "./AboutUs.css";
import BGImg from "../assets/BG.png"; // Background image
import Box1 from "../assets/Frame1.png";
import Box2 from "../assets/Frame2.png";
import Box3 from "../assets/Frame3.png";
import AboutUs1 from "../assets/AboutUs1.png"; // ✅ new image
import AboutUs2 from "../assets/AboutUs2.png"; 

export default function AboutUs() {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-start justify-start"
      style={{
        backgroundImage: `url(${BGImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Left Side Text */}
      <div className="left-side-text">
        A montage of familiar faces and names.
      </div>

      {/* Paragraph below the heading */}
      <div className="aboutus-para">
        Some stories come from the biggest names. <br /> Others begin with bold, rising voices. <br />
        We’ve been fortunate to walk alongside both -  <br />listening, creating, and building stories that <br /> matter.
      </div>

      {/* Top Right Paragraph */}
      <div className="top-right-text">
        Every project is more than just a brief - it’s a new chapter waiting to be written. <br />
        Together, we've crafted tales that inspire, connect, and endure.
      </div>

      {/* ✅ AboutUs1 image with AboutUs2 inside it */}
<div className="aboutus1-image-container">
  <img src={AboutUs1} alt="About Us 1" className="aboutus1-image" />
  <img src={AboutUs2} alt="About Us 2" className="aboutus2-image" />
</div>


      {/* Frames below paragraph (left side) */}
      <div className="about-container">
        <img src={Box1} alt="Box 1" className="frame frame1" />
        <img src={Box2} alt="Box 2" className="frame frame2" />
        <img src={Box3} alt="Box 3" className="frame frame3" />
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
