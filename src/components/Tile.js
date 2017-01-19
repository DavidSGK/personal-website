import React from 'react';
import {Link} from 'react-router';

import './style.css';

const resumePath = require('../assets/Resume.pdf');
const aboutImg = require('../assets/About.svg');
const projectImg = require('../assets/Projects.svg');
const resumeImg = require('../assets/Resume.svg');
const blogImg = require('../assets/Blog.svg');
const connectImg = require('../assets/Connect.svg');

function whichImg(name){
  switch(name){
    case "About": return aboutImg;
    case "Projects": return projectImg;
    case "Resume": return resumeImg;
    case "Blog": return blogImg;
    case "Connect": return connectImg;
  }
}

class Tile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render(){
    if(this.props.name === "Resume"){
      return(
        <a href={resumePath} className="side-tile section-wrapper" style={{backgroundColor: this.props.color}}>
          <img src={whichImg(this.props.name)} className="tile-img" />
          <div className="section-content">
            {this.props.name}
            <div className="bar" />
          </div>
        </a>
      )
    } else {
      return(
        <Link to={this.props.link} className="side-tile section-wrapper" style={{backgroundColor: this.props.color}}>
          <img src={whichImg(this.props.name)} className="tile-img" />
          <div className="section-content">
            {this.props.name}
            <div className="bar" />
          </div>
        </Link>
      )
    }
  }
}

export default Tile