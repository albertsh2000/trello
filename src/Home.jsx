import React from "react";
import Features from "./Components/Features/Features.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import GetStarted from "./Components/Get started/GetStarted.jsx";
import Header from "./Components/Header/Header.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import TrelloDesc from "./Components/TrelloDesc/TrelloDesc.jsx";

function Home() {
   return (
      <div className="home">
         <Header />
         <Hero />
         <TrelloDesc />
         <Features />
         <GetStarted />
         <Footer />
      </div>
   );
}

export default Home;
