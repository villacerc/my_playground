import React from 'react'
import styles from './Select.module.scss'

class Selector extends React.Component {
  state = {
    active: false,
    highlight: false,
    searchStr: '',
    value: null,
    initialized: false,
  }
  selectorRef = null

  componentDidMount() {
    if (this.props.value) {
      this.setState({ value: this.props.value }, this.initialize)
    } else {
      this.initialize()
    }
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  initialize = () => {
    this.setState({ initialized: true })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ value: this.props.value })
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleClickOutside = event => {
    if (
      (this.state.active || this.state.highlight) &&
      !this.selectorRef.contains(event.target)
    ) {
      return this.setState({ active: false, highlight: false })
    }
  }

  handleChange = (e, value) => {
    e.stopPropagation()
    this.setState({ highlight: true, active: false })

    this.setState({ value })

    if (this.props.onChange) {
      this.props.onChange(value)
    }
  }

  handleSearch = e => {
    this.setState({ searchStr: e.target.value }, () => {
      if (this.props.handleSearch) this.props.handleSearch(this.state.searchStr)
    })
  }

  filterOptions = () => {
    if (!this.props.options) return null
    return this.props.options.filter(option => {
      return option.includes(this.state.searchStr)
    })
  }

  clickInsideChildren = e => {
    e.stopPropagation()
    this.setState({ active: false })
  }

  renderDropdown = () => {
    const options = this.state.searchStr
      ? this.filterOptions()
      : this.props.options

    return (
      <div className={styles.dropdown}>
        {this.state.searchStr && (
          <div
            className={styles.clearSearch}
            onClick={() => this.setState({ searchStr: '' })}
          >
            <i class="far fa-times-circle"></i>
          </div>
        )}
        <input
          className={styles.search}
          placeholder="Search"
          value={this.state.searchStr}
          onChange={this.handleSearch}
        />
        <div
          className={styles.items}
          style={{ maxHeight: this.props.maxHeight || '300px' }}
        >
          {options ? (
            options.map((option, i) => {
              return (
                <div
                  key={i}
                  className={styles.item}
                  onClick={e => this.handleChange(e, option)}
                >
                  {option}
                </div>
              )
            })
          ) : (
            <div onClick={this.clickInsideChildren}>{this.props.children}</div>
          )}
        </div>
      </div>
    )
  }

  renderValue = () => {
    if (!this.state.initialized) return
    return (
      this.state.value || (
        <span className={styles.placeholder}>{this.props.placeholder}</span>
      )
    )
  }

  render() {
    const { highlight, active } = this.state
    const { hasError, error } = this.props

    return (
      <div>
        <div
          ref={node => (this.selectorRef = node)}
          onMouseDown={() => this.setState({ highlight: true })}
          onClick={() => this.setState({ highlight: false, active: true })}
          className={`${styles.selector} ${highlight ? styles.highlight : ''} ${
            hasError ? styles.error : ''
          }`}
        >
          <div className={styles.content}>{this.renderValue()}</div>
          <i className="fas fa-caret-down"></i>
          {active && this.renderDropdown()}
        </div>
        {hasError && error && <p className={styles.errorText}>{error}</p>}
      </div>
    )
  }
}

export default Selector
