import React from 'react';

import './style.css';
import Colors from '../constants/colors';

class Projects extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div className="main-tile" style={{backgroundColor: Colors.almostWhite}}>
        <div className="title"><strong>Projects</strong></div>
      </div>
    )
  }
}

export default Projects;