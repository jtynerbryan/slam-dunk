function highlightsReducer(state = {
  highlights: []
}, action) {
  switch (action.type) {
    case 'GET_HIGHLIGHTS':
      return Object.assign({}, state, {
        highlights: action.payload
      })
    default:
      return state
  }
}

export default highlightsReducer
