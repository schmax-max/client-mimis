import {combineReducers} from 'redux'

import articles from './_articles'
import visibility from './_visibility'



export default combineReducers({
  articles,
  visibility,
})
