import React from 'react'

class Footer extends React.Component {

  render() {
    const year = (new Date()).getFullYear()

    return (
      <div className="container">
        <footer className="footer">
          &copy; {year} Delta Camp &mdash; Vancouver, BC. Canada
        </footer>
      </div>
    )
  }
}

export default Footer
