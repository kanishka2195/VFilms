import React from "react";
import BGImg from "../assets/BG.png";
import Video1 from "../assets/video1.svg"; // ✅ Left-side image
import Video from "../assets/Video.png";   // ✅ Center image
import Video4 from "../assets/video4.png"; // ✅ Heading image (center top)
import Video5 from "../assets/video5.png"; // ✅ Corner image (top-left)
import Video6 from "../assets/video6.png"; // ✅ Corner image (bottom-right)
import Video7 from "../assets/video7.png"; // ✅ Corner image (used for top-right & bottom-left)
import Video2 from "../assets/video2.png"; // ✅ Bottom-right page corner design

export default function Portfolio() {
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
      {/* ✅ Heading Image */}
      <img src={Video4} alt="Portfolio Heading" style={styles.headingImage} />

      {/* ✅ Left-side image */}
      <img src={Video1} alt="Portfolio Video Left" style={styles.videoImage} />

      {/* ✅ Centered main video */}
      <img src={Video} alt="Portfolio Center Video" style={styles.centerVideo} />

      {/* ✅ Corner images */}
      <img src={Video7} alt="Corner Top Right" style={styles.cornerTopRight} />
      <img src={Video5} alt="Corner Top Left" style={styles.cornerTopLeft} />
      <img src={Video7} alt="Corner Bottom Left" style={styles.cornerBottomLeft} />
      <img src={Video6} alt="Corner Bottom Right" style={styles.cornerBottomRight} />

      {/* ✅ Bottom-right page corner design */}
      <img src={Video2} alt="Page Corner Bottom Right" style={styles.pageCornerBottomRight} />
    </div>
  );
}

// ✅ Inline CSS styles
const styles = {
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
  },

  // ✅ Heading image above the video (centered)
  headingImage: {
    position: "absolute",
    width: "350px",      // adjust width as needed
    height: "80px",
    top: "100px",        // position above the main video
    left: "50%",
    transform: "translateX(-50%)",
    opacity: 1,
    zIndex: 10,
  },

  // ✅ Left-side image
  videoImage: {
    position: "absolute",
    width: "400px",
    height: "350px",
    marginLeft: "100px",
    opacity: 1,
    left: "-100px",
    top: "140px",
  },

  // ✅ Center main video
  centerVideo: {
    position: "absolute",
    width: "650px",
    height: "400px",
    top: "420px",
    right: "80px",
    transform: "translate(-50%, -50%)",
    opacity: 1,
  },

  // ✅ Top-left corner
  cornerTopLeft: {
    position: "absolute",
    width: "50px",
    height: "80px",
    top: "380px",
    left: "990px",
    opacity: 1,
  },

  // ✅ Top-right corner
  cornerTopRight: {
    position: "absolute",
    width: "70px",
    height: "260px",
    top: "290px",
    right: "415px",
    opacity: 1,
  },

  // ✅ Bottom-left corner
  cornerBottomLeft: {
    position: "absolute",
    width: "70px",
    height: "260px",
    top: "290px",
    left: "425px",
    opacity: 1,
  },

  // ✅ Bottom-right corner
  cornerBottomRight: {
    position: "absolute",
    width: "50px",
    height: "80px",
    top: "380px",
    left: "435px",
    opacity: 1,
  },

  // ✅ Page bottom-right decorative image
  pageCornerBottomRight: {
    position: "absolute",
    width: "280px",
    height: "auto",
    bottom: "0px",
    right: "0px",
    opacity: 1,
    zIndex: 10,
  },
};
