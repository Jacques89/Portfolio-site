import React, { Component } from 'react'
import axios from 'axios'

class IdeasContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ideas: []
  }
}

  render() {
    return (
      <div>
        Ideas
      </div>
    )
  }
}

export default IdeasContainer
