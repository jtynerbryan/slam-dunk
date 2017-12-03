import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Highlights from './components/Highlights'
import Loader from './components/Loader'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/highlights' component={Highlights}/>
          <Route exact path='/' component={Loader}/>
        </div>
      </Router>
    )
  }

}

export default App
