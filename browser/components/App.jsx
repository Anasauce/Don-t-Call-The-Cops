import React, { Component } from 'react'
import ReactDom from 'react-dom'
import dataStore from '../stores/dataStore'

class App extends Component {
  constructor(props){
    super(props)
    this.state = { data: []}
  }
  componentWillMount(){
    fetch('http://localhost:5000/api', {
      mode: 'no-cors',
      method: 'get'
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({data: data})
      })
      .catch(error => console.log('Ana and James did this', error))
  }
  render() {
    return <div>
      <h1> JustUs </h1>
      {this.state.data.name}
    </div>
  }
}

ReactDom.render( <App />, document.getElementById('DontCall') )
