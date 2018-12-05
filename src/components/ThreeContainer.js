import React, { Component } from 'react'
import threeEntryPoint from './threejs/threeEntryPoint'

export const ThreeContainer = class extends Component {

  componentDidMount() {
    this.threeObject = threeEntryPoint(this.threeRootElement, this.props.data)
  }

  componentWillUnmount() {
    this.threeObject.destroy()
  }

  render () {
    return (
      <div
        className="header-3d"
        ref={element => this.threeRootElement = element}
      />
    )
  }

}
