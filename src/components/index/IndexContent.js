import React from 'react'
import Img from "gatsby-image"
import { Link } from 'gatsby'
import library from 'src/library'
import AntdIcon from 'react-antd-icons/esm';
import EthereumImage from './EthereumImage'

class IndexContent extends React.Component {
  render() {
    var ethereumSection

    const columnsClassName = 'columns is-centered'
    const columnClassName = 'column'

    // ethereumSection =
    //   <section className='section has-background-charcoal background-image-container'>
    //     <EthereumImage className='background has-half-opacity' />
    //     <div className='container'>
    //       <h2>Ethereum</h2>
    //       <p>
    //         Ethereum is currently the most mature general purpose blockchain platform, so we have focused our efforts on building amazing Ethereum apps.
    //       </p>
    //     </div>
    //   </section>

    return (
      <div>
        <section id="services-and-values" className="section is-medium">
          <div className="container">
            <div className={columnsClassName}>
              <div className={columnClassName}>
                <h3>Experience and skills you need.</h3>
                <p>
                  We produce top quality web applications.  Here is what we can do for you:
                </p>
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
                      <li>Front end Development</li>
                      <li>Server Development</li>
                      <li>Infrastructure</li>
                    </ul>
                  </div>
                  <div className='column'>
                    <h6 className='subtitle-3 color-orange'>
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
        {ethereumSection}
        <section className='section is-medium has-background-grey'>
          <div className='container'>
            <div className='columns'>
              <div className='column'>
                PROCESS GRAPHIC / IMAGE HERE
              </div>
              <div className='column is-two-thirds-tablet is-three-fifths-desktop is-half-fullhd'>
                <h3>A small team with big impact</h3>
                <p>
                  We work closely with you to refine your product.  Constant communication and continous
                  delivery ensures we're building the right product.
                </p>
                <div className='columns'>
                  <div className='column'>
                    <ul className='ul'>
                      <li>Weekly iterations</li>
                      <li>Continous delivery</li>
                      <li>Dedicated team</li>
                    </ul>
                  </div>
                  <div className='column'>
                    <ul className='ul'>
                      <li>Constant communications</li>
                      <li>Flexible process</li>
                    </ul>
                  </div>
                </div>
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
