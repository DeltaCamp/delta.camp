import React from 'react'
import { Link } from 'gatsby'
import library from 'src/library'
import AntdIcon from 'react-antd-icons/esm';

class Footer extends React.Component {

  render() {
    const year = (new Date()).getFullYear()

    // don't put this first! <div className="container">

    return (
      <footer className="footer">
        <div className="container">
          <ul>
            <li>
              <Link to='/home'>Home</Link>
              <Link to='/work'>Our Work</Link>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className='columns'>
            <div className='column has-text-left'>
              &copy; {year} Delta Camp &mdash; Vancouver, BC. Canada
            </div>
            <div className='column has-text-right'>
              <a
                href='https://github.com/DeltaCamp'
                target='_blank'
                rel='noopener noreferred'
                title='Delta Camp on Github'>
                <AntdIcon type={'github-fill'} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
