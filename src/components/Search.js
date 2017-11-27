import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchHighlights } from '../actions/highlights'
import { getHighlights } from '../actions/highlights'
import { updateHighlights } from '../actions/highlights'
import { Button, Form} from 'semantic-ui-react'

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
      this.props.searchHighlights(this.state.searchValue)
    }
  }

  render() {
      return (
        <div className="App">
          <h2>Search for highlights</h2>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
            <Form.Input placeholder="search highlights" onChange={this.handleChange}></Form.Input>
            <Button type="submit">Submit</Button>
            </Form.Group>
          </Form>
        </div>
      )
  }

}

function mapStateToProps(state) {
  return {
    highlights: state.highlights,
    filteredHighlights: state.filteredHighlights,
    highlightsUpdated: state.highlightsUpdated
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    searchHighlights,
    getHighlights,
    updateHighlights
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
