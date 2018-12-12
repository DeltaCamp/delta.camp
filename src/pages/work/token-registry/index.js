import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import AntdIcon from 'react-antd-icons/esm'
import ContactCallToAction from 'src/components/ContactCallToAction'
import WorkNav from 'src/components/work/WorkNav'

class Work extends React.PureComponent {

  renderWork = (data) => {

    return (

      <React.Fragment>
        <section id="work-section-token-reg" className="section first">
          <div className='container'>
            <div className='columns'>
              <div className='column is-half-tablet'>
                <h2>
                  The Token Registry
                  <br className="is-hidden-desktop" />

                    <small>
                      <span className="is-hidden-touch">&nbsp;&nbsp;</span>
                      <a href='https://tokenregistry.medxprotocol.com/' target='_blank' rel='noopener noreferrer'>view live <AntdIcon type={'right-square'} className='icon--work-view-live' /></a>
                    </small>
                </h2>

                <h3 className='subtitle-3'>
                  A smart contract protocol proof-of-concept
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section className='section has-background-grey'>
          <div className='container'>
            <div className='columns'>

              <div className='column'>

                <p>
                  <a href='https://medxprotocol.com/' target='_blank' rel='noopener noreferrer'>MedX Protocol</a> is creating a global market for healthcare using censorship-resistant software.  A key piece of their ecosystem will be a registry of physicians that smart contracts and other software can tap into.  MedX Protocol calls this the <a href='https://medium.com/medxprotocol/a-tcr-protocol-design-for-objective-content-6abb04aac027' target='_blank' rel="noopener noreferrer">Token Incentivized List</a>.
                </p>

                <h4>Challenge</h4>

                <p>
                  MedX Protocol needed an implementation of their Token Incentivized List.
                </p>

                <h4>Solution</h4>

                <p>
                  Working closely with their team we created a smart contract implementation of the protocol along with a application proof-of-concept.  The application is called the <a href='https://tokenregistry.medxprotocol.com/' target='_blank' rel='noopener noreferrer'>Token Registry</a> and allows users to build a registry of approved ERC20 tokens in a decentralized way.
                </p>

                <h4>Technologies</h4>

                <ul className='ul'>
                  <li>React, Redux, Redux Saga</li>
                  <li>Solidity Smart Contracts</li>
                  <li>Ethereum, Netlify</li>
                </ul>

                <br />

                <WorkNav nextProjectPath='/work/open-care' />
              </div>

              <div className='column'>
                <div className="masonry--img-container">
                  <img
                    className="masonry--img"
                    src={data.regTokenAnimated.publicURL}
                  />
                </div>

                <div className="masonry--img-container">
                  <img
                    className="masonry--img"
                    src={data.regTokenShot2.publicURL}
                  />
                </div>

                <div className="masonry--img-container">
                  <img
                    className="masonry--img"
                    src={data.regTokenShot1.publicURL}
                  />
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
          }
        `}
        render={(data) => this.renderWork(data)}
      />
    )
  }
}

export default Work
