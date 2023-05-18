import React, { Component } from 'react'

export class FallBack extends Component {
  render() {
    return (
      <div style={{width: '100vw', height: '100vh', backgroundColor: 'grey', textAlign: 'center'}}>loading.....</div>
    )
  }
}

export default FallBack;