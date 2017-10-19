import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

class App extends Component {

  constructor() {
    super()

    this.state = {
      highlights: []
    }
  }

  handleHighlights = (res) => {
    let decode = $('<div />').html(res[4].data.media_embed.content).text();
    this.setState({
      highlights: decode
    })
  }

  componentDidMount() {
    fetch('http://www.reddit.com/r/nba.json')
    .then(res => res.json())
    .then(res => console.log(this.handleHighlights(res.data.children)))
  }

  render() {
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
        <div dangerouslySetInnerHTML={{ __html: `${this.state.highlights}` }} />
      </div>
    );
  }
}

export default App;
