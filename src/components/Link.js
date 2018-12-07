import React from 'react'
import PropTypes from 'prop-types'
import {
  Link as GatsbyLink,
} from 'gatsby'

import { getPurePathname } from 'src/utils/getPurePathname'

export const Link = function(props) {
  const {
    className,
    activeClassName,
    children,
    to
  } = props

  return (
    <GatsbyLink
      {...props}
      getProps={
        ({ isCurrent, isPartiallyCurrent, location }) => {
          // console.log(isCurrent, isPartiallyCurrent, location)
          return {
            className: [
              className,
              // It's likely this will all fall apart when we have multiple paths in the pathname
              '/' + getPurePathname(location.pathname) === to ? activeClassName : '',
              isCurrent ? activeClassName : ''
              // (isPartiallyCurrent) ? activeClassName : '',
            ].join(' ').trim(),
          }
        }
      }
    >
      {children}
    </GatsbyLink>
  )
}

Link.propTypes = {
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Link.defaultProps = {
  activeClassName: 'active',
  className: '',
}
