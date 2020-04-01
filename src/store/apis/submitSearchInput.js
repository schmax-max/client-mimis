import axios from 'axios';
import * as actionTypes from '../actionTypes'
const {editorLink} = require('../../_config')

export function submitSearchInput (searchInput, searchType) {
  return (dispatch, getState) => {
    if (shouldTriggerSearchApi(getState(), searchInput)) {
        dispatch(requestSearchResponse(searchInput, searchType))
        return axios.post(`${editorLink}/search/initial`, { searchInput })
          .then((res) => {
            dispatch(receiveInitialSearchResponse(res.data, searchType))
            return axios.post(`${editorLink}/search/full`, { searchInput })
            .then((res) => {
                dispatch(receiveFullSearchResponse(res.data, searchType))
            })
          })
    } else {
        dispatch({type: actionTypes.NO_SEARCH_API_NEEDED})
        return Promise.resolve()
    }

  }
}

function shouldTriggerSearchApi (state, searchInput) {
  if (state.search.searchInput === searchInput) {
      return false
  } else {
      return true
  }

}

function requestSearchResponse(searchInput, searchType) {
  // window.alert('trigger search')
  let type = actionTypes.REQUEST_SEARCH_RESPONSE
  if (searchType === 'simple') {
    type = actionTypes.REQUEST_SEARCH_RESPONSE_SIMPLE
  }

  return {
    type,
    searchInput
  }
}

function receiveInitialSearchResponse(articles, searchType) {
  let type = actionTypes.RECEIVE_INITIAL_SEARCH_RESPONSE

  let containsArticles = false
  if (articles.length > 0) {
    containsArticles = true
  }
  // if (searchType === 'simple') {
  //   type = actionTypes.RECEIVE_INITIAL_SEARCH_RESPONSE_SIMPLE
  // }
  return {
    type,
    articles,
    containsArticles
  }
}

function receiveFullSearchResponse(articles, searchType) {
  let type = actionTypes.RECEIVE_ENTIRE_SEARCH_RESPONSE
  // if (searchType === 'simple') {
  //   type = actionTypes.RECEIVE_ENTIRE_SEARCH_RESPONSE_SIMPLE
  // }
  return {
    type,
    articles
  }
}

// function updateSearchI(articles) {
//   return {
//     type: actionTypes.RECEIVE_SEARCH_RESPONSE,
//     articles
//   }
// }
// PDATE_SEARCH_INPUT
