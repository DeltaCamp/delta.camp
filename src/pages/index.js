import React from 'react'

import Hero from 'src/components/index/Hero'
import IndexContent from 'src/components/index/IndexContent'
import { BodyClass } from 'src/components/BodyClass'

class Index extends React.Component {
  render() {
    return (
      <div>
        {/*<BodyClass cssClass="home" />*/}

        <Hero />
        <IndexContent />
      </div>
    )
  }
}

export default Index
