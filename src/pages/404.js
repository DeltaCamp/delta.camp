import React, { Fragment } from 'react'
import { Link } from 'gatsby'

class NotFoundPage extends React.Component {

  goBack = (event) => {
    event.preventDefault()
    if (window) {
      window.history.back()
    }
  }

  render() {
    return (
      <Fragment>
        <section className='section is-medium first'>
          <div className="container">
            <h1 className="page-title is-marginless">
              Not Found
            </h1>
          </div>
        </section>

        <section id="work-section-token-reg" className="section">
          <div className="container">

            <div className="columns">
              <div className="column">
                <p>
                  You found a page that doesn&#39;t exist...!
                </p>

                <button onClick={this.goBack} className="button is-primary">
                  ← Go Back
                </button>

                <br />


                <Link to="/" className="button">
                  Start from the Start
                </Link>
              </div>
            </div>

          </div>
        </section>
      </Fragment>
>>>>>>> 404 is go
    )
  }
}

export default NotFoundPage
