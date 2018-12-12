import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import ReactTooltip from 'react-tooltip'
import TokenRegistryImage1 from 'src/components/work/TokenRegistryImage1'
import OpenCareThumbImg from 'src/components/work/OpenCareThumbImg'
import WorkBrief from 'src/components/work/WorkBrief'

class Work extends React.PureComponent {

  renderWork = (data) => {

    return (
      <React.Fragment>
        <section className='work-briefs section first'>
          <div className='container'>
            <h1 className="page-title">
              Case Studies
            </h1>
          </div>
        </section>
        <section className='has-background-grey no-padding-sides'>
          <div className='has-position-relative'>
            <div className='has-absolute-fullsize'>
              <div className='columns is-gapless has-height-100'>
                <div className='column has-background-grey'>
                </div>
                <div className='column has-position-relative'>
                  <TokenRegistryImage1 className='background is-hidden-mobile' />
                </div>
              </div>
            </div>
            <div className='container'>
              <div className='columns'>
                <div className='column is-half-tablet has-background-grey case-study-content'>
                  <WorkBrief
                    title="A decentralized telemedicine app"
                    name="Open Care for MedX Protocol"
                    technology="Ethereum Smart Contracts, Web App Design &amp; Development, Encryption Protocol, IPFS Infrastructure"
                    to="/work/open-care" />
                  <WorkBrief
                    title="A smart contract protocol proof-of-concept"
                    name="The Token Registry for MedX Protocol"
                    technology="Ethereum Smart Contracts, Web App Design &amp; Development"
                    to="/work/token-registry" />
                </div>
              </div>
            </div>
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
