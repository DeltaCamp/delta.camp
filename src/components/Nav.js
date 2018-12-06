import React from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import LogoSvg from '-!svg-react-loader!src/assets/images/delta-camp--wordmark-white--outlines.svg'

class Nav extends React.Component {
  static propTypes = {
    logo: PropTypes.bool,
    invert: PropTypes.bool
  }

  static defaultProps = {
    logo: true,
    invert: false
  }

  constructor (props) {
    super(props)
    this.state = {
      isMenuOpen: false
    }
  }

  toggleMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  }

  render() {
    return (
      <div className="container">
        <nav className={classnames("navbar", { "is-inverted": this.props.invert })} role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            {this.props.logo &&
              <Link className={classnames("navbar-item brand", { "is-inverted": this.props.invert })} to="/">
                <LogoSvg width='150' className="brand" />
              </Link>
            }

            <a role="button" className={classnames("navbar-burger burger", { "is-active": this.state.isMenuOpen })} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={this.toggleMenu}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className={classnames("navbar-menu", { "is-active": this.state.isMenuOpen })}>
            <div className="navbar-end">
              <div className="navbar-item">
                <Link
                  to='/'
                  className={classnames("nav-link", { "is-inverted": this.props.invert })}
                  activeClassName='is-active'
                  title='Home'>
                  Home
                </Link>
              </div>
              <div className="navbar-item">
                <Link
                  to='/work'
                  className={classnames("nav-link", { "is-inverted": this.props.invert })}
                  activeClassName='is-active'
                  title='See our work'>
                  Work
                </Link>
              </div>
              <div className="navbar-item">
                <Link
                  to='/contact'
                  className={classnames("nav-link", { "is-inverted": this.props.invert })}
                  activeClassName='is-active'
                  title='Contact us'>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav
