import React from 'react';
import Navbar from './Navbar'
import { Button } from 'semantic-ui-react'


class Welcome extends React.Component {

  handleClick = () => {
    this.props.history.push('/load-highlights')
  }

  render () {
    return (
      <div className="welcome">
        <Navbar/>
        <div id="welcome-header">
          <h1 id="welcome-h1">Slam Dunk</h1>
          <h2 id="welcome-h2">The latest highlights from across the NBA</h2>
          <br></br>
          <Button size='big'onClick={this.handleClick}>Highlights</Button>
        </div>
      </div>
    )
  }
}


export default Welcome
