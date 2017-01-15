import React from 'react';
import {Link} from 'react-router';

import './style.css';

class Tile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render(){
    return(
      <Link to={this.props.link} className="side-tile section-wrapper" style={{backgroundColor: this.props.color}}>
        <div className="section-content">
          {this.props.name}
          <div className="bar" />
        </div>
      </Link>
    )
  }
}

export default Tile