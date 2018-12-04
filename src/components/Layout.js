import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from 'src/utils/typography'

import LogoSvg from '-!svg-react-loader!src/assets/images/delta-camp--wordmark-white--outlines.svg'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    const brandAndNav = (
      <div className="container">
        <div className="twelve columns">
          <div className="nav-grid">
            <a className="brand" href="/" title="Delta Camp Logo">
              <LogoSvg />
            </a>

            <ul className="nav work-layout--nav">
              <li className="nav--list-item">
                <a className="nav--link" href="/" title="Learn more about me">About</a>
              </li>
              <li className="nav--list-item">
                <a className="nav--link" href="/work/index.html" title="See my work">Work</a>
              </li>
              <li className="nav--list-item">
                <a className="nav--link" href="/#contact" title="Contact me">Contact</a>
              </li>
              <li className="nav--list-item">
                <a className="nav--link" href="/blog" title="Read my words">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )


    if (location.pathname === rootPath) {
      header = (
        brandAndNav
      )
    } else {
      header = (
        <React.Fragment>
          {brandAndNav}
          <h3>
            <Link
              to={'/'}
            >
              {title}
            </Link>
          </h3>
        </React.Fragment>
      )
    }
    return (
      <React.Fragment>
        {header}
        {children}
      </React.Fragment>
    )
  }
}

export default Layout
