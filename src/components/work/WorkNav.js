import React from 'react'
import { Link } from 'gatsby'

export default function ({ nextProjectPath }) {
  return (
    <div>
      <Link to={nextProjectPath} className='button is-primary'>Next Project</Link>
      <Link to='/work' className='button'>Work</Link>
    </div>
  )
}
