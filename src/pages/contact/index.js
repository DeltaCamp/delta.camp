import React from 'react'
import classnames from 'classnames'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Bio from 'src/components/Bio'

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
    this.setState({isLoading: true})
    fetch(`${url}?${queryString.stringify(this.state)}`)
      .then(() => {
        this.setState({
          emailSent: true
        })
      })
      .catch((error) => {
        console.error(error)
        this.setState({
          wasError: error
        })
      })
  }

  render () {
    var content, error

    if (this.state.wasError) {
      error =
        <section className="hero is-small is-danger has-text-centered first">
          <div className="hero-body">
            <h1 className="title">
              An Error Occurred
            </h1>
            <h2 className="subtitle">
              Try again later!
            </h2>
          </div>
        </section>
    }

    if (this.state.emailSent) {
      content =
        <section className="hero is-medium is-primary has-text-centered">
          <div className="hero-body">
            <h1 className="title">
              Thank you!
            </h1>
            <h2 className="subtitle">
              We'll be in contact shortly.
            </h2>
          </div>
        </section>

    } else {
      content =
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
              <button type="submit" className={classnames("button is-info", { "is-loading": this.state.isLoading })}>Submit</button>
            </div>
          </div>
        </form>
    }

    return (
      <React.Fragment>
        <section className="section first">
          <div className="container">
            <div className="columns">
              <div className="column is-two-thirds-tablet is-half-fullhd">
                <h1 className="page-title">
                  Contact Us
                </h1>
                <p>
                  Let's work together.  Start a conversation using the form below.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='section has-background-grey'>
          <div className="container">
            <div className="columns">
              <div className="column is-two-thirds-tablet is-half-fullhd">
                {error}
                {content}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Contact
