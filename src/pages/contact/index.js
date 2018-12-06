import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Bio from 'src/components/Bio'
import Layout from 'src/components/Layout'
import { rhythm } from 'src/utils/typography'

import queryString from 'query-string'

class Contact extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      projectName: "",
      companyName: "",
      email: "",
      budget: "",
      comments: ""
    }
  }

  submit = (e) => {
    e.preventDefault()
    const url = "https://script.google.com/macros/s/AKfycby1cKI5HlVcwx8uR0XB4w68SULY2v5dVSbI2lj4BQKBA1HudJ8/exec"
    console.log('Sending: ', this.state)
    fetch(`${url}?${queryString.stringify(this.state)}`)
      .then(() => {
        console.log('sent!')
      })
      .catch((error) => {
        console.error(error)
      })
  //   var jqxhr = $.ajax({
  //     url: url,
  //     method: "GET",
  //     dataType: "json",
  //     data: $form.serializeObject()
  //   }).success(
  //     // do something
  //   );
  // })
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
                <form onSubmit={this.submit}>

                  <div className="field">
                    <label className="label" htmlFor="contact-project-name-input">
                      What is your company or project name?
                    </label>
                    <div className="control">
                      <input id="contact-project-name-input" className="input" type="text" name="companyProjectName"
                        value={this.state.projectName} onChange={(e) => this.setState({projectName: e.target.value})}
                        />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label" htmlFor="contact-name-input">
                      What is your name?
                    </label>
                    <div className="control">
                      <input id="contact-name-input" className="input" type="text" name="name"
                        value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}
                        />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label" htmlFor="contact-email-input">
                      What is your email address?
                    </label>
                    <div className="control">
                      <input id="contact-email-input" className="input" type="text" name="email"
                        value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}
                        />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label" htmlFor="contact-budget-input">
                      What is your budget?
                    </label>
                    <div className="control">
                      <input id="contact-budget-input" className="input" type="text" name="budget"
                        value={this.state.budget} onChange={(e) => this.setState({budget: e.target.value})}
                        />
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
                        value={this.state.comments} onChange={(e) => this.setState({comments: e.target.value})}
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
