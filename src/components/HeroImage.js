import "./HeroImageStyle.css";
import React from 'react'
import IntoImg from '../assets/download.jpg';
import {Link} from "react-router-dom";
const HeroImage = () => {
  return (
    <div className="hero"> 
      <div className="mask">
        <img className="into-img" src={IntoImg}></img>
      </div>
      <div className="content">
        <p>HI, I'M A PROGRAMMER.</p>
        <h1>React Developer.</h1>
        <div>
            <Link to="/project" className="btn">Project</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>

    </div>
  )
}

export default HeroImage
