import React, { Component } from 'react'
import threeEntryPoint from './threejs/threeEntryPoint'
import { DeltaCamp3D } from 'src/components/DeltaCamp3D'

export const ThreeContainer = class extends Component {
  render () {
    var deltaCamp3D

    // deltaCamp3D = <DeltaCamp3D />
    return (
      <div>
        <div className="header-3d">
          <div className='header-3d__spotlight' />
          {deltaCamp3D}
          {this.props.children}
        </div>
      </div>
    )
  }
}
