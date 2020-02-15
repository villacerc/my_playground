import React, { Component } from 'react'
import styles from './Tiles.module.scss'

class Tiles extends Component {
  render() {
    return (
      <div className="content">
        <h3>General Grid</h3>
        <div className={styles.general_grid}>
          {new Array(10).fill().map(() => (
            <div className={styles.item} />
          ))}
        </div>
        <h3>Pattern Grid</h3>
        <div className={styles.pattern_grid}>
          {new Array(10).fill().map(() => (
            <div className={styles.item} />
          ))}
        </div>
        <h3>Tile Grid</h3>
        <div className={styles.tile_grid}>
          {new Array(9).fill().map((e, i) => (
            <div className={styles.tile_item}>{i + 1}</div>
          ))}
        </div>
      </div>
    )
  }
}

export default Tiles
