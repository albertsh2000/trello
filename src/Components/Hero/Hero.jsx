import React from "react";
import "./hero.css";
import heroImg from "../../images/hero.png";
import { Link } from "react-router-dom";

function Hero() {
   return (
      <div className="hero container">
         <div className="left-side">
            <h1 className="hero-title">
               Trello helps teams move work forward.
            </h1>
            <p className="hero-text">
               Collaborate, manage projects, and reach new productivity peaks.
               <br />
               From high rises to the home office, the way your team works is{" "}
               <br />
               unique—accomplish it all with Trello.
            </p>
            <div className="hero-down-side">
               <input
                  className="email-field"
                  type="email"
                  placeholder="Email"
               />
               <Link className="sign-free" to="/signUp">
                  Sign Up-it's free
               </Link>
            </div>
         </div>
         <div className="right-side">
            <div>
               <img className="hero-img" src={heroImg} alt="hero" />
            </div>
         </div>
      </div>
   );
}

export default Hero;
