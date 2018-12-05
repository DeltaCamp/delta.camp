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
        <Nav logo={false} />
        <div className="about">
          <div className="container">
            <div className='columns'>
              <div className="column is-half is-three-quarters-tablet">
                <LogoSvg />
                <h1 className="hero-h1">
                  We build blockchain applications
                </h1>
                <p>
                  <Link className="button button-primary internal" to="/contact" title="Reach out and let's start a discussion">
                    Let's Build Together
                  </Link>
                  &nbsp;
                  <Link className="button button-outline internal" to="/work" title="Our Work">See Our Work</Link>
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
