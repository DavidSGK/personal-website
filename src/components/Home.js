import React from 'react';
import {Link} from 'react-router';

import './style.css';
import Colors from '../constants/colors';

const profilePicPath = require('../assets/profile.png');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="fullscreen">
        <div className="main-panel">
          <div className="main-tile section-wrapper" style={{backgroundColor: Colors.almostWhite}}>
            <div className="section-content">
              <div className="title"><strong>David</strong> Kang</div>
              <div className="bar" />
              <h2>curious. creative. committed.</h2>
            </div>
          </div>
        </div>
        <div className="side-panel">
          <Link to="about" className="side-tile section-wrapper" style={{backgroundColor: Colors.navyBlue}}>
            <div className="section-content">
              <h1>PROJECTS</h1>
              <div className="bar" />
            </div>
          </Link>
          <Link to="about" className="side-tile section-wrapper" style={{backgroundColor: Colors.warmYellow}}>
            <div className="section-content">
              <h1>BLOG</h1>
              <div className="bar" />
            </div>
          </Link>
          <Link to="about" className="side-tile section-wrapper" style={{backgroundColor: Colors.gunmetal}}>
            <div className="section-content">
              <h1>CONNECT</h1>
              <div className="bar" />
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
