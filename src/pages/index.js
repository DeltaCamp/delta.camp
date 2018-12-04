import React from 'react'

import Hero from 'src/components/index/Hero'
import IndexContent from 'src/components/index/IndexContent'
import LayoutWithHeader from 'src/components/LayoutWithHeader'

import 'src/assets/stylesheets/normalize.css'
import 'src/assets/stylesheets/skeleton.css'
import 'src/assets/stylesheets/highlight.css'
import 'src/assets/stylesheets/deltacamp.css.scss'

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
