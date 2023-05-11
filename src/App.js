import './App.css';

// rcc
import React, { Component } from 'react'
import NavBar from './components/NavBar';

export default class App extends Component {
  // c = 'john';
  render() {
    return (
      <>
      {/* <div>
        hello my first class based component, {this.c}
      </div> */}
      <NavBar />
      </>
    )
  }
}
