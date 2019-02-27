import React from 'react'
import { Link } from 'gatsby'

export default function () {
  return (
    <section className='section contact-call-to-action'>
      <div className='contact-call-to-action__spotlight' />

      <p className="contact-call-to-action__p">
        We'd love to work with you.
      </p>

      <div className='has-text-centered'>
        <Link className="button is-large is-dark" to="/contact" title="Reach out and let's start a discussion">
          Let's Build Together
        </Link>
      </div>
    </section>
  )
}
