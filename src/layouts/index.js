import React from 'react'
import PropTypes from 'prop-types'

import Nav from 'src/components/Nav'
import MetaTags from 'src/components/MetaTags'
import Footer from 'src/components/Footer'
import Transition from 'src/components/Transition'

import 'src/assets/stylesheets/normalize.css'
import 'src/assets/stylesheets/highlight.css'
import 'src/assets/stylesheets/deltacamp.css.scss'

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]')
}

class Layout extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  static defaultProps = {
    location: {}
  }

  render() {
    return (
      <Transition location={this.props.location}>
        <MetaTags {...this.props} />

        <Nav />
        { this.props.children }
        <Footer />
      </Transition>
    )
  }
}

export default Layout