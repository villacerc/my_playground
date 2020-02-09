import React, { Component } from 'react'
import styles from './Pagination.module.scss'
import classNames from 'classnames'

const myarr = []

class Pagination extends Component {
  state = {
    selectedPage: 1,
    pageRange: [],
    rowsPerPage: 5,
    initialized: false,
  }

  componentDidMount() {
    this.initialize()
  }

  initialize = () => {
    const { itemsPerPage } = this.props

    this.setRowsPerPage(itemsPerPage)
  }

  setRowsPerPage = value => {
    const { list } = this.props
    let rowsPerPage = null

    if (value === 'all' || !value) {
      rowsPerPage = list.length
    } else {
      rowsPerPage = value
    }

    this.setState(
      {
        rowsPerPage,
        initialized: true,
      },
      () => this.setPagination()
    )
  }

  handleChange = () => {
    const myarr = this.props.list
      .slice(
        (this.state.selectedPage - 1) * this.state.rowsPerPage,
        this.state.rowsPerPage * this.state.selectedPage
      )
      .map(el => el)

    this.props.onChange(myarr)
  }

  getPageOptions = () => {
    const options = []

    if (myarr.length >= 5) {
      let count = 1
      while (myarr.length / (5 * count) > 1 && options.length < 3) {
        const value = 5 * count
        options.push({ value, label: value })
        count += 1
      }
    }

    options.push({ value: 'all', label: 'All' })

    return options
  }

  setPagination = (value = null) => {
    const DEFAULT_PAGE_RANGE = 7
    const PAGES_TO_PREVIEW = 3 //amount of page cells to preview after the selected page

    let maxPageRange = 1 //amount of cells to show at a time in the pagination
    let totalPageCount = 1

    const { rowsPerPage } = this.state

    //set totalPageCount and maxPageRange
    if (rowsPerPage !== 'all') {
      totalPageCount = Math.ceil(this.props.list.length / rowsPerPage)

      maxPageRange =
        totalPageCount < DEFAULT_PAGE_RANGE
          ? totalPageCount
          : DEFAULT_PAGE_RANGE
    }

    let { selectedPage } = this.state

    //set newly selected page
    if (value) {
      if (isNaN(value)) {
        if (
          (selectedPage === 1 && value === 'prev') ||
          (selectedPage === totalPageCount && value === 'next')
        ) {
          return
        }

        selectedPage =
          value === 'next' ? (selectedPage += 1) : (selectedPage -= 1)
      } else {
        selectedPage = value
      }
    }

    let startingPage = 1 //starting cell from the pagination

    if (selectedPage + PAGES_TO_PREVIEW > totalPageCount) {
      //don't shift anymore to right
      startingPage = totalPageCount - (maxPageRange - 1)
    } else if (selectedPage > 5) {
      //shift page range
      startingPage = selectedPage - PAGES_TO_PREVIEW

      if (startingPage + maxPageRange >= totalPageCount) {
        //shift to last page range
        startingPage = totalPageCount - (maxPageRange - 1)
      }
    }

    const pageRange = []

    for (let i = 0; i < maxPageRange; i++) {
      pageRange.push(startingPage)
      startingPage += 1
    }

    this.setState({ pageRange, selectedPage }, this.handleChange)
  }

  render() {
    if (!this.state.initialized) return null
    if (this.state.pageCount === 1) return null

    return (
      <div className={styles.pagination}>
        <button onClick={() => this.setPagination('prev')}>
          <i class="fas fa-arrow-left"></i>
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
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    )
  }
}

export default Pagination
