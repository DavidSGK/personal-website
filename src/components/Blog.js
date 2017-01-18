import React from 'react';

import './style.css';
import Colors from '../constants/colors';

class Blog extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div className="main-tile" style={{backgroundColor: Colors.almostWhite}}>
        Blog
      </div>
    )
  }
}

export default Blog;