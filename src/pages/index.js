import React from 'react'
import PageTransition from 'gatsby-plugin-page-transitions'

import Hero from 'src/components/index/Hero'
import IndexContent from 'src/components/index/IndexContent'
import Layout from 'src/components/Layout'

class Index extends React.Component {
  render() {
    return (
      <PageTransition>
        <Layout cssClass="home" nav={false}>
          <Hero />
          <IndexContent />
        </Layout>
      </PageTransition>
    )
  }
}

export default Index
