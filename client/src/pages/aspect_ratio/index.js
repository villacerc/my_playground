import React, { Component } from 'react'
import styles from './AspectRatio.module.scss'
import classNames from 'classnames'

class AspectRatio extends Component {
  render() {
    return (
      <div className="content">
        <h3>General</h3>
        <div className={classNames(styles.sixteen_by_nine, styles.box)}>
          <div className={styles.text}>16:9 Aspect ratio</div>
        </div>
        <div className={classNames(styles.four_by_three, styles.box)}>
          <div className={styles.text}>4:3 Aspect ratio</div>
        </div>
        <h3>Grid</h3>
        <div className={classNames(styles.grid, styles.grid_general)}>
          <div>2/1</div>
          <div>3/1</div>
          <div>1/1</div>
        </div>
        <h3>Span Grid</h3>
        <div className={classNames(styles.grid, styles.grid_span)}>
          <div>{/* <img src="http://placekitten.com/450/225"></img> */}</div>
          <div>{/* <img src="http://placekitten.com/300/300"></img> */}</div>
          <div>{/* <img src="http://placekitten.com/900/300"></img> */}</div>
        </div>
      </div>
    )
  }
}

export default AspectRatio
