import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import '../App.css';

function Contact(props){
  return(
    <div id="con">
      <div className="locationInfo">
          <div><p><b>Address:</b></p>
            491 Somerset West At Lyon, Ottawa, Ontario
          </div>
          <div>
            <p><b>Hours:</b></p>
            <div className="days">Monday <a class="hours">11am - 10pm</a><br/></div>
            <div className="days">Tuesday<a class="hours">11am - 10pm</a><br/></div>
            <div className="days"> Wednesday<a class="hours">11am - 10pm</a><br/></div>
            <div className="days"> Thursday<a class="hours">11am - 10pm</a><br/></div>
            <div className="days">Friday<a class="hours">11am - 12am</a><br/></div>
            <div className="days"> Saturday<a class="hours">4pm - 10pm</a><br/></div>
            <div className="days"> Sunday<a class="hours">4pm - 10pm</a><br/></div>
          </div>
          <div>
            <p><b>Contact Us:</b></p>
            Tel : 613.233.2320<br/><br/>
            Delivery Area from Canal West to Island Park.<br/><br/>
            Comments & Questions: info@pavarazzigourmet.ca
          </div>
      </div>
      <div id="map"></div>
      <div id="credit">Website built and designed by <a href="https://foyin.github.io" target="_blank">FoyinOgb</a></div>
    </div>
  ); 
}

export default Contact;
