import React from "react";
import "../styles/About.scss";
import profile_pic from "../assets/images/profile_pic.jpg";

export const About = () => {
  return (
    <div className="background">
      <h1>About</h1>
      <div className="title-head">
        <div className="about-page">
          <p class="b2">Nice to meet you, I'm Mike</p>
          <div class="b3">
            sasjhgsa gkjhsadg kjashdg ksajdg salkhg salkdhg kasjdh gkjash dg
          </div>
        </div>
        <img src={profile_pic} alt="profile" />
      </div>
    </div>
  );
};

export default About;
