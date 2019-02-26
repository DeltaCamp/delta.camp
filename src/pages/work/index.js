import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import classnames from 'classnames'
import Helmet from 'react-helmet'
import TokenRegistryImage1 from 'src/components/work/TokenRegistryImage1'
import ZeppelinOSImage from 'src/components/work/ZeppelinOSImage'
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

  render () {
    const columnSize = 'is-two-thirds-tablet'

    return (
      <div>
        <Helmet>
          <title>{'Our Work'}</title>
        </Helmet>

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
                <div className='column'>
                  <div className='work-background-image-container'>
                    <Transition in={!!this.state.activeTo} timeout={workImageTransitionDuration}>
                      {(state) => <div className={classnames('work-background-box-shadow', state)} />}
                    </Transition>
                    <Transition in={this.state.activeTo === '/work/zos-registry'} timeout={workImageTransitionDuration}>
                      {(state) => <ZeppelinOSImage className={classnames('work-background is-hidden-mobile panning', state)} />}
                    </Transition>
                    <Transition in={this.state.activeTo === '/work/token-registry'} timeout={workImageTransitionDuration}>
                      {(state) => <TokenRegistryImage1 className={classnames('work-background is-hidden-mobile panning', state)} />}
                    </Transition>
                    <Transition in={this.state.activeTo === '/work/open-care'} timeout={workImageTransitionDuration}>
                      {(state) => <OpenCare1 className={classnames('work-background is-hidden-mobile panning', state)} />}
                    </Transition>
                  </div>
                </div>
              </div>
            </div>
            <div className='container'>
              <div className='columns'>
                <div className={classnames('column has-background-grey', columnSize)}>
                  <div className='case-study-content'>
                    <WorkBrief
                      title="An application to interact with EVM packages"
                      name="ZeppelinOS EVM Package Registry"
                      technology="Web App Design &amp; Development"
                      onMouseEnter={this.onMouseEnter}
                      to="/work/zos-registry" />
                    <WorkBrief
                      title="A decentralized telemedicine app"
                      name="Open Care for MedX Protocol"
                      technology="Ethereum Smart Contracts, Web App Design &amp; Development, Encryption Protocol, IPFS Infrastructure"
                      onMouseEnter={this.onMouseEnter}
                      to="/work/open-care" />
                    <WorkBrief
                      title="A smart contract protocol proof-of-concept"
                      name="The Token Registry for MedX Protocol"
                      technology="Ethereum Smart Contracts, Web App Design &amp; Development"
                      onMouseEnter={this.onMouseEnter}
                      to="/work/token-registry" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ContactCallToAction />
      </div>
    )
  }
}

export default Work
