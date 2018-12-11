import React from 'react'
import { Link } from 'gatsby'

export const TagList = function({ tags }) {
  if (tags === null) { return null }

  const tagLinks = tags.map(tag =>
    <small className="tag-list" key={`tag-fragment-${tag}`}>
      <Link key={`tag-${tag}`} to={`/blog/tags/${tag}`}>{tag}</Link>
      &nbsp;
      &nbsp;
    </small>
  )
  return tagLinks
}
