import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getHighlights } from './actions/highlights'
import ReactHtmlParser from 'react-html-parser';
import Navbar from './components/Navbar'


class App extends Component {

  componentDidMount() {
    this.props.getHighlights()
  }

  render() {
    if (this.props.highlights.length > 0) {
      console.log(this.props.highlights);
      const highlights = this.props.highlights.map((highlight, index) => <div key={index}><h3>{highlight.title}</h3>{ ReactHtmlParser(ReactHtmlParser(highlight.media))}</div>)
      return (
        <div className="App">
          <Navbar/>
          {highlights}
        </div>
      )
    } else {
      console.log(this.props.highlights);
      return (
        <div className="App">
        </div>
      );
    }
  }

}

function mapStateToProps(state) {
  return {
    highlights: state.highlights
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getHighlights
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
