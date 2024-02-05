import React from "react";
import { Link } from "react-router-dom";
import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="banner">
        <h1>Welcome to University Finder</h1>
        <p>Your gateway to finding the perfect university program</p>
        <Link to="/Functions" className="btn btn-primary">
          Get Started
        </Link>
      </div>
      <div className="about-section">
        <h2>About Us</h2>
        <p>
          University Finder is a comprehensive platform that helps students
          discover and explore university programs around the world. Whether
          you're interested in pursuing a degree in engineering, medicine,
          humanities, or any other field, we've got you covered. Start your
          journey today and find the perfect program that matches your interests
          and aspirations.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
