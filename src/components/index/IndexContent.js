import React from 'react'
import Img from "gatsby-image"

class IndexContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className='services'>
            <h1>Services</h1>
              <p>
                We create high quality and delightful web applications using decentralized technologies. We constantly evolve our development process so that we're using the best tools, techniques, and standards. Ethereum is currently the most mature blockchain platform, so we have focused our efforts on building amazing Ethereum apps.  Looking to the future, we will progress into multi-blockchain systems as tools such as Polkadot and Cosmos mature.
              </p>
              <p>
                <ul>
                  <li>Product Design</li>
                  <li>Project Management</li>
                  <li>Web application development</li>
                  <li>Smart contract development</li>
                  <li>Blockchain integration</li>
                  <li>Infrastructure deployment</li>
                </ul>
              </p>
          </div>

          <div className='values'>
            <h1>Values</h1>
            <p>
              We made a decision to focus on blockchain technology because we believe it's the future of the internet. We believe that open technology will continue to transform the world and that embracing this change will enable us to innovate even faster.
            </p>

            <p>
              Openness is a core value that we hold strongly.  We contribute to open source whenever possible; publicizing code or techniques to the community so that others may benefit from our work.  We also leverage open source code and value partnerships over reinvention and walled gardens.
            </p>
          </div>
        </div>

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
