import React from 'react'
import Logo from "../../../images/Trello-logo2.png";


function FooterLists() {
    return (
        <>
            <div><img className="logo" src={Logo} alt="logo" /></div> 
            <ul className='footer-list'>
                <li><h3>GET STARTED</h3></li>
                <li><a href="\">Guide</a></li>
                <li><a href="\">Templates</a></li>
                <li><a href="\">Team Solutions</a></li>
                <li><a href="\">Webinars</a></li>   
                <li><a href="\">Log In</a></li>   
            </ul>
            <ul className='footer-list'>
                <li><h3>MUST-HAVES</h3></li>
                <li><a href="\">Apps</a></li>
                <li><a href="\">Automation</a></li>
                <li><a href="\">Integrationss</a></li> 
                <li><a href="\">Power-Ups</a></li>   
                <li><a href="\">Views</a></li>   
            </ul>
            <ul className='footer-list'>
                <li><h3>LEVEL UP</h3></li>
                <li><a href="\">Pricing</a></li>
                <li><a href="\">Standard</a></li>
                <li><a href="\">Premium</a></li>
                <li><a href="\">Enterprise</a></li>   
            </ul>
            <ul className='footer-list'>
                <li><h3>COMPANY</h3></li>
                <li><a href="\">About</a></li>
                <li><a href="\">Jobs</a></li>
                <li><a href="\">Legal</a></li>
            </ul>
            <ul className='footer-list'>
                <li><h3>RESOURCES</h3></li>
                <li><a href="\">Blog</a></li>
                <li><a href="\">Developers</a></li>
                <li><a href="\">Help</a></li>
            </ul>
        </>
    )
}

export default FooterLists
