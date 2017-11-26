import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchHighlights } from '../actions/highlights'
import { getHighlights } from '../actions/highlights'
import { updateHighlights } from '../actions/highlights'
import Navbar from './Navbar'
import Loader from './Loader'
import FilteredHighlightCollection from './FilteredHighlightCollection'
import { Button, Form,} from 'semantic-ui-react'

class Search extends React.Component {

  state = {
    searchValue: ''
  }

  componentDidMount() {
    if (!this.props.highlightsUpdated) {
      this.props.updateHighlights()
    }
  }

  componentDidUpdate() {
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
    if (this.props.highlights.length > 0) {
      return (
        <div className="App">
          <h2>Search for highlights</h2>
          <Form onSubmit={this.handleSubmit}>
            <Form.Input placeholder="Most highlight titles reference players, nicknames, or actions (dunk, slam, etc.)" onChange={this.handleChange}></Form.Input>
            <Button type="submit">Submit</Button>
          </Form>
          <br></br>
          <FilteredHighlightCollection/>
        </div>
      )
    } else {
        return (
          <Loader/>
        )
    }

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
