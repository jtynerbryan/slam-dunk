export function getHighlights() {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/get_highlights')
    .then(res => res.json())
    .then(res => {
      dispatch({ type: "GET_HIGHLIGHTS", payload: res.highlights })
    })
  }
}
