import React from "react";
import MainBanner from "./MainBanner";

function About() {
  return (
    <>
      <MainBanner page={"About Us"} />
      <div className="about">
        <img src="/images/about.jpg" alt="gaming" />
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas illum
            eos laudantium laborum corporis exercitationem pariatur laboriosam
            dolor hic eius! Rerum necessitatibus itaque, rem ut reiciendis minus
            amet illo nesciunt!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas illum
            eos laudantium laborum corporis exercitationem pariatur laboriosam
            dolor hic eius! Rerum necessitatibus itaque, rem ut reiciendis minus
            amet illo nesciunt!
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
