import React, { Component } from 'react'
import styles from './slidingContainer.module.scss'
import classNames from 'classnames'

class slidingContainer extends Component {
  state = {
    showSlider: false,
    animateStyle: null,
  }

  toggleSlider = async () => {
    const showSlider = !this.state.showSlider

    if (showSlider) {
      await this.setState({ showSlider })
      this.setState({
        animateStyle: styles.animate_in,
      })
    } else {
      this.setState({
        animateStyle: styles.animate_out,
      })
      setTimeout(() => {
        this.setState({
          showSlider: false,
        })
      }, 400)
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleSlider}>Slide Me</button>
        {this.state.showSlider && (
          <div className={styles.slider_container}>
            <div className={styles.slider}>
              <div
                className={classNames(
                  styles.slider_content,
                  this.state.animateStyle
                )}
              >
                lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default slidingContainer
