import React from 'react'
import NounProjectMountainsIcon from '-!svg-react-loader!src/assets/images/noun_Mountains_836250_000000.svg'

import { BlogColumn } from 'src/components/BlogColumn'

export const BlogHeader = function(props) {
  return <section className="section first">
    <div className="container">
      <div className="columns">
        <BlogColumn hasTextCentered={true}>
          <NounProjectMountainsIcon width="50" />
          <h1 className="page-title is-bottom-marginless">
            Fresh Tracks
          </h1>
          <br />
          <p className="blog-intro">
            Written by the experienced delta.camp team
            <br />Designers &amp; developers creating superb decentralized experiences
          </p>
        </BlogColumn>
      </div>
    </div>
  </section>
}
