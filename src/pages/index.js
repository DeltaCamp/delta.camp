import React from 'react'

import Hero from 'src/components/index/Hero'
import IndexContent from 'src/components/index/IndexContent'
import LayoutWithHeader from 'src/components/LayoutWithHeader'

class Index extends React.Component {
  render() {
    return (
      <LayoutWithHeader>
        <Hero data={this.props.data} />
        <IndexContent />
      </LayoutWithHeader>
    )
  }
}

export default Index
