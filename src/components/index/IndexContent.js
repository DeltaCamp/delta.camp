import React from 'react'
import Img from "gatsby-image"
import { Link } from 'gatsby'
import library from 'src/library'
import AntdIcon from 'react-antd-icons/esm';

class IndexContent extends React.Component {
  render() {
    const columnsClassName = 'columns is-centered'
    const columnClassName = 'column'

    return (
      <div>
        <section id="services-and-values" className="section is-medium">
          <div className="container">
            <div className={columnsClassName}>
              <div className={columnClassName}>
                <div className='columns'>
                  <div className='column'>
                    <h6 className='subtitle-1'>
                      <AntdIcon type={'experiment'} className='prefix-icon' />
                      <span>
                        UX &amp; UI Design
                      </span>
                    </h6>
                    <ul className='prefix-icon-list'>
                      <li>Prototyping</li>
                      <li>User Interface</li>
                      <li>Interaction</li>
                      <li>Logo &amp; Wordmark</li>
                    </ul>
                  </div>
                  <div className='column'>
                    <h6 className='subtitle-2'>
                      <AntdIcon type={'thunderbolt'} className='prefix-icon' />
                      <span>
                        Web Development
                      </span>
                    </h6>
                    <ul className='prefix-icon-list'>
                      <li>React, Redux</li>
                      <li>Webpack, Gatsby JS</li>
                      <li>Server Development</li>
                      <li>Infrastructure</li>
                      <li>Continuous Delivery</li>
                    </ul>
                  </div>
                  <div className='column'>
                    <h6 className='subtitle-3'>
                      <AntdIcon type={'deployment-unit'} className='prefix-icon' />
                      <span>
                        Web3 Integration
                      </span>
                    </h6>
                    <ul className='prefix-icon-list'>
                      <li>Smart contract development</li>
                      <li>Protocol Integration</li>
                      <li>Distributed Storage</li>
                      <li>Dapp Browser Integration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section is-medium has-background-grey'>
          <div className='container'>
            <div className={columnsClassName}>
              <div className={columnClassName}>
                <h1>
                  Technology
                </h1>
                <p>
                  We create high quality and delightful web applications using decentralized technologies. We constantly evolve our development process so that we're using the best tools, techniques, and standards.
                </p>
                <h5>
                  Why Ethereum?
                </h5>
                <p>
                  Ethereum is currently the most mature blockchain platform, so we have focused our efforts on building amazing Ethereum apps.  Looking to the future, we will progress into multi-blockchain systems as tools such as Polkadot and Cosmos mature.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='section is-medium'>
          <div className='container'>
            <div className={columnsClassName}>
              <div className={columnClassName}>
                <div className='values'>
                  <h1>
                    Values
                  </h1>
                  <p>
                    We made a decision to focus on blockchain technology because we believe it's the future of the internet. We believe that open technology will continue to transform the world and that embracing this change will enable us to innovate even faster.
                  </p>
                  <h5>
                    Openness
                  </h5>
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
      </div>
    )
  }
}

export default IndexContent
