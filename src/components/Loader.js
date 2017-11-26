import React from 'react';
import Welcome from './Welcome'
import { Dimmer, Loader} from 'semantic-ui-react'


class LoaderComponent extends React.Component {

  render() {
    return (
      <div>
        <Welcome/>
        <Dimmer active>
          <Loader size='huge'>Loading Highlights</Loader>
        </Dimmer>
      </div>
    )
  }

}





export default LoaderComponent
