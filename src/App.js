import React, { Component } from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Results from './components/Results'




class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route path='/' component={Page1} exact/>
            <Route path='/page2' component={Page2}/>
            <Route path='/results' component={Results}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
