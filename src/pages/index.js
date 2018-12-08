import React from 'react'

import Hero from 'src/components/index/Hero'
import IndexContent from 'src/components/index/IndexContent'

class Index extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <IndexContent />
      </div>
    )
  }
}

export default Index
