import React from 'react';

import './style.css';
import Colors from '../constants/colors';
import bio from '../text/bio';

const profilePicPath = require('../assets/profile-traced.png');

const defText = `
1. A Software Engineering student at the University of Waterloo.
2. A passionate learner, a stubborn tinkerer, a pursuer of diverse skills.
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="main-tile" style={{backgroundColor: Colors.almostWhite}}>
        <div className="title-wrapper">
          <div className="title"><strong>David</strong> Kang</div>
          <div className="bar" />
          <h1>curious. creative. committed.</h1>
        </div>
        <div className="gap-5" />
        <p>{bio}</p>
          {/*<div className="profile">
            <img src={profilePicPath} style={{overflow: "hidden"}} />
          </div>*/}
        <div style={{fontSize: "500%", fontFamily: "Futura"}}><strong>David</strong> Kang</div>
        <div style={{fontSize: "200%"}}>|dey-vid kæng|</div>
        <div className="gap-5" />
        <p><i>n.</i> {defText}</p>
      </div>
    );
  }
}

export default Home;
