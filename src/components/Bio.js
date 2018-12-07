import React from 'react'

import profilePic from 'src/components/profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex'
        }}
      >
        <img
          src={profilePic}
          alt={`Chuck Bergeron`}
          style={{
            marginBottom: 0
          }}
        />
        <p>
          Written by <strong>Chuck Bergeron</strong> who lives and works in San
          Francisco building useful things.{' '}
          <a href="https://twitter.com/kylemathews">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
