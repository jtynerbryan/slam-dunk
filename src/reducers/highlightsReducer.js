function highlightsReducer(state = {
  highlights: [],
  filteredHighlights: []
}, action) {
  switch (action.type) {
    case 'GET_HIGHLIGHTS':
      return Object.assign({}, state, {
        highlights: action.payload
      })
    case 'Search_Highlights':
      return
    default:
      return state
  }
}

export default highlightsReducer
