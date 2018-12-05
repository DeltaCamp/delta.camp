import React from 'react'
import Img from "gatsby-image"
import { Link, graphql, StaticQuery } from 'gatsby'

import { ThreeContainer } from 'src/components/ThreeContainer'

class Hero extends React.Component {
  renderHero = (data) => {
    return (
      <div>
        <ThreeContainer data={data} />

        <div className="about">
          <div className="container">
            <div className='columns'>
              <div className="column is-half is-three-quarters-tablet">
                <p>
                  <Link className="button button-primary internal" to="/contact" title="Reach out and let's start a discussion">
                    Let's Work Together
                  </Link>
                  &nbsp;
                  <Link className="button button-outline internal" to="/work" title="Our Work">Our Work</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
