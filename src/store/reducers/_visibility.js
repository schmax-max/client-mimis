import * as actionTypes from '../actionTypes'
import produce from 'immer'

const initialState = {
  showLoadingSpinner: false,
  showHeader: true,
  showAdvancedHeader: false,
  showPrimaryMenu: false,
  showSecondaryMenu: false,
}


export default (state = initialState, action) => 
  produce(state,draft => {
    switch (action.type) {
      case actionTypes.START_LOADING:
        draft.showLoadingSpinner = true
        break
      case actionTypes.STOP_LOADING:
        draft.showLoadingSpinner = false
        break
      case actionTypes.HOME_MODE:
        draft.showLoadingSpinner = false
        draft.showPrimaryMenu = false
        draft.showSecondaryMenu = false
        draft.showAdvancedHeader = false
        break
      case actionTypes.CATEGORY_MODE:
        draft.showLoadingSpinner = false
        draft.showPrimaryMenu = true
        draft.showSecondaryMenu = false
        draft.showAdvancedHeader = false
        break
      case actionTypes.NICHE_MODE:
        draft.showLoadingSpinner = false
        draft.showPrimaryMenu = true
        draft.showSecondaryMenu = true
        draft.showAdvancedHeader = false
        break
      case actionTypes.SHOW_HEADER:
        draft.showHeader = true
        break
      case actionTypes.HIDE_HEADER:
        draft.showHeader = false
        break
      default:
        return draft
    }
  })
