import React from 'react'

class Footer extends React.Component {

  render() {
    const year = (new Date()).getFullYear()

    return (
      <footer className="footer">
        <div className="container">
          &copy; {year} Delta Camp &mdash; Vancouver, BC. Canada
        </div>
      </footer>
    )
  }
}

export default Footer
