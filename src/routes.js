import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';

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
        </Route>
      </Router>
    );
  }
}

export default Routes;