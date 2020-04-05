import React, { Component } from 'react'
import styles from './Parallax.module.scss'
import classNames from 'classnames'

class Parallax extends Component {
  componentDidMount() {
    this.parallax()
    window.addEventListener('scroll', this.parallax)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.parallax)
  }

  parallax = () => {
    this.parallaxText()
    this.parallaxBg()
  }

  parallaxText = () => {
    const el = document.getElementById('parallax_text')
    // move title at 20% of scroll rate
    const offset = window.scrollY
    el.style.top = offset * 0.2 + 'px'
    el.style.opacity = 1 - offset / 800
  }

  parallaxBg = () => {
    const scrolltotop = window.scrollY
    var el = document.getElementById('parallax_bg')
    var yvalue = scrolltotop * 0.2
    el.style.transform = `translate3d(0px, ${yvalue}px, 0px)`
  }

  render() {
    return (
      <div className={classNames('content', styles.parallax_content)}>
        <div className={styles.parallax_text_container}>
          <h2 className={styles.parallax_text} id="parallax_text">
            This is parallax text
          </h2>
        </div>
        <h2>Background</h2>
        <div className={styles.parallax_bg_container}>
          <div id="parallax_bg" className={styles.parallax_bg}></div>
        </div>
        <h2>Resize</h2>
        <div className={styles.parallax_bg_container_resize}></div>
      </div>
    )
  }
}

export default Parallax
