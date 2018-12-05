import React from 'react'
import { Link } from 'gatsby'

import LogoSvg from '-!svg-react-loader!src/assets/images/delta-camp--wordmark-white--outlines.svg'

class Nav extends React.Component {
  render() {
    return (
      <div className="container">
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
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav
