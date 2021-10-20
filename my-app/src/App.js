import React from 'react';
import './App.css';
import {
  Switch, Route, BrowserRouter, Redirect,
} from 'react-router-dom';
import Home from './components/Home';
import Tables from './components/Tables';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/tables" component={Tables} />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
