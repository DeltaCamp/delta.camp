import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Bio from 'src/components/Bio'
import Layout from 'src/components/Layout'
import { rhythm } from 'src/utils/typography'

class Work extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Layout>
        <div className='container'>
          <h1>Contact Us</h1>
          <form
            id='contact-form'
            action='https://docs.google.com/forms/d/e/1FAIpQLSemclsCI6sl3YXo66axFAx5bHzdVN-7Rv7Vec_y0JLtaEEW1Q/viewform?usp=sf_link'
            method='POST'
            target='_self'
            acceptCharset='UTF-8'
            encType='multipart/form-data'>
            <div className='field'>
              <label className='label'>Name</label>
              <div className='control'>
                <input className='input' type='text' placeholder='name' name='Name' />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    )
  }
}

export default Work
