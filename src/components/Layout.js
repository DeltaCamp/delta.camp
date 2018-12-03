import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from 'src/utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div className="container">
          <div className="twelve columns">
            <a className="brand" href="/" title="Delta Camp Logo">delta.camp</a>

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
      )
    } else {
      header = (
        <h3>
          <Link
            to={'/'}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div>
        {header}
        {children}
      </div>
    )
  }
}

export default Layout
