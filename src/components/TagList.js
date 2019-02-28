import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'

export const TagList = function({ tags }) {
  if (tags === null) { return null }

  const tagLinks = tags.map(tag => {
      const tagSlug = kebabCase(tag.replace(' ', '-'))

      return <p className="tag-list" key={`tag-fragment-${tagSlug}`}>
        <Link key={`tag-${tagSlug}`} to={`/blog/tags/${tagSlug}`}>{tag}</Link>
        &nbsp;
        &nbsp;
      </p>
  })
  
  return tagLinks
}
