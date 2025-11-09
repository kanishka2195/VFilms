import { Link } from "react-router-dom";
import BGImg from "../../assets/BG.png"; // Background image
import VFilmsLogo from "../../assets/vfilms_logo.png"; // V Films logo

const Header = () => {
  return (
    <header
      className="w-full fixed top-0 left-0 z-50 shadow-md flex items-center"
      style={{
        backgroundImage: `url(${BGImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Navbar container */}
      <div className="w-[90%] max-w-5xl mx-auto flex justify-between items-center py-4 px-2">
        {/* Logo - moved further left */}
       <Link to="/" style={{ marginLeft: "-40px" }}>
  <img src={VFilmsLogo} alt="V Films Logo" className="w-32 h-auto" />
</Link>


        {/* Navigation Links - Top Right */}
        <nav className="flex gap-6 items-center">
          <Link to="/" className="text-black font-medium hover:text-pink-500">
            Home
          </Link>
          <Link to="/team" className="text-black font-medium hover:text-pink-500">
            About Team
          </Link>
          <Link to="/about" className="text-black font-medium hover:text-pink-500">
            About Us
          </Link>
          <Link to="/services" className="text-black font-medium hover:text-pink-500">
            Service
          </Link>

          {/* ✅ Added Portfolio Link */}
          <Link to="/portfolio" className="text-black font-medium hover:text-pink-500">
            Portfolio
          </Link>

          <Link to="/contact" className="text-black font-medium hover:text-pink-500">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
