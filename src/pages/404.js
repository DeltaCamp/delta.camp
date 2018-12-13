import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

class NotFoundPage extends React.Component {

  goBack = (event) => {
    event.preventDefault()
    if (window) {
      window.history.back()
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>404, File Not Found</title>
        </Helmet>

        <section className='section first'>
          <div className="container">
            <h1 className="page-title is-marginless">
              That's a 404, Jim ...
            </h1>
          </div>
        </section>

        <section className="section">
          <div className="container">

            <div className="columns">
              <div className="column">
                <p>
                  You found a page that doesn't exist!
                </p>

                <button onClick={this.goBack} className="button is-large is-primary">
                  ← Go Back
                </button>

                <br />

                <Link to="/" className="button is-large">
                  Start from the Start
                </Link>
                <br />
                <br />
                <br />
              </div>
            </div>

          </div>
        </section>
      </div>
    )
  }
}

export default NotFoundPage
