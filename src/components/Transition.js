import React from 'react'
import ReactTimeout from 'react-timeout'
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

export const Transition = ReactTimeout(
  class extends React.PureComponent {

    state = {
      mounted: false
    }

    componentDidMount() {
      this.props.setTimeout(() => {
        this.setState({ mounted: true })
      }, 200)
    }

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
                  id={location.pathname}
                  className={classnames(
                    'page-transition-group',
                    transitionClasses[status],
                    {
                      'page-transition-group--active': this.state.mounted
                    }
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
)
