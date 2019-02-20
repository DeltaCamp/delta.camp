import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql, Link } from 'gatsby'
import antdIconLibrary from 'src/antdIconLibrary'
import AntdIcon from 'react-antd-icons/esm'
import EthereumImage from './EthereumImage'

class IndexContent extends React.Component {

  renderIndexContent = (data) => {
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
                <h2>Experience and skills you need.</h2>
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
                      <li>Branding</li>
                    </ul>
                  </div>
                  <div className='column'>
                    <h6 className='subtitle-2'>
                      <AntdIcon type={'thunderbolt'} className='prefix-icon subtitle-2--icon' />
                      <span>
                        Web Development
                      </span>
                    </h6>
                    <ul className='prefix-icon-list'>
                      <li>Front-end Development</li>
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
                      <li>Smart Contract Development</li>
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
              <div className='column is-two-thirds-tablet'>
                <div className='columns'>
                  <div className='column is-11-desktop'>
                    <h2>A small team with a big impact</h2>
                    <p className='no-margin-bottom'>
                      We will work closely with you to refine your product.  Our iterative process ensures
                      we build the <strong>right</strong> product.
                    </p>

                    <hr />

                    <div className="testimonial">
                      <blockquote>
                        "
                        <span className="is-hidden-touch">
                        It's no secret that building decentralized applications is a demanding undertaking. We spent months searching for the best developers capable of taking on the challenge.&nbsp;
                        </span>
                        The team at Delta Camp blew us away. Delta Camp is the triple threat combining deep expertise in web 3.0 development, UI/UX design and web development. There's really nothing they can't build! Highly recommend."

                        <span className="testimonial--author">
                          - <a
                              href="https://twitter.com/mpraver1"
                              target='_blank'
                              rel='noopener noreferred'
                            >Dr. Moshe Praver</a>, COO MedX Protocol
                        </span>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <ul className="icon-list">
                  <li>
                    <span className="list-icon__circle is-background-orange">
                      <AntdIcon type='interation' />
                    </span>
                    Weekly iterations
                  </li>
                  <li>
                    <span className="list-icon__circle is-background-teal">
                      <AntdIcon type='upload' />
                    </span>
                    Continous delivery
                  </li>
                  <li>
                    <span className="list-icon__circle is-background-blue">
                      <AntdIcon type='team' />
                    </span>
                    Dedicated team
                  </li>
                  <li>
                    <span className="list-icon__circle is-background-pink">
                      <AntdIcon type='smile' />
                    </span>
                    Constant communication
                  </li>
                  <li>
                    <span className="list-icon__circle">
                      <AntdIcon type='rocket' />
                    </span>
                    Flexible process
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className='section is-medium'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-full-tablet'>
                <h2>
                  The Delta Camp Team
                </h2>
                {/*<p>
                  Dedicated to Crafting the Future Web
                </p>*/}
                <p>
                  The trick to successful digital projects isn't just tech, <br className="is-hidden-touch" />it’s also working with the right people.
                </p>

                <div className='columns'>
                  <div className='column is-half-tablet'>

                    <div className="team-member--container">
                      <figure className="image">
                        <Img
                          fixed={data.brendanTeamPic.childImageSharp.fixed}
                          alt={`Photo of Brendan Asselstine`}
                          className="shadow is-team-img"
                        />
                        <Img
                          fixed={data.brendanTeamPicHover.childImageSharp.fixed}
                          alt={`Alt Photo of Brendan Asselstine`}
                          className="shadow is-team-img is-team-img__hovered blue-background"
                        />
                      </figure>
                      

                      <h6 className="team-member--name">
                        <br />
                        Brendan Asselstine
                        <br />
                        &mdash;
                      </h6>
                      <p className="team-member--bio">
                        Brendan has architected web and mobile software solutions
                        for more than ten years, and is currently exploring how distributed
                        protocol design impacts application architecture. Currently he
                        teaches courses on blockchain programming and enjoys knowledge sharing and open
                        source software. He's always happy to foster shared
                        understanding using open communication.
                      </p>

                      <p className="team-member--contact">
                        <a href={`mailto:brendan@delta.camp`}>Email Brendan</a>

                        <br />
                        <a href={`https://twitter.com/b_asselstine`}><AntdIcon className="inline-icon" type={'twitter'} /></a>
                        <a href={`https://linkedin.com/in/brendanasselstine`}><AntdIcon className="inline-icon" type={'linkedin'} /></a>
                      </p>
                    </div>

                  </div>

                  <div className='column is-half-tablet'>

                    <div className="team-member--container">
                      <figure className="image">
                        <Img
                          fixed={data.chuckTeamPic.childImageSharp.fixed}
                          alt={`Photo of Chuck Bergeron`}
                          className="shadow is-team-img"
                        />
                        <Img
                          fixed={data.chuckTeamPicHover.childImageSharp.fixed}
                          alt={`Alt Photo of Chuck Bergeron`}
                          className="shadow is-team-img is-team-img__hovered"
                        />
                      </figure>

                      <h6 className="team-member--name">
                        <br />
                        Chuck Bergeron
                        <br />
                        &mdash;
                      </h6>
                      <p className="team-member--bio">
                        Chuck Bergeron is a designer and developer from Calgary currently
                        living and working in Vancouver, BC. He has worked on telemedecine 
                        videoconferencing apps, virtual reality experiences, an email marketing
                        platform, as well as countless other projects over his fifteen year career.
                        Chuck is deeply committed to blockchain technology as he believes it will
                        power the next generation of the web.
                      </p>

                      <p className="team-member--contact">
                        <a href={`mailto:chuck@delta.camp`}>Email Chuck</a>
                        <br />
                        <a href={`https://twitter.com/chuckbergeron`}><AntdIcon className="inline-icon" type={'twitter'} /></a>
                        <a href={`https://linkedin.com/in/chuckbergeron`}><AntdIcon className="inline-icon" type={'linkedin'} /></a>
                      </p>
                    </div>


                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className='section is-medium has-background-grey'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-two-thirds-tablet'>
                <div className='values'>
                  <h2>
                    Forward Thinking
                  </h2>
                  <p>
                    We made a decision to focus on blockchain technology because to us it's the future of the internet. We believe that open technology will continue to transform the world and that embracing this change will enable us to innovate even faster.
                  </p>
                  <h5>
                    Openness
                  </h5>
                  <p>
                    Openness is a core value that we hold strongly.  We contribute to open source whenever possible; publicizing code or techniques to the community so that others may benefit from our work.  We leverage open source code and value partnerships over reinvention and walled gardens.
                  </p>
                </div>

                <p>
                  <Link className="button is-medium button-primary" to="/contact" title="Reach out and let's start a discussion">
                    Let's Build Together
                  </Link>
                  &nbsp;
                  <Link className="button is-medium" to="/work" title="Our Work">See Our Work</Link>
                </p>
              </div>
            </div>

          </div>
        </section>
      </div>
    )
  }

  render() {
    return <StaticQuery
      query={graphql`
        query {
          chuckTeamPic: file(relativePath: { eq: "DSC_0145.jpg" }) {
            childImageSharp {
              fixed(width: 600, height: 600) {
                ...GatsbyImageSharpFixed_tracedSVG
              }
            }
          }
          brendanTeamPic: file(relativePath: { eq: "DSC_0187.jpg" }) {
            childImageSharp {
              fixed(width: 600, height: 600) {
                ...GatsbyImageSharpFixed_tracedSVG
              }
            }
          }
          chuckTeamPicHover: file(relativePath: { eq: "DSC_0170.jpg" }) {
            childImageSharp {
              fixed(width: 600, height: 600) {
                ...GatsbyImageSharpFixed_tracedSVG
              }
            }
          }
          brendanTeamPicHover: file(relativePath: { eq: "DSC_0195.jpg" }) {
            childImageSharp {
              fixed(width: 600, height: 600) {
                ...GatsbyImageSharpFixed_tracedSVG
              }
            }
          }
        }
      `}
      render={(data) => this.renderIndexContent(data)}
    />
  }
}

export default IndexContent
