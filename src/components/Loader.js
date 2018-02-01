import React from 'react';
import Welcome from './Welcome'
import { Dimmer, Loader} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateHighlights, getHighlights } from '../actions/highlights'



export class LoaderComponent extends React.Component {

  componentDidMount() {
    if (this.props.highlights.length > 0) {
      this.props.history.push('/highlights')
    } else {
      this.props.updateHighlights()
    }
  }

  componentDidUpdate() {
    if (this.props.highlightsUpdated && this.props.highlights.length === 0) {
      this.props.getHighlights()
    } else {
      this.props.history.push('/highlights')
    }
  }

  render() {
    return (
      <div>
        <Welcome history={this.props.history}/>
        <Dimmer active>
          <Loader size='huge'>Loading Highlights</Loader>
        </Dimmer>
      </div>
    )
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




export default connect(mapStateToProps, mapDispatchToProps)(LoaderComponent)
