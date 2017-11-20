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

export function updateHighlights() {
  return (dispatch) => {
    return fetch('https://slam-dunk-api.herokuapp.com/api/v1/update_highlights')
    .then( res => res.json())
    .then(res => {
      dispatch({type: "UPDATE_HIGHLIGHTS", payload: res.message})
    })
  }
}
