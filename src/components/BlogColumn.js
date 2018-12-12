import React from 'react'
import classnames from 'classnames'

export const BlogColumn = function(props) {
  return <div className={classnames(
    'column',
    'is-full-tablet',
    'is-three-fifths-desktop',
    'is-offset-one-fifth-desktop',
    'is-three-fifths-widescreen',
    'is-offset-one-fifth-widescreen',
    {
      'has-text-centered': props.hasTextCentered
    }
  )}>
    {props.children}
  </div>
}
