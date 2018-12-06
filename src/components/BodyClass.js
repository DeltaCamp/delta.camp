import React from 'react'

export const BodyClass = class _BodyClass extends React.Component {
  static defaultProps = {
    cssClass: ''
  }

  componentDidMount() {
    document.body.classList.toggle(this.props.cssClass)
  }

  componentWillUnmount() {
    document.body.classList.remove(this.props.cssClass)
  }

  render() {
    return null
  }
}
