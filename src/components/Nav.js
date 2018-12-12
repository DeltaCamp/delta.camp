import React from 'react'
import classnames from 'classnames'
import { Link } from 'src/components/Link'
import PropTypes from 'prop-types'

import LogoSvg from '-!svg-react-loader!src/assets/images/delta-camp--logo--white-horiz.svg'

class Nav extends React.Component {
  static propTypes = {
    logo: PropTypes.bool,
    invert: PropTypes.bool,
    hideLayoutNav: PropTypes.bool
  }

  static defaultProps = {
    logo: true,
    invert: false,
    hideLayoutNav: false
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

  componentDidMount () {
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize)
  }

  onResize = () => {
    this.setState({
      isMenuOpen: false
    })
  }

  close = () => {
    this.setState({isMenuOpen: false})
  }

  render() {
    return (
      <div>
        <div className={classnames('nav-background', { 'is-active': this.state.isMenuOpen })} onClick={this.close}/>
        <div className='container'>
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className={classnames("navbar-brand", { "is-active": this.state.isMenuOpen })}>
              {this.props.logo &&
                <Link
                  className={classnames("navbar-item brand")}
                  to="/"
                  onClick={this.close}
                >
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
                    className="nav-link"
                    activeClassName='is-active'
                    onClick={this.close}
                    title='Home'>
                    Home
                  </Link>
                </div>
                {/*<div className="navbar-item">
                  <Link
                    to='/#services-and-values'
                    className="nav-link"
                    activeClassName='is-active'
                    onClick={this.close}
                    title='Services'>
                    Services
                  </Link>
                </div>*/}
                <div className="navbar-item">
                  <Link
                    to='/work'
                    className="nav-link"
                    activeClassName='is-active'
                    onClick={this.close}
                    title='See our work'>
                    Work
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link
                    to='/contact'
                    className="nav-link"
                    activeClassName='is-active'
                    onClick={this.close}
                    title='Contact us'>
                    Contact
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link
                    to='/blog'
                    className="nav-link"
                    activeClassName='is-active'
                    onClick={this.close}
                    title='Blog'>
                    Blog
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default Nav
