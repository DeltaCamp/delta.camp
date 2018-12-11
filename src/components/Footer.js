import React from 'react'
import { Link } from 'gatsby'
import library from 'src/library'

class Footer extends React.Component {

  render() {
    const year = (new Date()).getFullYear()

    // don't put this first! <div className="container">

    return (
      <footer className="footer">
        <div className="container">
          <section className='section'>
            <div className='is-inline-block is-vertical-align-top'>
              <div className='ul-title'>Work</div>
              <ul>
                <li><Link to='/work'>Client Work</Link></li>
                <li>
                  <a
                    href='https://github.com/DeltaCamp'
                    target='_blank'
                    rel='noopener noreferred'
                    title='Delta Camp on Github'>
                    Open Source
                  </a>
                </li>
              </ul>
            </div>
            <div className='is-inline-block is-vertical-align-top'>
              <div className='ul-title'>Contact</div>
              <ul>
                <li><Link to='/contact'>Hire Us</Link></li>
              </ul>
            </div>
          </section>
          <section className='section is-footer'>
            <div className='has-text-left'>
              <div className='is-inline-block'>&copy; {year} Delta Camp</div> <span className='is-hidden-mobile'>&mdash; </span><div className='is-inline-block'>Vancouver, BC. Canada</div>
            </div>
          </section>
        </div>
      </footer>
    )
  }
}

export default Footer
