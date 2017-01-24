import React from 'react';

import './style.css';
import Footer from './Footer';
import Colors from '../constants/colors';

const projectsJSON = require('../text/projects.json');
const projects = JSON.parse(JSON.stringify(projectsJSON));

class Projects extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
    this.output = this.output.bind(this);
  }
  output(projects){
    return(projects.projects.map(function(obj, i){
      return(
        <div className="project-container" key={i}>
          <h1><a href={obj.link}>{obj.name}</a></h1>
          <ul>
            {obj.tools.map(function(each, j){
              return(
                <li key={j-100}>{each}</li>
              );
            })}
          </ul>
          <p>{obj.desc}</p>
        </div>
      );
    }))
  }
  render(){
    return(
      <div className="main-tile" style={{backgroundColor: Colors.almostWhite}}>
        <div className="title">Projects</div>
        <div className="project-list">{this.output(projects)}</div>
        <Footer />
      </div>
    )
  }
}

export default Projects;