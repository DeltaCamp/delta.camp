import React from 'react'
import Img from "gatsby-image"
import { Link, graphql, StaticQuery } from 'gatsby'
import Nav from 'src/components/Nav'
import { ThreeContainer } from 'src/components/ThreeContainer'

import LogoSvg from '-!svg-react-loader!src/assets/images/delta-camp--wordmark-white--outlines.svg'

class Hero extends React.Component {
  renderHero = (data) => {
    return (
      <ThreeContainer data={data}>
        <Nav />
        <div className="about">
          <div className="container">
            <div className='columns'>
              <div className="column is-half is-three-quarters-tablet">
                <h2>We build apps for the third web.</h2>
                <h4>Delta Camp is a development consultancy that specializes in decentralized applications</h4>
                <p>
                  <Link className="button button-primary internal" to="/work" title="Reach out and let's start a discussion">
                    Our Work
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </ThreeContainer>
    )
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            deltaCamp3DSymbol: file(relativePath: { eq: "DeltaCamp-logo-3d--symbol.fbx" }) {
              publicURL
            }
            deltaCamp3DLightbox: file(relativePath: { eq: "DeltaCamp-logo-3d--lightbox.fbx" }) {
              publicURL
            }
          }
        `}
        render={(data) => this.renderHero(data)}
      />
    )
  }
}

export default Hero
