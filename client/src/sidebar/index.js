import React, { Component } from 'react'
import styles from './Sidebar.module.scss'
import { Router, Link } from '@reach/router'
import classNames from 'classnames'

const links = [
  { href: '/', name: 'Form Fields' },
  { href: '/pagination', name: 'Pagination' },
]

class Sidebar extends Component {
  render() {
    const { pathname } = this.props.location

    return (
      <div className={styles.container}>
        {links.map(({ href, name }) => (
          <Link
            className={classNames(
              styles.item,
              pathname === href ? styles.active : ''
            )}
            to={href}
          >
            {name}
          </Link>
        ))}
      </div>
    )
  }
}

export default Sidebar
