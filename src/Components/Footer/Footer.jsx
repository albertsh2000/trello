import React from "react";
import "./footer.css";
import FooterLists from "./FooterLists/FooterLists";
import internetIcon from "../../images/internetIcon.png";
import facebookIcon from "../../images/facebook.png";
import instagramIcon from "../../images/instagram.png";
import linkedinIcon from "../../images/linkedin.png";
import twitterIcon from "../../images/twitter.png";

function Footer() {
   return ( 
      <footer>
         <div className="position container">
            <FooterLists />
         </div>
         <hr />
         <div className="last-block">
            <div className='footer-left-side'>
               <img
                  className="internet-icon"
                  src={internetIcon}
                  alt="internetIcon"
               />
               <select name="language">
                  <option value="Russian">English</option>
                  <option value="Russian">Russian</option>
                  <option value="Spanish">Spanish</option>
                  <option value="France">France</option>clear
                  <option value="Netherlands">Netherlands</option>
               </select>
            </div>
               <ul className="copyright-block">
                  <li>
                     <a href="/">Cookie Settings</a>
                  </li>
                  <li>
                     <a href="/">Policy</a>
                  </li>
                  <li>
                     <a href="/">Terms</a>
                  </li>
                  <li>
                     <a href="/">Copyright© 2021 Atlassian</a>
                  </li>
               </ul>
            <div className="social-links">
               <div>
                  <img src={instagramIcon} alt="instagram" />
               </div>
               <div>
                  <img src={facebookIcon} alt="facebook" />
               </div>
               <div>
                  <img src={linkedinIcon} alt="linkedin" />
               </div>
               <div>
                  <img src={twitterIcon} alt="twitter" />
               </div>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
