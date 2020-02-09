import React from 'react'
import styles from './Select.module.scss'

class MultiSelector extends React.Component {
  state = {
    active: false,
    highlight: false,
    searchStr: '',
    value: [],
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

  handleChange = (e, item) => {
    e.stopPropagation()
    // this.setState({ highlight: true, active: false });

    const { value } = this.state

    const newValue = value.includes(item)
      ? value.filter(i => i !== item)
      : value.concat(item)

    this.setState({ value: newValue })

    if (this.props.onChange) {
      this.props.onChange(newValue)
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

    const { value } = this.state

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
                  <div className={styles.checkbox_container}>
                    {option}
                    <input
                      readOnly
                      type="checkbox"
                      checked={value.includes(option)}
                    />
                    <span className={styles.checkmark}></span>
                  </div>
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

    if (this.state.value.length > 0) {
      return `${this.state.value.length} Selected`
    }

    return <span className={styles.placeholder}>{this.props.placeholder}</span>
  }

  render() {
    const { highlight, active } = this.state

    return (
      <div
        ref={node => (this.selectorRef = node)}
        onMouseDown={() => this.setState({ highlight: true })}
        onClick={() => this.setState({ highlight: false, active: true })}
        className={`${styles.selector} ${highlight ? styles.highlight : ''}`}
      >
        <div className={styles.content}>{this.renderValue()}</div>
        <i className="fas fa-caret-down"></i>
        {active && this.renderDropdown()}
      </div>
    )
  }
}

export default MultiSelector
