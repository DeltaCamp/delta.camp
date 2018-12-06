import React from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import LogoSvg from '-!svg-react-loader!src/assets/images/delta-camp--wordmark-white--outlines.svg'

class Nav extends React.Component {
  static propTypes = {
    logo: PropTypes.bool
  }

  static defaultProps = {
    logo: true
  }

  constructor (props) {
    super(props)
    this.state = {
      isMenuOpen: false
    }
  }

  toggleMenu = () => {
    console.log("toggle")
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            {this.props.logo &&
              <Link className="navbar-item brand" to="/">
                <LogoSvg className="brand" />
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
                <Link to='/work' className="button button-outline" title='See our work'>
                  Work
                </Link>
              </div>
              <div className="navbar-item">
                <Link to='/contact' className="button button-outline" title='Contact us'>
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
