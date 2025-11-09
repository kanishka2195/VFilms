import React from "react";
import { useNavigate } from "react-router-dom";
import BGImg from "../assets/BG.png";
import Service1 from "../assets/Service1.svg"; // Underline image
import Service2 from "../assets/Service2.png"; // Small image at corner above frames
import Service3 from "../assets/Service3.svg"; // Bottom decoration
import ServiceFrame1 from "../assets/ServiceFrame1.png";
import ServiceFrame2 from "../assets/ServiceFrame2.png";
import ServiceFrame3 from "../assets/ServiceFrame3.png";
import image7 from "../assets/image7.png";

export default function Services() {
  const navigate = useNavigate();

  // ✅ Navigation handlers
  const goToFilmProduction = () => navigate("/filmproduction");
  const goToBranding = () => navigate("/branding");
  const goToArtCuration = () => navigate("/artcuration");

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
      {/* Title */}
      <p style={styles.text}>The storyboard reveals the breadth of our craft.</p>

      {/* Underline */}
      <img src={Service1} alt="Underline" style={styles.underlineImage} />

      {/* ✅ Clickable Frames */}
      <img
        src={ServiceFrame1}
        alt="Film Production"
        style={styles.frame1}
        onClick={goToFilmProduction}
        className="cursor-pointer"
      />
      <img
        src={ServiceFrame2}
        alt="Branding"
        style={styles.frame2}
        onClick={goToBranding}
        className="cursor-pointer"
      />
      <img
        src={ServiceFrame3}
        alt="Art Curation"
        style={styles.frame3}
        onClick={goToArtCuration}
        className="cursor-pointer"
      />

      {/* Small corner images */}
      <img src={Service2} alt="Corner Decoration" style={styles.cornerImage1} />
      <img src={Service2} alt="Corner Decoration" style={styles.cornerImage2} />
      <img src={image7} alt="Corner Decoration" style={styles.image7} />

      {/* Bottom decoration */}
      <img src={Service3} alt="Bottom Decoration" style={styles.bottomImage} />
    </div>
  );
}

// Inline CSS
const styles = {
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    position: "relative",
  },
  text: {
    width: "750px",
    position: "absolute",
    top: "120px",
    left: "50%",
    transform: "translateX(-50%)",
    fontFamily: "Halant, serif",
    fontWeight: 400,
    fontSize: "30px",
    lineHeight: "100%",
    textAlign: "center",
    color: "#000000",
    opacity: 1,
    zIndex: 10,
  },
  underlineImage: {
    position: "absolute",
    top: "130px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "885px",
    height: "40px",
    opacity: 1,
    zIndex: 5,
  },
  frame1: {
    position: "absolute",
    width: "380px",
    height: "450px",
    top: "200px",
    left: "220px",
    transform: "rotate(5deg)",
    transformOrigin: "top left",
    opacity: 1,
    zIndex: 8,
  },
  frame2: {
    position: "absolute",
    width: "360px",
    height: "420px",
    top: "250px",
    left: "560px",
    transform: "rotate(0deg)",
    opacity: 1,
    zIndex: 9,
  },
  frame3: {
    position: "absolute",
    width: "380px",
    height: "450px",
    top: "200px",
    left: "880px",
    transform: "rotate(-6deg)",
    transformOrigin: "top right",
    opacity: 1,
    zIndex: 8,
  },
  cornerImage1: {
    position: "absolute",
    top: "200px",
    left: "245px",
    width: "150px",
    height: "auto",
    opacity: 1,
    zIndex: 12,
  },
  cornerImage2: {
    position: "absolute",
    top: "230px",
    left: "670px",
    width: "150px",
    height: "auto",
    opacity: 1,
    zIndex: 12,
  },
  image7: {
    position: "absolute",
    top: "200px",
    right: "230px",
    width: "150px",
    height: "auto",
    opacity: 1,
    zIndex: 12,
  },
  bottomImage: {
    position: "absolute",
    bottom: "0px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    height: "auto",
    objectFit: "contain",
    opacity: 1,
    zIndex: 4,
  },
};
