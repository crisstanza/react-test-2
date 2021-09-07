import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Page2 from './Page2'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/page2" component={Page2} />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a><br />
            <a href="/page2">Page 2</a>
          </header>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
