import axios from "axios"
import * as actionTypes from "../actionTypes/index"
const { editorLink } = require("../../_config")

export function fetchArticlesIfNeeded({ category, allocation, allocations }) {
  return (dispatch, getState) => {
    let apiIdentifier = category
    if (allocation) {
      apiIdentifier += allocation
    }
    // console.log({apiIdentifier})

    if (shouldFetchArticles(getState(), apiIdentifier)) {
      dispatch({
        type: actionTypes.START_LOADING,
      })

      return dispatch(
        fetchArticles(apiIdentifier, category, allocation, allocations)
      )
    } else {
      return Promise.resolve()
    }
  }
}

function shouldFetchArticles(state, apiIdentifier) {
  const requestedApiIdentifier = state.articles.requestedApi[apiIdentifier]
  if (
    requestedApiIdentifier === false ||
    requestedApiIdentifier === undefined
  ) {
    return true
  } else {
    return false
  }
}

function fetchArticles(apiIdentifier, category, allocation, allocations) {
  // console.log("fetchArticles worked")
  return function(dispatch) {
    dispatch({
      type: actionTypes.REQUESTED_API,
      apiIdentifier,
    })

    // console.log({ category, allocation, allocations })
    return axios
      .post(`${editorLink}`, { allocation, allocations, client: "mimis" })
      .then(({ data }) => {
        // console.log("data received from api")
        // console.log({ data })
        dispatch({
          type: actionTypes.REQUESTED_API,
          apiIdentifier,
        })
        dispatch({
          type: actionTypes.RECEIVED_ARTICLES,
          category,
          allocation,
          data,
        })
        dispatch({
          type: actionTypes.STOP_LOADING,
        })
        // if (allocation) {
        //   dispatch({
        //     type: actionTypes.NICHE_MODE,
        //   })
        // } else {
        //   dispatch({
        //     type: actionTypes.CATEGORY_MODE,
        //   })
        // }
      })
  }
}
