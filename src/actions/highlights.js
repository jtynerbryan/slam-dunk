export function getHighlights() {
  return (dispatch) => {
    return fetch('https://slam-dunk-api.herokuapp.com/api/v1/get_highlights')
    .then(res => res.json())
    .then(res => {
      dispatch({ type: "GET_HIGHLIGHTS", payload: res.highlights })
    })
  }
}

export function searchHighlights(searchParams) {
  return (dispatch) => {
    dispatch({type: "Search_Highlights", payload: searchParams})
  }
}

export function clearFilteredHighlights() {
  return (dispatch) => {
    dispatch({type: "Clear_Filtered_Highlights"})
  }
}
