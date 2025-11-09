import React, { useState } from "react";
import "./Contact.css";
import { useNavigate } from "react-router-dom";
import BGImg from "../assets/BG.png";
import NavbarImg from "../assets/Navbar.png";
import Frame from "../assets/vfilms_logo.png";
import FormHeading from "../assets/FormHeading.png";
import ContactTop from "../assets/ContactTop.png";
import ContactBottom from "../assets/ContactBottom.png";
import "./AboutTeam.css";


const Contact = () => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Email validation
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const { name, email, phone, message } = formData;

    // Front-end validation
    if (!name || !email || !message) {
      setErrorMessage("Please fill all required fields.");
      return;
    }

    if (!isValidEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            phone,
            message,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Response:", data); // optional: check response
        setSuccessMessage("Form Submitted");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setErrorMessage(`Server error: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <div
      className="relative w-screen min-h-screen overflow-hidden flex flex-col items-center justify-start bg-[#fdf5ef]"
      style={{
        backgroundImage: `url(${BGImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Navbar */}
      <img src={NavbarImg} alt="Navbar" className="w-full h-auto z-10" />

      {/* Logo */}
      <img
        src={Frame}
        alt="V Films Logo"
        className="absolute top-[15px] left-[40px] company-logo z-20 w-32 h-auto"
      />

      {/* Decorative Images */}
      <img
        src={ContactTop}
        alt="Top Right"
        className="absolute top-0 right-0 w-135 h-90 object-cover z-40"
      />
      <img
        src={ContactBottom}
        alt="Bottom Left"
        className="absolute bottom-0 left-0 w-[355px] h-[390px] object-cover z-40"
      />
      <img
        src={FormHeading}
        alt="Form Heading"
        className="mt-16 w-[550px] h-[84px] opacity-100 rotate-0 z-20 absolute left-[750px] top-[100px]"
      />

      {/* Info text */}
      <p
        style={{
          fontFamily: "'Instrument Sans', sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "18px",
          lineHeight: "25px",
          letterSpacing: "0%",
          color: "rgba(0, 0, 0, 1)",
          background: "transparent",
          position: "absolute",
          top: "300px",
          left: "300px",
          width: "420px",
        }}
      >
        Whether you have an idea, a question, or simply want to explore how V
        can work together, V’re just a message away.
        <br />
        Let’s catch up over coffee.
        <br />
        Great stories always begin with a good conversation.
      </p>

      {/* Contact Form */}
      <section className="flex justify-end items-start w-full flex-grow p-6 mt-[220px]">
        <div className="w-full max-w-lg mr-40 relative z-30">
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your name*"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full py-1.5 px-2.5 border-b border-gray-400 bg-white text-black focus:outline-none focus:border-orange-500 placeholder-gray-500 text-sm"
            />
            <input
              type="email"
              placeholder="Your email*"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full py-1.5 px-2.5 border-b border-gray-400 bg-white text-black focus:outline-none focus:border-orange-500 placeholder-gray-500 text-sm"
            />
            <input
              type="tel"
              placeholder="Phone"
              required
              maxLength={10}
              value={formData.phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setFormData({ ...formData, phone: value });
              }}
              className="w-full py-1.5 px-2.5 border-b border-gray-400 bg-white text-black focus:outline-none focus:border-orange-500 placeholder-gray-500 text-sm"
            />
            <textarea
              placeholder="Your message*"
              rows="3"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full py-1.5 px-2.5 border-b border-gray-400 bg-white text-black focus:outline-none focus:border-orange-500 placeholder-gray-500 text-sm"
            />

            <button
              type="submit"
              className="button"
              style={{ background: "rgba(241, 93, 43, 1)" }}
            >
              Submit
            </button>

            {errorMessage && (
              <p className="text-red-600 text-sm mt-2 text-center">
                {errorMessage}
              </p>
            )}
            {successMessage && (
              <p className="text-green-600 text-sm mt-2 text-center">
                {successMessage}
              </p>
            )}

            {/* Contact info */}
            <div className="mt-4 text-sm font-medium text-center">
              <a
                href="mailto:vernita@vamanfilms.co.in"
                className="hover:underline"
                style={{ color: "rgba(241, 93, 43, 1)" }}
              >
                vernita@vamanfilms.co.in
              </a>
              <span className="text-gray-500 mx-1">|</span>
              <a
                href="tel:+919873684567"
                className="hover:underline"
                style={{ color: "rgba(241, 93, 43, 1)" }}
              >
                +91 98736 84567
              </a>
            </div>
          </form>
        </div>
      </section>
       {/* Footer Scroll Bar */}
  <div
        className="absolute bottom-[30px] left-[65px] rounded-[6px] animate-scrollbar"
        style={{
          width: "200px",
          height: "12px",
          background: "#FDD0C1",
          zIndex: 40,
          left: "850px", // change this value to move it horizontally
        }}
      ></div> 
    </div>
  );
};

export default Contact;
