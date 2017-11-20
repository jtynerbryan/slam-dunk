function highlightsReducer(state = {
  highlights: [],
  filteredHighlights: [],
  search: "",
  highlightsUpdated: false
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
    case 'UPDATE_HIGHLIGHTS':
        if (action.payload === "highlights updated") {
          return Object.assign({}, state, {
            highlightsUpdated: true
          })
        } else {
          return Object.assign({}, state, {
            highlightsUpdated: false
          })
        }
    default:
      return state
  }
}

export default highlightsReducer
