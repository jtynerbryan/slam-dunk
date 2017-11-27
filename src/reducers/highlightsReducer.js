function highlightsReducer(state = {
  highlights: [],
  filteredHighlights: [],
  search: "",
  highlightsUpdated: false
}, action) {
  switch (action.type) {
    case 'GET_HIGHLIGHTS':
      return {...state, highlights: action.payload}
    case 'Search_Highlights':
      let searchParams = action.payload.split(" ")
      let filteredHighlights = []
      // eslint-disable-next-line
      state.highlights.map(highlight => {
        let matchCount = 0
        // eslint-disable-next-line
        searchParams.map(searchString => {
          if (highlight.title.toLowerCase().includes(searchString.toLowerCase())) {
            matchCount++
          }
        })

        if (matchCount === searchParams.length) {
          filteredHighlights.push(highlight)
        }
      })
      return {...state, filteredHighlights: filteredHighlights, search: action.payload}
    case 'UPDATE_HIGHLIGHTS':
      if (action.payload === "highlights updated") {
        return {...state, highlightsUpdated: true}
      } else {
        return {...state, highlightsUpdated: false}
      }
    case 'CLEAR_FILTERED_HIGHLIGHTS':
      return { ...state, search: "", filteredHighlights: []}
    default:
      return state
    }
  }

export default highlightsReducer
