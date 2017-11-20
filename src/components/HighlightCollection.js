import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getHighlights } from '../actions/highlights'
import { updateHighlights } from '../actions/highlights'
import ReactHtmlParser from 'react-html-parser';
import Navbar from './Navbar'
import Loader from './Loader'
import LazyLoad from 'react-lazy-load';
import { Button, Divider } from 'semantic-ui-react'

class HighlightCollection extends React.Component {

  componentDidMount() {
    // update highlights first
    if (!this.props.highlightsUpdated) {
      this.props.updateHighlights()
    }
  }

  componentDidUpdate() {
    // once highlights are updated, fetch all highlights
    if (this.props.highlights.length === 0) {
      this.props.getHighlights()
    }
  }

  render() {
    if (this.props.highlights.length > 0) {
      const highlights = this.props.highlights.map((highlight, index) => {
        return (
          <LazyLoad height={400} offsetVertical={900} key={index}>
            <div className="highlight-container">
              <h3>{highlight.title} ({highlight.date_created.slice(0,10)})</h3>
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
          <Navbar/>
          <h1>Latest Highlights</h1>
          <div className="filler">
            {highlights}
          </div>
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
    highlightsUpdated: state.highlightsUpdated
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getHighlights,
    updateHighlights
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HighlightCollection)
