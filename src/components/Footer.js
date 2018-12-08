import React from 'react'
import library from 'src/library'
import AntdIcon from 'react-antd-icons/esm';

class Footer extends React.Component {

  render() {
    const year = (new Date()).getFullYear()

    // don't put this first! <div className="container">

    return (
      <footer className="footer">
        <div className="container">
          <div className='columns'>
            <div className='column has-text-left'>
              &copy; {year} Delta Camp &mdash; Vancouver, BC. Canada
            </div>
            <div className='column has-text-right'>
              <AntdIcon type={'medium'} />
              <AntdIcon type={'github-fill'} />
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
