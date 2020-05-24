import React, { Component } from 'react'
import enhanceWithClickOutside from 'react-click-outside'

class ClickAwayListener extends Component {
  handleClickOutside() {
    this.props.handler()
  }

  render() {
    return this.props.children
  }
}

export default enhanceWithClickOutside(ClickAwayListener)
