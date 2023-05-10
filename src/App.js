import './App.css';

// rcc
import React, { Component } from 'react'

export default class App extends Component {
  c = 'john';
  render() {
    return (
      <div>
        hello my first class based component, {this.c}
      </div>
    )
  }
}
