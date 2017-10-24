import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchHighlights } from '../actions/highlights'
import { getHighlights } from '../actions/highlights'
import Navbar from './Navbar'
import { Button, Form,} from 'semantic-ui-react'

class Search extends React.Component {

  state = {
    searchValue: ''
  }

  componentDidMount() {
    if (this.props.highlights.length === 0) {
      this.props.getHighlights()
    }
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
      this.props.searchHighlights(this.state.searchValue)
    }
  }

  render() {
    console.log(this.props)
    if (this.props.highlights.length > 0) {
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
    } else {
        return (
          <div className="App" id="loader">
          <Navbar/>
            <h1>Loading Highlights...</h1>
          </div>
        )
    }

  }
}

function mapStateToProps(state) {
  return {
    highlights: state.highlights,
    filteredHighlights: state.filteredHighlights
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    searchHighlights,
    getHighlights
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
