import React, { Component } from 'react'
import classnames from 'classnames'
import { StaticQuery, graphql } from 'gatsby'
import threeEntryPoint from './threejs/threeEntryPoint'
import ReactTimeout from 'react-timeout'

export const DeltaCamp3D = ReactTimeout(class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      loading: false
    }
  }

  initializeCanvas = (element, data) => {
    if (this.state.loading || this.state.loaded) { return }

    this.canvasElement = element
    this.onResize() //resize canvas

    this.setState({
      loading: true
    }, () => {
      window.addEventListener('resize', this.onResize)

      this.props.setTimeout(() => {
        // console.log(element.offsetWidth, element.offsetHeight)
        this.threeObject = threeEntryPoint(this.canvasElement, data)
        // console.log('three object instantiated')

        this.threeObject.init().then(() => {
          // console.log('three object initialized')
          this.onResize() //resize canvas
          this.props.setTimeout(this.loaded, 1000)
        }).catch((error) => {
          console.error(error)
          this.setState({
            loading: false
          })
        })

      }, 1)

    })
  }

  loaded = () => {
    this.setState({
      loaded: true,
      loading: false
    })
  }

  componentDidMount() {
    this.onResize()

    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    if (this.threeObject) {
      this.threeObject.destroy()
    }

    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    if (this.threeObject && window) {
      this.threeObject.onScroll(window.scrollY)
    }
  }

  onResize = () => {
    if (!this.canvasElement) { return }

    const newWidth = 400//Math.min(Math.max(halfWidth, 500), 500)
    const newHeight = 700 //window.innerHeight * 0.5

    this.canvasElement.width = newWidth
    this.canvasElement.height = newHeight

    const dimensions = {
      width: this.canvasElement.width,
      height: this.canvasElement.height
    }

    if (this.threeObject) {
      this.threeObject.onResize(dimensions)
    }
  }

  renderCanvas (data) {
    return (
      <div className='delta-camp-3d-container'>
        <canvas
          className={classnames("delta-camp-3d", { "is-loaded": this.state.loaded })}
          ref={(element) => this.initializeCanvas(element, data)}
        />
      </div>
    )
  }

  render () {
    return (
      <StaticQuery
        query={graphql`
          query {
            deltaCamp3DSymbol: file(relativePath: { eq: "DeltaCamp-logo-3d--symbol.fbx" }) {
              publicURL
            }
            deltaCamp3DLightbox: file(relativePath: { eq: "DeltaCamp-logo-3d--lightbox.fbx" }) {
              publicURL
            }
          }
        `}
        render={(data) => this.renderCanvas(data)}
      />
    )
  }
})
