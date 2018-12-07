import React, { Component } from 'react'
import threeEntryPoint from './threejs/threeEntryPoint'
import { DeltaCamp3D } from 'src/components/DeltaCamp3D'

export const ThreeContainer = class extends Component {
  render () {
    return (
      <div>
        <div className="header-3d">
          <div className='header-3d__spotlight' />
          <DeltaCamp3D />
          {this.props.children}
        </div>
      </div>
    )
  }
}
