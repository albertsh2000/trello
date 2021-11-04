import React from "react";
import "./getStarted.css";
import appStore from "../../images/appStore.png";
import playMarket from "../../images/playMarket.png";
import { Link } from "react-router-dom";

function GetStarted() {
   return (
      <>
         <form className="getStarted-container">
            <h2 className="form-title">
               Sign up and get started with Trello today. A world of productive
               teamwork awaits!
            </h2>
            <div className="form-inner">
               <input className="form-email" type="email" placeholder="Email" />
               <Link className="form-sign" to="/signUp">
                  Sign up
               </Link>
            </div>
         </form>
         <div className="appStore-and-PlayMarket container">
            <p>Trello also works great on your smaller screen.</p>
            <div>
               <img
                  className="appStore-img"
                  src={appStore}
                  alt="appMarket-img"
               />
               <img
                  className="appStore-img"
                  src={playMarket}
                  alt="playMarket-img"
               />
            </div>
         </div>
         <hr />
      </>
   );
}

export default GetStarted;
