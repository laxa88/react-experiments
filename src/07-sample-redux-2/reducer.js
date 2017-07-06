export default (state = {
  message: "Nothing here!",
  downloads: []
}, action) => {
  switch (action.type) {

    case 'BEGIN_DOWNLOAD':{
      return {
        message: "Begin download!",
        downloads: action.downloads
      }
    }

    case 'UPDATE_DOWNLOAD': {
      return {
        message: "Update download!",
        downloads: [].concat(
          state.downloads.map(item => {
            if (item.url !== action.url) {
              return item
            }
            return {
              ...item,
              data: action.data
            }
          }))
      }
    }

    case 'DONE_DOWNLOAD': {
      return {
        ...state,
        message: "Done download!"
      }
    }

    default: {
      return state
    }
  }
}