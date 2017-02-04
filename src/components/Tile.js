import React from 'react';
import {Link} from 'react-router';

import './style.css';

var MediaQuery = require('react-responsive');

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
    default: return;
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
        <li className="nav-tile">
          <MediaQuery minWidth={769}>
            <a href={resumePath} className="section-wrapper" style={{backgroundColor: this.props.color}}>
              <img src={whichImg(this.props.name)} className="tile-img" role="presentation" />
              <div className="section-content">
                {this.props.name}
                <div className="bar" />
              </div>
            </a>
          </MediaQuery>
          <MediaQuery maxWidth={768}>
            <a href={resumePath}>
              {this.props.name}
            </a>
          </MediaQuery>
        </li>
      )
    } else {
      return(
        <li className="nav-tile">
          <MediaQuery minWidth={769}>
            <Link to={this.props.link} className="section-wrapper" style={{backgroundColor: this.props.color}}>
              <img src={whichImg(this.props.name)} className="tile-img" role="presentation" />
              <div className="section-content">
                {this.props.name}
                <div className="bar" />
              </div>
            </Link>
          </MediaQuery>
          <MediaQuery maxWidth={768}>
            <Link to={this.props.link}>
              {this.props.name}
            </Link>
          </MediaQuery>
        </li>
      )
    }
  }
}

export default Tile;