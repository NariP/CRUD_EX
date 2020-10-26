import React, {Component} from 'react';
import{Route, BrowserRouter as Router } from 'react-router-dom';

import App1 from './App1';


class App extends Component{
  render() {
    return(
        <Router>
          <div>
            <Route exact path="/" component={App1}/>
          </div>
        </Router>
    );
  }
}

export default App;
