import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from '../../logo.svg';
import '../../App.css';

library.add(faChevronDown);

function LandingHeader(props){
  return (
    <div className="LandingHeader parallax">
      <img src="images/cgicons/newCB.png"/>
      <a href="#about">
      <div className="arrow" id="arr">
        <FontAwesomeIcon icon={faChevronDown} />
      </div></a>
    </div>
  );
}

function LandingMainLayout(props){
  return(
    <div id="main1" className="landingMainLayout parallax centerMessage">
        <img 
          width='400vw'
          height='500vh'
          src='images/cgmenu.JPG'
        />
      </div>
  ); 
}

function NotificationSection(props){
  return(
    <div  id="NotificationSection">
          
    </div>
  ); 
}

function Gallery(props){
  return(
  <div className="GallerySection">
    <div  id="Gallery">
          <img src="../../images/chicken1.jpg"/>
          <img src="../../images/burger.jpg"/>
          <img style={{backgroundPosition:"0% 85%"}}src="../../images/sub.jpg"/>
          <img src="../../images/chickenGrill.jpg"/> 
          <img src="../../images/chickenGrill2.jpg"/> 
          <img src="../../images/grill2.jpg"/> 
          <img src="../../images/grill.jpg"/> 
    </div>
        <div className="GalleryTitle"><b>GALLERY</b></div>

  </div>
  ); 
}

function Home() {
  return (
    <div>
      <LandingHeader/>
      <div className="about hideme" id="about">
        <p><b>About Us</b></p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.     
      </div>
      
      <LandingMainLayout title="CHECK OUT OUR MENU" promo="Ask about our star of the month pizza, and get 10% off" button="MENU"/>
      <NotificationSection line1="hi"/>
      <Gallery/>
    </div>
  );
}

export default Home;
