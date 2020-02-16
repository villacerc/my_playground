import React, { Component } from 'react'
import styles from './Nav.module.scss'
import { Router, Link } from '@reach/router'
import classNames from 'classnames'

const links = [
  { href: '/', name: 'Form Fields' },
  { href: '/pagination', name: 'Pagination' },
  { href: '/grid', name: 'Grid' },
]

class Nav extends Component {
  state = {
    inMobile: null,
    sidenavClass: null,
  }

  componentDidMount() {
    this.setDeviceState()

    window.addEventListener('resize', this.onResize)
  }

  onResize = () => {
    if (window.innerWidth > 1024 && this.state.inMobile) {
      document.body.style.overflow = 'auto'
      this.setState({ inMobile: false, sidenavClass: null })
    }
    if (window.innerWidth <= 1024 && !this.state.inMobile) {
      this.setState({ inMobile: true })
    }
  }

  setDeviceState = () => {
    if (window.innerWidth > 1024) {
      this.setState({ inMobile: false })
    }
    if (window.innerWidth <= 1024) {
      this.setState({ inMobile: true })
    }
  }

  renderTopnav = () => {
    return (
      <div
        className={styles.topnav}
        style={
          this.state.sidenavClass === styles.show
            ? { left: '200px' }
            : { left: 0 }
        }
      >
        <div
          className={classNames(
            styles.burger,
            this.state.sidenavClass === styles.show ? styles.burger_active : ''
          )}
          onClick={this.toggleSidenav}
        >
          <div></div>
        </div>
      </div>
    )
  }

  toggleSidenav = () => {
    if (!this.state.inMobile) return

    if (this.state.sidenavClass === styles.show) {
      this.toggleClose()
    } else {
      this.toggleOpen()
    }
  }

  toggleOpen = () => {
    document.body.style.overflow = 'hidden'
    this.setState({ sidenavClass: styles.show })
  }

  toggleClose = () => {
    document.body.style.overflow = 'auto'
    this.setState({ sidenavClass: styles.hide })
  }

  render() {
    const { pathname } = this.props.location

    return (
      <header className={classNames(styles.container, this.state.sidenavClass)}>
        <div className={classNames(styles.sidenav)}>
          <div className={classNames(styles.sidenav_content)}>
            {links.map(({ href, name }) => (
              <Link
                className={classNames(
                  styles.link,
                  pathname === href ? styles.link_active : ''
                )}
                to={href}
                onClick={() => {
                  if (!this.state.inMobile) return
                  this.toggleClose()
                }}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div onClick={this.toggleClose} className={styles.mask} />
        {this.renderTopnav()}
      </header>
    )
  }
}

export default Nav
