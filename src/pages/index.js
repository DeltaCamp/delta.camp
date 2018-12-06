import React from 'react'

import Hero from 'src/components/index/Hero'
import IndexContent from 'src/components/index/IndexContent'
import { BodyClass } from 'src/components/BodyClass'

class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BodyClass cssClass="home" />
        <Hero />
        <IndexContent />
      </React.Fragment>
    )
  }
}

export default Index

// <Layout location={this.props.location} cssClass="home" nav={false}>
