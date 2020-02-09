import React, { Component } from 'react'
import styles from './Sidebar.module.scss'

class Sidebar extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.item}>Form Fields</div>
      </div>
    )
  }
}

export default Sidebar
