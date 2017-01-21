import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Connect from './components/Connect';

import BlogPost from './components/BlogPost';

class Routes extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <Router history={this.props.history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="about" component={About} />
          <Route path="projects" component={Projects} />
          <Route path="blog" component={Blog} />
          <Route path="connect" component={Connect} />
          <Route path="post/:test" component={BlogPost} />
        </Route>
      </Router>
    );
  }
}

export default Routes;