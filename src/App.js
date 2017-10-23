import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Navbar from './components/Navbar'
import HighlightCollection from './components/HighlightCollection'
import { Button } from 'semantic-ui-react'


class App extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="App">
      <Route exact path='/highlights' component={HighlightCollection}/>
      <Navbar/>
      <Button onClick={() => this.props.history.push('/highlights')}>Highlights</Button>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    highlights: state.highlights
  }
}

export default withRouter(connect(mapStateToProps, null)(App))
