import React from 'react';

import Colors from '../constants/colors';
import './style.css';

class About extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div className="main-tile" style={{backgroundColor: Colors.almostWhite}}>
        <h1>About</h1>
      </div>
    );
  }
}

export default About;