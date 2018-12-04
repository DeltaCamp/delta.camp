import React from 'react'
import Img from "gatsby-image"
import { Link } from 'gatsby'

import { ThreeContainer } from 'src/components/ThreeContainer'

class Hero extends React.Component {
  render() {
    return (
      <div>
        {/*<Img
          fixed={this.props.data.profilePic.childImageSharp.fixed}
          className="hero-bg"
          style={{
            position: "absolute",
            left: 550,
            top: 30,
            width: "959px",
            height: "737px"
          }}
        />*/}

        <ThreeContainer />

        <div className="about">
          <div className="container">
            <div>
              <div className="six columns six-columns--tablet-override">
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
}

export default Hero
