import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import classnames from 'classnames'
import Helmet from 'react-helmet'
import TokenRegistryImage1 from 'src/components/work/TokenRegistryImage1'
import OpenCare1 from 'src/components/work/OpenCare1'
import OpenCareThumbImg from 'src/components/work/OpenCareThumbImg'
import WorkBrief from 'src/components/work/WorkBrief'
import ContactCallToAction from 'src/components/ContactCallToAction'
import { Transition } from 'react-transition-group'

const workImageTransitionDuration = 0

class Work extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {}
  }

  onMouseEnter = (path) => {
    this.setState({
      activeTo: path
    })
  }

  onMouseExit = (path) => {
    // this.setState({
    //   activeTo: null
    // })
  }

  renderWork = (data) => {
    const columnSize = 'is-two-thirds-tablet'

    return (
      <React.Fragment>
        <section className='work-briefs section first'>
          <div className='container'>
            <h1 className="page-title">
              Our Work
            </h1>
          </div>
        </section>
        <section className='has-background-grey no-padding-sides'>
          <div className='has-position-relative'>
            <div className='has-absolute-fullsize'>
              <div className='columns is-gapless has-height-100'>
                <div className={classnames('column has-background-grey', columnSize)}>
                </div>
                <div className='column background-image-container'>
                  <Transition in={this.state.activeTo === '/work/token-registry'} timeout={workImageTransitionDuration}>
                    {(state) => <TokenRegistryImage1 className={classnames('work-background is-hidden-mobile panning', state)} />}
                  </Transition>
                  <Transition in={this.state.activeTo === '/work/open-care'} timeout={workImageTransitionDuration}>
                    {(state) => <OpenCare1 className={classnames('work-background is-hidden-mobile panning', state)} />}
                  </Transition>
                </div>
              </div>
            </div>
            <div className='container'>
              <div className='columns'>
                <div className={classnames('column has-background-grey', columnSize)}>
                  <div className='case-study-content'>
                    <WorkBrief
                      title="A decentralized telemedicine app"
                      name="Open Care for MedX Protocol"
                      technology="Ethereum Smart Contracts, Web App Design &amp; Development, Encryption Protocol, IPFS Infrastructure"
                      onMouseEnter={this.onMouseEnter}
                      onMouseExit={this.onMouseExit}
                      to="/work/open-care" />
                    <WorkBrief
                      title="A smart contract protocol proof-of-concept"
                      name="The Token Registry for MedX Protocol"
                      technology="Ethereum Smart Contracts, Web App Design &amp; Development"
                      onMouseEnter={this.onMouseEnter}
                      onMouseExit={this.onMouseExit}
                      to="/work/token-registry" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ContactCallToAction />
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
