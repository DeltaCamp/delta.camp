import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Bio from 'src/components/Bio'
import LayoutWithHeader from 'src/components/LayoutWithHeader'
import { rhythm } from 'src/utils/typography'

class Work extends React.PureComponent {
  render () {
    return (
      <LayoutWithHeader>
        <div className='container'>
          <h1>Contact Us</h1>
        </div>
      </LayoutWithHeader>
    )
  }
}

export default Work
