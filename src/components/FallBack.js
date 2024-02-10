import React, { Component } from 'react'
import { Oval } from 'react-loader-spinner'

export class FallBack extends Component {
  render() {
    return (
      <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Oval
          height={80}
          width={80}
          color='#3270FC'
          wrapperStyle={{}}
          wrapperClass=''
          visible
          ariaLabel='oval-loading'
          secondaryColor='#F5F7FB'
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    )
  }
}

export default FallBack
