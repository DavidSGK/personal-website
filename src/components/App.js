import React from 'react';

import Tile from './Tile';
import Background from './Background';
import Colors from '../constants/colors';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ["About", "Projects", "Resume", "Blog", "Connect"],
      colors: [Colors.teal, Colors.fresh, Colors.magenta, Colors.vermillion, Colors.sunshine],
      links: ["/" ,"projects", "resume", "blog", "connect"]
    };
    this.tileGen = this.tileGen.bind(this);
  }
  tileGen(x, i){
    /*if(this.props.location.pathname !== "/" + this.state.links[i] && this.props.location.pathname !== this.state.links[i]){
      return(<Tile name={x} color={this.state.colors[i]} link={this.state.links[i]} key={i} />);
    }*/
    return(<Tile name={x} color={this.state.colors[i]} link={this.state.links[i]} key={i} />);
  }
  render() {
    return (
      <div className="fullscreen">
        <div className="main-panel" style={{backgroundColor: Colors.blueGrey}}>
          <Background onCanvas={this.props.children} />
        </div>
        <ul className="navbar">
          {this.state.names.map(this.tileGen)}
        </ul>
      </div>
    );
  }
}

export default App;
