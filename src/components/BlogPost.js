import React from 'react';

import './style.css';
import Colors from '../constants/colors';

class BlogPost extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    console.log(this.props.params);
    return(
      <div className="main-tile" style={{backgroundColor: Colors.almostWhite}}>
        {this.props.params.test}
      </div>
    );
  }
}

export default BlogPost;