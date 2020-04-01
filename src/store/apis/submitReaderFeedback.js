import moment from 'moment';
import axios from 'axios';
import * as actionTypes from '../actionTypes'
const {editorLink} = require('../../_config')

export function submitReaderFeedback() {
  return function (dispatch, getState) {
    return dispatch(postReaderFeedback(getState()))
  }
}


function postReaderFeedback(state) {
  return (dispatch) => {
    const relevantSate = state.reader
    const readerUrl = relevantSate.readerUrl
    const readerRating = relevantSate.readerRating

    const readerSession = {
      reader_word_count: relevantSate.readerWordCount,
      reader_start_time: relevantSate.readerStartTime,
      reader_end_time: relevantSate.readerEndTime,
      reader_reading_time: moment(relevantSate.readerEndTime) - moment(relevantSate.readerStartTime),
      reader_progress: relevantSate.readerProgress
    }

    return axios.post(`${editorLink}/feedback/article`, { readerUrl, readerRating, readerSession })
      .then((res) => {
        // console.log('res')
        // console.log(res)
        return dispatch(resetReaderValues())
      })
  }
}



function resetReaderValues() {
  return {
    type: actionTypes.RESET_READER_VALUES,
  }
}
