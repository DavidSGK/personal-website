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
        <div className="connect-container">
          <div className="centered-text">Want to talk? Hit me up!</div>
          <div className="gap-5" />
          <div className="social-container">
              <div style={{backgroundImage: bgUrl(githubImg)}}>
                <a href="https://github.com/davidsgk" target="_blank" />
              </div>
              <div style={{backgroundImage: bgUrl(linkedinImg)}}>
                <a href="https://ca.linkedin.com/in/davidsgk" target="_blank" />
              </div>
              <div style={{backgroundImage: bgUrl(emailImg)}}>
                <a href="mailto:davidsgkang@gmail.com" target="_blank" />
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Connect;