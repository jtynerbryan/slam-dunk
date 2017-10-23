import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Navbar from './Navbar'
import { Button, Form,} from 'semantic-ui-react'

class Search extends React.Component {

  state = {
    searchValue: ''
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <h2>Search for highlights</h2>
        <h3>Most highlight titles reference players, nicknames, or actions (dunk, slam, etc.)</h3>
        <Form>
          <Form.Input id="form-input"label="Search" placeholder="Lebron James"></Form.Input>
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  bindActionCreators({

  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Search)
