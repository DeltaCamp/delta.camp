import React from 'react'
import classnames from 'classnames'

export const BlogColumn = function(props) {
  return <div className={classnames(
    'column',
    'is-full-tablet',
    'is-three-fifths-desktop',
    'is-offset-one-fifth-desktop',
    'is-half-widescreen',
    'is-offset-one-quarter-widescreen',
    {
      'has-text-centered': props.hasTextCentered
    }
  )}>
    {props.children}
  </div>
}
