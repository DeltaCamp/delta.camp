import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Bio from 'src/components/Bio'
import Layout from 'src/components/Layout'
import { rhythm } from 'src/utils/typography'

class Contact extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Layout cssClass="contact">
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-one-quarter-desktop is-two-thirds-widescreen is-one-half-fullhd">
                <h1 className="page-title">
                  Contact
                </h1>
                <h4 className="page-subtitle">
                  Hire us and we'll help you build superb blockchain apps
                </h4>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-one-quarter-desktop is-two-thirds-widescreen is-one-half-fullhd">
                <form
                  id="contact-form"
                  action="https://docs.google.com/forms/d/e/1FAIpQLSemclsCI6sl3YXo66axFAx5bHzdVN-7Rv7Vec_y0JLtaEEW1Q/viewform?usp=sf_link"
                  method="POST"
                  target="_self"
                  acceptCharset="UTF-8"
                  encType="multipart/form-data"
                >

                  <div className="field">
                    <label className="label" htmlFor="contact-project-name-input">
                      What is your company or project name?
                    </label>
                    <div className="control">
                      <input id="contact-project-name-input" className="input" type="text" name="companyProjectName" />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label" htmlFor="contact-name-input">
                      What is your name?
                    </label>
                    <div className="control">
                      <input id="contact-name-input" className="input" type="text" name="name" />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label" htmlFor="contact-email-input">
                      What is your email address?
                    </label>
                    <div className="control">
                      <input id="contact-email-input" className="input" type="text" name="email" />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label" htmlFor="contact-budget-input">
                      What is your budget?
                    </label>
                    <div className="control">
                      <input id="contact-budget-input" className="input" type="text" name="budget" />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label" htmlFor="contact-comments-textarea">
                      Additional Comment(s):
                    </label>
                    <div className="control">
                      <textarea
                        id="contact-comments-textarea"
                        className="textarea"
                        type="text"
                        name="Name"
                        rows="5"
                      />
                    </div>
                  </div>

                  <div className="field is-pulled-right">
                    <div className="control">
                      <button type="submit" className="button is-success">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Contact
