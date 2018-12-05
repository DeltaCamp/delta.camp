import React from 'react'

import Hero from 'src/components/index/Hero'
import IndexContent from 'src/components/index/IndexContent'
import Layout from 'src/components/Layout'

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Hero data={this.props.data} />
        <IndexContent />
      </Layout>
    )
  }
}

export default Index
