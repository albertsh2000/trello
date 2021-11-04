import React from "react";
import viewImg from "../../images/features-view.svg";
import automationImg from "../../images/features-automation.webp";
import featuresCard from "../../images/features-card-back.svg";
import powerUp from "../../images/features-power-ups.webp";
import Praicing from "../OurPricing/Praicing";
import LessText from "../LessText/LessText";

function FeatureBlocks() { 
   return (
      <>
         <div className="block">
            <div>
               <img className="feuture-block-img" src={viewImg} alt="" />
            </div>
            <div className=" features-block-description">
               <p className="small-title">CHOOSE A VIEW</p>
               <h2 className="fetures-title">
                  The board is just the beginning
               </h2>
               <p className="features-text">
                  Lists and cards are the building blocks of organizing work on
                  a <br /> Trello board. Grow from there with task assignments,
                  timelines, <br /> productivity metrics, calendars, and more.
               </p>
               <LessText
                  text=" Lists and cards are the building blocks of organizing work on a Trello board. Grow from there with task assignments, timelines, productivity metrics, calendars, and more.You and your team can start up a Trello board in seconds. With the ability to view board data from many different angles, the entire team stays up-to-date in the way that suits them best:
                  Use a Timeline view for project planning
                  Calendar helps with time management
                  Table view connects work across boards
                  See board stats with Dashboard, and more!
                  Learn more about views"
               />
            </div>
         </div>
         <div className="block">
            <div className=" features-block-description">
               <p className="small-title">DIVE INTO THE DETAILS</p>
               <h2 className="fetures-title">
                  Cards contain everything you need
               </h2>
               <p className="features-text">
                  Trello cards are your portal to more organized work—where
                  every <br /> single part of your task can be managed, tracked, and
                  shared with  <br /> teammates. Open any card to uncover an ecosystem
                  of checklists, <br /> due dates, attachments, conversations, and
                  more.
               </p>
               <LessText
                  text=" Lists and cards are the building blocks of organizing work on a Trello board. Grow from there with task assignments, timelines, productivity metrics, calendars, and more.You and your team can start up a Trello board in seconds. With the ability to view board data from many different angles, the entire team stays up-to-date in the way that suits them best:
                  Use a Timeline view for project planning
                  Calendar helps with time management
                  Table view connects work across boards
                  See board stats with Dashboard, and more!
                  Learn more about views"
               />
            </div>
            <div>
               <img className="feuture-block-img" src={featuresCard} alt="" />
            </div>
         </div>
         <div className="block">
            <div>
               <img className="feuture-block-img" src={automationImg} alt="" />
            </div>
            <div className=" features-block-description">
               <p className="small-title">MEET YOUR NEW BUTLER</p>
               <h2 className="fetures-title">No-code automation</h2>
               <p className="features-text">
                  Let the robots do the work—so your team 
                  can focus on work that <br />
                  matters. With Trello’s built-in automation,
                   Butler, reduce the <br />
                  number of tedious tasks and clicks
                   on your project board by <br />
                  harnessing the power of automation across your entire team.
               </p>
               <LessText
                  text=" Lists and cards are the building blocks of organizing work on a Trello board. Grow from there with task assignments, timelines, productivity metrics, calendars, and more.You and your team can start up a Trello board in seconds. With the ability to view board data from many different angles, the entire team stays up-to-date in the way that suits them best:
                  Use a Timeline view for project planning
                  Calendar helps with time management
                  Table view connects work across boards
                  See board stats with Dashboard, and more!
                  Learn more about views"
               />
            </div>
         </div>
         <div className="block">
            <div className=" features-block-description">
               <p className="small-title">POWER-UPS</p>
               <h2 className="fetures-title">Integrate top work tools</h2>
               <p className="features-text">
                  Easily connect the apps your team already uses into your
                  Trello <br /> workflow, or add a Power-Up that helps fine-tune one
                  specific <br /> need. With hundreds of Power-Ups available, your
                  team’s workflow <br /> wishes are covered.
               </p>
               <LessText
                  text=" Lists and cards are the building blocks of organizing work on a Trello board. Grow from there with task assignments, timelines, productivity metrics, calendars, and more.You and your team can start up a Trello board in seconds. With the ability to view board data from many different angles, the entire team stays up-to-date in the way that suits them best:
                  Use a Timeline view for project planning
                  Calendar helps with time management
                  Table view connects work across boards
                  See board stats with Dashboard, and more!
                  Learn more about views"
               />
            </div>
            <div>
               <img className="feuture-block-img" src={powerUp} alt="" />
            </div>
         </div>
         <hr />
         <Praicing />
         <hr />
      </>
   );
}

export default FeatureBlocks;
