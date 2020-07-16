import React from "react";
import logo from "./logo.svg";
import "./App.css";

//My imports
import Header from "./components/header/Header";
import { NavLink } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/gallery" component={Home} />
        <Route path="/about" component={About} />
        <Route path='/sky' component={() => { 
            window.location.href = 'https://www.skyjohnson.me/'; 
            return null;
        }}/>
        <Redirect from="/" to="/gallery/" />
      </Switch>

      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
