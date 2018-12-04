import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from 'src/utils/typography'

import LogoSvg from '-!svg-react-loader!src/assets/images/delta-camp--wordmark-white--outlines.svg'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const header = (
      <div className="container">
        <div className="twelve columns">
          <div className="nav-grid">
            <Link className="brand" to="/" title="Delta Camp Logo">
              <LogoSvg />
            </Link>

            <ul className="nav work-layout--nav">
              <li className="nav--list-item">
                <Link className="nav--link" to="/work" title="See Our Work">Work</Link>
              </li>
              <li className="nav--list-item">
                <Link className="nav--link" to="/contact" title="Contact Us">Contact</Link>
              </li>
              <li className="nav--list-item">
                <Link className="nav--link" to="/blog" title="Read my words">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )

    return (
      <React.Fragment>
        {header}
        {children}
      </React.Fragment>
    )
  }
}

export default Layout
