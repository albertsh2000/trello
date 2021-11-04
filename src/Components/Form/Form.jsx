import React from "react";
import googleIcon from "../../images/google.png";
import microsoftIcon from "../../images/microsoft.png";
import appleIcon from "../../images/apple.png";
import slackIcon from "../../images/slack.png";
import atlassian from "../../images/atlassian.svg";

function Form() {
   return (
      <>
         <p className="or">OR</p>
         <div className="continue">
            <div className="parent">
               <img src={googleIcon} alt="" />
               <p className="login-text">Continue with Google</p>
            </div>
            <div className="parent">
               <img src={microsoftIcon} alt="" />
               <p>Continue with Microsoft</p>
            </div>
            <div className="parent">
               <img src={appleIcon} alt="" />
               <p>Continue with Apple</p>
            </div>
            <div className="parent">
               <img src={slackIcon} alt="" />
               <p>Continue with Slack</p>
            </div>
            <a href="/">login with Sso</a>

            <div className="cant">
               <a href="/">Can't log in? </a>
               <a href="/">Sign up for an account</a>
            </div>
            <div className="policy">
               <a href="/">Privacy Policy </a>
               <a href="/">Terms of Service</a>
            </div>
            <select name="language" id="language">
               <option value="Russian">English</option>
               <option value="Russian">Russian</option>
               <option value="Spanish">Spanish</option>
               <option value="France">France</option>clear
               <option value="Netherlands">Netherlands</option>
            </select>
            <img className="atlassia" src={atlassian} alt="" />
            <div className="login-footer">
               <a href="/">Templates </a>
               <a href="/">Pricing </a>
               <a href="/">Apps</a>
               <a href="/">Jobs</a>
               <a href="/">Blog</a>
               <a href="/">Developers</a>
               <a href="/">About</a>
               <a href="/">Help</a>
               <a href="/">Cookie</a>
               <a href="/">Settings</a>
            </div>
         </div>
      </>
   );
}

export default Form;
