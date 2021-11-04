import React from "react";
import "./loginAndSign.css";
import Form from "../Form/Form";
import Logo from "../../images/Trello-logo2.png";

function login() {
   return (
      <>
         <div className="login container">
            <div>
               <img id="login-logo" src={Logo} alt="logo" />
            </div>
            <h1 className="login-title">Log in to Trello</h1>
            <input
               className="login-input"
               type="email"
               placeholder="Enter email"
            />
            <input
               className="login-input"
               type="password"
               placeholder="Enter password"
            />
            <button className="login-btn">Log In</button>
            <Form />
         </div>
      </>
   );
}

export default login;
