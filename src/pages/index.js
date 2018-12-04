import React from 'react'

import Hero from 'src/components/index/Hero'
import IndexContent from 'src/components/index/IndexContent'
import LayoutWithHeader from 'src/components/LayoutWithHeader'

class Index extends React.Component {
  render() {
    return (
      <LayoutWithHeader>
        <Hero />
        <IndexContent />
      </LayoutWithHeader>
    )
  }
}

export default Index
