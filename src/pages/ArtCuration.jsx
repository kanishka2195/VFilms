import React from "react";
import { useNavigate } from "react-router-dom";
import BGImg from "../assets/BG.png";
import ArtFrame from "../assets/ArtFrame.png"; // Left-side image
import Service1 from "../assets/Service1.svg"; // Underline image
import Back from "../assets/Back.png"; // Top-left corner image
import Art2 from "../assets/Art2.svg"; // Right-side camera images
import Art4 from "../assets/Art4.svg";
import Art3 from "../assets/Art3.svg";
import Art1 from "../assets/Art1.svg"; // Bottom-left camera image
import Arrow from "../assets/arrow.svg"; // Bottom arrow image

export default function ArtCuration() {
  const navigate = useNavigate();

  // ✅ Navigation handlers
  const goBackToBranding = () => navigate("/branding");
  const goToPortfolio = () => navigate("/portfolio");

  return (
    <div
      style={{
        ...styles.container,
        backgroundImage: `url(${BGImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ✅ Top-left Back button/image */}
      <img
        src={Back}
        alt="Back Button"
        style={styles.backButton}
        onClick={goBackToBranding}
        className="cursor-pointer"
      />

      {/* ✅ Heading Text */}
      <h1 style={styles.heading}>
        "V take art where it belongs, to the people.” - Vernita Verma
      </h1>

      {/* ✅ Underline image */}
      <img src={Service1} alt="Underline" style={styles.underlineImage} />

      {/* ✅ Left-side Image */}
      <img src={ArtFrame} alt="Art Frame" style={styles.leftImage} />

      {/* ✅ Right-side Text Block */}
      <p style={styles.rightText}>
        Art isn’t meant to sit on distant walls - it’s meant to breathe, to travel, to belong.
        Through every festival, every performance, and every gathering, we help stories find their stage and their people. <br />
        <strong>V curates:</strong> <br />
        • Art Festivals <br />
        • Live Performances <br />
        • Community Events <br />
        • Cultural Storytelling 
      </p>

      {/* ✅ Explore Now Text */}
      <span
        style={styles.exploreText}
        onClick={goToPortfolio}
        className="cursor-pointer"
      >
        Explore Now
      </span>

      {/* ✅ Bottom arrow */}
      <img src={Arrow} alt="Arrow" style={styles.arrowImage} />

      {/* ✅ Right-side camera images */}
      <img src={Art2} alt="Art 2" style={styles.artRight1} />
      <img src={Art4} alt="Art 4" style={styles.artRight2} />
      <img src={Art3} alt="Art 3" style={styles.artRight3} />

      {/* ✅ Bottom-left camera image */}
      <img src={Art1} alt="Art 1" style={styles.artLeftBottom} />
    </div>
  );
}

// ✅ Inline CSS styles
const styles = {
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    position: "relative",
  },

  backButton: {
    position: "absolute",
    width: "105px",
    height: "48px",
    top: "160px",
    left: "210px",
    cursor: "pointer",
    opacity: 1,
    zIndex: 10,
  },

  underlineImage: {
    position: "absolute",
    top: "120px",
    left: "55%",
    transform: "translateX(-50%)",
    width: "920px",
    height: "45px",
    opacity: 1,
  },

  heading: {
    position: "absolute",
    width: "1000px",
    height: "50px",
    top: "110px",
    left: "300px",
    opacity: 1,
    fontFamily: "Halant, serif",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "30px",
    lineHeight: "100%",
    textAlign: "center",
    color: "#000",
  },

  leftImage: {
    position: "absolute",
    width: "400px",
    height: "auto",
    left: "330px",
    top: "56%",
    transform: "translateY(-50%)",
    opacity: 1,
  },

  rightText: {
    position: "absolute",
    width: "360px",
    height: "300px",
    top: "200px",
    left: "750px",
    opacity: 1,
    fontFamily: "Instrument Sans, sans-serif",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight: "28px",
    letterSpacing: "0%",
    color: "#000",
  },

  exploreText: {
    position: "absolute",
    width: "139px",
    height: "29px",
    top: "635px",
    left: "740px",
    opacity: 1,
    fontFamily: "Instrument Sans, sans-serif",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight: "100%",
    textAlign: "center",
    color: "#000",
  },

  arrowImage: {
    position: "absolute",
    width: "100px",
    height: "auto",
    top: "655px",
    left: "750px",
  },

  artRight1: {
    position: "absolute",
    width: "115.1px",
    height: "141.09px",
    top: "140px",
    right: "160px",
  },
  artRight2: {
    position: "absolute",
    width: "93.5px",
    height: "165.94px",
    top: "580px",
    right: "180px",
  },
  artRight3: {
    position: "absolute",
    width: "113.31px",
    height: "141.09px",
    top: "420px",
    right: "320px",
  },

  artLeftBottom: {
    position: "absolute",
    width: "115.9px",
    height: "110.62px",
    bottom: "80px",
    left: "220px",
  },
};
