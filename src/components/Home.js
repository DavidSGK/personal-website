import React from 'react';

import './style.css';
import Footer from './Footer';
import Colors from '../constants/colors';
import bio from '../text/bio';
import hireme from '../text/hireme';

const mePath = require('../assets/EOT1-3.png');

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
        <div className="title">About</div>
        <h1>David Kang</h1>
        <div style={{fontSize: "120%"}}>|dey-vid kæng|</div>
        <br />
        <div className="gap-5" />
        <h2><i>n.</i> {defText}</h2>
        <br />
        <h2><i>see also.</i> curious, creative, committed</h2>
        <div className="profile-container">
          <h1>Okay... but who IS that?</h1>
          <img src={mePath} className="profile" role="presentation" />
          <p>{bio}</p>
          <br />
          <p>{hireme}</p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
