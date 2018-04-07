import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Milkyway</h1>
        </header>
    
        <div className="col-12 marginbtn">
         Please <NavLink to='/login' className="btn btn-primary"> Login </NavLink> 
        </div>
      </div>
    );
  }
}

export default App;