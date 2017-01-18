import React from 'react';

import Tile from './Tile';
import Background from './Background'
import Colors from '../constants/colors';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ["Projects", "Resume", "Blog", "Connect"],
      colors: [Colors.fresh, Colors.rustyRed, Colors.vermillion, Colors.sunshine],
      links: ["projects", "about", "blog", "connect"]
    };
    this.tileGen = this.tileGen.bind(this);
  }
  tileGen(x, i){
    return(<Tile name={x} color={this.state.colors[i]} link={this.state.links[i]} key={i} />);
  }
  render() {
    return (
      <div className="fullscreen">
        <div className="main-panel" style={{backgroundColor: Colors.blueGrey}}>
          <Background onCanvas={this.props.children} />
        </div>
        <div className="side-panel">
          {this.state.names.map(this.tileGen)}
        </div>
      </div>
    );
  }
}

export default App;
