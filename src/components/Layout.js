import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from 'src/utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header = (
        <div className="container">
          <div className="twelve columns">
            <Link to='/' className='brand' title="Delta Camp Logo">delta.camp</Link>

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
      )
    return (
      <div>
        {header}
        {children}
      </div>
    )
  }
}

export default Layout
