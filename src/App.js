import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactHtmlParser from 'react-html-parser';


class App extends Component {

  constructor() {
    super()

    this.state = {
      highlights: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/get_highlights')
    .then(res => res.json())
    .then(res => this.setState({
      highlights: res.highlights
    }))
  }

  render() {
    if (this.state.highlights.length > 0) {
      console.log(this.state.highlights);
      const highlights = this.state.highlights.map((highlight, index) => <div key={index}><h3>{highlight.title}</h3>{ ReactHtmlParser(ReactHtmlParser(highlight.media))}</div>)
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>

            {highlights}

        </div>
      )
    } else {
      console.log(this.state.highlights);
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      );
    }

  }
}

export default App;
