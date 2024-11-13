import React from "react";
import resume from "../img/Praveen_resume.pdf";
import heroImg from "../img/hero_img.png" 

function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey I'm Praveen</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color"> Full stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section--description">
            Develop both the client and server-side software for an application.
            <br />
            They are responsible for the entire app design process, from
            front-end to back-end.
          </p>
        </div>
        <a href={resume} download>
          <button className="btn btn-primary">Check My CV</button>
        </a>
      </div>
      <div className="hero--section--img">
        <img src={heroImg} alt="heroImg" />
      </div>
    </section>
  );
}

export default HeroSection;
