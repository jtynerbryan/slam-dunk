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
      debugger
      const filteredHighlights = state.highlights.filter(highlight => {
        return highlight.title.toLowerCase().includes(action.payload.toLowerCase())
      })
      debugger
      return Object.assign({}, state, {
        filteredHighlights: filteredHighlights
      })
    default:
      return state
  }
}

export default highlightsReducer
