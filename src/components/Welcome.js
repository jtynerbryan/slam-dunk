import React from 'react';
import Navbar from './Navbar'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'


class Welcome extends React.Component {

  render () {
    return (
      <div>
        <Navbar/>
        <h1>Slam Dunk delivers the latest highlights from across the NBA</h1>
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

export default connect(mapStateToProps, null)(Welcome)
