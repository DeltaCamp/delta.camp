import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Bio from 'src/components/Bio'
import LayoutWithHeader from 'src/components/LayoutWithHeader'
import { rhythm } from 'src/utils/typography'

class Work extends React.PureComponent {
  render () {
    return (
      <LayoutWithHeader>
        <div className='work'>
          <h1>Client Work</h1>

          <div>
            <h2>The Token Registry<small><a href='https://tokenregistry.medxprotocol.com/' target='_blank' rel='noopener noreferrer'>open</a></small></h2>
            <p>
              We worked with <a href='https://medxprotocol.com/' target='_blank' rel='noopener noreferrer'>MedX Protocol</a> to iterate on their design for an <a href='https://medium.com/coinmonks/subjective-vs-objective-tcrs-a21f5d848553' target='_blank' rel="noopener noreferrer">Objective TCR</a>.  After completing the smart contracts we decided to build a proof-of-concept around the idea of a token registry.  Tokens are listed on many different exchanges, but there is no decentralized list of tokens.  Using our objective TCR contracts we were able to create a decentralized registry of tokens.
            </p>
          </div>

          <div>
            <h2>OpenCare<small><a href='https://opencare.medxprotocol.com/welcome' target='_blank' rel='noopener noreferrer'>open</a></small></h2>
            <p>
              We worked with <a href='https://medxprotocol.com/' target='_blank' rel='noopener noreferrer'>MedX Protocol</a> to develop their first decentralized application for the global healthcare market.  OpenCare is a teledermatology app that allows users to receive diagnoses from dermatologists.  Patients create a new case that includes some demographic information, a brief history of the condition, and several photos.  The case is assigned to a doctor who can submit a diagnosis and receive a fee.  If the patient is unhappy with the diagnosis they can receive a second opinion.
            </p>
            <p>
              OpenCare uses a broad spectrum of decentralized technologies: including IPFS, Whisper and Ethereum.
            </p>
          </div>
        </div>
      </LayoutWithHeader>
    )
  }
}

export default Work

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
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
`
