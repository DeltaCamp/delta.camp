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
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/work'>Our Work</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li>
              <a
                href='https://github.com/DeltaCamp'
                target='_blank'
                rel='noopener noreferred'
                title='Delta Camp on Github'>
                Open Source
                <AntdIcon type={'github-fill'} />
              </a>
            </li>
          </ul>
          <div className='has-text-left'>
            &copy; {year} Delta Camp &mdash; Vancouver, BC. Canada
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
