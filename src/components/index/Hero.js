import React from 'react'
import { Link } from 'gatsby'
import Nav from 'src/components/Nav'
import { DeltaCamp3D } from 'src/components/DeltaCamp3D'
import debounce from 'lodash/debounce'

import DownArrowSvg from '-!svg-react-loader!src/assets/images/down-arrow.svg'

class Hero extends React.Component {
  render() {
    var deltaCamp3D, downArrow

    deltaCamp3D = <DeltaCamp3D />

    downArrow =
      <div className="down-arrow--container">
        <a className="down-arrow--button" href="#services-and-values">
          <DownArrowSvg className="down-arrow--svg" />
          <DownArrowSvg className="down-arrow--svg--hover" />
        </a>
      </div>

    const columnClassName = "column is-two-thirds-tablet is-two-thirds-desktop"

    return (
      <div>
        <div className="container">
          {deltaCamp3D}
        </div>
        <div className="header-3d">
          <div className='header-3d__spotlight' />
          <section className="section about first">
            <div>
              <div className="container">
                <div className='columns'>
                  <div className={columnClassName}>
                    <h1 className="hero-h1">We build apps for <span>the third web</span></h1>
                  </div>
                </div>
                <div className='columns'>
                  <div className={columnClassName}>
                    <h4 className="hero-h4">Delta Camp is a software consultancy specializing in decentralized apps</h4>
                    <p>
                      <Link className="button is-dark is-large internal" to="/work" title="Reach out and let's start a discussion">
                        View Our Work
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {downArrow}
          </section>
        </div>
      </div>
    )
  }
}

export default Hero
