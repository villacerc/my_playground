import React, { Component } from 'react'
import styles from './modal.module.scss'
import OnClickAway from '../../components/clickAwayListener'

class MyModal extends Component {
  componentDidMount() {
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${this.getScrollbarWidth()}px`
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto'
    document.body.style.paddingRight = `0px`
  }

  getScrollbarWidth = () => {
    return window.innerWidth - document.documentElement.clientWidth
  }

  render() {
    return (
      <div className={styles.container}>
        <OnClickAway handler={this.props.onClose}>
          <div className={styles.modal}>
            <p>hello there</p>
          </div>
        </OnClickAway>
      </div>
    )
  }
}

class index extends Component {
  state = {
    showModal: false,
  }
  render() {
    return (
      <div style={{ height: '1000px' }}>
        <button onClick={() => this.setState({ showModal: true })}>
          Click me
        </button>
        {this.state.showModal && (
          <MyModal onClose={() => this.setState({ showModal: false })} />
        )}
      </div>
    )
  }
}

export default index
