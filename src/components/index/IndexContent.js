import React from 'react'
import Img from "gatsby-image"
import { Link } from 'gatsby'

class IndexContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section id="services-and-values" className="section is-medium">
          <div className="container">
            <div className="columns is-mobile">
              <div className="column is-three-quarters-desktop is-two-thirds-widescreen is-two-thirds-fullhd">
                <div className='services'>
                  <h1>
                    Services
                  </h1>
                  <p>
                    We create high quality and delightful web applications using decentralized technologies. We constantly evolve our development process so that we're using the best tools, techniques, and standards. Ethereum is currently the most mature blockchain platform, so we have focused our efforts on building amazing Ethereum apps.  Looking to the future, we will progress into multi-blockchain systems as tools such as Polkadot and Cosmos mature.
                  </p>
                  <div class="content">
                    <ul>
                      <li>Product Design</li>
                      <li>Project Management</li>
                      <li>Web application development</li>
                      <li>Smart contract development</li>
                      <li>Blockchain integration</li>
                      <li>Infrastructure deployment</li>
                    </ul>
                  </div>
                </div>

                <div className='values'>
                  <h1>
                    Values
                  </h1>
                  <p>
                    We made a decision to focus on blockchain technology because we believe it's the future of the internet. We believe that open technology will continue to transform the world and that embracing this change will enable us to innovate even faster.
                  </p>

                  <p>
                    Openness is a core value that we hold strongly.  We contribute to open source whenever possible; publicizing code or techniques to the community so that others may benefit from our work.  We also leverage open source code and value partnerships over reinvention and walled gardens.
                  </p>
                </div>

                <p>
                  <Link className="button button-primary" to="/contact" title="Reach out and let's start a discussion">
                    Let's Build Together
                  </Link>
                  &nbsp;
                  <Link className="button" to="/work" title="Our Work">See Our Work</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default IndexContent
