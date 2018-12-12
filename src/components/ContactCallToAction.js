import React from 'react'
import { Link } from 'gatsby'

export default function () {
  return (
    <section className='section contact-call-to-action'>
      <div className='contact-call-to-action__spotlight' />
      <div className='contact'>
        <p>We'd love to work with you.</p>
        <div className='has-text-centered'>
          <Link className="button is-medium button-primary" to="/contact" title="Reach out and let's start a discussion">
            Let's Build Together
          </Link>
        </div>
      </div>
    </section>
  )
}
