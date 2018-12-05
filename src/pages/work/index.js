import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Bio from 'src/components/Bio'
import Layout from 'src/components/Layout'
import { rhythm } from 'src/utils/typography'


import MasonryLayout from 'react-masonry-layout'

class Work extends React.PureComponent {

  state = {
    perPage: 10,
    items: Array(6).fill()
  }

  loadItems = () => {
      // this.setState({
      //   items: this.state.items.concat(Array(this.state.perPage).fill())
      // });
  }



  render () {
    return (
      <Layout cssClass="work">
        <div className='container'>
          <h1>Client Work</h1>

          <MasonryLayout
            id="masonry-layout"
            infiniteScroll={this.loadItems}
            sizes={[
              { columns: 1, gutter: 20 },
              { mq: '768px', columns: 2, gutter: 20 },
              { mq: '1024px', columns: 3, gutter: 20 }
            ]}
          >
            {this.state.items.map((v, i) => {
              let height = i % 4 === 0 ? 200 : 170;
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
                  {i}
                </div>
              )}
            )}

          </MasonryLayout>

          <div>
            <h2>
              The Token Registry
              <small>
                &nbsp;&nbsp;
                <a href='https://tokenregistry.medxprotocol.com/' target='_blank' rel='noopener noreferrer'>view</a>
              </small>
            </h2>
            <p>
              We worked with <a href='https://medxprotocol.com/' target='_blank' rel='noopener noreferrer'>MedX Protocol</a> to iterate on their design for an <a href='https://medium.com/coinmonks/subjective-vs-objective-tcrs-a21f5d848553' target='_blank' rel="noopener noreferrer">Objective TCR</a>.  After completing the smart contracts we decided to build a proof-of-concept around the idea of a token registry.  Tokens are listed on many different exchanges, but there is no decentralized list of tokens.  Using our objective TCR contracts we were able to create a decentralized registry of tokens.
            </p>
          </div>

          <div>
            <h2>
              OpenCare
              <small>
                &nbsp;&nbsp;
                <a href='https://opencare.medxprotocol.com/welcome' target='_blank' rel='noopener noreferrer'>view</a>
              </small>
            </h2>
            <p>
              We worked with <a href='https://medxprotocol.com/' target='_blank' rel='noopener noreferrer'>MedX Protocol</a> to develop their first decentralized application for the global healthcare market.  OpenCare is a teledermatology app that allows users to receive diagnoses from dermatologists.  Patients create a new case that includes some demographic information, a brief history of the condition, and several photos.  The case is assigned to a doctor who can submit a diagnosis and receive a fee.  If the patient is unhappy with the diagnosis they can receive a second opinion.
            </p>
            <p>
              OpenCare uses a broad spectrum of decentralized technologies: including IPFS, Whisper and Ethereum.
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Work
