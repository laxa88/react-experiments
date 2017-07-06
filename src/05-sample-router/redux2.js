import React from 'react'
import { connect } from 'react-redux'
import Button from '../07-sample-redux-2/button'
import Message from '../07-sample-redux-2/message'

/**
 * This demonstrates:
 * 
 * - A user action triggers an async action (e.g. downloading JSON data)
 * 
 * @class SampleRedux2
 * @extends {React.Component}
 */
class SampleRedux2 extends React.Component {
  downloadSomething() {

    // Simulate downloading more than one thing in a single call
    const downloadList = [
      'https://jsonplaceholder.typicode.com/posts/1',
      'https://jsonplaceholder.typicode.com/posts/2',
      'https://jsonplaceholder.typicode.com/posts/3',
    ]

    // Required, otherwise will have CORS issue
    var fetchData = {
      method: 'GET'
    };

    // Dispatch a new event and begin download
    let downloadListObj = [];
    for (let i = downloadList.length; i--;) {

      let url = downloadList[i];
      downloadListObj.push({
        url: url,
        data: null
      })

      fetch(url, fetchData)
        .then((response) => {

          // You can get the content type and process
          // the content accordingly here.
          const ctype = response.headers.get("content-type");

          // in the case of jsonplaceholder URLs, they are
          // always returned as string, so just parse it.
          response.text().then(text => {
            let data = JSON.parse(text)

            this.props.dispatch({
              type: 'UPDATE_DOWNLOAD',
              url: url,
              data: data
            })

            // Upon every download, check if all downloads
            // are complete, if yes, dispatch completion event
            let complete = true
            let downloads = this.props.state.SampleReducer2.downloads
            for (let j = downloads.length; j--;) {
              if (downloads[j] === null) {
                complete = false
              }
            }
            
            if (complete) {
              this.props.dispatch({
                type: 'DONE_DOWNLOAD'
              })
            }

          })

        })
    }

    this.props.dispatch({
      type: 'BEGIN_DOWNLOAD',
      downloads: downloadListObj
    })

  }

  render() {

    const list = this.props.state.SampleReducer2.downloads.map((item) =>
      <li key={item.url}>
        {item.url} : {item.data ? "done" : "..."}
      </li>
    )

    return (
      <div>
        <Button
          message={this.props.state.SampleReducer2.message}
          onClick={this.downloadSomething.bind(this)}
          />

          <ul>
            {list}
          </ul>
      </div>
    )
  }
}


export default connect((state)=>{
  return {
    state: state
  }
})(SampleRedux2)