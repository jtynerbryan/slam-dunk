import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ReactHtmlParser from 'react-html-parser';
import LazyLoad from 'react-lazy-load';
import { Button, Divider, Segment } from 'semantic-ui-react';

class HighlightCollection extends React.Component {
  render() {
    const highlights = this.props.highlights.map((highlight, index) => {
      return (
        <LazyLoad height={430} offsetVertical={900} key={index}>
          <div className="highlight-container">
            <Segment>
              <h3>
                {highlight.title} ({highlight.date_created.slice(0, 10)})
              </h3>
            </Segment>
            {ReactHtmlParser(ReactHtmlParser(highlight.media))}
            <div>
              <Button href={highlight.permalink} target="_blank">
                Reddit Post
              </Button>
              <Button href={highlight.url} target="_blank">
                Video Source
              </Button>
              <Divider />
            </div>
          </div>
        </LazyLoad>
      );
    });

    return (
      <div className="App">
        <h1>Latest Highlights</h1>
        <div className="filler">{highlights}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    highlights: state.highlights,
    highlightsUpdated: state.highlightsUpdated
  };
}

export default withRouter(connect(mapStateToProps, null)(HighlightCollection));
