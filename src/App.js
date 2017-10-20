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
    console.log(res)
    const highlights = res.filter(story => story.data.link_flair_css_class === "highlights" && story.data.media_embed.content)
    highlights.forEach(highlight => highlight.data.media_embed.content = $('<div />').html(highlight.data.media_embed.content).text())
    this.setState({
      highlights: highlights
    })
  }

  componentDidMount() {
    fetch('http://www.reddit.com/r/nba.json')
    .then(res => res.json())
    .then(res => this.handleHighlights(res.data.children))
  }

  render() {
    if (this.state.highlights.length > 0) {
      console.log(this.state.highlights);
      const highlights = this.state.highlights.map((highlight, index) => <div key={index}><h3>{highlight.data.title}</h3>{ReactHtmlParser(highlight.data.media_embed.content)}</div>)
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
