import React from 'react';
import Navbar from './Navbar'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'


class Welcome extends React.Component {

  render () {
    return (
      <div className="welcome">
        <Navbar/>
        <div id="welcome-header">
          <h1>Slam Dunk</h1>
          <h2>The latest highlights from across the NBA</h2>
          <br></br>
          <Button onClick={() => this.props.history.push('/highlights')}>Highlights</Button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    highlights: state.highlights
  }
}

export default connect(mapStateToProps, null)(Welcome)
