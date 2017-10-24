import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getHighlights } from '../actions/highlights'
import ReactHtmlParser from 'react-html-parser';
import Navbar from './Navbar'
import Loader from './Loader'
import LazyLoad from 'react-lazy-load';

class HighlightCollection extends React.Component {

  componentDidMount() {
    this.props.getHighlights()
  }

  render() {
    console.log(this.props.highlights);
    if (this.props.highlights.length > 0) {
      const highlights = this.props.highlights.map((highlight, index) => {
        return (
          <LazyLoad height={430} offsetVertical={500} key={index}>
            <div>
              <h3>{highlight.title} ({highlight.date_created.slice(0,10)})</h3>
              { ReactHtmlParser(ReactHtmlParser(highlight.media))}
            </div>
          </LazyLoad>
        )
      })

      return (
        <div className="App">
          <Navbar/>
          <h1>Highlights</h1>
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
    highlights: state.highlights
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getHighlights
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HighlightCollection)
