import React from 'react'
import Img from "gatsby-image"
import { Link, graphql, StaticQuery } from 'gatsby'
import Nav from 'src/components/Nav'
import { ThreeContainer } from 'src/components/ThreeContainer'

import DownArrowSvg from '-!svg-react-loader!src/assets/images/down-arrow.svg'

class Hero extends React.Component {
  renderHero = (data) => {
    return (
      <ThreeContainer data={data}>
        <Nav invert={true} />
        <div className="hero about">
          <div className='hero-body'>
            <div className="container">
              <div className='columns'>
                <div className="column is-half is-three-quarters-tablet">
                  <h1 className="hero-h1">We build apps for the third web</h1>
                  <h4 className="hero-h4">Delta Camp is a development consultancy specializing in decentralized applications</h4>
                  <p>
                    <Link className="button button-primary internal" to="/work" title="Reach out and let's start a discussion">
                      Our Work
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="down-arrow--container">
            <a className="down-arrow--button" href="#services-and-values">
              <DownArrowSvg className="down-arrow--svg" />
              <DownArrowSvg className="down-arrow--svg--hover" />
            </a>
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
