import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import AntdIcon from 'react-antd-icons/esm'

class Work extends React.PureComponent {

  renderWork = (data) => {

    return (
      <React.Fragment>
        <section id="work-section-token-reg" className="section first">
          <div className='container'>
            <div className="columns">
              <div className="column">
                <h2>
                  OpenCare
                  <br className="is-hidden-desktop" />

                  <small>
                    <span className="is-hidden-touch">&nbsp;&nbsp;</span>

                    <a href='https://opencare.medxprotocol.com/welcome' target='_blank' rel='noopener noreferrer'>view live <AntdIcon type={'right-square'} className='icon--work-view-live' /></a>
                  </small>
                </h2>

                <div className="columns">
                  <div className="column is-full-desktop is-two-thirds-widescreen is-two-thirds-fullhd">
                    <p>
                      <a href='https://medxprotocol.com/' target='_blank' rel='noopener noreferrer'>MedX Protocol</a> needed to develop OpenCare, their first decentralized application for the global healthcare market. OpenCare is a teledermatology app that allows users to receive diagnoses from dermatologists:
                    </p>
                  </div>
                </div>

                <div className="masonry">
                  <div class="columns is-multiline">
                    <div className="column is-half-tablet is-half-desktop is-half-widescreen is-two-fifths-fullhd">
                      <div className="masonry--img-container shadow">
                        <img
                          className="masonry--img"
                          src={data.openCareShot1.publicURL}
                        />
                        <span className="masonry-img--caption">
                          <strong>Landing Page</strong>

                          New users are greeted by a welcoming landing page which asks them to submit a new case for Doctor's to diagnose.
                        </span>
                      </div>
                    </div>

                    <div className="column is-half-tablet is-half-desktop is-half-widescreen is-two-fifths-fullhd">
                      <div className="masonry--img-container shadow">
                        <img
                          className="masonry--img"
                          src={data.openCareShot2.publicURL}
                        />
                        <span className="masonry-img--caption">
                          <strong>Sign-up Flow</strong>
                          256-bit encryption is employed to create user accounts and encrypt any and all information the patient provides, and the decryption key is only shared with their Doctor.
                        </span>
                      </div>
                    </div>
                    <div className="column is-half-tablet is-half-desktop is-half-widescreen is-two-fifths-fullhd">
                      <div className="masonry--img-container shadow">
                        <img
                          className="masonry--img"
                          src={data.openCareShot3.publicURL}
                        />
                        <span className="masonry-img--caption">
                          <strong>Case Submission</strong>
                          A clean and reactive form requests the patient's general information and skin condition details. Names, addresses, etc. are not collected and patients are kept anonymous.
                        </span>
                      </div>
                    </div>
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
