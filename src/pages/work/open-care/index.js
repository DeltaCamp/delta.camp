import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import AntdIcon from 'react-antd-icons/esm'
import ScrollToTop from 'src/components/ScrollToTop'
import ContactCallToAction from 'src/components/ContactCallToAction'
import WorkNav from 'src/components/work/WorkNav'

class Work extends React.PureComponent {

  renderWork = (data) => {

    return (
      <div>
        <ScrollToTop />
        <Helmet>
          <title>OpenCare for MedX Protocol</title>
        </Helmet>

        <section id="work-section-token-reg" className="section first">
          <div className='container'>
            <div className='columns'>
              <div className='column is-half-tablet'>
                <h2>
                  OpenCare
                  <br className="is-hidden-desktop" />

                  <small>
                    <span className="is-hidden-touch">&nbsp;&nbsp;</span>

                    <a href='https://opencare.medxprotocol.com/welcome' target='_blank' rel='noopener noreferrer'>view live <AntdIcon type={'right-square'} className='icon--work-view-live' /></a>
                  </small>
                </h2>

                <h3 className='subtitle-3'>
                  A decentralized telemedicine application
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section className='section section--work-brief has-background-grey'>
          <div className='container'>
            <div className='columns'>

              <div className='column'>

                <p>
                  MedX Protocol is creating a global market for healthcare using censorship-resistant software.  OpenCare is the first application in this ecosystem and provides dermatological diagnoses to anyone in the world.
                </p>

                <h4>Challenge</h4>

                <p>
                  We were approached by MedX Protocol to take OpenCare from a proof-of-concept to a production-grade application.
                </p>

                <h4>Solution</h4>

                <p>
                  A high performance single-page web application backed by smart contracts and decentralized messaging and storage.
                </p>

                <h4>Technologies</h4>

                <ul className='ul'>
                  <li>React, Redux, Redux Saga</li>
                  <li>Solidity Smart Contracts</li>
                  <li>Whisper, IPFS</li>
                  <li>Ethereum, Netlify, AWS</li>
                </ul>

                <br />

                <WorkNav nextProjectPath='/work/token-registry' />
              </div>

              <div className='column'>
                <div className="work-brief--img-container">
                  <img
                    className="work-brief--img shadow"
                    src={data.openCareShot1.publicURL}
                  />
                </div>

                <div className="work-brief--img-container">
                  <img
                    className="work-brief--img shadow"
                    src={data.openCareShot2.publicURL}
                  />
                </div>

                <div className="work-brief--img-container">
                  <img
                    className="work-brief--img shadow"
                    src={data.openCareShot3.publicURL}
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        <ContactCallToAction />
      </div>
    )
  }

  render () {
    return (
      <StaticQuery
        query={graphql`
          query {
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
