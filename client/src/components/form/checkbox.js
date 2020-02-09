import React from 'react'
import styles from './Checkbox.module.scss'

class Checkbox extends React.Component {
  state = {
    value: false,
  }

  componentDidMount() {
    if (this.props.value) {
      this.setState({ value: this.props.value })
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ value: this.props.value })
    }
  }

  handleChange = e => {
    if (this.props.onChange) {
      this.props.onChange(e.target.checked)
    }

    this.setState({ value: e.target.checked })
  }

  render() {
    const { name, label, disabled } = this.props
    return (
      <div>
        <label className={styles.container}>
          {label}
          <input
            onChange={this.handleChange}
            name={name}
            type="checkbox"
            checked={this.state.value || ''}
          />
          <span className={styles.checkmark}></span>
          hello
        </label>
      </div>
    )
  }
}

export default Checkbox
