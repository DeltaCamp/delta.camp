import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import AntdIcon from 'react-antd-icons/esm'
import ReactTooltip from 'react-tooltip'

class Work extends React.PureComponent {

  renderWork = (data) => {
    return (
      <React.Fragment>
        <section id="work-section-token-reg" className="section first">
          <div className="container">
            <h2>
              The Token Registry
              <br className="is-hidden-desktop" />

              <small>
                <span className="is-hidden-touch">&nbsp;&nbsp;</span>
                <a href='https://tokenregistry.medxprotocol.com/' target='_blank' rel='noopener noreferrer'>view live <AntdIcon type={'right-square'} className='icon--work-view-live' /></a>
              </small>
            </h2>
            <div className="columns">
              <div className="column is-three-quarters-desktop is-two-thirds-widescreen is-two-thirds-fullhd">
                <p>
                  We worked with <a href='https://medxprotocol.com/' target='_blank' rel='noopener noreferrer'>MedX Protocol</a> to iterate on their design of an <a href='https://medium.com/coinmonks/subjective-vs-objective-tcrs-a21f5d848553' target='_blank' rel="noopener noreferrer">Objective TCR</a>. After completing the smart contracts we decided to build a proof-of-concept <span
                    className='tooltip-reference'
                    data-for='dapp-explain-tooltip'
                    data-tip="<strong>Decentralized Application</strong><br />A DApp has its backend code running on a decentralized peer-to-peer network. Contrast this with an app where the backend code is running on centralized servers."
                  >
                    DApp
                  </span> around the idea of a token registry:
                  <ReactTooltip id="dapp-explain-tooltip" className='tooltip' html={true} />
                </p>
              </div>
            </div>

            <div className="columns">
              <div className="masonry">
                <div class="columns is-multiline">
                  <div className="column is-half-tablet is-half-desktop is-half-widescreen is-two-fifths-fullhd">
                    <div className="masonry--img-container shadow">
                      <img
                        className="masonry--img"
                        src={data.regTokenAnimated.publicURL}
                      />
                      <span className="masonry-img--caption">
                        <strong>Token Submission Step</strong>
                        <br />
                        Anyone can submit a token to be listed on the registry. A verifier then checks the validity of the submission.
                      </span>
                    </div>
                  </div>

                  <div className="column is-half-tablet is-half-desktop is-half-widescreen is-two-fifths-fullhd">
                    <div className="masonry--img-container shadow">
                      <img
                        className="masonry--img"
                        src={data.regTokenShot2.publicURL}
                      />
                      <span className="masonry-img--caption">
                        <strong>Following Successful Verification</strong>
                        <br />
                        If the verifier and the applicant's answers match (ie. the token, ticker symbol and contract address are valid) the token is in the registry.
                      </span>
                    </div>
                  </div>

                  <div className="column is-half-tablet is-half-desktop is-half-widescreen is-two-fifths-fullhd">
                    <div className="masonry--img-container shadow">
                      <img
                        className="masonry--img"
                        src={data.regTokenShot1.publicURL}
                      />
                      <span className="masonry-img--caption">
                        <strong>Public Listing</strong>
                        <br />
                        Anyone can view the public registry, use the token &amp; contract address data in their DApps and challenge tokens as they see fit.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="columns">
              <div className="column is-three-quarters-desktop is-two-thirds-widescreen is-two-thirds-fullhd">
                <p>
                  Tokens are listed on many different exchanges, but there is no decentralized list of tokens.  Using our objective TCR contracts we were able to create a decentralized registry of tokens which lives on the Ethereum blockchain and anyone can use.
                </p>
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
          }
        `}
        render={(data) => this.renderWork(data)}
      />
    )
  }
}

export default Work
