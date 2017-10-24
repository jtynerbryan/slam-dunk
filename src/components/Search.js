import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchHighlights } from '../actions/highlights'
import Navbar from './Navbar'
import { Button, Form,} from 'semantic-ui-react'

class Search extends React.Component {

  state = {
    searchValue: ''
  }

  handleChange = (e) => {
    this.setState({
      searchValue: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.searchValue === "") {
      alert("Please enter something to search")
    } else {

    }
  }

  render() {
    console.log(this.state.searchValue)
    return (
      <div className="App">
        <Navbar/>
        <h2>Search for highlights</h2>
        <h3>Most highlight titles reference players, nicknames, or actions (dunk, slam, etc.)</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input id="form-input"label="Search" placeholder="search" onChange={this.handleChange}></Form.Input>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  bindActionCreators({
    searchHighlights
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Search)
