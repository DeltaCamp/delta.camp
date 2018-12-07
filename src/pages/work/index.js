import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'

import { BodyClass } from 'src/components/BodyClass'

import MasonryLayout from 'react-masonry-layout'

class Work extends React.PureComponent {

  state = {
    perPage: 10
  }

  loadItems = () => {
    // this.setState({
    //   items: this.state.items.concat(Array(this.state.perPage).fill())
    // });
  }

  renderMasonryLayoutItems = (items) => {
    return items.map((v, i) => {
      // let height = Math.random(1) > 0.5 ? 200 : 240;
      return (
        <div
          key={i}
          style={{
            width: '600px',
            height: `325px`,
            lineHeight: `325px`,
            transition: 'all 1.1s cubic-bezier(.28, .99, .49, 1.14)',
            display: 'block',
            background: 'transparent'
          }}
        >
          {v}
        </div>
      )}
    )
  }

  renderWork = (data) => {
    const tokenRegItems = [
      <img src={data.regTokenAnimated.publicURL} />,
      <img src={data.regTokenShot1.publicURL} />,
      <img src={data.regTokenShot2.publicURL} />
    ]

    const openCareItems = [
      <img src={data.openCareShot1.publicURL} />,
      <img src={data.openCareShot2.publicURL} />,
      <img src={data.openCareShot3.publicURL} />
    ]

    return (
      <React.Fragment>
        {/*<BodyClass cssClass="work" />*/}

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

                <MasonryLayout
                  id="token-reg-masonry"
                  className="masonry-layout"
                  infiniteScroll={this.loadItems}
                  sizes={[
                    { columns: 1, gutter: 20 },
                    { mq: '768px', columns: 1, gutter: 20 },
                    { mq: '1472px', columns: 2, gutter: 20 }
                  ]}
                >
                  {this.renderMasonryLayoutItems(tokenRegItems)}
                </MasonryLayout>
              </div>
            </div>

            <div className="columns">
              <div className="column is-three-quarters-desktop is-two-thirds-widescreen is-two-thirds-fullhd">
                <p>
                  We worked with <a href='https://medxprotocol.com/' target='_blank' rel='noopener noreferrer'>MedX Protocol</a> to iterate on their design for an <a href='https://medium.com/coinmonks/subjective-vs-objective-tcrs-a21f5d848553' target='_blank' rel="noopener noreferrer">Objective TCR</a>.  After completing the smart contracts we decided to build a proof-of-concept around the idea of a token registry.  Tokens are listed on many different exchanges, but there is no decentralized list of tokens.  Using our objective TCR contracts we were able to create a decentralized registry of tokens.
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

                <MasonryLayout
                  id="opencare-masonry"
                  className="masonry-layout"
                  infiniteScroll={this.loadItems}
                  sizes={[
                    { columns: 1, gutter: 20 },
                    { mq: '768px', columns: 1, gutter: 20 },
                    { mq: '1472px', columns: 2, gutter: 20 }
                  ]}
                >
                  {this.renderMasonryLayoutItems(openCareItems)}
                </MasonryLayout>

              </div>
            </div>

            <div className="columns">
              <div className="column is-three-quarters-desktop is-two-thirds-widescreen is-two-thirds-fullhd">

                <p>
                  <a href='https://medxprotocol.com/' target='_blank' rel='noopener noreferrer'>MedX Protocol</a> needed to develop OpenCare, their first decentralized application for the global healthcare market. OpenCare is a teledermatology app that allows users to receive diagnoses from dermatologists.  Patients create a new case that includes some demographic information, a brief history of the condition, and several photos.  The case is assigned to a doctor who can submit a diagnosis and receive a fee.  If the patient is unhappy with the diagnosis they can receive a second opinion.
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
