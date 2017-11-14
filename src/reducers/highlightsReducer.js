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
      let searchParams = action.payload.split(" ")
      let filteredHighlights = []

      state.highlights.map(highlight => {
        let matchCount = 0

        searchParams.map(searchString => {
          if (highlight.title.toLowerCase().includes(searchString.toLowerCase())) {
            matchCount++
          }
        })

        if (matchCount === searchParams.length) {
          filteredHighlights.push(highlight)
        }
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
