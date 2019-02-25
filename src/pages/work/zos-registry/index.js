import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import AntdIcon from 'react-antd-icons/esm'
import ContactCallToAction from 'src/components/ContactCallToAction'
import WorkNav from 'src/components/work/WorkNav'

class Work extends React.PureComponent {

  renderWork = (data) => {

    return (
      <div>
        <Helmet>
          <title>ZeppelinOS Registry for Zeppelin Solutions</title>
        </Helmet>

        <section id="work-section-token-reg" className="section first">
          <div className='container'>
            <div className='columns'>
              <div className='column is-half-tablet'>
                <h2>
                  ZeppelinOS Registry
                  <br className="is-hidden-desktop" />

                    <small>
                      <span className="is-hidden-touch">&nbsp;&nbsp;</span>
                      <a href='https://registry.zeppelinos.org/' target='_blank' rel='noopener noreferrer'>view live <AntdIcon type={'right-square'} className='icon--work-view-live' /></a>
                    </small>
                </h2>

                <h3 className='subtitle-3'>
                  An application for EVM Packages.
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
                  <a href='https://zeppelinos.org' target='_blank' rel='noopener noreferrer'>ZeppelinOS</a> is a development platform designed specifically for smart contracts. It allows for seamless upgrades and provides economic incentives to create a healthy ecosystem of secure applications.
                </p>

                <h4>Challenge</h4>

                <p>
                  ZeppelinOS needed a front-end to interact with their smart contracts.  They also wanted it to be ready for integration with <a href='https://thegraph.com' target='_blank' rel='noopener noreferrer'>The Graph</a>.
                </p>

                <h4>Solution</h4>

                <p>
                  We had been working on a direct-to-Ethereum GraphQL Apollo Client module called <a href='https://github.com/DeltaCamp/apollo-link-ethereum' target='_blank' rel='noopener noreferrer'>apollo-link-ethereum</a> so the timing of the project was serendipitous.
                </p>

                <p>
                  We crafted a beautiful, responsive application that works across all browsers and screen sizes.  Mobile dapp browsers have broad support when transacting with the contracts.  The application code turned out beautiful as well, with a reduction of typical Web3 boilerplate code to near zero.
                </p>

                <h4>Technologies</h4>

                <ul className='ul'>
                  <li>React, Apollo Client</li>
                  <li>Netlify</li>
                </ul>

                <br />

                <WorkNav nextProjectPath='/work/open-care' />
              </div>

              <div className='column'>
                <div className="work-brief--img-container">
                  <img
                    className="work-brief--img shadow"
                    src={data.regTokenAnimated.publicURL}
                  />
                </div>

                <div className="work-brief--img-container">
                  <img
                    className="work-brief--img shadow"
                    src={data.regTokenShot2.publicURL}
                  />
                </div>

                <div className="work-brief--img-container">
                  <img
                    className="work-brief--img shadow"
                    src={data.regTokenShot1.publicURL}
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
