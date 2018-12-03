import React from 'react'
import Img from "gatsby-image"

class IndexContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="projects" className="portfolio-container">
          <div className="container">
            <h6 className="portfolio-category--title">
              Apps:
            </h6>
            <div className="row">
              <div className="four columns">
                <p className="portfolio-piece--description">
                  <strong className="portfolio-piece--title"><a href="/work/goodbits">Goodbits</a></strong>
                  <br />
                  <em className="portfolio--method">Programming, Design</em>
                  <br />
                  <br />
                  Full stack dev &amp; design on Goodbits, an app to easily send email marketing campaigns.
                  <br />
                  <a href="/work/goodbits">Read More</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>

    )
  }
}

export default IndexContent
