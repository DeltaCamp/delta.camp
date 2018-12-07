import React from 'react'
import PropTypes from 'prop-types'

import { BodyClass } from 'src/components/BodyClass'
import Nav from 'src/components/Nav'
import MetaTags from 'src/components/MetaTags'
import Footer from 'src/components/Footer'
import Transition from 'src/components/Transition'

import { getPurePathname } from 'src/utils/getPurePathname'

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

  currentPage = () => {
    const pathname = this.props.location.pathname
    return getPurePathname(pathname)
  }

  render() {
    console.log('re-render with', this.currentPage())
    return (
      <Transition location={this.props.location}>
        <MetaTags {...this.props} cssClass={this.currentPage()} />

        {/*<BodyClass cssClass={this.currentPage()} />*/}

        <Nav />
        <div className="animatable-content">
          { this.props.children }
          <Footer />
        </div>
      </Transition>
    )
  }
}

export default Layout
