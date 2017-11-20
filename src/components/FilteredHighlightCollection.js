import React from 'react';
import { connect } from 'react-redux'
import ReactHtmlParser from 'react-html-parser';
import LazyLoad from 'react-lazy-load';
import { Button, Divider } from 'semantic-ui-react'

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

  render() {
    if (this.props.filteredHighlights.length > 0 && this.state.highlightsReversed === false) {
      const highlights = this.props.filteredHighlights.map((highlight, index) => {
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
          <div className="filler">
            <Button icon='long arrow down' content='Date' onClick={this.handleClick}/>
            <h2>{this.props.filteredHighlights.length} result(s) for '{this.props.search}'</h2>
            {highlights}
          </div>
        </div>
      )
    } else if (this.props.filteredHighlights.length > 0 && this.state.highlightsReversed === true) {
      const highlights = this.props.filteredHighlights.map((highlight, index) => {
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
          <div className="filler">
            <Button icon='long arrow up' content='Date' onClick={this.handleClick}/>
            <h2>{this.props.filteredHighlights.length} result(s) for '{this.props.search}'</h2>
            {highlights.reverse()}
          </div>
        </div>
      )
    } else {
      return (
        <div></div>
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
