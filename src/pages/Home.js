import React from "react";
import "../App.css";
import "./Home.css";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="home">
        <div className="names-container">
          <div>
            <h2 className="name-eng">Mike Yang</h2>
            <h3 className="name-chn">杨凌峰</h3>
            <p>( Analyst / Developer / Photographer)</p>
          </div>
        </div>

        <div className="profile-container">
          <img
            className="profile-picture"
            src={"./../Images/profile_pic1.jpg"}
            alt="Profile"
          />
        </div>

        <div className="intro-container">
          Hello, I'm an analyst based in Toronto.
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
