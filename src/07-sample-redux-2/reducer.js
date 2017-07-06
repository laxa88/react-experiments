export default (state = {
  message: "Nothing here!"
}, action) => {
  switch (action.type) {

    case 'BEGIN_DOWNLOAD':{
      return {
        message: "Begin download!"
      }
    }

    case 'UPDATE_DOWNLOAD': {
      return {
        message: "Update download!"
      }
    }

    case 'DONE_DOWNLOAD': {
      return {
        message: "Done download!"
      }
    }

    default: {
      return state
    }
  }
}