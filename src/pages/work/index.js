import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import ReactTooltip from 'react-tooltip'

class Work extends React.PureComponent {

  renderWork = (data) => {

    return (
      <React.Fragment>
        <section className="section first">
          <div className="container">
            <h1 className="page-title">
              Our Work
            </h1>
            <p className='no-margin-bottom'>
              We're happy to share
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">

          </div>
        </section>
      </React.Fragment>
    )
  }

  render () {
    return (
      <StaticQuery
        query={graphql`
          query {
            regTokenAnimated: file(relativePath: { eq: "reg-token-animated.gif" }) {
              publicURL
            }
            regTokenShot1: file(relativePath: { eq: "reg-token-shot-1.png" }) {
              publicURL
            }
            regTokenShot2: file(relativePath: { eq: "reg-token-shot-2.png" }) {
              publicURL
            }
            openCareShot1: file(relativePath: { eq: "open-care-shot-1.png" }) {
              publicURL
            }
            openCareShot2: file(relativePath: { eq: "open-care-shot-2.png" }) {
              publicURL
            }
            openCareShot3: file(relativePath: { eq: "open-care-shot-3.png" }) {
              publicURL
            }

          }
        `}
        render={(data) => this.renderWork(data)}
      />
    )
  }
}

export default Work
