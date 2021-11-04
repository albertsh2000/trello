import React from "react";
import Form from "../Form/Form";
import Logo from "../../images/Trello-logo2.png";

function SignUp() {
   return (
      <div className="login container">
         <div>
            <img id="login-logo" src={Logo} alt="logo" />
         </div>
         <h1 className="login-title">Sign up for your account</h1>
         <input
            className="login-input"
            type="email"
            placeholder="Enter email"
         />
         <p className="or">
            By signing up, you confirm that you've read and accepted our Terms
            of Service and Privacy Policy.
         </p>
         <button className="continiu-btn">Continiu</button>
         <Form />
      </div>
   );
}

export default SignUp;
