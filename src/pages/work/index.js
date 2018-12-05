import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from 'src/components/Layout'
import { rhythm } from 'src/utils/typography'

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
      let height = Math.random(1) > 0.5 ? 200 : 240;
      return (
        <div
          key={i}
          style={{
            width: '340px',
            height: `${height}px`,
            lineHeight: `${height}px`,
            transition: 'all 0.7s ease-in-out',
            color: 'white',
            fontSize: '32px',
            display: 'block',
            background: 'rgba(0,0,0,0.3)'
          }}
        >
          {v}
        </div>
      )}
    )
  }

  renderWork = (data) => {
    const items = [
      <img src={data.gif1.publicURL} />,
      <img src={data.gif1.publicURL} />,
      <img src={data.gif1.publicURL} />,
      <img src={data.gif1.publicURL} />
    ]

    return (
      <Layout cssClass="work">
        <section className="section">
          <div className="container">
            <h1>
              Client Work
            </h1>
          </div>
        </section>

        <section id="work-section-token-reg" className="section">
          <div className="container">

            <div className="columns">
              <div className="column is-three-quarters-desktop is-two-thirds-widescreen is-two-thirds-fullhd">
                <h5>
                  The Token Registry
                  <small>
                    &nbsp;&nbsp;
                    <a href='https://tokenregistry.medxprotocol.com/' target='_blank' rel='noopener noreferrer'>view live</a>
                  </small>
                </h5>

                <MasonryLayout
                  id="token-reg-masonry"
                  className="masonry-layout"
                  infiniteScroll={this.loadItems}
                  sizes={[
                    { columns: 1, gutter: 20 },
                    { mq: '768px', columns: 2, gutter: 20 },
                    { mq: '1280px', columns: 3, gutter: 20 }
                  ]}
                >
                  {this.renderMasonryLayoutItems(items)}
                </MasonryLayout>

                <p>
                  We worked with <a href='https://medxprotocol.com/' target='_blank' rel='noopener noreferrer'>MedX Protocol</a> to iterate on their design for an <a href='https://medium.com/coinmonks/subjective-vs-objective-tcrs-a21f5d848553' target='_blank' rel="noopener noreferrer">Objective TCR</a>.  After completing the smart contracts we decided to build a proof-of-concept around the idea of a token registry.  Tokens are listed on many different exchanges, but there is no decentralized list of tokens.  Using our objective TCR contracts we were able to create a decentralized registry of tokens.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="work-section-opencare" className="section">
          <div className="container">

            <div className="columns">
              <div className="column is-three-quarters-desktop is-two-thirds-widescreen is-two-thirds-fullhd">
                <h5>
                  OpenCare
                  <small>
                    &nbsp;&nbsp;
                    <a href='https://opencare.medxprotocol.com/welcome' target='_blank' rel='noopener noreferrer'>view live</a>
                  </small>
                </h5>
                <p>
                  We worked with <a href='https://medxprotocol.com/' target='_blank' rel='noopener noreferrer'>MedX Protocol</a> to develop their first decentralized application for the global healthcare market.  OpenCare is a teledermatology app that allows users to receive diagnoses from dermatologists.  Patients create a new case that includes some demographic information, a brief history of the condition, and several photos.  The case is assigned to a doctor who can submit a diagnosis and receive a fee.  If the patient is unhappy with the diagnosis they can receive a second opinion.
                </p>
                <p>
                  OpenCare uses a broad spectrum of decentralized technologies: including IPFS, Whisper and Ethereum.
                </p>
              </div>

            </div>
          </div>
        </section>
      </Layout>
    )
  }

  render () {
    return (
      <StaticQuery
        query={graphql`
          query {
            gif1: file(relativePath: { eq: "ezgif-3-4153a76d4de2.gif" }) {
              publicURL
            }
            deltaCamp3DLightbox: file(relativePath: { eq: "DeltaCamp-logo-3d--lightbox.fbx" }) {
              publicURL
            }
            profilePic: file(relativePath: { eq: "delta-camp--logo.png" }) {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 851, height: 737) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
          }
        `}
        render={(data) => this.renderWork(data)}
      />
    )
  }
}

export default Work
