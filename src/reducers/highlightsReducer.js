function highlightsReducer(state = {
  highlights: [],
  filteredHighlights: [],
  search: ""
}, action) {
  switch (action.type) {
    case 'GET_HIGHLIGHTS':
      return Object.assign({}, state, {
        highlights: action.payload
      })
    case 'Search_Highlights':
      const filteredHighlights = state.highlights.filter(highlight => {
        return highlight.title.toLowerCase().includes(action.payload.toLowerCase())
      })
      return Object.assign({}, state, {
        filteredHighlights: filteredHighlights,
        search: action.payload
      })
    default:
      return state
  }
}

export default highlightsReducer
