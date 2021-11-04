import React from "react";
import "./features.css";
import FeaturesBlocks from "./FeatureBlocks";

function Features() {
   return (
      <div className="features container">
         <div className="features-hero">
            <h2 className="fetures-title">
               Features to help your team <br /> succeed
            </h2> 
            <p className="features-text">
               Powering a productive team means using a powerful  <br/> tool and
               plenty of snacks. From meetings and projects <br/>  to events and goal
               setting, Trello’s intuitive features give  <br/> any team the ability to quickly set up and customize <br /> workflows for just about anything.
            </p>
         </div>
         <FeaturesBlocks />
         
      </div>
   );
}

export default Features;
