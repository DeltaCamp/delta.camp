import React from 'react'
import Img from "gatsby-image"
import { Link } from 'gatsby'
import Nav from 'src/components/Nav'
import { ThreeContainer } from 'src/components/ThreeContainer'

import DownArrowSvg from '-!svg-react-loader!src/assets/images/down-arrow.svg'

class Hero extends React.Component {
  render() {
    const columnClassName = "column is-two-thirds-tablet is-two-thirds-desktop is-two-fifths-fullhd"

    return (
      <ThreeContainer>
        <section className="section about first">
          <div>
            <div className="container">
              <div className='columns'>
                <div className={columnClassName}>
                  <h1 className="hero-h1">We build apps for the third web</h1>
                </div>
              </div>
              <div className='columns'>
                <div className={columnClassName}>
                  <h4 className="hero-h4">Delta Camp is a software consultancy specializing in decentralized apps</h4>
                  <p>
                    <Link className="button button-primary internal" to="/work" title="Reach out and let's start a discussion">
                      View Our Work
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
        </section>
      </ThreeContainer>
    )
  }
}

export default Hero
