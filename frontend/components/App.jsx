import React, { Component } from 'react'
import ReactDom from 'react-dom'
import dataStore from '../stores/dataStore'

class App extends Component {
  constructor( props ) {
    super( props )

    this.state = { data: [] }
  }

  componentWillMount() {
    fetch('http://localhost:5000/api')
      .then( response => response.json() )
      .then( data => {
        this.setState({ data })
      })
  }

  render() {
    return (
      <div>
        <h1> JustUs </h1>
        {this.state.data.name}
      </div>
    )
  }
}

$(document).ready( () => {
  ReactDom.render( <App />, document.getElementById('DontCall') )
})
