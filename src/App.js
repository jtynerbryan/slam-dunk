import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import HighlightCollection from './components/HighlightCollection'
import Welcome from './components/Welcome'


class App extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Route path='/highlights' component={HighlightCollection}/>
        <Route exact path='/' component={Welcome}/>
      </div>
    )
  }

}



export default App
