import logo from './logo.svg';
import './App.css';
import Sanna from './Sanna';
import AppBar from './AppBar';
import BasicGrid from './Grid';
import Page from './Page';
import React from 'react';
import {Route, Link, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <AppBar />  */}
        {/* <BasicGrid></BasicGrid>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Routes>
        <Route exact path = "/" component = {App} />
        <Route exact path = "/page" component = {Sanna} />
        </Routes> 
        
        <Sanna />
        <a
          className="App-link"
          id = "ReactLink"
          href="https://reactjs.org"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
