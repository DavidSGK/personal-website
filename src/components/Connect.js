import React from 'react';

import './style.css';
import Colors from '../constants/colors';

const githubImg = require('../assets/github.svg');
const linkedinImg = require('../assets/linkedin.svg');
const emailImg = require('../assets/email.svg');

function bgUrl(img){
  return "url(" + img + ")";
}

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
            <div style={{backgroundImage: bgUrl(githubImg)}}>
              <a href="https://github.com" />
            </div>
            <div style={{backgroundImage: bgUrl(linkedinImg)}}>
              <a href="https://linkedin.com" />
            </div>
            <div style={{backgroundImage: bgUrl(emailImg)}}>
              <a href="mailto:davidsgkang@gmail.com" />
            </div>
        </div>
      </div>
    )
  }
}

export default Connect;