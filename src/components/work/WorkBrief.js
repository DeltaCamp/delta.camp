import React from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export default class extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    technology: PropTypes.string.isRequired,
    onMouseEnter: PropTypes.func,
    onMouseExit: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  handleMouseEnter = () => {
    this.setState(
      { mouseOn: true },
      () => {
        if (this.props.onMouseEnter) {
          this.props.onMouseEnter(this.props.to)
        }
      }
    )
  }

  handleMouseExit = () => {
    this.setState(
      { mouseOn: false },
      () => {
        if (this.props.onMouseExit) {
          this.props.onMouseExit(this.props.to)
        }
      }
    )
  }

  render () {
    const {
      title, to, name, technology
    } = this.props

    return (
      <Link
        to={to}
        className={classnames('work-brief--link', { 'is-active': this.state.mouseOn })}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseExit}>
        <h2 className='work-brief--title'>{title}</h2>
        <h3 className='work-brief--subtitle'>{name}</h3>
        <h3 className='work-brief--subtitle'><span className='light'>{technology}</span></h3>
      </Link>
    )
  }
}
