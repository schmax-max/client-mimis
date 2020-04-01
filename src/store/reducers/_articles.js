import * as actionTypes from '../actionTypes'
import produce from 'immer'
// import _ from 'lodash'


const initialState = {
  receivedData: {},
  detailedArticles: {
    shown: [],
    all: [],
  },
  requestedApi: {},
  receivedApi: {},
  filter: {
    publisher: undefined,
    author: undefined,
    recencyIndex: 3,
    minReadingTime: 3,
    maxReadingTime: 90,
    maxRecencyDays: 30,
  }
}

const articlesPerBatch = 12

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actionTypes.REQUESTED_API:
        draft.requestedApi[action.apiIdentifier] = true
        break
      case actionTypes.RECEIVED_API:
        draft.receivedApi[action.apiIdentifier] = true
        break
      case actionTypes.RECEIVED_ARTICLES:
        if (action.allocation) {
          if (!draft.receivedData[action.category]) {
            draft.receivedData[action.category] = {}
          }
          draft.receivedData[action.category][action.allocation] = action.data || {}
        } else {
          const existingData = draft.receivedData[action.category] || {}
          draft.receivedData[action.category] = {...existingData, ...action.data}
        }
        break
      case actionTypes.NICHE_MODE:
        const all = draft.receivedData[action.category][action.allocation]
        const shown = all.slice(0, articlesPerBatch)
        draft.detailedArticles = {shown, all}
        break
      case actionTypes.SUBMIT_FILTER:
        action.values.minReadingTime = +(action.values.minReadingTime)
        action.values.maxReadingTime = +(action.values.maxReadingTime)
        const filteredAll = filterArticles(state.receivedData.search, action.values)
        const filteredShown = filteredAll.slice(0, articlesPerBatch)
        draft.filter = action.values
        draft.detailedArticles = {
          all: filteredAll,
          shown: filteredShown
        }
        break
      case actionTypes.SHOW_MORE_ARTICLES:
        const batchesToBeShown = Math.ceil(state.detailedArticles.shown.length / articlesPerBatch) + 1
        const expanded = state.detailedArticles.all.slice(0, (batchesToBeShown * articlesPerBatch))

        draft.detailedArticles.shown = expanded
        break
      default:
        return draft
    } 
  })


function filterArticles (articles, filter) {
  const filteredArticles = articles.reduce((newArray, item) => {
    let keepArticle = true
    if (filter.publisher) {
      if (item.extract.basics.publisher_name !== filter.publisher) {
        keepArticle = false
      }
    }
    if (filter.author) {
      if (!item.extract.basics.authors_text.includes(filter.author)) {
        keepArticle = false
      }
    }

    if (
      item.body.core.content_minutes < filter.minReadingTime
      || item.body.core.content_minutes > filter.maxReadingTime
    ) {
      keepArticle = false
    }

    if (keepArticle) {
      newArray.push(item)
    }

    return newArray
  }, [])

  return filteredArticles
}



// function addSearchArticlesToExisting (searchArticlesExisting, searchArticlesEntire) {
//   let allSearchArticles = searchArticlesExisting
//   const searchArticlesUrlsExisting = searchArticlesExisting.map((k) => { return k.url })

//   searchArticlesEntire.reduce((newArray, item) => {
//     if (
//         !searchArticlesUrlsExisting.includes(item.url)
//     ) {
//       allSearchArticles.push(item)
//     }
//     return newArray
//   }, [])


//   return allSearchArticles
// }
