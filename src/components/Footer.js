import React from 'react';

import './style.css';

class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div className="footer">
        Made with passion and &lt;3 | Copyright © 2017 David Kang
      </div>
    )
  }
}

export default Footer;