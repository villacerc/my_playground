import React, { Component } from 'react'
import styles from './Pagination.module.scss'
import classNames from 'classnames'

const myarr = []

class Pagination extends Component {
  state = {
    selectedPage: 1,
    pageCount: 20,
    pageRange: [],
    rowsPerPage: 1,
  }

  componentDidMount() {
    this.setPagination()
  }

  setRowsPerPage = ({ value }) => {
    let pageCount = null
    let rowsPerPage = null

    if (value === 'all') {
      pageCount = 1
      rowsPerPage = myarr.length
    } else {
      pageCount = Math.ceil(myarr.length / value)
      rowsPerPage = value
    }

    this.setState(
      {
        pageCount,
        rowsPerPage,
      },
      () => this.setPagination(1)
    )
  }

  getData = () => {
    return myarr
      .slice(
        (this.state.selectedPage - 1) * this.state.rowsPerPage,
        this.state.rowsPerPage * this.state.selectedPage
      )
      .map(el => el)
  }

  setPagination = (value = null) => {
    const DEFAULT_PAGE_RANGE = 7
    const PAGES_TO_PREVIEW = 3
    const MAX_PAGE_RANGE =
      this.state.pageCount < DEFAULT_PAGE_RANGE
        ? this.state.pageCount
        : DEFAULT_PAGE_RANGE

    let { pageCount, selectedPage, pageRange } = this.state

    let startingPage = 1
    pageRange = []

    if (value) {
      if (isNaN(value)) {
        if (
          (selectedPage === 1 && value === 'prev') ||
          (selectedPage === pageCount && value === 'next')
        ) {
          return
        }

        selectedPage =
          value === 'next' ? (selectedPage += 1) : (selectedPage -= 1)
      } else {
        selectedPage = value
      }
    }

    if (selectedPage + PAGES_TO_PREVIEW > pageCount) {
      //don't shift anymore to right
      startingPage = pageCount - (MAX_PAGE_RANGE - 1)
    } else if (selectedPage > 5) {
      //shift page range
      startingPage = selectedPage - PAGES_TO_PREVIEW

      if (startingPage + MAX_PAGE_RANGE >= pageCount) {
        //shift to last page range
        startingPage = pageCount - (MAX_PAGE_RANGE - 1)
      }
    }

    for (let i = 0; i < MAX_PAGE_RANGE; i++) {
      pageRange.push(startingPage)
      startingPage += 1
    }

    this.setState({ pageRange, selectedPage })
  }

  render() {
    return (
      <div className={styles.pagination}>
        <button onClick={() => this.setPagination('prev')}>
          {/* <PointyArrow /> */}
        </button>
        {this.state.pageRange.map((num, i) => {
          const { selectedPage } = this.state

          return (
            <div
              key={i}
              onClick={() => this.setPagination(num)}
              className={classNames(
                styles.pageNum,
                selectedPage === num ? styles.activePageNum : ''
              )}
            >
              {num}
            </div>
          )
        })}
        <button onClick={() => this.setPagination('next')}>
          {/* <PointyArrow /> */}
        </button>
      </div>
    )
  }
}

export default Pagination
