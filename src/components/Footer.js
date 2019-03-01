import React from 'react'
import { Link } from 'gatsby'
import AntdIcon from 'react-antd-icons/esm'

class Footer extends React.Component {

  render() {
    const year = (new Date()).getFullYear()

    // don't put this first! <div className="container">
    // it breaks the Gatsby build as there's some sort of bug in gatsby page layout

    const columnClassName = "column is-full-tablet is-full-touch is-3-desktop is-2-widescreen is-2-fullhd"

    return (
      <footer className="footer">
        <div className="container">

          <div className="footer__links">
            <div className="columns is-multiline">
              <div className={columnClassName}>
                <div className='is-vertical-align-top'>
                  {/*<h6 className='ul-title'>Work</h6>*/}
                  <ul>
                    <li>
                      <Link to='/work/zos-registry'>ZeppelinOS</Link>
                    </li>
                    <li>
                      <Link to='/work/open-care'>Open Care</Link>
                    </li>
                    <li>
                      <Link to='/work/token-registry'>The Token Registry</Link>
                    </li>
                  </ul>
                </div>
              </div>


              <div className={columnClassName}>
                <div className='is-vertical-align-top'>
                  {/*<h6 className='ul-title'>Community</h6>*/}
                  <ul>
                    <li>
                      <Link to='/blog'>Articles</Link>
                    </li>
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
              </div>

              <div className={columnClassName}>
                <div className='is-vertical-align-top'>
                  {/*<h6 className='ul-title'>Contact</h6>*/}
                  <ul>
                    <li>
                      <Link to='/contact'>Hire Us</Link>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          <div>
            <br />
            <ul className="is-inline-list">
              <li>
                <a href='https://twitter.com/TeamDeltaCamp'>
                  <AntdIcon type={'twitter'} className='prefix-icon' />
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/company/delta-camp-blockchain-consultancy'>
                  <AntdIcon type={'linkedin-fill'} className='prefix-icon' />
                </a>
              </li>
              <li>
                <a href='https://github.com/DeltaCamp'>
                  <AntdIcon type={'github-fill'} className='prefix-icon' />
                </a>
              </li>
            </ul>
          </div>

          <div className='footer__copyright has-text-left'>
            <div className='is-inline-block'>&copy; {year} Delta Camp</div> <span className='is-hidden-mobile'>&mdash; </span><div className='is-inline-block'>Vancouver, BC. Canada</div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
