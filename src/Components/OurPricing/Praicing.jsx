import React from "react";
import priceImg from "../../images/price1.svg";
import compass from "../../images/compass.svg";
import './pricing.css'
 

function Praicing() {
   return (
      <div className="pricing">
         <div>
            <img src={priceImg} alt="price" />
         </div>
         <div>
            <h2 className=" pricing-title">See our pricing</h2>
            <p className="pricing-text">
               Whether you’re a team of 2 or 2,000, there’s a Trello tailor-made
               for your organization.
            </p>
            <button className="start-btn">Trello pricing</button>
         </div>
         <div>
            <img src={compass} alt="price" />
         </div>
         <div>
            <h2 className=" pricing-title">Take a Trello tour</h2>
            <p className="pricing-text">
               Take a Trello tour Explore the world of boards and beyond in
               Trello. Dive deeper into our most popular features.
            </p>
            <button className="start-btn">Tour Trello</button>
         </div>
      </div>
   );
}

export default Praicing;
