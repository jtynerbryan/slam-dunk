import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import HighlightCollection from './components/HighlightCollection'
import Welcome from './components/Welcome'
import Search from './components/Search'
import Loader from './components/Loader'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route path='/highlights' component={HighlightCollection}/>
        <Route exact path='/' component={Welcome}/>
        <Route exact path='/search' component={Search}/>
        <Route exact path='/load-highlights' component={Loader}/>
      </div>
    )
  }

}

export default App
