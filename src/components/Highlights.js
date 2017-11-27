import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Navbar from './Navbar'
import Search from './Search'
import HighlightCollection from './HighlightCollection'
import FilteredHighlightCollection from './FilteredHighlightCollection'


class Highlights extends React.Component {

  componentDidMount() {
    if (this.props.highlights.length === 0) {
      this.props.history.push('/')
    }
  }

  render() {
    if (this.props.search === "") {
      return (
        <div className="App">
          <Navbar/>
          <Search/>
          <HighlightCollection/>
        </div>
      )
    } else if (this.props.search !== "") {
      return (
        <div className="App">
          <Navbar/>
          <Search/>
          <FilteredHighlightCollection/>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    highlights: state.highlights,
    filteredHighlights: state.filteredHighlights,
    highlightsUpdated: state.highlightsUpdated,
    search: state.search
  }
}

export default connect(mapStateToProps, null)(withRouter(Highlights))
