import React from 'react';
import { connect } from 'react-redux'
import ReactHtmlParser from 'react-html-parser';
import LazyLoad from 'react-lazy-load';

class FilteredHighlightCollection extends React.Component {

  render() {
    if (this.props.filteredHighlights.length > 0) {
      const highlights = this.props.filteredHighlights.map((highlight, index) => {
        return (
          <LazyLoad height={430} offsetVertical={800} key={index}>
            <div>
              <h3>{highlight.title} ({highlight.date_created.slice(0,10)})</h3>
              { ReactHtmlParser(ReactHtmlParser(highlight.media))}
            </div>
          </LazyLoad>
        )
      })

      return (
        <div className="App">
          <div className="filler">
            <h2>{this.props.filteredHighlights.length} result(s) for '{this.props.search}'</h2>
            {highlights}
          </div>
        </div>
      )
    } else {
      return (
        <div>
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

export default connect(mapStateToProps, null)(FilteredHighlightCollection)
