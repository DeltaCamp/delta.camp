import React from 'react'
import PropTypes from 'prop-types'

import Nav from 'src/components/Nav'
import MetaTags from 'src/components/MetaTags'
import Footer from 'src/components/Footer'

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
    nav: PropTypes.bool,
    location: PropTypes.object.isRequired
  }

  static defaultProps = {
    nav: true,
    location: {}
  }

  render() {
    return (
      <React.Fragment>
        {this.props.nav && <Nav />}
        <MetaTags {...this.props} />
        { this.props.children }
        <Footer />
      </React.Fragment>
    )
  }
}

export default Layout
