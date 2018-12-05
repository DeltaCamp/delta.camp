import React from 'react'
import Nav from 'src/components/Nav'
import MetaTags from 'src/components/MetaTags'

import 'src/assets/stylesheets/normalize.css'
import 'src/assets/stylesheets/highlight.css'
import 'src/assets/stylesheets/deltacamp.css.scss'

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <MetaTags />
        { this.props.children }
      </React.Fragment>
    )
  }
}

export default Layout
