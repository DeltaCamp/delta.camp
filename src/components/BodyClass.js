import React from 'react'

export const BodyClass = class _BodyClass extends React.Component {
  state = {
    currentCssClass: '',
    transitioningToCssClass: ''
  }

  static defaultProps = {
    cssClass: ''
  }

  // componentDidMount() {
  //   document.body.classList.add(this.props.cssClass)
  // }

  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps)
  //   // console.log(nextProps.cssClass)
  //   // document.body.classList.add(this.props.cssClass)
  // }

  // static getDerivedStateFromProps(nextProps, prevState){
    // console.log(nextProps, prevState)
    //  if(nextProps.someValue!==prevState.someValue){
    //    return { someState: nextProps.someValue};
    // }
    // else return null;
  //   return null
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevProps, prevState)
  //   if (this.state.currentCssClass !== prevProps.cssClass){
  //     this.setState({ currentCssClass: prevProps.cssClass })
  //   }
  //
  //   // if (this.state.transitioningToCssClass !== prevProps.cssClass){
  //   //   this.setState({ transitioningToCssClass: prevProps.cssClass })
  //   // }
  //
  //   if (prevState.currentCssClass === '') {
  //     this.setState({ transitioningToCssClass: prevProps.cssClass })
  //   }
  // }

  // componentWillUnmount() {
  //   document.body.classList.remove(this.props.cssClass)
  // }

  // componentWillReceiveProps(nextProps) {
  //   console.log('cWRP', this.props, nextProps)
  // }

  render() {
    return null
  }
}
