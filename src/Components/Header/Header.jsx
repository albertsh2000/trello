import React from "react";
import "./header.css";
import Logo from "../../images/Trello-logo2.png";
import { Link } from "react-router-dom";
function Header() {
   return (
      <header className='header'>
         <div>
            <img className="logo" src={Logo} alt="logo" />
         </div>
         <div className="header-btns">
            <Link className="log-in" to="/login">
               Log in
            </Link>
            <Link className="sign-btn" to="/signUp">
               Sign Up
            </Link>
         </div>
      </header>
   );
}

export default Header;
