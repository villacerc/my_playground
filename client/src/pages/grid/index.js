import React, { Component } from 'react'
import styles from './Grid.module.scss'

class Grid extends Component {
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
        <h3>Tile Flexbox</h3>
        <div className="tile is-ancestor">
          <div className="tile is-vertical">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article>hello</article>
                <article>hello</article>
              </div>
              <div className="tile is-parent">
                <article>hello</article>
              </div>
            </div>
            <div className="tile">
              <article>
                Laborum reprehenderit do minim aliqua consequat excepteur
                voluptate dolore. Magna duis dolore do do voluptate in ad
                deserunt laboris et
              </article>
            </div>
          </div>
          <div className="tile">
            Dolor consectetur eiusmod non anim deserunt nostrud laborum in.
            Mollit ad deserunt proident nostrud ipsum adipisicing do minim
            veniam. Aute incididunt anim et ad id. Commodo eu quis excepteur
            proident id ad fugiat. Culpa labore culpa cupidatat deserunt
            exercitation occaecat enim magna minim adipisicing.
          </div>
        </div>
      </div>
    )
  }
}

export default Grid
