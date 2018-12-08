import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'

class Work extends React.PureComponent {

  renderWork = (data) => {

    return (
      <React.Fragment>
        <section className="section first">
          <div className="container">
            <h1 className="page-title is-marginless">
              Our Work
            </h1>
          </div>
        </section>

        <section id="work-section-token-reg" className="section">
          <div className="container">

            <div className="columns">
              <div className="column">
                <h5>
                  The Token Registry
                  <br className="is-hidden-desktop" />

                  <small>
                    <span className="is-hidden-touch">&nbsp;&nbsp;</span>
                    <a href='https://tokenregistry.medxprotocol.com/' target='_blank' rel='noopener noreferrer'>view live</a>
                  </small>
                </h5>

                <div className="columns">
                  <div className="column is-three-quarters-desktop is-two-thirds-widescreen is-two-thirds-fullhd">
                    <p>
                      We worked with <a href='https://medxprotocol.com/' target='_blank' rel='noopener noreferrer'>MedX Protocol</a> to iterate on their design of an <a href='https://medium.com/coinmonks/subjective-vs-objective-tcrs-a21f5d848553' target='_blank' rel="noopener noreferrer">Objective TCR</a>. After completing the smart contracts we decided to build a proof-of-concept <abbr title="Decentralized Application">DApp</abbr> around the idea of a token registry:
                    </p>
                  </div>
                </div>

                <div className="masonry">
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

            <div className="columns">
              <div className="column is-three-quarters-desktop is-two-thirds-widescreen is-two-thirds-fullhd">
                <p>
                  Tokens are listed on many different exchanges, but there is no decentralized list of tokens.  Using our objective TCR contracts we were able to create a decentralized registry of tokens which lives on the Ethereum blockchain and anyone can use.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="work-section-opencare" className="section has-background-grey">
          <div className="container">

            <div className="columns">
              <div className="column">
                <h5>
                  OpenCare
                  <br className="is-hidden-desktop" />

                  <small>
                    <span className="is-hidden-touch">&nbsp;&nbsp;</span>

                    <a href='https://opencare.medxprotocol.com/welcome' target='_blank' rel='noopener noreferrer'>view live</a>
                  </small>
                </h5>

                <div className="columns">
                  <div className="column is-three-quarters-desktop is-two-thirds-widescreen is-two-thirds-fullhd">
                    <p>
                      <a href='https://medxprotocol.com/' target='_blank' rel='noopener noreferrer'>MedX Protocol</a> needed to develop OpenCare, their first decentralized application for the global healthcare market. OpenCare is a teledermatology app that allows users to receive diagnoses from dermatologists:
                    </p>
                  </div>
                </div>

                <div className="masonry">
                  <div className="masonry--img-container shadow">
                    <img
                      className="masonry--img"
                      src={data.openCareShot1.publicURL}
                    />
                    <span className="masonry-img--caption">
                      <strong>Landing Page</strong>
                      <br />
                      New users are greeted by a welcoming landing page which asks them to submit a new case for Doctor's to diagnose.
                    </span>
                  </div>
                  <div className="masonry--img-container shadow">
                    <img
                      className="masonry--img"
                      src={data.openCareShot2.publicURL}
                    />
                    <span className="masonry-img--caption">
                      <strong>Sign-up Flow</strong>
                      <br />
                      256-bit encryption is employed to create user accounts and encrypt any and all information the patient provides, and the decryption key is only shared with their Doctor.
                    </span>
                  </div>
                  <div className="masonry--img-container shadow">
                    <img
                      className="masonry--img"
                      src={data.openCareShot3.publicURL}
                    />
                    <span className="masonry-img--caption">
                      <strong>Case Submission</strong>
                      <br />
                      A clean and reactive form requests the patient's general information and skin condition details. Names, addresses, etc. are not collected and patients are kept anonymous.
                    </span>
                  </div>
                </div>

              </div>
            </div>

            <div className="columns">
              <div className="column is-three-quarters-desktop is-two-thirds-widescreen is-two-thirds-fullhd">
                <p>
                  Patients create a new case that includes some demographic information, a brief history of the condition, and several photos.  The case is assigned to a doctor who can submit a diagnosis and receive a fee.  If the patient is unhappy with the diagnosis they can receive a second opinion.
                </p>

                <p>
                  OpenCare uses a broad spectrum of decentralized technologies: including IPFS, Whisper and Ethereum.
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
