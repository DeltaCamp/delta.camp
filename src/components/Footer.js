import React from 'react'
import { Link } from 'gatsby'

class Footer extends React.Component {

  render() {
    const year = (new Date()).getFullYear()

    // don't put this first! <div className="container">

    return (
      <footer className="footer">
        <div className="container">
          <section className='section'>
            <div className='is-inline-block is-vertical-align-top'>
              <div className='ul-title'>Case Studies</div>
              <ul>
                <li><Link to='/work/open-care'>Open Care</Link></li>
                <li><Link to='/work/token-registry'>The Token Registry</Link></li>
              </ul>
            </div>
            <div className='is-inline-block is-vertical-align-top'>
              <div className='ul-title'>Community</div>
              <ul>
                <li><Link to='/blog'>Articles</Link></li>
                <li>
                  <a
                    href='https://github.com/DeltaCamp'
                    target='_blank'
                    rel='noopener noreferred'
                    title='Delta Camp on Github'>
                    Open Source on Github
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
