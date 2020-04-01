// import moment from 'moment';
import axios from 'axios';
// import * as actionTypes from '../actionTypes'
const {editorLink} = require('../../_config')


export function submitArticleFeedback(data) {
  return (dispatch) => {
    console.log('submitArticleFeedback')
    // console.log({data})
    return axios.post(`${editorLink}/feedback/article`, { data })
      .then((res) => {
        // console.log('res')
        // console.log(res)
        // return dispatch(resetArticleValues())
      })
  }
}

export function submitArticleRecommendation(articleUrl, articleContext) {
  return (dispatch) => {

    return axios.post(`${editorLink}/feedback/recommendation`, { articleUrl, articleContext })
      .then((res) => {
        // console.log('res')
        // console.log(res)
        // return dispatch(resetArticleValues())
      })
  }
}


// function resetArticleValues() {
//   return {
//     type: actionTypes.RESET_READER_VALUES,
//   }
// }
