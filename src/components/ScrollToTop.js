import { PureComponent } from 'react'
import { PropTypes } from 'prop-types'
import ReactTimeout from 'react-timeout'

export default ReactTimeout(class _ScrollToTop extends PureComponent {
  static propTypes = {
    delay: PropTypes.number
  }

  static defaultProps = {
    delay: 1250
  }

  componentDidMount() {
    this.props.setTimeout(() => {
      if (window) {
        console.log("wtf")
        window.scrollTo(0, 0)
        console.log("SCROLL!")
        window.scrollTo(0, 0)
      }
    }, this.props.delay)
  }

  render() {
    return null
  }
})
