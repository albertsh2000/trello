import React from "react";
import "./trelloDesc.css";
import TrelloImg from "../../images/trello-desc.webp";
import GoogleIcon from "../../images/google.svg";
import FenderIcon from "../../images/Fender_Logo.svg";
import SquarespaceIcon from "../../images/squarespace.svg";
import Costco from "../../images/costco.svg";
import { Link } from "react-router-dom";

function TrelloDesc() {
   return (
      <div className="trelloDesc container">
         <h2 className="trello-title">
            It’s more than work. It’s a way of working together.
         </h2>
         <p className="trello-text">
            Start with a Trello board, lists, and cards. Customize and expand
            with more features as your teamwork grows. <br /> Manage projects,
            organize tasks, and build team spirit—all in one place.
         </p>
         <Link className="start-btn" to="/signup">
            Start doing &#8594;
         </Link>
         <div>
            <img className="trello-img" src={TrelloImg} alt="app" />
         </div>
         <p className="team">
            Join over 1,000,000 teams worldwide that are using Trello to get
            more done.
         </p>
         <div className="partners">
            <div>
               <img src={GoogleIcon} alt="partner" />
            </div>
            <div>
               <img src={FenderIcon} alt="partner" />
            </div>
            <div>
               <img src={SquarespaceIcon} alt="partner" />
            </div>
            <div>
               <img src={Costco} alt="partner" />
            </div>
         </div>
      </div>
   );
}

export default TrelloDesc;
