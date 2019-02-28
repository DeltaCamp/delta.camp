import React from 'react'
import ScrollToTop from 'src/components/ScrollToTop'
import Hero from 'src/components/index/Hero'
import IndexContent from 'src/components/index/IndexContent'

class Index extends React.Component {
  render() {
    return (
      <div>
        <ScrollToTop />
        <Hero />
        <IndexContent />
      </div>
    )
  }
}

export default Index
