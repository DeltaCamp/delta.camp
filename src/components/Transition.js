import React from 'react'
import classnames from 'classnames'
import {
  TransitionGroup,
  Transition as ReactTransition
} from 'react-transition-group'

// animation duration
const timeout = 1200

const transitionClasses = {
  entering: 'page-transition-entering',
  entered: 'page-transition-entered',
  exiting: 'page-transition-exiting'
}

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props

    return (
      <TransitionGroup>
        <ReactTransition
          key={location.pathname}
          timeout={{
            enter: timeout,
            exit: timeout,
          }}
        >
          {
            status => (
              <div
                className={classnames(
                  transitionClasses[status]
                )}
              >
                {children}
              </div>
            )
          }
        </ReactTransition>
      </TransitionGroup>
    )
  }
}

export default Transition
