import React from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clearFilteredHighlights } from '../actions/highlights'
import ReactHtmlParser from 'react-html-parser';
import LazyLoad from 'react-lazy-load';
import { Button, Divider, Segment } from 'semantic-ui-react'

class FilteredHighlightCollection extends React.Component {

  constructor() {
    super()

    this.state = {
      highlightsReversed: false
    }
  }

  handleClick = () => {
    if (this.state.highlightsReversed === false) {
      this.setState({
        highlightsReversed: true
      })
    } else if (this.state.highlightsReversed === true){
      this.setState({
        highlightsReversed: false
      })
    }
  }

  clearFilteredHighlights = () => {
    this.props.clearFilteredHighlights()
  }

  render() {
    if (this.props.filteredHighlights.length > 0 && this.state.highlightsReversed === false) {
      const highlights = this.props.filteredHighlights.map((highlight, index) => {
        return (
          <LazyLoad height={400} offsetVertical={900} key={index}>
            <div className="highlight-container">
              <Segment>
                <h3>{highlight.title} ({highlight.date_created.slice(0,10)})</h3>
              </Segment>
              { ReactHtmlParser(ReactHtmlParser(highlight.media))}
              <div>
                <Button href={highlight.permalink} target="_blank">Reddit Post</Button>
                <Button href={highlight.url} target="_blank">Video Source</Button>
                <Divider/>
              </div>
            </div>
          </LazyLoad>
        )
      })

      return (
        <div className="App">
          <div>
            <Button icon='long arrow down' content='Date' onClick={this.handleClick}/>
            <Button content='Latest Highlights' onClick={this.clearFilteredHighlights}/>
          </div>
          <h2>{this.props.filteredHighlights.length} result(s) for '{this.props.search}'</h2>
          {highlights}
        </div>
      )
    } else if (this.props.filteredHighlights.length > 0 && this.state.highlightsReversed === true) {
      const highlights = this.props.filteredHighlights.map((highlight, index) => {
        return (
          <LazyLoad height={400} offsetVertical={900} key={index}>
            <div className="highlight-container">
              <Segment>
                <h3>{highlight.title} ({highlight.date_created.slice(0,10)})</h3>
              </Segment>
              { ReactHtmlParser(ReactHtmlParser(highlight.media))}
              <div>
                <Button href={highlight.permalink} target="_blank">Reddit Post</Button>
                <Button href={highlight.url} target="_blank">Video Source</Button>
                <Divider/>
              </div>
            </div>
          </LazyLoad>
        )
      })

      return (
        <div className="App">
          <div>
            <Button icon='long arrow up' content='Date' onClick={this.handleClick}/>
            <Button content='Latest Highlights' onClick={this.clearFilteredHighlights}/>
          </div>
            <h2>{this.props.filteredHighlights.length} result(s) for '{this.props.search}'</h2>
            {highlights.reverse()}
        </div>
      )
    }
  }

}

function mapStateToProps(state) {
  return {
    filteredHighlights: state.filteredHighlights,
    search: state.search
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    clearFilteredHighlights
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FilteredHighlightCollection))
