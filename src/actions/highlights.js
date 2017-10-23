export function getHighlights() {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/get_highlights')
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
