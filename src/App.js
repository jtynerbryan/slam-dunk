import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import ReactHtmlParser from 'react-html-parser';


class App extends Component {

  constructor() {
    super()

    this.state = {
      highlights: []
    }
  }

  handleHighlights = (res) => {
    const highlights = res.filter(story => story.data.link_flair_css_class === "highlights")
    const iframes = highlights.map(highlight => $('<div />').html(highlight.data.media_embed.content).text())
    this.setState({
      highlights: iframes
    })
  }

  componentDidMount() {
    fetch('http://www.reddit.com/r/nba.json')
    .then(res => res.json())
    .then(res => this.handleHighlights(res.data.children))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {ReactHtmlParser(this.state.highlights.join(''))}
      </div>
    );
  }
}

export default App;
