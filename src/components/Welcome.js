import React from 'react';
import Navbar from './Navbar'

class Welcome extends React.Component {

  render () {
    return (
      <div className="welcome">
        <Navbar />
        <div id="welcome-header">
          <h1 id="welcome-h1">Slam Dunk</h1>
          <h2 id="welcome-h2">The latest highlights from across the NBA</h2>
          <br></br>
        </div>
      </div>
    )
  }
}


export default Welcome
