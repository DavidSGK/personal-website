import React from 'react';

import './style.css';
import Colors from '../constants/colors';

const githubImg = require('../assets/github.svg');
const linkedinImg = require('../assets/linkedin.svg');
const emailImg = require('../assets/email.svg');

class Connect extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div className="main-tile" style={{backgroundColor: Colors.almostWhite}}>
        <div className="social-container">
          <a href="https://github.com">
            <img src={githubImg} className="social" />
          </a>
          <a href="https://linkedin.com">
            <img src={linkedinImg} className="social" />
          </a>
          <a href="mailto:davidsgkang@gmail.com">
            <img src={emailImg} className="social" />
          </a>
        </div>
      </div>
    )
  }
}

export default Connect;